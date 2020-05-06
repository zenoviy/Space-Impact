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
    if(this.leftWallTouch)this.playerDirectionHorizontal = 'right';
    if(this.rightWallTouch)this.playerDirectionHorizontal = 'left';

    if(this.playerDirectionHorizontal === 'right'){
        this.x += this.speed;
    }
    if(this.playerDirectionHorizontal === 'left'){
        this.x -= this.speed;
    }
    if(!this.groundTouch){
        this.y += levelInformation.jumpImpuls;
    }
}


async function detectPlayer({mainGameObject, dynamicMainCharacter, allBlocks, callback}){
   // console.log( this.x, this.y, dynamicMainCharacter.x, dynamicMainCharacter.y)
   if(!dynamicMainCharacter || !allBlocks) return false
   let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
   //if(extraSeconds % 7 != 0) this.playerInRange = false;
    let angle =  this.findAngleToShip({closestUnit: dynamicMainCharacter});
    let distanceX = Math.max(this.x, dynamicMainCharacter.x) - Math.min(this.x, dynamicMainCharacter.x);
    let distanceY = Math.max(this.y, dynamicMainCharacter.y) - Math.min(this.y, dynamicMainCharacter.y);
    let findBarrier = {};
    //console.log(allBlocks)
    let directionX = (this.x >= dynamicMainCharacter.x)? true : false;
    let directionY = (this.y >= dynamicMainCharacter.y)? true : false;
    //console.log(distanceX, distanceY)


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
            }
            findBarrier = await allBlocks.find(block => {
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
            if(findBarrier){
               // console.log(findBarrier)
                break
            }
        }
        if(findBarrier) return false
        console.log('I see you')
        this.playerInRange = true;
        //console.log(angle, distanceX, distanceY) // objectIntersectionDetect
    }
}


function groundEnemyShot(){

}
function groundEnemyAnimationChange(){

}

export {
    loadLevelEnemy,
    groundEnemyMove,
    detectPlayer
}