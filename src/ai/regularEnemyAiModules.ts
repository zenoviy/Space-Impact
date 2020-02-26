function dartShipLogic(){

}
function spawnEnemyLogic(mainGameObject: any){
    let levelData = mainGameObject.gameInitData.gameData.levelData;
    if(!mainGameObject.gameInitData.gameData.levelChange){
        let checkSpawnType = Math.floor(Math.random()*levelData.enemyProbability);
        if(checkSpawnType <= levelData.enemyRandomizerIndex){
            //console.log(levelData, mainGameObject)
            console.log("spawn enemy");
        }
    }
}
module.exports.regularAiModule = {
    dartShipLogic: dartShipLogic,
    spawnEnemyLogic: spawnEnemyLogic
}