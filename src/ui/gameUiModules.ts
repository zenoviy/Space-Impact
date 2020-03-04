var { viewModules } = require('../view/displayModules');
var { uiStateModules } = require('./gameUiModels/gameUiLoadMenu');
var { uiSettingsMenu } = require('./gameUiModels/gameUiSettingsMenu');
var { gamePauseModule } = require('./gameUiModels/gamePauseScreen');
var { gameStatsScreens } = require('./gameUiModels/gameStatsScreen');
var { uiElements } = require('../view/elements/uiElementModules');
var { enemiesModel } = require('../enemies/enemiesModules');


function gameUiPause(){
    //console.log(this.showPauseWindow)
    if(!this.gameInitData.gameUiPause && this.gameInitData.gameStatus) this.gameInitData.gamePause = !this.gameInitData.gamePause;
}
function gameUiMenu(gameUiPause){
    this.gameInitData.gameUiPause = !this.gameInitData.gameUiPause;
    this.gameInitData.gamePause = (gameUiPause)? false: true;
}
function uiController(){

    let controlKeys = this.gameInitData.gameData.gameSetings.keyControls;
    let gameObject = this;

    document.addEventListener("keydown",(e: any)=>{
        if(controlKeys.escape.some(o => e.keyCode == o) ) gameObject.gameUiMenu(this.gameInitData.gameUiPause);
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
            if(this.gameInitData.gameUiPause){
                elementsOnScreen = uiSettingsMenu.gameSettingsMenu(null, ctx, screenSize.width, screenSize.height);
            }
            for(let item in elementsOnScreen){
                let res = enemiesModel.hitDetection(elementsOnScreen[item],
                    [].concat({x: x, y: y, width: 10, height: 10, name: "cursor"})  )
                if(res && elementsOnScreen[item].action){

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
        viewModules.createShapeRoundBorder,
        uiElements.uiText,
        uiElements.uiText
    ];
    this.initUiElements(drawMethods, uiSettingsMenu.gameSettingsMenu)
}
function showPauseWindow(){
    let drawMethods = [
        uiElements.uiText
    ];
    this.initUiElements(drawMethods, gamePauseModule.gamePause)
}
function showGameStats(){
    let data = this.getLevelUserData();
    //console.log(data)
    let drawMethods = [
        uiElements.uiImage,
        uiElements.uiText,
        uiElements.uiText,
        uiElements.uiText
    ];
    this.initUiElements(drawMethods, gameStatsScreens.gameInformationScreen, data)
}

function initUiElements(drawMethods, callback, ...props){
    let ctx = this.gameInitData.ctxUIField,
    screenSize = this.getScreenSize(),
    picDirection = this.showGameInfo().imageDirrection;
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
    showPauseWindow: showPauseWindow,
    showGameStats: showGameStats,
    initUiElements: initUiElements
}