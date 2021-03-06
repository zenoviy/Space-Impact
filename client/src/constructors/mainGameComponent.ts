//import { viewModules } from '../view/displayModules';
import { spawnEnemyLogic, createNewEnemy, gameRandomizer } from '../ai/regularEnemyAiModules';
import  { hitDetection } from '../enemies/animationHitBoxModules';
import { nextLevelDataReload } from '../engine/gameModules/changeLevels';
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
    gameSecondsIncrease,
    deleteBullet,
    deleteObjects,
    delateSideObject,
    collectPoints,
    changeLevelProcedure,
    getRandomColor,
    getImageFromFields } from '../engine/engineModules';
import { initPlayerShip } from '../engine/playerShipModule';
import {
    uiController,
    gameUiPause,
    gameUiMenu,
    showMenuWindow,
    showUiPopupWindow,
    showStartWindow,
    showPauseWindow,
    levelChangeWindow,
    gameOverWindow,
    gameWinWindow,
    showGameStats,
    initUiElements } from '../ui/gameUiModules';
import { gameStart, backToStartScreen, exitTheGame, mapSoundChanger } from '../engine/gameModules/satartGame';
import { mapRandomObjectSpawn } from '../engine/gameSideObjectsModule';
import { initGrappleObject } from '../engine/gameGrappleObjectsModule';
import { gameSettingsMenuInit } from '../appMenu/menuSettings';
import { createSound } from '../engine/soundModules';


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
    mapBackgroundObjects: object[],
    warpObjects: object[];
    timeToEressLevel: number;
    gamePause: boolean,
    gameUiPause: boolean,
    levelChange: boolean,
    backScreenPause: boolean,
    gameStatus: boolean,
    gameOver: boolean,
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
    shopArea: any;
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
    gameSecondsIncrease: any;
    deleteBullet: any;
    deleteObjects: any;
    delateSideObject: any;
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
    levelChangeWindow: any;
    gameOverWindow: any;
    gameWinWindow: any;
    showGameStats: any;
    initUiElements: any;
    gameUiMenu: any;
    gameStart: any;
    mapSoundChanger: any;
    backToStartScreen: any;
    exitTheGame: any;
    showPauseWindow: any;
    nextLevelDataReload: any;
    getRandomColor: any;
    mapRandomObjectSpawn: any;
    initGrappleObject: any;
    gameSettingsMenuInit: any;
    createSound: any;
    getImageFromFields: any;
    constructor(gameInitData: any){
        this.gameInitData = gameInitData;
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
            settings: this.gameInitData.gameData.gameSetings,
            levelSounds: this.gameInitData.gameData.levelSounds,
            playerObject: this.gameInitData.gameData.playerObject,
            imageDirrection: __dirname + '/public/images/',
        }
    }
    showLevelData(){
        return this.gameInitData.gameData.levelData;
    }
    returnContext(){
        if(this.gameInitData.gameField&&
            this.gameInitData.gameActionField&&
            this.gameInitData.gameDialogField&&
            this.gameInitData.gameUIField){
                return {
                    gameField: this.gameInitData.gameField,
                    gameActionField: this.gameInitData.ctxActionField,
                    gameDialogField: this.gameInitData.ctxGameDialogField,
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
Game.prototype.gameSecondsIncrease = gameSecondsIncrease;

Game.prototype.initPlayerShip = initPlayerShip;
//Game.prototype.placePlayerShip = placePlayerShip;

Game.prototype.deleteBullet = deleteBullet;
Game.prototype.deleteObjects = deleteObjects;
Game.prototype.delateSideObject = delateSideObject;
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
Game.prototype.levelChangeWindow = levelChangeWindow;
Game.prototype.gameOverWindow = gameOverWindow;
Game.prototype.gameWinWindow = gameWinWindow;
Game.prototype.showGameStats = showGameStats;
Game.prototype.initUiElements  = initUiElements;

Game.prototype.mapSoundChanger = mapSoundChanger;
Game.prototype.gameStart = gameStart;
Game.prototype.backToStartScreen = backToStartScreen;
Game.prototype.exitTheGame = exitTheGame;
Game.prototype.nextLevelDataReload = nextLevelDataReload;
Game.prototype.changeLevelProcedure = changeLevelProcedure;

Game.prototype.getRandomColor = getRandomColor;
Game.prototype.mapRandomObjectSpawn = mapRandomObjectSpawn;

Game.prototype.initGrappleObject = initGrappleObject;
Game.prototype.gameSettingsMenuInit = gameSettingsMenuInit;
Game.prototype.createSound = createSound;
Game.prototype.getImageFromFields = getImageFromFields;
export {
    Game,
}