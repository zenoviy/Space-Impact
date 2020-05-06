/*

    - ai logic
        - patrol
        - when detect attack
        - shot when in sight

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

    let allEnemyOnMap = levelDynamicMapBlocks.filter(block => {
        return block.details.type === 'enemy_spawner';
    })
    if(!allEnemyOnMap) return false

    dynamicEnemy = allEnemyOnMap.map(enemyBlock => {
        let currentEnemyServerData = resultGroundEnemyData.find(item => item.id === enemyBlock.details.name)
        let prepareData = Object.assign(enemyBlock, currentEnemyServerData )
        prepareData.texture = currentEnemyServerData.texture
        return new constructors.DynamicEnemyConstructor({...prepareData})
    })
    levelDynamicMapBlocks = levelDynamicMapBlocks.map(block => {
        return block.details.type != 'enemy_spawner';
    })
    console.log("Blocks",  dynamicEnemy)
    return dynamicEnemy
}

/*
dynamicMainCharacter.groundTouch && dynamicMainCharacter.xPos &&
!dynamicMainCharacter.leftWallTouch && !dynamicMainCharacter.rightWallTouch  ||
!dynamicMainCharacter.groundTouch && dynamicMainCharacter.xPos &&
!dynamicMainCharacter.leftWallTouch && !dynamicMainCharacter.rightWallTouch ||
dynamicMainCharacter.ceilingTouch && !dynamicMainCharacter.leftWallTouch && !dynamicMainCharacter.rightWallTouch){
enemy.x -= dynamicMainCharacter.xPos;
*/

async function groundEnemyMove({ mainGameObject: mainGameObject, levelInformation: levelInformation }){

   //console.log(this.leftWallTouch, this.rightWallTouch)
    if(this.playerInRange && this.targetAngle > 90 && this.targetAngle <= 270) this.playerDirectionHorizontal = 'left';
    if(this.playerInRange && this.targetAngle > 270 || this.playerInRange && this.targetAngle >= 0 && this.targetAngle <= 90) this.playerDirectionHorizontal = 'right';

    if(this.leftWallTouch)this.playerDirectionHorizontal = 'right';
    if(this.rightWallTouch)this.playerDirectionHorizontal = 'left';

    if(this.playerDirectionHorizontal === 'right' && !this.isStop){
        this.x += this.speed;
    }
    if(this.playerDirectionHorizontal === 'left' && !this.isStop){
        this.x -= this.speed;
    }
    if(!this.groundTouch){
        this.y += levelInformation.jumpImpuls;
    }
}

function groundPlayerJump(){

}


async function detectPlayer({mainGameObject, dynamicMainCharacter, allBlocks, callback}){

   if(!dynamicMainCharacter || !allBlocks) return false
   let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
   if(extraSeconds % 5 === 0) this.playerInRange = false;


    let distanceX = Math.max(this.x, dynamicMainCharacter.x) - Math.min(this.x, dynamicMainCharacter.x);
    let distanceY = Math.max(this.y, dynamicMainCharacter.y) - Math.min(this.y, dynamicMainCharacter.y);
    let angle =  this.findAngleToShip({closestUnit: dynamicMainCharacter});

    if(this.detectRange < distanceX && this.detectRange < distanceY) return false

    let findBarrier = {};


    let directionX = (this.x >= dynamicMainCharacter.x)? true : false;
    let directionY = (this.y >= dynamicMainCharacter.y)? true : false;


    if(extraSeconds % 15 != 0) return false
    if( distanceX && distanceY && !this.playerInRange){
        let localXRayIndex = 0, localYRayIndex = 0;
        let localXRay = this.x, localYRay = this.y;
        let decreaseValue = distanceY/distanceX;

        while(distanceX > 0){
            distanceX--
            if(directionX && directionY){
                localXRay -= 1;
                localYRay -= decreaseValue;
            }
            if(directionX && !directionY){
                localXRay -= 1;
                localYRay += decreaseValue;
            }
            if(!directionX && !directionY){
                localXRay += 1;
                localYRay += decreaseValue;
            }
            if(!directionX && directionY){
                localXRay += 1;
                localYRay -= decreaseValue;
            }            findBarrier = await allBlocks.find(block => {
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
        this.targetAngle = angle;
        //console.log(angle, distanceX, distanceY) // objectIntersectionDetect
    }
}

function groundEnemyDecided({mainGameObject, allBlocks}){
    if(!this.currentBehavior){
        //console.log(this.behavior)
        this.currentBehavior = this.behavior[Math.floor(Math.random() * this.behavior.length)];
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
    let maxBoxToMove = 4;

    let blockPatern = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        index: 0,
        accessIndex: 0
    }
    let nearestBlocks = [];
    // mapFinder
    //currentGroundBlock: any;
    //currentWallBlock: any;
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(extraSeconds % 5 === 0){

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
    */
   let currentBlockIndex = this.currentGroundBlock.index;
   let indexOfNextBlock = (this.playerDirectionHorizontal === 'right')?
   currentBlockIndex + parseInt(this.currentGroundBlock.mapSizeVertical):
   currentBlockIndex - parseInt(this.currentGroundBlock.mapSizeVertical);

   let findHorizontalBlock = allBlocks.find(block =>{ return block.index === indexOfNextBlock})
   this.nextGroundBlock = (findHorizontalBlock)? findHorizontalBlock: null;

   //console.log(this.currentGroundBlock, findHorizontalBlock)
    //this.nextGroundBlock = (this.playerDirectionHorizontal === 'right')? allBlocks.indexOf(this.currentGroundBlock) + this.currentGroundBlock.mapSizeHorizontal: 
    this.currentGroundBlock = null;
    this.currentWallBlock  = null;
    }
}


function groundEnemyShot({ mainGameObject, allBlocks, callback }){
    // when see character enemy stop shot to its location
/* if(dynamicMainCharacter.shotState && extraSeconds % 10 === 0 && dynamicMainCharacter.shotAngle){
                    shot.call(dynamicMainCharacter, constructors.BulletConstruct, gameObject, constructors.SoundCreator, "player", "allGroundGameBullets")
                }*/
}
function groundEnemyAnimationChange(){

}

export {
    loadLevelEnemy,
    groundEnemyMove,
    detectPlayer,
    groundEnemyDecided,
    groundEnemyPathFinder,
    groundEnemyShot
}