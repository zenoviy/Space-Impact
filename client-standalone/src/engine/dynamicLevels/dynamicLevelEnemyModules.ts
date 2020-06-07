import { getData } from '../../server/serverRequestModules';
import { loadGroundEnemy } from '../../server/gameDataRequestsServicesModule';


/* ==========================

load data from server
filtered block, hide editor spawn block
create enemy based on editor data

 ========================== */

async function loadLevelEnemy({ levelDynamicMapBlocks, constructors }){
    let dynamicEnemyCollection = process.env.DYNAMIC_LEVEL_ENEMY_COLLECTION_URL;
    let dynamicEnemy = [];
    let resultGroundEnemyData = await loadGroundEnemy({dynamicEnemyCollection: dynamicEnemyCollection});
    let allEnemyOnMap = levelDynamicMapBlocks.filter( block => {
        return block.details.type === 'enemy_spawner' || block.details.type === 'npc_spawner';
    })
    if(!allEnemyOnMap) return false

    dynamicEnemy = allEnemyOnMap.map( enemyBlock => {
        let currentEnemyServerData = resultGroundEnemyData.find(item => item.id === enemyBlock.details.name)
        let prepareData = Object.assign(enemyBlock, currentEnemyServerData )
        prepareData.texture = currentEnemyServerData.texture;
        enemyBlock.details.collision = false;
        return new constructors.DynamicEnemyConstructor({...prepareData})
    })

    for(let enemy of dynamicEnemy){
        enemy.extraObjects = (enemy.extraObjects)? await loadExtraObjectToGroundEnemy ( enemy.extraObjects, enemy): false;
    }
    levelDynamicMapBlocks = levelDynamicMapBlocks.map( block => {
        return block.details.type != 'enemy_spawner' && block.details.type != 'npc_spawner' &&
        block.details.type != 'hidden_enemy_spawner' && block.details.type === 'timer_enemy_spawner';
    })
    return dynamicEnemy
}





/* ==========================

special method to load single type of enemy from server
to spawn hidden enemy



 ========================== */

async function loadEnemyToObjectArray ({ mainGameObject, levelDynamicMapBlocks, constructors, characterSelector }){
    let dynamicEnemyCollection = process.env.DYNAMIC_LEVEL_ENEMY_COLLECTION_URL;
    let dynamicEnemy = [];
    let resultGroundEnemyData = await loadGroundEnemy({dynamicEnemyCollection: dynamicEnemyCollection}); 
    let allEnemyOnMap = levelDynamicMapBlocks.filter( block => {
        return block.details.type === characterSelector;
    })
    if(!allEnemyOnMap) return false
    dynamicEnemy = await allEnemyOnMap.map( enemyBlock => {
        let currentEnemyServerData = resultGroundEnemyData.find(item => item.id === enemyBlock.details.name)
        let prepareData = Object.assign(enemyBlock, currentEnemyServerData )
        prepareData.texture = currentEnemyServerData.texture;
        enemyBlock.details.collision = false;
        return new constructors.DynamicEnemyConstructor({...prepareData})
    })
    for(let enemy of dynamicEnemy){
        enemy.extraObjects = (enemy.extraObjects)? await loadExtraObjectToGroundEnemy ( enemy.extraObjects, enemy): false;
    }
    if(!dynamicEnemy) return false
    mainGameObject.gameInitData.dynamicLevelEnemy = mainGameObject.gameInitData.dynamicLevelEnemy.concat([...dynamicEnemy]);
}



/* ==========================

script to create grapple object based on NPC inner objects

 ========================== */

async function loadExtraObjectToGroundEnemy (extraObjects, enemy){
    let randomObject = extraObjects[Math.floor(Math.random() * extraObjects.length)],
        loadProbability = Math.floor(Math.random() * randomObject.randomizer),
        numberOfElement = Math.floor(Math.random() * randomObject.maxNumber + 1);

        if(randomObject.object != 'goldCoin' && loadProbability > randomObject.randomizer/2) randomObject = extraObjects[0];
        let result = [];


        let extraObject = randomObject.object;
        if(enemy.details.rules){
            if(enemy.details.rules.contain){
                numberOfElement = 1;
                extraObject = "ground_npc_item";
            }
        }
        let callObject = await getData({url: "api/grapple-objects", method: "GET", data: null, headers: { 'grappleObject': extraObject }})
        if(enemy.details.rules){
            if(enemy.details.rules.contain){
                callObject[0].grapplePower.grappleItem = enemy.details.rules.contain;
                callObject[0].grapplePower.previewPicture = enemy.details.rules.objectPicture;
                callObject[0].grapplePower.name = (enemy.details.objectName)? enemy.details.objectName : null;
                callObject[0].speed = 0;
                callObject[0].absoluteLink = enemy.details.rules.objectPicture;
            }
        }
        for(let i = 0; i < numberOfElement; i++){
            result = result.concat(callObject)
        }
        return result
}





/* ==========================

Method to move enemy, change dirrection
and gravity effects

 ========================== */

 async function groundEnemyMove({ mainGameObject: mainGameObject, levelInformation: levelInformation }){
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;

    if(this.playerInRange && this.targetAngle > 100 && this.targetAngle <= 260){
        this.playerDirectionHorizontal = 'left';
    }
    if(this.playerInRange && this.targetAngle > 280 || this.playerInRange && this.targetAngle >= 0 && this.targetAngle <= 80){
        this.playerDirectionHorizontal = 'right';
    }

    if(this.leftWallTouch && !this.isJump && !this.playerInRange && this.currentBehavior != "find")this.playerDirectionHorizontal = 'right';
    if(this.rightWallTouch && !this.isJump  && !this.playerInRange  && this.currentBehavior != "find")this.playerDirectionHorizontal = 'left';

    if(this.playerDirectionHorizontal === 'right' && this.isRun) this.x += this.speed;
    if(this.playerDirectionHorizontal === 'left' && this.isRun) this.x -= this.speed;
    if(!this.groundTouch && groundPlayer.groundTouch){
        this.y += levelInformation.jumpImpuls
    };
    if(!this.groundTouch && !groundPlayer.groundTouch){
        this.y += levelInformation.jumpImpuls + levelInformation.gravity;
    }
}





/* ==========================

Jump of enemy unit

 ========================== */


async function groundPlayerJump ({ mainGameObject, allBlocks, levelInformation }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    let currentBlockIndex = (this.currentGroundBlock)? this.currentGroundBlock.index : null;
    let leaderBlock = allBlocks.find(block =>{
        let bottomBlockIndex = currentBlockIndex - 1;
        return block.index === bottomBlockIndex
    });
    if(extraSeconds % 10 === 0 ){
        if(!this.groundTouch && this.jumpImpuls < 0 && extraSeconds % 10 === 0){
            this.isRun = true;
            this.isJump = false;
            if(this.onLeader){
                this.groundTouch = true;
            }
        }
        if(this.groundTouch && this.isJump && !this.isJumpDown){
            let blockHeight = (this.jumpBlock)? this.jumpBlock.height + this.height : 0;
            if(leaderBlock){
                if(leaderBlock.details.type === "leader"){
                    blockHeight = leaderBlock.height;
                }
            }
            blockHeight = (blockHeight > 120)? 120: blockHeight;
            this.jumpImpuls = (this.jumpSpeed * levelInformation.gravity + blockHeight) * -1;

            this.isRun = false;

            this.y += this.jumpImpuls;
            this.groundTouch = false;
            if(leaderBlock){
                if(leaderBlock.details.type === "leader"){
                    this.groundTouch = true;
                    this.isRun = false;
                }
            }

        }
    }
}


/* ==========================

Method to use stairs when enemy at the top of the leader

 ========================== */


function jumpDown ({ mainGameObject }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(extraSeconds % 10 === 0 ){
        if(this.groundTouch && this.onLeader && this.isJumpDown && this.currentGroundBlock.details.type === "leader"){
            this.jumpImpuls = this.jumpSpeed;
            this.isRun = false;
            this.y += this.jumpImpuls;
        }
    }
}



/* ==========================

init detect NPC and player

 ========================== */
async function enemyDetectNpc({ mainGameObject, npcData, allBlocks, objectIntersectionDetect }){
    if(this.playerInRange) return false
        for(let person of npcData){
            if( !person || person.x > window.innerWidth + 100 || person.x < -100 ||
                person.y > window.innerHeight + 100 || person.y < -100) continue
            if(this.details.type === 'enemy_spawner' && person.details.type === 'npc_spawner' && person.objectPresent ||
            this.details.type === 'npc_spawner' && person.details.type === 'enemy_spawner' && person.objectPresent ||
            this.details.type === 'npc_spawner' && person.details.type === 'hidden_enemy_spawner' && person.objectPresent ||
            this.details.type === 'hidden_enemy_spawner' && person.details.type === 'npc_spawner' && person.objectPresent ||
            this.detailstype === 'timer_enemy_spawner' && person.details.type === 'npc_spawner' && person.objectPresent ){
               let findUnit = await detectPlayer.call(this, {mainGameObject: mainGameObject, groundPlayer: person, allBlocks: allBlocks, objectIntersectionDetect: objectIntersectionDetect})
                if(findUnit){
                    return findUnit
                }
            }
        }
}



async function detectPlayer({mainGameObject, groundPlayer, allBlocks, objectIntersectionDetect}){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(extraSeconds % 200 === 0){
        if( this.playerInRange ) this.currentBehavior = (this.currentBehavior === "static")?"static" : "find";
            this.playerInRange = false;
    }
   if(!groundPlayer || !allBlocks || this.playerInRange) return false
    if((this.x > window.innerWidth + 100 || this.x  < -100) ||
    (this.y > window.innerHeight + 100 || this.y  < -100)) return false

    let distanceX = Math.max(this.x, groundPlayer.x) - Math.min(this.x, groundPlayer.x);
    let distanceY = Math.max(this.y, groundPlayer.y) - Math.min(this.y, groundPlayer.y);



    if(this.detectRange < distanceX || this.detectRange < distanceY) return false

    let angle = this.findAngleToShip({closestUnit: groundPlayer});
    if(this.currentBehavior === "destroy" || this.currentBehavior === "static" && this.playerInRange){
        this.targetAngle = (angle < 360)? angle + 2 : angle;
    }
    let findBarrier = {};

    let directionX = (this.x >= groundPlayer.x)? true : false;
    let directionY = (this.y >= groundPlayer.y)? true : false;

    let randomizerCheck = mainGameObject.gameRandomizer(30, 20);
    if(extraSeconds % randomizerCheck != 0) return false
    let searchSteps = 20;

    if(distanceX && distanceY && !this.playerInRange){
        let localXRayIndex = 0, localYRayIndex = 0;
        let localXRay = this.x, localYRay = this.y;
        let decreaseValue = distanceY/distanceX;

        for(let index = distanceX; index > 0; index -= searchSteps){
            if(directionX && directionY){
                localXRay -= searchSteps;
                localYRay -= decreaseValue * searchSteps;
            }
            if(directionX && !directionY){
                localXRay -= searchSteps;
                localYRay += decreaseValue * searchSteps;
            }
            if(!directionX && !directionY){
                localXRay += searchSteps;
                localYRay += decreaseValue * searchSteps;
            }
            if(!directionX && directionY){
                localXRay += searchSteps;
                localYRay -= decreaseValue * searchSteps;
            }
            findBarrier = allBlocks.find(block => {
                if(Math.max(localXRay, block.x) - Math.min(localXRay, block.x) < 200 ||
                Math.max(localYRay, block.y) - Math.min(localYRay, block.y) < 200){
                    let searchCollision = objectIntersectionDetect({
                        object: {
                            x: localXRay,
                            y: localYRay,
                            width: 30,
                            height: 30
                        },
                        target: {
                            x: block.x,
                            y: block.y,
                            width: block.width,
                            height: block.height
                        }
                    })
                    if(searchCollision && block.details.collision) return block
                }
            })
            if(findBarrier) break
        }
        if(findBarrier) return false
        this.playerInRange = true;
        this.currentBehavior = (this.currentBehavior === "static")? "static": "destroy";
        this.targetAngle = angle;
        //console.log(groundPlayer, this.objectOwner, "|||")
        return true
    }
}

function groundEnemyDecided({mainGameObject, allBlocks}){
    if(!this.currentBehavior){
        //console.log(this.behavior)
        //this.currentBehavior = this.behavior[Math.floor(Math.random() * this.behavior.length)];
    }
}

function groundEnemyPatrol(){

}

function groundEnemyDestroy(){

}

function groundEnemyFind({ findBottomBlock }){
    if(this.currentBehavior === "find" && findBottomBlock && !this.isRun && !this.leftWallTouch ||
    this.currentBehavior === "find" && findBottomBlock && !this.isRun && !this.rightWallTouch
    ){
        this.isRun = true;
    }else if(this.currentBehavior === "find" && !findBottomBlock && !this.nextGroundBlock && !this.isRun){
        this.isRun = false;
    }
}

function groundEnemyPursuit({ findBottomBlock }){
     // if see target continue walk
     if(this.playerInRange && findBottomBlock && !this.leftWallTouch ||
        this.playerInRange && findBottomBlock && !this.rightWallTouch ||
        this.playerInRange && this.nextGroundBlock && !this.leftWallTouch ||
        this.playerInRange && this.nextGroundBlock && !this.rightWallTouch
        ) this.isRun = true;
     if(this.playerInRange && !this.nextGroundBlock && !findBottomBlock) this.isRun = false;
}







function groundEnemyPathFinder({ mainGameObject, allBlocks }){
    let maxBoxToMove = (this.currentBehavior === "find")? 2 : (this.currentBehavior === "destroy")? 4 : 1;
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(extraSeconds % 5 === 0){
        if(this.currentBehavior === "stand" ||this.currentBehavior === "static") {
            this.isRun = false;
            return
        }
        let deadlyBlock = null;
        let indexOfNextBlock = null;
        let findBottomBlock = null;
        let findBackBlock = null;
        let blockUnderTheJump = null;
        let currentBlockIndex = (this.currentGroundBlock)? this.currentGroundBlock.index : null;


        // Continue to move
        if(extraSeconds % this.changeModeRandomizer === 0 && !this.isRun && this.groundTouch && !this.playerInRange){
            this.playerDirectionHorizontal = (this.playerDirectionHorizontal === 'right')? 'left' : 'right';
            this.isRun = true;
        }
        // =============  find next block in front
        if(currentBlockIndex){
            indexOfNextBlock = (this.playerDirectionHorizontal === 'right')?
            currentBlockIndex + parseInt(this.currentGroundBlock.mapSizeVertical):
            currentBlockIndex - parseInt(this.currentGroundBlock.mapSizeVertical);

            let findHorizontalBlock = allBlocks.find(block =>{ 
                return block.index === indexOfNextBlock && block.details.collision || block.index === indexOfNextBlock && block.details.type === "leader"
            })
            this.nextGroundBlock = (findHorizontalBlock)? findHorizontalBlock: null;
        }
        // ============= find block on the back
        if(currentBlockIndex && !this.nextGroundBlock){
            let backBlockIndex = (this.playerDirectionHorizontal === 'right')?
            currentBlockIndex - parseInt(this.currentGroundBlock.mapSizeVertical) - 1:
            currentBlockIndex + parseInt(this.currentGroundBlock.mapSizeVertical) - 1;

            findBackBlock = allBlocks.find(block =>{ 
                return block.index === backBlockIndex && block.details.collision
            })
        }


        // ================  find block on the bottom
        if(!this.nextGroundBlock && this.currentGroundBlock){
            for(let blockNumber = 1; blockNumber <= maxBoxToMove; blockNumber++){
            findBottomBlock = allBlocks.find(block =>{
                let bottomBlockIndex = (this.playerDirectionHorizontal === 'right')?
                currentBlockIndex + parseInt(this.currentGroundBlock.mapSizeVertical) + blockNumber:
                currentBlockIndex - parseInt(this.currentGroundBlock.mapSizeVertical) + blockNumber;
                return block.index === bottomBlockIndex  && block.details.collision
            })
                if(findBottomBlock) break
            }
            this.nextBottomBlock = (findBottomBlock)? findBottomBlock: null;
        }
        // =============== stop on the edge
        if(!this.nextGroundBlock && this.isRun && !this.playerInRange ||
            !this.nextGroundBlock && this.isRun && !findBottomBlock){
            this.changeModeRandomizer = Math.floor(Math.random() * this.unitRandomize + 100);
            this.isRun = false;
        }

        // continue move if block on back and block on the bottom and cant see target
        // if block at the front jump to the block
        if(this.playerInRange && this.leftWallTouch && this.currentBehavior != "find" && this.currentGroundBlock ||
            this.playerInRange && this.rightWallTouch && this.currentBehavior != "find" && this.currentGroundBlock ||
            this.currentBehavior === "find" && this.rightWallTouch && this.currentGroundBlock || this.currentBehavior === "find" && this.currentGroundBlock && this.currentWallBlock ||
            this.currentBehavior === "destroy" && this.leftWallTouch && this.currentGroundBlock || this.currentBehavior === "destroy" && this.currentGroundBlock && this.currentWallBlock){
            this.jumpBlock = allBlocks.find(block =>{
                let bottomBlockIndex = (this.playerDirectionHorizontal === 'right')?
                currentBlockIndex + parseInt(this.currentGroundBlock.mapSizeVertical) - 1:
                currentBlockIndex - parseInt(this.currentGroundBlock.mapSizeVertical) - 1;
                return block.index === bottomBlockIndex  && block.details.collision
            })
            blockUnderTheJump = allBlocks.find(block =>{
                let bottomBlockIndex = (this.playerDirectionHorizontal === 'right')?
                currentBlockIndex + parseInt(this.currentGroundBlock.mapSizeVertical) - 3:
                currentBlockIndex - parseInt(this.currentGroundBlock.mapSizeVertical) - 3;
                return block.index === bottomBlockIndex  && block.details.collision
            })
            if(this.jumpBlock){
                this.isJump = (!this.jumpBlock.details.deadly)? true : false;
                if(this.jumpBlock.details.deadly) this.isRun = false;
            }
            if(blockUnderTheJump){
                this.isRun = false;
                this.isJump = false;
            }
        }
        if(this.playerInRange && this.onLeader){
            this.isJump = true;
        }
        if(!this.playerInRange && findBottomBlock && !this.isRun && findBackBlock ||
            !this.isRun && !findBottomBlock && this.playerInRange && this.jumpBlock && !blockUnderTheJump
            ){
            this.isRun = true;
        }
        groundEnemyFind.call(this, { findBottomBlock: findBottomBlock})
        groundEnemyPursuit.call(this, { findBottomBlock: findBottomBlock})// if see target continue walk

        if(blockUnderTheJump && this.jumpBlock && this.leftWallTouch ||
            blockUnderTheJump && this.jumpBlock && this.rightWallTouch ){
            this.isRun = false;
        }
        if(this.playerInRange && this.targetAngle && this.onLeader){
            if(this.targetAngle > 20 && this.targetAngle < 160){
                //console.log("on leader Enemy", this.targetAngle)
                this.isJumpDown = true;
                this.isRun = false;
            }
        }

        // deadly block detected
        //console.log(this.jumpBlock)
        if(this.nextGroundBlock && this.currentGroundBlock && !this.jumpBlock ){
            for(let blockNumber = 1; blockNumber <= maxBoxToMove; blockNumber++){
                deadlyBlock = allBlocks.find(block =>{
                    let deadlyBlockIndex = (this.playerDirectionHorizontal === 'right')?
                    currentBlockIndex + parseInt(this.nextGroundBlock.mapSizeVertical) - blockNumber:
                    currentBlockIndex - (parseInt(this.nextGroundBlock.mapSizeVertical) * 2) - blockNumber;
                    return block.index === deadlyBlockIndex  && block.details.collision && block.details.deadly
                })
                if(deadlyBlock) break
            }
            //console.log(deadlyBlock)
            if(deadlyBlock)  this.isRun = false;
            //this.nextBottomBlock = (findBottomBlock)? findBottomBlock: null;
        }


        if(this.currentWallBlock ){
            if(this.currentWallBlock.details.collision && this.currentWallBlock.details.type === "door"){
                this.isRun = false;
                this.isJump = false;
                this.groundTouch = true;
                let rightSide = (this.x + this.width) - this.currentWallBlock.x;
                let leftSide =  (this.currentWallBlock.x + this.currentWallBlock.width) - this.x;

                this.x += (this.playerDirectionHorizontal === 'right')? rightSide -1 : leftSide;
                this.currentBehavior = (this.currentBehavior === "static")? "static": "find";
            }
        }
        this.currentWallBlock  = null;
    }
}




function groundEnemyShot({ mainGameObject, allBlocks, callback, constructors }){
    if(mainGameObject.gameInitData.gameOver) return false
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    // when see character enemy stop shot to its location
    if((this.shotAngle || this.shotAngle === 0) && this.playerInRange && this.objectPresent && extraSeconds % 5 === 0){
        this.isShot = true;
        this.shotAngle = Math.floor(this.targetAngle);

        callback.call(this,
            constructors.BulletConstruct,
            mainGameObject,
            constructors.SoundCreator,
            (this.details.type === 'npc_spawner')? "player" : "groundEnemyBullet",
            "allGroundGameBullets")
        if(this.details.type === 'npc_spawner') this.playerInRange = false
    }
}



function respawnEnemy ({ mainGameObject, constructors }){
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    loadEnemyToObjectArray({
        mainGameObject: mainGameObject,
        levelDynamicMapBlocks: allBlocks,
        constructors: constructors,
        characterSelector: "hidden_enemy_spawner"
    })
}


function respawnEnemyByTimer({ mainGameObject, constructors, currentBlock }){
    if(mainGameObject.gameInitData.gamePause || !mainGameObject.gameInitData.gameStatus) return false
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    let allEnemy = mainGameObject.gameInitData.dynamicLevelEnemy.filter(enemy => {
        if(enemy.details.type != 'npc_spawner' && enemy.healthPoint > 0 ) return enemy
    });
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    if(currentBlock.details.type === 'timer_enemy_spawner' ){
        if(extraSeconds % (parseInt(currentBlock.details.spawnSeconds)* 100) === 0  && allEnemy.length < currentBlock.details.maxNumberOfItem){
            respawnEnemy({ mainGameObject, constructors })
        }
    }
    deleteOldEnemy({ mainGameObject: mainGameObject })
}


function deleteOldEnemy({ mainGameObject }){
    let allEnemy = mainGameObject.gameInitData.dynamicLevelEnemy.filter(enemy => {
        if(enemy.details.type != 'npc_spawner' && enemy.healthPoint <= 0 ) return enemy
    });
    if(allEnemy.length > 100){
        mainGameObject.gameInitData.dynamicLevelEnemy.shift();
    }
}

export {
    loadLevelEnemy,
    groundEnemyMove,
    detectPlayer,
    groundEnemyDecided,
    groundEnemyPathFinder,
    groundEnemyShot,
    groundPlayerJump,
    enemyDetectNpc,
    jumpDown,
    respawnEnemy,
    respawnEnemyByTimer
}