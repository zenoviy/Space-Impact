var { viewModules } = require('../view/displayModules');
var { gameMethods } = require('../engine/engineModules');
var { playerShipModule } = require('../engine/playerShipModule');
var { regularAiModule } = require('../ai/regularEnemyAiModules');
var { enemiesModel } = require('../enemies/enemiesModules');
var { uiModules } = require('../ui/gameUiModules');
var { startGameModules } = require('../engine/gameModules/satartGame');

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
    allGameEnemies: object[],
    allGameBullets: object[],
    allGameMapOBjects: object[],
    mapBackgroundObjects: object[],
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
    initField: any;
    placePlayerShip: any;

    initPlayerShip: any;
    setGameFields: any;
    levelInit: any;
    createContext: any;
    getScreenSize: any;
    getLevelUserData: any;
    getSecondMeasure: any;
    deleteBullet: any;
    deleteObjects: any;
    hitDetection: any;
    collectPoints: any;
    spawnEnemyLogic: any;
    createNewEnemy: any;
    gameRandomizer: any;
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
    constructor(private gameInitData: gameData,private serverLocation: serverLocation){
        this.gameInitData = gameInitData;
        this.serverLocation = serverLocation;
    }
    changeLevel(nextLevel: number){
        this.gameInitData.gameData.levelData.currentLevel = nextLevel;
    }
    showGameInfo(){
        return {
            currentLevel: this.gameInitData.gameData.currentLevel,
            currentPoint: this.gameInitData.gameData.currentPoint,
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

Game.prototype.createContext = gameMethods.createContext;
Game.prototype.initField = gameMethods.initField;
Game.prototype.levelInit = gameMethods.levelInit;   // createContext initPlayerShip
Game.prototype.setGameFields = gameMethods.setGameFields;
Game.prototype.getScreenSize = gameMethods.getScreenSize;
Game.prototype.getLevelUserData = gameMethods.getLevelUserData;
Game.prototype.getSecondMeasure = gameMethods.getSecondMeasure;

Game.prototype.initPlayerShip = playerShipModule.initPlayerShip;
Game.prototype.placePlayerShip = playerShipModule.placePlayerShip;

Game.prototype.deleteBullet = gameMethods.deleteBullet;
Game.prototype.deleteObjects = gameMethods.deleteObjects;
Game.prototype.hitDetection = enemiesModel.hitDetection;
Game.prototype.collectPoints = gameMethods.collectPoints;

Game.prototype.spawnEnemyLogic = regularAiModule.spawnEnemyLogic;
Game.prototype.createNewEnemy = regularAiModule.createNewEnemy;
Game.prototype.gameRandomizer = regularAiModule.gameRandomizer;

Game.prototype.uiController = uiModules.uiController;
Game.prototype.gameUiPause = uiModules.gameUiPause;
Game.prototype.gameUiMenu = uiModules.gameUiMenu;
Game.prototype.showMenuWindow = uiModules.showMenuWindow;
Game.prototype.showUiPopupWindow = uiModules.showUiPopupWindow;
Game.prototype.showStartWindow = uiModules.showStartWindow;
Game.prototype.showPauseWindow = uiModules.showPauseWindow;
Game.prototype.showGameStats = uiModules.showGameStats;

Game.prototype.initUiElements  = uiModules.initUiElements;
Game.prototype.gameStart = startGameModules.gameStart;
Game.prototype.backToStartScreen = startGameModules.backToStartScreen;

module.exports.gameModule = {
    Game: Game,
}