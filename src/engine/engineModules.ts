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

/// Background
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

/// Player Ship

function initPlayerShip(){
    if(this.ctx){
        let width = this.ctx.width,
        height = this.ctx.height,
        image = this.data.texture,
        imageLocation = this.parrent.serverLocation.picturesDirection;

        this.img = new Image();
        this.img.onload = () => {
            this.placePlayerShip()
           return this.img
        }
        this.img.src = imageLocation + image;
    }
}
function displayPlayerShip(){
    if(this.img){
        if(this.ctx && this.img){
            let width = this.ctx.width,
            height = this.ctx.height;

            viewModules.createImage(this.ctx, this.img, this.x, this.y);
        }
    }
}
function shipControl(){
    let controlKeys = this.parrent.gameInitData.gameData.gameSetings.keyControls;
    document.addEventListener("keydown"||"keyup",(e)=>{
        console.log(e.key)
        if(controlKeys.down.some(o => e.keyCode == o) )  this.moveShip({xPos: 0, yPos: this.data.speed});
        if(controlKeys.left.some(o => e.keyCode == o) ) this.moveShip({xPos: this.data.speed * -1, yPos: 0}) ;
        if(controlKeys.right.some(o => e.keyCode == o) ) this.moveShip({xPos: this.data.speed, yPos:0}) ;
        if(controlKeys.up.some(o => e.keyCode == o) )  this.moveShip({xPos: 0, yPos: this.data.speed * -1}) ;
    })
    document.addEventListener("mousemove", (e) => {
        this.xFinal = (e.clientX % this.data.speed == 0)? e.clientX : this.data.speed* Math.floor(e.clientX/this.data.speed);
        this.yFinal = (e.clientY % this.data.speed == 0)? e.clientY : this.data.speed* Math.floor(e.clientY/this.data.speed);
    })
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



module.exports.engineModule = {
    stopEngine: stopEngine
};
module.exports.gameMethods = {
    initField: initField,
    displayPlayerShip: displayPlayerShip,
    initPlayerShip: initPlayerShip,
    setGameFields: setGameFields,
    levelInit: levelInit,
    createContext: createContext,
    shipControl: shipControl
}