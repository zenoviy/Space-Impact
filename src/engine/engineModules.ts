var { viewModules } = require('../view/displayModules');
var { levelConstructor } = require('../constructors/levelConstructors');


function initField(screenWidth = window.innerWidth, screenHeight = window.innerHeight){
    let gameField = [].concat(
        this.gameInitData.gameField,
        this.gameInitData.gameActionField,
        this.gameInitData.gameUIField
        )
    if(!gameField) throw Error(ERROR_LIST.noObject);

    for(let screen of gameField){
        screen = Object.assign(screen, {width: screenWidth-4, height: screenHeight-4})
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
        (this.gameInitData.mapBackgroundObjects.length % 2 == 0)? true : null
    );
    mapObject.parrent = parrent;
    this.gameInitData.mapBackgroundObjects = this.gameInitData.mapBackgroundObjects.concat(mapObject);
}


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
function deleteBullet(bullet){
    if(bullet.x > this.gameInitData.screen.width
        || bullet.x < bullet.width * -1
        || !bullet.objectPresent){
        let index = this.gameInitData.allGameBullets.indexOf(bullet);
        this.gameInitData.allGameBullets.splice(index, 1);
    }
}
function deleteObjects(object){
    if(object.x + object.sWidth < 0 || !object.objectPresent){
        let index = this.gameInitData.allGameEnemies.indexOf(object);
        this.gameInitData.allGameEnemies.splice(index, 1);
    }
}
function getObjectPosition(){
    let mainObject = this;
    let position = {
        x: mainObject.x,
        y: mainObject.y,
        width: mainObject.width,
        height: mainObject.height,
    }
    return position
}

module.exports.gameMethods = {
    initField: initField,
    setGameFields: setGameFields,
    levelInit: levelInit,
    createContext: createContext,
    deleteBullet: deleteBullet,
    deleteObjects: deleteObjects,
    getObjectPosition: getObjectPosition
}