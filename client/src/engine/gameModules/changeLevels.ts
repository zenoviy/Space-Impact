import { serverRequest } from './satartGame';
import { loadLevelMap } from '../dynamicLevels/dynamicLevelModule';
import { initGroundPlayer } from '../dynamicLevels/playerUnitModule';
import { loadLevelEnemy } from '../dynamicLevels/dynamicLevelEnemyModules';
import { loadExtraObject } from '../../ai/regularEnemyAiModules';
import * as constructors from '../../constructors';
import { hideInventory } from '../dynamicLevels/playerUnitModule';
import { backgroundAdjustment } from '../dynamicLevels/dynamicLevelModule';
import { fillJournalDefaultData } from '../dynamicLevels/journalModules';

async function nextLevelDataReload(levelData, constructors){
    hideInventory()
    let nextLevel = levelData.gameData.currentLevel;
    let serverNewData = await serverRequest({level: nextLevel, shipConfiguration: 1});
    let context = this;
    let refreshLevel = {
        gameData: {
            currentLevel: nextLevel,
            currentPoint: context.gameInitData.gameData.currentPoint,
            playerObject: context.gameInitData.gameData.playerObject,
            groundPlayerCharacter: await initGroundPlayer({ DynamicUserConstructor: constructors.DynamicUserConstructor}),
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
        allGroundGameBullets: [],
        mapBackgroundObjects: [],
        dynamicLevelEnemy: [],
        mapKeyCode: {},
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
        gameExtraSeconds: 0,
        tradeShipTimeToUndock: 0
    }

    setTimeout(()=>{
        context.gameInitData.warpObjects = [];
        context.gameInitData.timeToEressLevel = 6;
        context.gameInitData.levelChange = false;
        context.gameInitData.levelWindowDescription = false;
        process.env.BOSS_LOAD_AT_LEVEL = "false";
        fillJournalDefaultData({mainGameObject: context})
    }, 5000)

    horizontalVerticalSearch.call(this, this.gameInitData, refreshLevel)
    context.gameInitData.dynamicLevelsActive = (serverNewData.levelData.dynamicLevelsActive)? true : false;
    context.gameInitData.dynamicLevelMapBlocks = (serverNewData.levelData.dynamicLevelsActive)? await loadLevelMap({
        levelMapName: serverNewData.levelData.dynamicBlockMap + '.json',
        constructors: constructors  }) : [];
    context.gameInitData.dynamicLevelEnemy = (serverNewData.levelData.dynamicLevelsActive)? await loadLevelEnemy({
        levelDynamicMapBlocks: context.gameInitData.dynamicLevelMapBlocks,
        constructors: constructors  }) : [];
    this.mapSoundChanger({soundStatus:'regular_level'})

    backgroundAdjustment({mainGameObject: this})
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
    hideInventory()
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
