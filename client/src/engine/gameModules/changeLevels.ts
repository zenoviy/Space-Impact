import { serverRequest } from './satartGame';

async function nextLevelDataReload(levelData){
    let nextLevel = levelData.gameData.currentLevel;
    let serverNewData = await serverRequest({level: nextLevel, shipConfiguration: 1});
    let context = this;
    let refreshLevel = {
        gameData: {
            currentLevel: nextLevel,
            currentPoint: context.gameInitData.gameData.currentPoint,
            playerObject: context.gameInitData.gameData.playerObject,
            gameCoins: context.gameInitData.gameData.gameCoins,
            levelData: serverNewData.levelData,
            levelObjects: serverNewData.levelObjects,
            grappleObjects: serverNewData.grappleObjects,
            levelSounds: context.gameInitData.gameData.levelSounds,
            preloadData: context.gameInitData.gameData.preloadData,
            gameSetings: context.gameInitData.gameData.gameSetings,
            enemyData: serverNewData.enemyData,
            controllers: context.gameInitData.gameData.controllers
        },
        enemyType: null,
        allGameSideObjects: [],
        allGameEnemies: [],
        allGameBullets: [],
        mapBackgroundObjects: [],
        gamePause: false,
        gameUiPause: false,
        backScreenPause: true,
        gameOver: false,
        grappleObjectOnScreen: false,
        tradepostInRange: false,
        inventoryActive: false,
        shopActive: false,
        subBossPresent: false,
        gatePresent: false,
        gemeExtraSeconds: 0,
        tradeShipTimeToUndock: 0
    }

    setTimeout(()=>{
        context.gameInitData.warpObjects = [];
        context.gameInitData.timeToEressLevel = 6;
        context.gameInitData.levelChange = false;
        context.gameInitData.levelWindowDescription = false;
        process.env.BOSS_LOAD_AT_LEVEL = "false";
    }, 5000)

    horizontalVerticalSearch.call(this, this.gameInitData, refreshLevel)
    this.mapSoundChanger({soundStatus:'regular_level'})

}
function horizontalVerticalSearch(mainObject, refreshLevel){
    for(let [key, value] of Object.entries(mainObject)){
        if(typeof mainObject[key] == 'object' && value != null && !mainObject[key].length ){
            horizontalVerticalSearch(mainObject[key], refreshLevel)
        }
        assignValue.call(this, key, mainObject)
    }
    function assignValue(incomeKey, mainData){
        for(let [key, val] of Object.entries(refreshLevel)){
            if(key == incomeKey && val != null){
                this.gameInitData[key] = val;
            }
        }
    }
}



function renewPlayerShip({originData, newData}){
    for(let [key, value] of Object.entries(originData)){
        if(newData[key] && originData[key] != newData[key]){
            originData[key] = newData[key]
        }
    }
    return originData
}



export {
    nextLevelDataReload,
    horizontalVerticalSearch,
    renewPlayerShip
}
