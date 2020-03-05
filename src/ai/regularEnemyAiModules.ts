import { EnemyObject } from '../constructors/enemyConstructor';


function dartShipLogic(){

}

function spawnEnemyLogic(mainGameObject: any){
    let gameData = this.gameInitData.gameData,
    levelData = gameData.levelData,
    enemyData = gameData.enemyData;
    if(!this.gameInitData.gameData.levelChange){
        let checkSpawnType = this.gameRandomizer(levelData.enemyProbability);
        if(checkSpawnType <= levelData.enemyRandomizerIndex){
            let numberEnemyPerSpawn = this.gameRandomizer(levelData.enemyMaxNumber);
            for(let i = numberEnemyPerSpawn; i< levelData.enemyMaxNumber; i++){
                let enemyShip = enemyData[ this.gameRandomizer(enemyData.length) ];
                let enemyShipObject = this.createNewEnemy(enemyShip);
                enemyShipObject.loadEnemyes();
                this.gameInitData.allGameEnemies = this.gameInitData.allGameEnemies.concat(enemyShipObject);
            }
        }
    }
}
function createNewEnemy(enemyData){
    let x = this.gameInitData.screen.width + 300,
    y = this.gameRandomizer(this.gameInitData.screen.height - 200, 100),
    shipDetails = enemyData.details;
    return new EnemyObject(
        x, y,
        shipDetails.sx, shipDetails.sy,
        shipDetails.imageWidth/shipDetails.numberOfItems, shipDetails.imageHeight,
        shipDetails.imageWidth, shipDetails.numberOfItems,
        shipDetails.width, shipDetails.height,
        shipDetails.skinName,
        shipDetails.speed,
        shipDetails.status, shipDetails.name,
        shipDetails.bulletType, shipDetails.rapidFire, shipDetails.pointsPerUnit,
        shipDetails.healthPoint, shipDetails.animationSteps, shipDetails.damage,
        shipDetails.objectOwner, shipDetails.guns
        );
}

function gameRandomizer(maxNumber: number, minNumber: number = 0){
    return Math.floor(Math.random() * maxNumber + minNumber);
}


export {
    dartShipLogic,
    spawnEnemyLogic,
    createNewEnemy,
    gameRandomizer
}