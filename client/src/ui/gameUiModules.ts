import { createWindow, createShapeRoundBorder, createRoundButton } from '../view/displayModules';
import { gameLoadMenu } from './gameUiModels/gameUiLoadMenu';
import { gameSettingsMenu } from './gameUiModels/gameUiSettingsMenu';
import { gamePause } from './gameUiModels/gamePauseScreen';
import { gameInformationScreen } from './gameUiModels/gameStatsScreen';
import { gameOverScreen } from './gameUiModels/gameGameOverScreen';
import { gameWinScreen } from './gameUiModels/gameWinScreen';
import { uiImage, uiText } from '../view/elements/uiElementModules';
import { hitDetection } from '../enemies/enemiesModules';
import { levelChangeScreen } from './gameUiModels/levelChangeScreen';


function gameUiPause(){
    if(this.gameInitData.shopActive || this.gameInitData.inventoryActive) return false
    if(!this.gameInitData.gameUiPause && this.gameInitData.gameStatus) this.gameInitData.gamePause = !this.gameInitData.gamePause;
}
function gameUiMenu(gameUiPause){
    this.gameInitData.gameUiPause = !this.gameInitData.gameUiPause;
    if(this.gameInitData.shopActive && this.gameInitData.inventoryActive || this.gameInitData.inventoryActive) return false
    this.gameInitData.gamePause = (gameUiPause)? false: true;
}
function uiController(){
    let controlKeys = this.gameInitData.gameData.gameSetings.keyControls;
    let gameObject = this;

    document.addEventListener("keydown",(event: any)=>{
        if(controlKeys.escape.some(o => event.keyCode == o) ) gameObject.gameUiMenu(this.gameInitData.gameUiPause);
        if(controlKeys.pause.some(o => event.keyCode == o) ) gameObject.gameUiPause();
    })

    document.addEventListener("click", (event: any) => {
        let data = this.getLevelUserData();
        canvasMenuClickEvent.call(this, {
            event: event,
            gameObject: gameObject,
            data: data
        })
    })
}

function canvasMenuClickEvent({event, gameObject, data}){
    if(event.target.tagName === "CANVAS"){
        var x = event.clientX - event.target.offsetLeft, y = event.clientY - event.target.offsetTop;
        let elementsOnScreen = null;
        let ctx = this.gameInitData.ctxUIField,
        screenSize = {width: window.innerWidth, height: window.innerHeight};
        if(!this.gameInitData.gameStatus){
            elementsOnScreen = gameLoadMenu(null, ctx, screenSize.width, screenSize.height, null);
            clickDetection.call(this, {x: x, y: y, gameObject: gameObject, elementsOnScreen: elementsOnScreen})
        }
        if(this.gameInitData.gameUiPause){
            elementsOnScreen = gameSettingsMenu(null, ctx, screenSize.width, screenSize.height);
            clickDetection.call(this, {x: x, y: y, gameObject: gameObject, elementsOnScreen: elementsOnScreen})
        }
        if(this.gameInitData.gameWin){
            elementsOnScreen = gameWinScreen(null, ctx, screenSize.width, screenSize.height, null, data);
            clickDetection.call(this, {x: x, y: y, gameObject: gameObject, elementsOnScreen: elementsOnScreen})
        }
    }
}
function clickDetection({x, y, gameObject, elementsOnScreen}){
    for(let item in elementsOnScreen){
        let res = hitDetection({
            object1: elementsOnScreen[item],
            objectsArr: [].concat({x: x, y: y, width: 10, height: 10, name: "cursor"}),
            mainGameObject: this,
            GrappleObject : null
        })
        if(res && elementsOnScreen[item].action){
            elementsOnScreen[item].action.call(this, gameObject);
            break
        }
    }
}

function showUiPopupWindow(){
    createWindow.call(this)
}
function showStartWindow(){
   let drawMethods = [
        createRoundButton,
        uiImage,
        uiText,
        uiText
    ];
    this.initUiElements(drawMethods, gameLoadMenu)
}
function showMenuWindow(){
    let drawMethods = [
        createShapeRoundBorder,
        createRoundButton,
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
function showGameStats({ playerObject, mainGameObject }){
    let data = this.getLevelUserData();
    data.playerObject = playerObject;
    data.mainGameObject = mainGameObject;
    let drawMethods = [
        uiImage,
        uiText,
        uiText,
        uiText,
        uiImage,
        uiText,
        uiImage
    ];
    this.initUiElements(drawMethods, gameInformationScreen, data)
}
function levelChangeWindow(){
    let data = this.getLevelUserData();
    let drawMethods = [
        uiText,
        uiText,
        uiText
    ];
    this.initUiElements(drawMethods, levelChangeScreen, data)
}
function gameOverWindow(){
    let drawMethods = [
        uiText,
        uiText,
        uiText
    ];
    this.initUiElements(drawMethods, gameOverScreen)
}
function gameWinWindow(){
    let data = this.getLevelUserData();
    let drawMethods = [
        uiText,
        uiText,
        uiText,
        createRoundButton,
        createRoundButton,
        createRoundButton
    ];
    this.initUiElements(drawMethods, gameWinScreen, data)
}

function initUiElements(drawMethods, callback, ...props){
    let ctx = this.gameInitData.ctxUIField,
    screenSize = {width: window.innerWidth, height: window.innerHeight},
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
    levelChangeWindow,
    gameOverWindow,
    gameWinWindow,
    showGameStats,
    initUiElements
}