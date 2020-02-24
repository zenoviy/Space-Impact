const {viewModules} = require('../view/dsiplayModules');
const {gameMethods} = require('../engine/engineModules');

class GameBackground{
    x: number = 0;
    y: number = 0;
    backgroundTexture: string;
    backgroundSpeed: number;
    screenData: any;
    ctx: any;
    img: any;
    constructor(
        backgroundTexture: string,
        backgroundSpeed: number,
        screenData: any,
        ctx: any,
        partOfScreenStatus: boolean
        ){
            this.backgroundTexture = backgroundTexture;
            this.backgroundSpeed = backgroundSpeed;
            this.screenData = screenData;
            this.ctx = ctx;
            this.x = (partOfScreenStatus)? 0 : screenData.width;
            this.y = 0;
            this.img = new Image();
            this.img.src = location.origin + '/images/locations/' + this.backgroundTexture;

        }
    updateMap(){
        this.img = this.img || new Image();
        let backgroundObject = this;

        this.x -= this.backgroundSpeed;
        if(this.x + this.screenData.width < 0){
            this.x = this.screenData.width;
        }

        this.img.onload = function() {
           //viewModules.clearField(backgroundObject.ctx, backgroundObject.screenData.width, backgroundObject.screenData.height);
            viewModules.createImage(backgroundObject.ctx,
                backgroundObject.img, backgroundObject.x, 0,
                backgroundObject.screenData.width+2,
                backgroundObject.screenData.height)
        };
         this.img.src = this.img.src || location.origin + '/images/locations/' + this.backgroundTexture;
    }
    mapAnimation(){

    }
}
interface gameData{
    gameField: any,
    gameActionField: any,
    gameUIField: any,
    gameData:{
        currentLevel: number,
        currentPoint: number,
        playerObject: any
    },
    screen:{
        width: number,
        height: number
    },
    allGameEnemies: object[],
    allGameBullets: object[],
    allGameMapOBjects: object[],
    mapBackgroundObjects: object[],
    gamePause: boolean,
    backScreenPause: boolean,
    gameStatus: boolean,
    gameEngine: any
    levelData: {
        enemyProbability: number,
        levelMap: string,
        enemyType: number[],
        level: number,
    }
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
    initField;
    levelInit;
    createContext;
    constructor(
        private gameInitData: gameData,
        private serverLocation: serverLocation
    ){
        this.gameInitData = gameInitData;
        this.serverLocation = serverLocation;
    }
    changeLevel(nextLevel: number){
        this.gameInitData.gameData.currentLevel = nextLevel;
    }
    showGameInfo(){
        return {
            currentLevel: this.gameInitData.gameData.currentLevel,
            currentPoint: this.gameInitData.gameData.currentPoint,
        }
    }
    showLevelData(){
        return this.gameInitData.levelData;
    }
}
Game.prototype.initField = gameMethods.initField;
Game.prototype.levelInit = gameMethods.levelInit;   // createContext
Game.prototype.createContext = gameMethods.createContext;

module.exports.levelConstructor = {
    Game: Game,
    GameBackground: GameBackground
}