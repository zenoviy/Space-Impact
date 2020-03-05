import { createWindow, createShapeRoundBorder } from '../view/displayModules';
import { gameLoadMenu } from './gameUiModels/gameUiLoadMenu';
import { gameSettingsMenu } from './gameUiModels/gameUiSettingsMenu';
import { gamePause } from './gameUiModels/gamePauseScreen';
import { gameInformationScreen } from './gameUiModels/gameStatsScreen';
import { uiImage, uiText } from '../view/elements/uiElementModules';
import { hitDetection } from '../enemies/enemiesModules';


function gameUiPause(){
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
                elementsOnScreen = gameLoadMenu(null, ctx, screenSize.width, screenSize.height, null);
            }
            if(this.gameInitData.gameUiPause){
                elementsOnScreen = gameSettingsMenu(null, ctx, screenSize.width, screenSize.height);
            }
            for(let item in elementsOnScreen){
                let res = hitDetection(elementsOnScreen[item],
                    [].concat({x: x, y: y, width: 10, height: 10, name: "cursor"}), this)
                if(res && elementsOnScreen[item].action){

                    elementsOnScreen[item].action.call(this);
                    break
                }
            }
        }
    })
}
function showUiPopupWindow(){
    createWindow.call(this)
}
function showStartWindow(){
   let drawMethods = [
        createShapeRoundBorder,
        uiImage,
        uiText,
        uiText,
        uiText
    ];
    this.initUiElements(drawMethods, gameLoadMenu)
}
function showMenuWindow(){
    let drawMethods = [
        createShapeRoundBorder,
        createShapeRoundBorder,
        uiText,
        uiText
    ];
    this.initUiElements(drawMethods, gameSettingsMenu)
}
function showPauseWindow(){
    let drawMethods = [
        uiText
    ];
    this.initUiElements(drawMethods, gamePause)
}
function showGameStats(){
    let data = this.getLevelUserData();
    let drawMethods = [
        uiImage,
        uiText,
        uiText,
        uiText
    ];
    this.initUiElements(drawMethods, gameInformationScreen, data)
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

export {
    gameUiPause,
    gameUiMenu,
    uiController,
    showUiPopupWindow,
    showStartWindow,
    showMenuWindow,
    showPauseWindow,
    showGameStats,
    initUiElements
}