const {levelConstructor} = require('../constructors/levelConstructors');


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