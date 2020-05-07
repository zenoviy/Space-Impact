/*

    - ai logic
    v- patrol
     V   - when detect attack
      V  - shot when in sight

*/
import { getData } from '../../server/serverRequestModules';
//import { objectIntersectionDetect } from '../../enemies/enemiesModules';
//import { findAngleToShip } from '../gameSideObjectsModule';

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
        return block.details.type === 'enemy_spawner';
    })
    if(!allEnemyOnMap) return false

    dynamicEnemy = allEnemyOnMap.map(enemyBlock => {
        let currentEnemyServerData = resultGroundEnemyData.find(item => item.id === enemyBlock.details.name)
        let prepareData = Object.assign(enemyBlock, currentEnemyServerData )
        prepareData.texture = currentEnemyServerData.texture
        enemyBlock.details.collision = false;
        return new constructors.DynamicEnemyConstructor({...prepareData})
    })
    levelDynamicMapBlocks = levelDynamicMapBlocks.map( block => {
        return block.details.type != 'enemy_spawner';
    })
    return dynamicEnemy
}






async function groundEnemyMove({ mainGameObject: mainGameObject, levelInformation: levelInformation }){
    let dynamicMainCharacter = mainGameObject.gameInitData.gameData.groundPlayerCharacter;

    if(this.playerInRange && this.targetAngle > 90 && this.targetAngle <= 270) this.playerDirectionHorizontal = 'left';
    if(this.playerInRange && this.targetAngle > 270 || this.playerInRange && this.targetAngle >= 0 && this.targetAngle <= 90) this.playerDirectionHorizontal = 'right';

    if(this.leftWallTouch && !this.isJump && !this.playerInRange && this.currentBehavior != "find")this.playerDirectionHorizontal = 'right';
    if(this.rightWallTouch && !this.isJump  && !this.playerInRange  && this.currentBehavior != "find")this.playerDirectionHorizontal = 'left';

    if(this.playerDirectionHorizontal === 'right' && this.isRun) this.x += this.speed;
    if(this.playerDirectionHorizontal === 'left' && this.isRun) this.x -= this.speed;
    if(!this.groundTouch && dynamicMainCharacter.groundTouch){
        this.y += levelInformation.jumpImpuls
    };
    if(!this.groundTouch && !dynamicMainCharacter.groundTouch){
        this.y += levelInformation.jumpImpuls + levelInformation.gravity;
    }
}








async function groundPlayerJump({ mainGameObject, allBlocks, levelInformation }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(extraSeconds % 10 === 0 ) //this.isJump = true

    //console.log('Jump', extraSeconds)
    //if(extraSeconds % 5 === 0 ) return false//this.playerInRange = false;
    if(!this.groundTouch && this.jumpImpuls < 0 && extraSeconds % 10 === 0){

        //this.y += this.jumpImpuls;
       // this.jumpImpuls += 0.1;
        this.isRun = true;
        this.isJump = false;
    }
    if(this.groundTouch && this.isJump){
        this.jumpImpuls = (this.jumpSpeed*4 + levelInformation.gravity) * -1;
        this.y += this.jumpImpuls;  //jumpSpeed;
        this.groundTouch = false;
    }
}


async function detectPlayer({mainGameObject, dynamicMainCharacter, allBlocks, callback}){

   if(!dynamicMainCharacter || !allBlocks) return false
   let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
   if(extraSeconds % 100 === 0){ 
        if( this.playerInRange ) this.currentBehavior = "find";
       this.playerInRange = false;
    }


    let distanceX = Math.max(this.x, dynamicMainCharacter.x) - Math.min(this.x, dynamicMainCharacter.x);
    let distanceY = Math.max(this.y, dynamicMainCharacter.y) - Math.min(this.y, dynamicMainCharacter.y);
    let angle =  this.findAngleToShip({closestUnit: dynamicMainCharacter});

    if(this.detectRange < distanceX || this.detectRange < distanceY) return false
    let findBarrier = {};


    let directionX = (this.x >= dynamicMainCharacter.x)? true : false;
    let directionY = (this.y >= dynamicMainCharacter.y)? true : false;


    if(extraSeconds % 15 != 0) return false
    let searchSteps = 5;
    if( distanceX && distanceY && !this.playerInRange){
        let localXRayIndex = 0, localYRayIndex = 0;
        let localXRay = this.x, localYRay = this.y;
        let decreaseValue = distanceY/distanceX;

        //while(distanceX > 0){
        for(let index = distanceX; index > 0; index -= searchSteps){
            //distanceX--
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
                let searchCollision = callback({
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
        console.log('I see you')
        this.playerInRange = true;
        this.currentBehavior = "destroy";
       // this.targetXLastLocation = findBarrier['x'];
       // this.targetYLastLocation = findBarrier['y'];
        this.targetAngle = angle;
    }
}

function groundEnemyDecided({mainGameObject, allBlocks}){
    if(!this.currentBehavior){
        //console.log(this.behavior)
        //this.currentBehavior = this.behavior[Math.floor(Math.random() * this.behavior.length)];
    }
}
// "pursuit"
// "patrol"  "destroy"   "find"
function groundEnemyPatrol(){

}

function groundEnemyDestroy(){

}

function groundEnemyFind(){

}

function groundEnemyPursuit(){

}

function groundEnemyPathFinder({ mainGameObject, allBlocks }){
    let maxBoxToMove = (this.currentBehavior === "find")? 2 : (this.currentBehavior === "destroy")? 4 : 1;
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(extraSeconds % 5 === 0){
    console.log(this.currentBehavior)
        if(this.currentBehavior === "stand") {
            
            this.isRun = false;
            return
        }

    /*
        playerDirectionHorizontal: "right"
        shotState: false
        shotAngle: 360
        groundTouch: true
        leftWallTouch: false
        rightWallTouch: false
        ceilingTouch: false
        speed: 1
        defaultSpeed
        unitRandomize
        nextGroundBlock
        nextWallBlock
        nextBottomBlock
    */
        let indexOfNextBlock = null;
        let findBottomBlock = null;
        let findBackBlock = null;
        let currentBlockIndex = (this.currentGroundBlock)? this.currentGroundBlock.index : null;

        // change direction if on edge, continue run
        if(extraSeconds % this.changeModeRandomizer === 0 && !this.isRun && this.groundTouch && !this.playerInRange){
            this.playerDirectionHorizontal = (this.playerDirectionHorizontal === 'right')? 'left' : 'right';
           // console.log('continue move if on the edge')
            this.isRun = true;
        }
        //  find next block in front
        if(currentBlockIndex){
            indexOfNextBlock = (this.playerDirectionHorizontal === 'right')?
            currentBlockIndex + parseInt(this.currentGroundBlock.mapSizeVertical):
            currentBlockIndex - parseInt(this.currentGroundBlock.mapSizeVertical);

            let findHorizontalBlock = allBlocks.find(block =>{ 
                return block.index === indexOfNextBlock && block.details.collision
            })
            this.nextGroundBlock = (findHorizontalBlock)? findHorizontalBlock: null;
        }
        // find block on the back
        if(currentBlockIndex){
            let backBlockIndex = (this.playerDirectionHorizontal === 'right')?
            currentBlockIndex - parseInt(this.currentGroundBlock.mapSizeVertical) - 1:
            currentBlockIndex + parseInt(this.currentGroundBlock.mapSizeVertical) - 1;

            findBackBlock = allBlocks.find(block =>{ 
                return block.index === backBlockIndex && block.details.collision
            })
            //console.log('Back block', findBackBlock)
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
           // console.log('Bottom block', findBottomBlock)
        }

        // stop on the edge
        if(!this.nextGroundBlock && this.isRun && !this.playerInRange ||
            !this.nextGroundBlock && this.isRun && !findBottomBlock){
            this.changeModeRandomizer = Math.floor(Math.random() * this.unitRandomize + 100);
            //console.log('stop')
            this.isRun = false;
        }

        // continue move if block on back and block on the bottom and cant see target
        if(!this.playerInRange && findBottomBlock && !this.isRun && findBackBlock){
            this.isRun = true;
        }

        if(this.currentBehavior === "find" && findBottomBlock && !this.isRun){
            this.isRun = true;
        }else if(this.currentBehavior === "find" && !findBottomBlock && !this.nextGroundBlock && !this.isRun){
            this.isRun = false;
        }

        // if block at the front jump to the block
        if(this.playerInRange && this.leftWallTouch && this.currentBehavior != "find" || this.playerInRange && this.rightWallTouch && this.currentBehavior != "find" || 
            this.currentBehavior === "find" && this.rightWallTouch || this.currentBehavior === "find" && this.leftWallTouch){
            //console.log(' Jump on the block')
            this.isJump = true;
        }

        console.log(maxBoxToMove, this.playerInRange, this.isJump, this.isRun, findBottomBlock, findBackBlock, this.nextGroundBlock, this.leftWallTouch, this.rightWallTouch, this.playerDirectionHorizontal)

        // if see target continue walk
        if(this.playerInRange && findBottomBlock || this.playerInRange && this.nextGroundBlock) this.isRun = true;
        //console.log(this.changeModeRandomizer, this.playerInRange, extraSeconds, this.nextGroundBlock, this.currentGroundBlock)
        // this.isJump = true
        //console.log(this.currentGroundBlock, findHorizontalBlock)
        //this.nextGroundBlock = (this.playerDirectionHorizontal === 'right')? allBlocks.indexOf(this.currentGroundBlock) + this.currentGroundBlock.mapSizeHorizontal: 
        this.currentGroundBlock = null;
        this.currentWallBlock  = null;
    }
}


function groundEnemyShot({ mainGameObject, allBlocks, callback, constructors }){
    if(mainGameObject.gameInitData.gameOver) return false
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    // when see character enemy stop shot to its location
/* if(dynamicMainCharacter.shotState && extraSeconds % 10 === 0 && dynamicMainCharacter.shotAngle){
                    shot.call(dynamicMainCharacter, constructors.BulletConstruct, gameObject, constructors.SoundCreator, "player", "allGroundGameBullets")
                }*/
    //console.log(this)
    //shotProbability
    // unitRandomize
    //isRun
    // shotAngle
    // data.guns
    // playerInRange
    if(this.shotAngle && this.playerInRange && this.objectPresent){
        console.log('Shoot', this.shotAngle)
        this.isShot = true;
        this.shotAngle = this.targetAngle;
        callback.call(this, constructors.BulletConstruct,
            mainGameObject, constructors.SoundCreator,
            "groundEnemyBullet", "allGroundGameBullets")
    }
}
function groundEnemyAnimationChange(){

}

export {
    loadLevelEnemy,
    groundEnemyMove,
    detectPlayer,
    groundEnemyDecided,
    groundEnemyPathFinder,
    groundEnemyShot,
    groundPlayerJump
}