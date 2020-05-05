/*

    - ai logic
        - patrol
        - when detect attack
        - shot when in sight

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
    //console.log("Blocks",  dynamicEnemy)
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

function groundEnemyMove({ mainGameObject: mainGameObject, levelInformation: levelInformation }){

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




export {
    loadLevelEnemy,
    groundEnemyMove
}