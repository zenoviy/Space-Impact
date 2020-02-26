var {viewModules} = require('../view/displayModules');
var {levelConstructor} = require('../constructors/levelConstructors');


function initField(screenWidth = window.innerWidth, screenHeight = window.innerHeight){
    let gameField = [].concat(
        this.gameInitData.gameField,
        this.gameInitData.gameActionField,
        this.gameInitData.gameUIField
        )
    if(!gameField) throw Error(ERROR_LIST.noObject);

    for(let screen of gameField){
        screen.width = screenWidth-4;
        screen.height = screenHeight-4;
    }
}

function setGameFields(){
    this.initField();
    this.createContext();
    this.initPlayerShip();
}

function levelInit(backgroundConstructor, ctx, parrent){
    let gameData = this.showLevelData();
    let backgrundImages = gameData.levelMap;

    let mapObject = new backgroundConstructor(
        backgrundImages, 1, this.gameInitData.screen, ctx,
        (this.gameInitData.mapBackgroundObjects.length % 2 == 0)? true : null  ///   %2
    );
    mapObject.parrent = parrent;
    this.gameInitData.mapBackgroundObjects = this.gameInitData.mapBackgroundObjects.concat(mapObject);
}

/// engine  6a 13кабінет до 12:30
function createContext(){
    this.gameInitData.ctx = this.gameInitData.gameField.getContext('2d');
    this.gameInitData.ctxActionField = this.gameInitData.gameActionField.getContext('2d');
    this.gameInitData.ctxUIField = this.gameInitData.gameUIField.getContext('2d');
}


function stopEngine(engineName){
    clearInterval(engineName);
}

function changeLevel(){

}
function levelTimer(){

}
function reloadGame(){

}
function delateBullet(bullet){
    if(bullet.x > this.gameInitData.screen.width || bullet.x < -100){
        let index = this.gameInitData.allGameBullets.indexOf(bullet);
        this.gameInitData.allGameBullets.splice(index, 1);
    }
}


module.exports.gameMethods = {
    initField: initField,
    setGameFields: setGameFields,
    levelInit: levelInit,
    createContext: createContext,
    delateBullet: delateBullet
}