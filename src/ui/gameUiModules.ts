var { viewModules } = require('../view/displayModules');
var { uiStateModules } = require('./gameUiStateModuels');
var { uiElements } = require('../view/elements/uiElementModules')

function gameUiPause(){
    this.gameInitData.gamePause = !this.gameInitData.gamePause;
}
function uiController(){
    let controlKeys = this.gameInitData.gameData.gameSetings.keyControls;
    let gameObject = this;
    document.addEventListener("keydown",(e: any)=>{
        if(controlKeys.escape.some(o => e.keyCode == o) )  console.log("escape");
        if(controlKeys.pause.some(o => e.keyCode == o) ) gameObject.gameUiPause() ;
    })

    document.addEventListener("click", (e: any) => {
        if(e.target.tagName === "CANVAS"){
            let x = e.clientX - e.target.offsetLeft, y = e.clientY - e.target.offsetTop;
        }
    })
}
function showUiPopupWindow(){
    viewModules.createWindow.call(this)
}
function showStartWindow(gameLoadObjects){
    alert(2)
    let ctx = this.gameInitData.ctxUIField,
    screenSize = this.getScreenSize(),
    picDirection = this.serverLocation.picturesDirection;

    let screenObjects = gameLoadObjects(null, ctx, screenSize.width, screenSize.height, picDirection);
    let drawMethods = [
        viewModules.createShapeRoundBorder,
        uiElements.uiImage,
        uiElements.uiText,
        uiElements.uiText,
        uiElements.uiText
    ];

    for(let itemIndex = 0;  itemIndex < screenObjects.length; itemIndex++){
        screenObjects[itemIndex].init(drawMethods[itemIndex]);
    }
}

module.exports.uiModules = {
    gameUiPause: gameUiPause,
    uiController: uiController,
    showUiPopupWindow: showUiPopupWindow,
    showStartWindow: showStartWindow
}