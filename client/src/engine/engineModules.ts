import { draw } from '../view/displayModules';
const { ipcRenderer, remote } = require( "electron" );
//import { levelConstructor } from '../constructors/levelConstructors';


function initField(screenWidth = window.innerWidth, screenHeight = window.innerHeight){
    let gameField = [].concat(
        this.gameInitData.gameField,
        this.gameInitData.gameActionField,
        this.gameInitData.gameUIField
        )
    if(!gameField) throw Error('Error');
    for(let screen of gameField){
        screen = Object.assign(screen, {width: screenWidth-4, height: screenHeight-4})
    }
}



function setGameFields(){
    this.initField();
    this.createContext();
    this.initPlayerShip();
}



function warpEffect(){
    let screenSiz = this.getScreenSize();
    let ctx = this.gameInitData.ctx;
    let gameWarpObjects = this.gameInitData.warpObjects;
    this.getSecondMeasure(warpTimer, {timeToEressLevel: this.gameInitData.timeToEressLevel, ctx: ctx, screenSiz: this.getScreenSize()})

    this.gameInitData.warpObjects = (gameWarpObjects.length < 350)? this.gameInitData.warpObjects.concat({
        x: window.innerWidth,
        y: this.gameRandomizer(window.innerHeight),
        height: this.gameRandomizer(20, 10),
        width: 10,
        speed: this.gameRandomizer(10, 5),
        background:  this.getRandomColor(),
    }) : this.gameInitData.warpObjects;

    if(gameWarpObjects.length > 0){
        for(let warper of gameWarpObjects){
            warper.x -= (warper.x > 0)? warper.speed: 0;
            warper.width = (gameWarpObjects.length < 150)?  warper.width - warper.speed
            :(gameWarpObjects.length > 150 && gameWarpObjects.length < 350)? warper.width + warper.speed: warper.width - warper.speed;

            ctx.fillStyle = warper.background;
            draw(ctx, 'fillRect', warper.x, warper.y, warper.width, warper.height);
            ctx.fill();
        }
    }
    function warpTimer(levelData){
        let leveChangeStatus = (this.gameInitData.timeToEressLevel >=0 )? false : true;
        if(this.gameInitData.timeToEressLevel >=0 && !leveChangeStatus) this.gameInitData.timeToEressLevel -= 1;
        if(this.gameInitData.timeToEressLevel < 0 && !leveChangeStatus){
            //console.log('change music')

            this.gameInitData.levelWindowDescription = true;
            this.changeLevelProcedure()
            //this.mapSoundChanger({soundStatus:'regular_level'})
        }
    }
}



function levelInit(GameBackground, ctx, mainGameObject){
    let gameData = this.showLevelData();
    let allBackgroundElements = gameData.levelBackgroundElements;
    let levelStandartMap = gameData.levelStandartMap;
    mainGameObject.gameInitData.backScreenPause = false;

    for(let mapObject of allBackgroundElements){

        let mapItem = new GameBackground({
            backgroundTexture: mapObject.levelMap, speed: mapObject.speed,
            screenData: this.gameInitData.screen, ctx: ctx,
            partOfScreenStatus: (this.gameInitData.mapBackgroundObjects.length % 2 == 0)? true : null,
            extraMap: (mapObject.extraMap)? mapObject.extraMap : null,
            timeToExtraMapSeconds: (mapObject.timeToExtraMapSeconds)? mapObject.timeToExtraMapSeconds : null,
            timeToExtraMapMinutes: (mapObject.timeToExtraMapMinutes)? mapObject.timeToExtraMapMinutes : null,
            imageWidth: (mapObject.imageWidth)? mapObject.imageWidth: levelStandartMap.imageWidth,
            imageHeight: (mapObject.imageHeight)? mapObject.imageHeight: levelStandartMap.imageHeight,
            animationSteps: (mapObject.animationSteps)? mapObject.animationSteps: levelStandartMap.animationSteps,
            numberOfItems: (mapObject.numberOfItems)? mapObject.numberOfItems: levelStandartMap.numberOfItems,
            numberOfVerticalItems: (mapObject.numberOfVerticalItems)? mapObject.numberOfVerticalItems: levelStandartMap.numberOfVerticalItems
        });
        mainGameObject.gameInitData.mapBackgroundObjects = mainGameObject.gameInitData.mapBackgroundObjects.concat(mapItem);
        mapItem.img.src = __dirname + mapItem.backgroundTexture;
    }
}

function createContext(){
    this.gameInitData.ctx = this.gameInitData.gameField.getContext('2d');
    this.gameInitData.ctxActionField = this.gameInitData.gameActionField.getContext('2d');
    this.gameInitData.ctxUIField = this.gameInitData.gameUIField.getContext('2d');
}




function getScreenSize(){
    let width = window.innerWidth,
    height = window.innerHeight;
    return {width: width, height: height}
}




function changeLevelProcedure(){
    // animation for warp, http request for level and enemyes, 10 levels must be
    // some levels must contain boss at least 2 boss
    // last level is final titles the end save score
    let levelData = this.showGameInfo();
    let level = this.changeLevel(levelData.gameData.currentLevel + 1)
    if(level <= levelData.gameData.levelData.allLevels){
        this.nextLevelDataReload(levelData)
    }else{
        this.mapSoundChanger({soundStatus:'game_win'})
        this.gameInitData.gameWin = true;
        this.gameInitData.levelWindowDescription = false;
    }
}


function levelTimer(){
        let data = this.getLevelUserData()
        if(!data.sourse.levelData.bossPresent){
            let levelTime = data.sourse.levelData.levelDetails  // { levelMinutes: 3, levelSeconds: 43 }
            if(!this.gameInitData.levelChange) this.getSecondMeasure( levelTimeAction, data.sourse.levelData.levelDetails);
        }else{
            data.sourse.levelData.levelDetails.levelSeconds = null;
            data.sourse.levelData.levelDetails.levelMinutes = null;
        }
        function levelTimeAction(time){
            if(time.levelSeconds <= 0){
                if(time.levelMinutes == 0 && time.levelSeconds == 0){
                    time.levelSeconds = 0;
                    this.gameInitData.levelChange = true;
                }
                time.levelMinutes = (time.levelMinutes > 0)? time.levelMinutes - 1 :0;
            }
            time.levelSeconds = (time.levelSeconds > 0)? time.levelSeconds-1 :(this.gameInitData.levelChange)? 0 : 59;
        }
}



async function getSecondMeasure(callback, ...data){


    let gameSecond = 1000/this.gameInitData.intervalCount;
    if(this.gameInitData.gemeExtraSeconds % gameSecond == 0){
        this.gameInitData.gemeExtraSeconds = 0;
        if(await callback) return await callback.call(this, ...data);
        return gameSecond;
    }
}



function gameSecondsIncrease(){
    this.gameInitData.gemeExtraSeconds += 1;
}




function getLevelUserData(){
    let dataSourse = this.gameInitData.gameData;
    let levelTime = dataSourse.levelData.levelDetails;
    return {
        sourse: dataSourse,
        currentLevel: dataSourse.currentLevel,
        allLevels: dataSourse.levelData.allLevels,
        points: dataSourse.currentPoint,
        gameCoins: dataSourse.gameCoins,
        life:  dataSourse.playerObject.numberOflife,
        minutes: levelTime.levelMinutes,
        seconds: levelTime.levelSeconds
    }
}





function deleteBullet(bullet){
    if(bullet.x > window.innerWidth + 500
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




function delateSideObject(object){
    if(!object.objectPresent || object.x < 0 - object.width){
        let index = this.gameInitData.allGameSideObjects.indexOf(object);
        this.gameInitData.allGameSideObjects.splice(index, 1);
    }
}




function collectPoints(point){
    this.gameInitData.gameData.currentPoint += point;
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



function getRandomColor() {
    var letters = '0123456789ABCDEF';// '0123456789ABCDEF'  '6789ABC';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function preloadImage(items){

    let image = document.querySelector("#preloader");
    loopVertical(items)
    function loopVertical(object){
        if(!object) return
        for(let [key, val] of Object.entries(object)){
            if(typeof object[key] === "object"){
                loopVertical(object[key])
            }
            assignimage(key, val, image)
        }
    }
    function assignimage(key, val, image){
        if(key == 'skinName' ||  key == 'texture' || key == 'levelMap'){
            if(val) image.src = __dirname + val;
        }
    }
}


function fullScreenSwitch({fullscreen}){
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
        //console.log(arg) // 
    })
    ipcRenderer.send('asynchronous-message', {fullscreen: fullscreen})
}


export  {
    initField,
    warpEffect,
    setGameFields,
    levelInit,
    createContext,
    getScreenSize,
    getRandomColor,
    getLevelUserData,
    changeLevelProcedure,
    levelTimer,
    getSecondMeasure,
    gameSecondsIncrease,
    deleteBullet,
    deleteObjects,
    delateSideObject,
    getObjectPosition,
    collectPoints,
    preloadImage,
    fullScreenSwitch
}