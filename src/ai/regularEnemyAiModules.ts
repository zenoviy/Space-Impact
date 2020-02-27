var {objectConstructor} = require('../constructors/enemyConstructor');
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
                this.gameInitData.allGameEnemies = this.gameInitData.allGameEnemies.concat(enemyShipObject);
            }
            //console.log("spawn enemy", this.gameInitData.allGameEnemies);
            console.log(this.gameInitData.allGameEnemies)
        }
    }
}
/* */
function createNewEnemy(enemyData){
    let x = this.gameInitData.screen.width + 300,
    y = this.gameRandomizer(this.gameInitData.screen.height),
    shipDetails = enemyData.details;
    console.log(enemyData)
    return new objectConstructor.EnemyObject(
        x, y,
        shipDetails.sx, shipDetails.sy,
        shipDetails.imageWidth, shipDetails.imageHeight,
        shipDetails.imageWidth/shipDetails.numberOfItems,
        shipDetails.width, shipDetails.height,
        enemyData.details.skinName,
        );
}
function gameRandomizer(maxNumber: number, minNumber: number = 0){
    return Math.floor(Math.random() * maxNumber + minNumber);
}



module.exports.regularAiModule = {
    dartShipLogic: dartShipLogic,
    spawnEnemyLogic: spawnEnemyLogic,
    createNewEnemy: createNewEnemy,
    gameRandomizer: gameRandomizer
}