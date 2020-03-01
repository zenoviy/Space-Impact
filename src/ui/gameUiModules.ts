var { viewModules } = require('../view/displayModules');
var { uiStateModules } = require('./gameUiStateModuels');
var { uiElements } = require('../view/elements/uiElementModules');
var { enemiesModel } = require('../enemies/enemiesModules');


function gameUiPause(){
    this.gameInitData.gamePause = !this.gameInitData.gamePause;
}
function gameUiMenu(){
    this.gameUiPause()
    this.gameInitData.gameUiPause = !this.gameInitData.gameUiPause;
}
function uiController(){
    let controlKeys = this.gameInitData.gameData.gameSetings.keyControls;
    let gameObject = this;

    document.addEventListener("keydown",(e: any)=>{
        if(controlKeys.escape.some(o => e.keyCode == o) ) gameObject.gameUiMenu();
        if(controlKeys.pause.some(o => e.keyCode == o) ) gameObject.gameUiPause();
    })

    document.addEventListener("click", (e: any) => {
        if(e.target.tagName === "CANVAS"){
            var x = e.clientX - e.target.offsetLeft, y = e.clientY - e.target.offsetTop;
            let elementsOnScreen = null;
            let ctx = this.gameInitData.ctxUIField,
            screenSize = this.getScreenSize();
            if(this.gameInitData.gameStatus == false){
                elementsOnScreen = uiStateModules.gameLoadMenu(null, ctx, screenSize.width, screenSize.height);
            }


            for(let item in elementsOnScreen){
                let res = enemiesModel.hitDetection(elementsOnScreen[item], [].concat({x: x, y: y, width: 10, height: 10, name: "cursor"})  )
                if(res){
                    console.log(this)
                    elementsOnScreen[item].action.call(this);
                    break
                }
            }
        }
    })
}
function showUiPopupWindow(){
    viewModules.createWindow.call(this)
}
function showStartWindow(){
   let drawMethods = [
        viewModules.createShapeRoundBorder,
        uiElements.uiImage,
        uiElements.uiText,
        uiElements.uiText,
        uiElements.uiText
    ];
    this.initUiElements(drawMethods, uiStateModules.gameLoadMenu)
}
function showMenuWindow(){
    let drawMethods = [
        viewModules.createShapeRoundBorder,
        uiElements.uiText
        //uiElements.uiText,
        //uiElements.uiText
    ];
    this.initUiElements(drawMethods, uiStateModules.gameSettingsMenu)
}

function initUiElements(drawMethods, callback, ...props){
    let ctx = this.gameInitData.ctxUIField,
    screenSize = this.getScreenSize(),
    picDirection = this.serverLocation.picturesDirection;

    let screenObjects = callback(null, ctx, screenSize.width, screenSize.height, picDirection, ...props);
    for(let itemIndex = 0;  itemIndex < screenObjects.length; itemIndex++){
        if(screenObjects[itemIndex].hasOwnProperty('loadPicture')) screenObjects[itemIndex].loadPicture();
        screenObjects[itemIndex].init(drawMethods[itemIndex]);
    }
}

module.exports.uiModules = {
    gameUiPause: gameUiPause,
    gameUiMenu: gameUiMenu,
    uiController: uiController,
    showUiPopupWindow: showUiPopupWindow,
    showStartWindow: showStartWindow,
    showMenuWindow: showMenuWindow,
    initUiElements: initUiElements
}