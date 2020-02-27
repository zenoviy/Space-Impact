var {viewModules} = require('../view/displayModules');
var {gameMethods} = require('../engine/engineModules');
var {playerShipModule} = require('../engine/playerShipModule');
var {regularAiModule} = require('../ai/regularEnemyAiModules');

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
    levelChange: boolean,
    backScreenPause: boolean,
    gameStatus: boolean,
    gameEngine: any
    
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
    deleteBullet: any;
    spawnEnemyLogic: any;
    createNewEnemy: any;
    gameRandomizer: any;
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
Game.prototype.initPlayerShip = playerShipModule.initPlayerShip;
Game.prototype.placePlayerShip = playerShipModule.placePlayerShip;
Game.prototype.deleteBullet = gameMethods.deleteBullet;

Game.prototype.spawnEnemyLogic = regularAiModule.spawnEnemyLogic;
Game.prototype.createNewEnemy = regularAiModule.createNewEnemy;
Game.prototype.gameRandomizer = regularAiModule.gameRandomizer;

module.exports.gameModule = {
    Game: Game,
}