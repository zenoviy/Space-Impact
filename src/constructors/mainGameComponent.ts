//import { viewModules } from '../view/displayModules';
import {
    createContext,
    initField,
    levelInit,
    setGameFields,
    warpEffect,
    getScreenSize,
    getLevelUserData,
    levelTimer,
    getSecondMeasure,
    deleteBullet,
    deleteObjects,
    collectPoints,
    changeLevelProcedure,
    getRandomColor } from '../engine/engineModules';
//import { initPlayerShip } from '../engine/playerShipModule';  // placePlayerShip
import * as engine from '../engine';
import { spawnEnemyLogic, createNewEnemy, gameRandomizer } from '../ai/regularEnemyAiModules';
import { hitDetection } from '../enemies/enemiesModules';
import {
    uiController,
    gameUiPause,
    gameUiMenu,
    showMenuWindow,
    showUiPopupWindow,
    showStartWindow,
    showPauseWindow,
    showGameStats,
    initUiElements } from '../ui/gameUiModules';
import { gameStart, backToStartScreen } from '../engine/gameModules/satartGame';
import { nextLevelDataReload } from '../engine/gameModules/changeLevels';

console.log(engine)
interface gameData{
    ctx: any,
    ctxActionField: any,
    ctxUIField: any,
    gameField: any,
    gameActionField: any,
    gameUIField: any,
    screen:{
        width: number,
        height: number
    },
    allGameSideObjects: object[],
    allGameEnemies: object[],
    allGameBullets: object[],
    allGameMapOBjects: object[],
    mapBackgroundObjects: object[],
    warpObjects: object[];
    timeToEressLevel: number;
    gamePause: boolean,
    gameUiPause: boolean,
    levelChange: boolean,
    backScreenPause: boolean,
    gameStatus: boolean,
    gameData:{
        currentLevel: number,
        currentPoint: number,
        playerObject: any,
        levelData: {
            enemyProbability: number,
            levelMap: string,
            enemyType: number[],
            level: number,
            currentLevel: any
        },
    },
}
interface serverLocation{
    host: string,
    picturesDirection: string,
    levelData: {
        method: string,
        url: string
    },
    enemylData: {
        method: string,
        url: string
    }
}
class Game {
    gameInitData: any;
    //placePlayerShip: any;
    initField: any;
    initPlayerShip: any;
    setGameFields: any;
    levelInit: any;
    warpEffect: any;
    createContext: any;
    getScreenSize: any;
    getLevelUserData: any;
    levelTimer: any;
    getSecondMeasure: any;
    deleteBullet: any;
    deleteObjects: any;
    hitDetection: any;
    collectPoints: any;
    spawnEnemyLogic: any;
    createNewEnemy: any;
    gameRandomizer: any;
    changeLevelProcedure: any;
    uiController: any;
    gameUiPause: any;
    showUiPopupWindow: any;
    showMenuWindow: any;
    showStartWindow: any;
    showGameStats: any;
    initUiElements: any;
    gameUiMenu: any;
    gameStart: any;
    backToStartScreen: any;
    showPauseWindow: any;
    nextLevelDataReload: any;
    getRandomColor: any;
    constructor(gameInitData: any){
        this.gameInitData = gameInitData;
        //this.serverLocation = serverLocation;
    }
    changeLevel(nextLevel: number){
        this.gameInitData.gameData.currentLevel = nextLevel;
        return this.gameInitData.gameData.currentLevel;
    }
    showGameInfo(){
        return {
            levelToChange: this.gameInitData.gameData.currentLevel,
            currentPoint: this.gameInitData.gameData.currentPoint,
            gameData: this.gameInitData.gameData,
            imageDirrection: location.origin + '/images/'
        }
    }
    showLevelData(){
        return this.gameInitData.gameData.levelData;
    }
    getServerLevelData(){

    }
    returnContext(){
        if(this.gameInitData.gameField&&
            this.gameInitData.gameActionField&&
            this.gameInitData.gameUIField){
                return {
                    gameField: this.gameInitData.gameField,
                    gameActionField: this.gameInitData.ctxActionField,
                    gameUIField: this.gameInitData.gameUIField,
                }
            }else{
                return null
            }
    }
}

Game.prototype.createContext = createContext;
Game.prototype.initField = initField;
Game.prototype.levelInit = levelInit;           // createContext initPlayerShip

Game.prototype.setGameFields = setGameFields;
Game.prototype.warpEffect = warpEffect;  // warpEffect

Game.prototype.getScreenSize = getScreenSize;
Game.prototype.getLevelUserData = getLevelUserData;
Game.prototype.levelTimer = levelTimer;
Game.prototype.getSecondMeasure = getSecondMeasure;

Game.prototype.initPlayerShip = engine.initPlayerShip;
//Game.prototype.placePlayerShip = placePlayerShip;

Game.prototype.deleteBullet = deleteBullet;
Game.prototype.deleteObjects = deleteObjects;
Game.prototype.hitDetection = hitDetection;
Game.prototype.collectPoints = collectPoints;

Game.prototype.spawnEnemyLogic = spawnEnemyLogic;
Game.prototype.createNewEnemy = createNewEnemy;
Game.prototype.gameRandomizer = gameRandomizer;

Game.prototype.uiController = uiController;
Game.prototype.gameUiPause = gameUiPause;
Game.prototype.gameUiMenu = gameUiMenu;
Game.prototype.showMenuWindow = showMenuWindow;
Game.prototype.showUiPopupWindow = showUiPopupWindow;
Game.prototype.showStartWindow = showStartWindow;
Game.prototype.showPauseWindow = showPauseWindow;
Game.prototype.showGameStats = showGameStats;
Game.prototype.initUiElements  = initUiElements;

Game.prototype.gameStart = gameStart;
Game.prototype.backToStartScreen = backToStartScreen;
Game.prototype.nextLevelDataReload = nextLevelDataReload;
Game.prototype.changeLevelProcedure = changeLevelProcedure;

Game.prototype.getRandomColor = getRandomColor;

export {
    Game,
}