/*

    V- ai logic
    v- patrol
     V   - when detect attack
      V  - shot when in sight

*/
import { getData } from '../../server/serverRequestModules';


async function loadLevelEnemy({ levelDynamicMapBlocks, constructors }){
    let dynamicEnemyCollection = process.env.HOST + process.env.DYNAMIC_LEVEL_ENEMY_COLLECTION_URL;
    let dynamicEnemy = [];
    let resultGroundEnemyData = await getData({
        url: dynamicEnemyCollection,
        method: 'GET',
        data: null,
        headers: null
    })
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
        enemy.extraObjects = (enemy.extraObjects)? await loadExtraObjectToGroundEnemy ( enemy.extraObjects): false;
    }
    levelDynamicMapBlocks = levelDynamicMapBlocks.map( block => {
        return block.details.type != 'enemy_spawner' && block.details.type != 'npc_spawner';
    })
    return dynamicEnemy
}







async function loadExtraObjectToGroundEnemy (extraObjects){
    let randomObject = extraObjects[Math.floor(Math.random() * extraObjects.length)],
        loadProbability = Math.floor(Math.random() * randomObject.randomizer),
        numberOfElement = Math.floor(Math.random() * randomObject.maxNumber + 1);

        if(randomObject.object != 'goldCoin' && loadProbability > randomObject.randomizer/2) randomObject = extraObjects[0];
        let result = [];
        let callObject = await getData({url: process.env.HOST + "api/grapple-objects", method: "GET", data: null, headers: { 'grappleObject': randomObject.object}})

        for(let i = 0; i < numberOfElement; i++){
            result = result.concat(callObject)
        }
        return result
}







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








async function groundPlayerJump ({ mainGameObject, allBlocks, levelInformation }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
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
            blockHeight = (blockHeight > 120)? 120: blockHeight;
            this.jumpImpuls = (this.jumpSpeed * levelInformation.gravity + blockHeight) * -1;

            this.isRun = false;
            //console.log('Jump Up', this.jumpImpuls)
            this.y += this.jumpImpuls;
            this.groundTouch = false;
        }
    }
}



function jumpDown ({ mainGameObject }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(extraSeconds % 10 === 0 ){
        if(this.groundTouch && this.onLeader && this.isJumpDown && this.currentGroundBlock.details.type === "leader"){ // !this.currentGroundBlock
           // console.log('leader down')
            this.jumpImpuls = this.jumpSpeed;
            this.isRun = false;
            this.y += this.jumpImpuls;
        }
    }
    // isJumpDown
}




function enemyDetectNpc({ mainGameObject, npcData, allBlocks, objectIntersectionDetect }){
    if(this.playerInRange) return false
    if(this.details.type != 'npc_spawner'){
        for(let person of npcData){
            if(person.details.type === 'npc_spawner'){
               let findUnit = detectPlayer.call(this, {mainGameObject: mainGameObject, groundPlayer: person, allBlocks: allBlocks, objectIntersectionDetect: objectIntersectionDetect})
                if(findUnit){
                    return findUnit
                }
            }
        }
    }
}



async function detectPlayer({mainGameObject, groundPlayer, allBlocks, objectIntersectionDetect}){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(extraSeconds % 100 === 0){
        if( this.playerInRange ) this.currentBehavior = "find";
       this.playerInRange = false;
    }
   if(!groundPlayer || !allBlocks || this.playerInRange) return false


    let distanceX = Math.max(this.x, groundPlayer.x) - Math.min(this.x, groundPlayer.x);
    let distanceY = Math.max(this.y, groundPlayer.y) - Math.min(this.y, groundPlayer.y);
    let angle =  this.findAngleToShip({closestUnit: groundPlayer});
    if(this.currentBehavior === "destroy"){
        this.targetAngle = angle;
    }
    if(this.detectRange < distanceX || this.detectRange < distanceY) return false
    let findBarrier = {};

    let directionX = (this.x >= groundPlayer.x)? true : false;
    let directionY = (this.y >= groundPlayer.y)? true : false;

    if(extraSeconds % 15 != 0) return false
    let searchSteps = 5;
    if( distanceX && distanceY && !this.playerInRange){
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
                let searchCollision = objectIntersectionDetect({
                    object: {
                        x: localXRay,
                        y: localYRay,
                        width: 20,
                        height: 20
                    },
                    target: {
                        x: block.x,
                        y: block.y,
                        width: block.width,
                        height: block.height
                    }
                })
                if(searchCollision && block.details.collision) return block
            })
            if(findBarrier) break
        }
        if(findBarrier) return false
        this.playerInRange = true;
        this.currentBehavior = "destroy";
        this.targetAngle = angle;
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
    if(this.currentBehavior === "find" && findBottomBlock && !this.isRun){
        this.isRun = true;
    }else if(this.currentBehavior === "find" && !findBottomBlock && !this.nextGroundBlock && !this.isRun){
        this.isRun = false;
    }
}

function groundEnemyPursuit({ findBottomBlock }){
     // if see target continue walk
     if(this.playerInRange && findBottomBlock || this.playerInRange && this.nextGroundBlock) this.isRun = true;
     if(this.playerInRange && !this.nextGroundBlock && !findBottomBlock) this.isRun = false;
}







function groundEnemyPathFinder({ mainGameObject, allBlocks }){
    let maxBoxToMove = (this.currentBehavior === "find")? 2 : (this.currentBehavior === "destroy")? 4 : 1;
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(extraSeconds % 5 === 0){
        if(this.currentBehavior === "stand") {
            this.isRun = false;
            return
        }
        let indexOfNextBlock = null;
        let findBottomBlock = null;
        let findBackBlock = null;
        let blockUnderTheJump = null;
        let currentBlockIndex = (this.currentGroundBlock)? this.currentGroundBlock.index : null;


        // Continue to move
        if(extraSeconds % this.changeModeRandomizer === 0 && !this.isRun && this.groundTouch && !this.playerInRange){
            this.playerDirectionHorizontal = (this.playerDirectionHorizontal === 'right')? 'left' : 'right';
            this.isRun = true;
            //console.log(5)
        }
        //  find next block in front
        if(currentBlockIndex){
            indexOfNextBlock = (this.playerDirectionHorizontal === 'right')?
            currentBlockIndex + parseInt(this.currentGroundBlock.mapSizeVertical):
            currentBlockIndex - parseInt(this.currentGroundBlock.mapSizeVertical);

            let findHorizontalBlock = allBlocks.find(block =>{ 
                return block.index === indexOfNextBlock && block.details.collision || block.index === indexOfNextBlock && block.details.type === "leader"
            })
            //console.log(4)
            this.nextGroundBlock = (findHorizontalBlock)? findHorizontalBlock: null;
        }
        // find block on the back
        if(currentBlockIndex && !this.nextGroundBlock){
            let backBlockIndex = (this.playerDirectionHorizontal === 'right')?
            currentBlockIndex - parseInt(this.currentGroundBlock.mapSizeVertical) - 1:
            currentBlockIndex + parseInt(this.currentGroundBlock.mapSizeVertical) - 1;

            findBackBlock = allBlocks.find(block =>{ 
                return block.index === backBlockIndex && block.details.collision
            })
        }


        // find block on the bottom
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
        // stop on the edge
        if(!this.nextGroundBlock && this.isRun && !this.playerInRange ||
            !this.nextGroundBlock && this.isRun && !findBottomBlock){
            this.changeModeRandomizer = Math.floor(Math.random() * this.unitRandomize + 100);
            this.isRun = false;
            //console.log(3)
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
                //console.log(2, "a")
                this.isJump = true;
            } 
            if(blockUnderTheJump){
                //console.log(2)
                this.isRun = false;
                this.isJump = false;
            }
        }
        if(!this.playerInRange && findBottomBlock && !this.isRun && findBackBlock ||
            !this.isRun && !findBottomBlock && this.playerInRange && this.jumpBlock && !blockUnderTheJump){
                //console.log(1)
            this.isRun = true;
        }
        groundEnemyFind.call(this, { findBottomBlock: findBottomBlock})
        groundEnemyPursuit.call(this, { findBottomBlock: findBottomBlock})// if see target continue walk

        if(blockUnderTheJump && this.jumpBlock){
            this.isRun = false;
        }
        if(this.playerInRange && this.targetAngle && this.onLeader){
            if(this.targetAngle > 20 && this.targetAngle < 160){
                //console.log("on leader Enemy", this.targetAngle)
                this.isJumpDown = true;
                this.isRun = false;
            }
            // target.details.type === "leader"
        }
        if(this.currentWallBlock){
            if(this.currentWallBlock.details.collision && this.currentWallBlock.details.type === "door"){
                this.isRun = false;
                this.isJump = false;
                this.x += (this.playerDirectionHorizontal === 'right')? (this.speed * 2) * -1 : this.speed * 2;
                this.currentBehavior = "find";
            }
        }
        this.currentWallBlock  = null;
        //this.jumpBlock = null;
    }
}




function groundEnemyShot({ mainGameObject, allBlocks, callback, constructors }){
    if(mainGameObject.gameInitData.gameOver) return false
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    // when see character enemy stop shot to its location
    if((this.shotAngle || this.shotAngle === 0) && this.playerInRange && this.objectPresent && extraSeconds % 5 === 0){
        this.isShot = true;
        this.shotAngle = Math.floor(this.targetAngle);

        callback.call(this, constructors.BulletConstruct,
            mainGameObject, constructors.SoundCreator,
            "groundEnemyBullet", "allGroundGameBullets")
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
    jumpDown
}