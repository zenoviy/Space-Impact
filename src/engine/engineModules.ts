const {levelConstructor} = require('../constructors/levelConstructors');


function initField(screenWidth = window.innerWidth, screenHeight = window.innerHeight){
    let gameField = this.gameInitData.gameField
    if(!gameField) throw Error(ERROR_LIST.noObject);

    gameField.width = screenWidth-4;
    gameField.height = screenHeight-4;
}



function levelInit(backgroundConstructor, ctx){
    let gameData = this.showLevelData();
    let backgrundImages = gameData.levelMap;

    let map = new backgroundConstructor(
        backgrundImages,
        3,
        this.gameInitData.screen,
        ctx,
        (this.gameInitData.mapBackgroundObjects.length > 0)? true : null
    );
    this.gameInitData.mapBackgroundObjects = this.gameInitData.mapBackgroundObjects.concat(map) ;
    console.log(this.gameInitData.mapBackgroundObjects)
}

function createContext(){
    this.gameInitData.ctx = this.gameInitData.gameField.getContext('2d');
}


function stopEngine(engineName){
    clearInterval(engineName);
}





module.exports.engineModule = {
    stopEngine: stopEngine
};
module.exports.gameMethods = {
    initField: initField,
    levelInit: levelInit,
    createContext: createContext
}