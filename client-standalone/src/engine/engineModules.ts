var fs = require('fs');
var path = require('path');
var storage = require('electron-json-storage');
import mergeImages from 'merge-images';
import { draw } from '../view/displayModules';
import { addClassList, removeClassList } from '../appMenu/appMenu';
import { backgroundAdjustment } from './dynamicLevels/dynamicLevelModule';
const { ipcRenderer, remote } = require( "electron" );





function gameNpcUnitsCounting({mainGameObject, target}){
    let userShipData = mainGameObject.gameInitData.gameData.playerObject;
    let userShipJournal = userShipData.journal;
    if(target.objectOwner === "groundEnemy") userShipJournal.defaultData.numberOfGroundEnemy += 1;
    if(target.objectOwner === "enemy") userShipJournal.defaultData.numberFlyOfEnemy += 1;
}





function initField (screenWidth = window.innerWidth, screenHeight = window.innerHeight){
    let gameField = [].concat(
        this.gameInitData.gameField,
        this.gameInitData.gameActionField,
        this.gameInitData.gameDialogField,
        this.gameInitData.gameUIField
    )
    if(!gameField) throw Error('Error');
    for(let screen of gameField){
        screen = Object.assign(screen, {width: screenWidth-4, height: screenHeight-4})
    }
}



function setGameFields (){
    this.initField();
    this.createContext();
    this.initPlayerShip();
}



function warpEffect (constructors){
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
    function warpTimer (levelData){
        let leveChangeStatus = (this.gameInitData.timeToEressLevel >=0 )? false : true;
        if(this.gameInitData.timeToEressLevel >=0 && !leveChangeStatus) this.gameInitData.timeToEressLevel -= 1;
        if(this.gameInitData.timeToEressLevel < 0 && !leveChangeStatus){

            this.gameInitData.levelWindowDescription = true;
            this.changeLevelProcedure(constructors)
        }
    }
}



async function levelInit (GameBackground, ctx, mainGameObject){
    let gameData = this.showLevelData();
    let allBackgroundElements = gameData.levelBackgroundElements;
    let levelStandartMap = gameData.levelStandartMap;
    mainGameObject.gameInitData.backScreenPause = false;

    loadMapBackgroud.call(this, allBackgroundElements)
    if(gameData.levelBottomPart){
        await loadMapBackgroud.call(this, gameData.levelBottomPart, window.innerHeight-200, window.innerHeight)
        backgroundAdjustment({mainGameObject: mainGameObject})
    }

    function loadMapBackgroud ( backgroundElementsArr, yPosition , height){
        
        for(let mapObject of backgroundElementsArr){

            let mapItem = new GameBackground({
                texture: mapObject.levelMap, speed: mapObject.speed,
                height: (height)? height : null,
                y: (yPosition)? yPosition : null,
                screenData: this.gameInitData.screen, ctx: ctx,
                partOfScreenStatus: (this.gameInitData.mapBackgroundObjects.length % 2 == 0)? true : null,
                extraMap: (mapObject.extraMap)? mapObject.extraMap : null,
                timeToExtraMapSeconds: (mapObject.timeToExtraMapSeconds)? mapObject.timeToExtraMapSeconds : null,
                timeToExtraMapMinutes: (mapObject.timeToExtraMapMinutes)? mapObject.timeToExtraMapMinutes : null,
                imageWidth: (mapObject.imageWidth)? mapObject.imageWidth: (mapObject.imageWidth)? mapObject.imageWidth : levelStandartMap.imageWidth,
                imageHeight: (mapObject.imageHeight)?  mapObject.imageHeight : levelStandartMap.imageHeight,
                animationSteps: (mapObject.animationSteps)? mapObject.animationSteps: (mapObject.animationSteps)? mapObject.animationSteps :  levelStandartMap.animationSteps,
                numberOfItems: (mapObject.numberOfItems)? mapObject.numberOfItems: (mapObject.numberOfItems)? mapObject.numberOfItems : levelStandartMap.numberOfItems,
                numberOfVerticalItems: (mapObject.numberOfVerticalItems)? mapObject.numberOfVerticalItems : levelStandartMap.numberOfVerticalItems,
                alwaysMove: (mapObject.alwaysMove)? mapObject.alwaysMove : false
            });
            mainGameObject.gameInitData.mapBackgroundObjects = mainGameObject.gameInitData.mapBackgroundObjects.concat(mapItem);
            mapItem.loadTexture();
        }
    }
}

function createContext () {
    this.gameInitData.ctx = this.gameInitData.gameField.getContext('2d');
    this.gameInitData.ctxActionField = this.gameInitData.gameActionField.getContext('2d');
    this.gameInitData.ctxGameDialogField = this.gameInitData.gameDialogField.getContext('2d');
    this.gameInitData.ctxUIField = this.gameInitData.gameUIField.getContext('2d');
}




function getScreenSize () {
    let width = window.innerWidth,
    height = window.innerHeight;
    return {width: width, height: height}
}


function destroyAlEnemy () {
    let enemyes = this.gameInitData.allGameEnemies;
    if( !enemyes || enemyes.length < 1) return false
    for(let ship of enemyes){
        ship.objectPresent = false;
    }
}



function changeLevelProcedure (constructors) {
    // animation for warp, http request for level and enemyes, 10 levels must be
    // some levels must contain boss at least 2 boss
    // last level is final titles the end save score
    let levelData = this.showGameInfo();
    let level = this.changeLevel(levelData.gameData.currentLevel + 1)
    if(level <= levelData.gameData.levelData.allLevels){
        this.nextLevelDataReload(levelData, constructors)
    }else{
        destroyAlEnemy.call(this)
        this.mapSoundChanger({soundStatus:'game_win'})
        this.gameInitData.gameWin = true;
        this.gameInitData.levelWindowDescription = false;
    }
}


function levelTimer(){
        let data = this.getLevelUserData()
        if(!data.source.levelData.bossPresent){
            let levelTime = data.source.levelData.levelDetails
            if(!this.gameInitData.levelChange) this.getSecondMeasure( levelTimeAction, data.source.levelData.levelDetails);
        }else{
            data.source.levelData.levelDetails.levelSeconds = null;
            data.source.levelData.levelDetails.levelMinutes = null;
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

    if(this.gameInitData.gameExtraSeconds % gameSecond == 0){
        this.gameInitData.gameExtraSeconds = 0;
        if(!this.gameInitData.shopActive) this.gameInitData.tradeShipTimeToUndock -= 1;
        if(this.gameInitData.tradeShipTimeToUndock < 0) this.gameInitData.tradeShipTimeToUndock = 0;
        if(await callback) return await callback.call(this, ...data);
        return gameSecond;
    }
}



function gameSecondsIncrease(){
    this.gameInitData.gameExtraSeconds += 1;
}




function getLevelUserData(){
    let dataSourse = this.gameInitData.gameData;
    let levelTime = this.gameInitData.gameData.levelData.levelDetails;
    let playerObjectData = this.gameInitData.gameData.playerObject

    return {
        source: dataSourse,
        currentLevel: dataSourse.currentLevel,
        allLevels: dataSourse.levelData.allLevels,
        points: dataSourse.currentPoint,
        gameCoins: dataSourse.gameCoins,
        life:  dataSourse.playerObject.numberOflife,
        minutes: levelTime.levelMinutes,
        seconds: levelTime.levelSeconds,
        playerObjectData: playerObjectData
    }
}





function deleteBullet(bullet, bulletArray){
    if(bullet.x > window.innerWidth + 1500
        || bullet.x < (bullet.width + 200) * -1
        || !bullet.objectPresent
        || bullet.y > window.innerHeight + 500
        || bullet.y < 0 - window.innerWidth){
        let index = this.gameInitData[bulletArray].indexOf(bullet);
        this.gameInitData[bulletArray].splice(index, 1);
    }
}




async function deleteObjects({object, target} ){
    limitationOfSideObjects({ mainGameObject: this })
    if(object.x + object.sWidth < 0 || !object.objectPresent){
        if(object.isSubBoss) process.env.SUB_LOAD_AT_LEVEL = "false";
        let index = this.gameInitData.allGameEnemies.indexOf(object);
        this.gameInitData.allGameEnemies.splice(index, 1);
    }
}


function deleteObjectsOnDemand({ object, mainGameObject, target }){
   //if(!mainGameObject.gameInitData.dynamicLevelsActive) return false

    if(!object.objectPresent && target ){
        let index = mainGameObject.gameInitData[target].indexOf(object);
        mainGameObject.gameInitData[target].splice(index, 1);
    }
}



function delateSideObject(object){
    limitationOfbullets({ mainGameObject: this })
    if(!object.objectPresent || (!this.gameInitData.dynamicLevelsActive && object.x < -300 - object.width)){
        let index = this.gameInitData.allGameSideObjects.indexOf(object);
        this.gameInitData.allGameSideObjects.splice(index, 1);
        if(object.objectOwner == 'hangar'){
            this.gameInitData.tradepostInRange = false;
        }
    }
}


function limitationOfbullets({ mainGameObject }){
    const maximumObject: any = process.env.MAX_NUMBER_OF_BULLETS;
    let allSideObjects = mainGameObject.gameInitData.allGameBullets;
    let bulletObject = allSideObjects.filter( item => {
        return item.objectNameFlag === "bullet"
        && item.objectOwner === "player" && item.type != "rocket"
        && item.type != "homing_rocket"
        && item.type != "nuclear_blast"
        && item.type != "defence_shield"
    } )
    if(!bulletObject) return false

    if( bulletObject.length > maximumObject ){
        let lastDeleteIndex = bulletObject.length - maximumObject;
        for(let index = bulletObject.length; index >= bulletObject.length - lastDeleteIndex -1; index--){
            if(!bulletObject[index]) continue
            bulletObject[index].objectPresent = false;
        }
    }
}


function searchExplosionObject({ mainGameObject }){
    let allSideObjects = mainGameObject.gameInitData.allGameSideObjects;
    let explosionObject = allSideObjects.filter( item => {
        return item.objectOwner === "explosion"
    })

    return explosionObject
}
function limitationOfSideObjects({ mainGameObject }){
    const maximumObject: any = process.env.MAX_NUMBER_OF_EXPLOSION;
    let explosionObject = searchExplosionObject({ mainGameObject: mainGameObject })

    if(!explosionObject) return false
    if( explosionObject.length > maximumObject ){
        let lastDeleteIndex = explosionObject.length - maximumObject;
        for(let index = 0; index <= lastDeleteIndex; index++){
            explosionObject[index].objectPresent = false;
        }
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

function createScreenshots({ mainGameObject }){
    const screenShotButton = document.querySelector("#screenshot");

    screenShotButton.addEventListener('click', () => {
        if(!mainGameObject.gameInitData.gameStatus ||
            mainGameObject.gameInitData.gameWin ||
            mainGameObject.gameInitData.gameOver) return false
        let screenShotMessageBox = document.querySelector('#message-screenshot');

        addClassList(screenShotMessageBox, 'active-message-box')
        var dir = (process.env.NODE_ENV === 'production')? path.join(__dirname, '../../') + process.env.APP_SCREENSHOTS_DIRECTORY : __dirname + process.env.APP_SCREENSHOTS_DIRECTORY;
        screenShotMessageBox.innerHTML = `Screenshot taken \n location: ${  process.env.APP_SCREENSHOTS_DIRECTORY}`

        getImageFromFields.call( mainGameObject, { saveGameData: null, screenshot: true })
        setTimeout(function(){
            removeClassList(screenShotMessageBox, 'active-message-box')
        }, 5000);
    })
}


async function getImageFromFields({saveGameData, screenshot }){
    let background = await this.gameInitData.gameField.toDataURL();
    let gameField = await this.gameInitData.gameActionField.toDataURL();
    let gameText = await this.gameInitData.gameDialogField.toDataURL();

    var dir = (process.env.NODE_ENV === 'production')? path.join(__dirname, '../../') + process.env.APP_SCREENSHOTS_DIRECTORY : __dirname + process.env.APP_SCREENSHOTS_DIRECTORY;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    let backgroundPicture = await savePictures({picture_64: await background.replace(/^data:image\/png;base64,/, ""),
    filename: 'background', screenshot: false})

    let res = await savePictures({picture_64: await gameField.replace(/^data:image\/png;base64,/, ""),
    filename: 'gameField', screenshot: false})
    .then(async resolve => {
        return await mergeImages(
            [background, gameField, gameText], {
            width: window.innerWidth,
            height: window.innerHeight
          }).then(async pic => {
            if(screenshot) return await savePictures({
                picture_64: await pic.replace(/^data:image\/png;base64,/, ""),
                filename: new Date().getTime(), screenshot: screenshot})
            return reducePreviewImageSize({ picUrl: 'data:image/png;base64,' + pic.replace(/^data:image\/png;base64,/, "")})
            .then( resolve => {
                //console.log('resolve', resolve)
                return  resolve
            })
        })
    })
    return res
}

async function savePictures({picture_64, filename, screenshot}){
    if(screenshot){
        var dir = (process.env.NODE_ENV === 'production')? path.join(__dirname, '../../') + process.env.APP_SCREENSHOTS_DIRECTORY : __dirname + process.env.APP_SCREENSHOTS_DIRECTORY;
        return new Promise((resolve, reject) => {
            fs.writeFile(dir + `/${filename}.png`, picture_64, 'base64', function (err) {
                if(err){
                    reject(false)
                    return console.error(err)
                };
                resolve(true)
                return false
            });
        })
    }
    return picture_64
}

async function reducePreviewImageSize({ picUrl }){
    let canvas = document.createElement('canvas');
    canvas.width = window.innerWidth/2.5;
    canvas.height = window.innerHeight/2.5;
    let ctx = canvas.getContext('2d');

    let img = new Image();
    img.src = picUrl;
    let res = '';

    return new Promise( (resolve, reject) => {
        img.onload = function(){
                ctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight, 0, 0, canvas.width, canvas.height)
                var dataURL = canvas.toDataURL();

                let getPictureBase = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
                let pictureBaseUrl = 'data:image/png;base64,' + getPictureBase;

                res = pictureBaseUrl
                resolve(pictureBaseUrl)
        }
    })
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
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
    })
    ipcRenderer.send('asynchronous-message', {fullscreen: fullscreen})
}


function angleFinder({object, target}){
    let distanceX = (target.x  > object.x)? target.x - object.x : object.x - target.x;

    let targetX = ((Math.sign(target.x) > 0)? target.x : 0) + target.width/3;
    let targetY = ((Math.sign(target.y) > 0)? target.y : 0) + target.height/2;

    let objectX = (Math.sign(object.x) > 0)? object.x: 0,
    objectY = (Math.sign(object.y) > 0)? object.y: 0

    let item = (targetY - objectY)/(targetX - objectX);

    //let rotateAngle = Math.atan2(targetY  - objectY, targetX + (distanceX / target.speed) - objectX) * 180 / Math.PI;
    let rotateAngle = Math.atan((objectX - targetX)/(objectY - targetY))/(Math.PI/180)
    let x1 = objectX - targetX;
    let y1 = objectY - targetY;

    let finalAngle = 0
    if(x1 < 0 && y1 < 0){
        finalAngle = 90 - rotateAngle;
    }
    if(x1 > 0 && y1 < 0){
        finalAngle = 90 - rotateAngle;
    }
    if(x1 > 0 && y1 > 0){
        finalAngle = 270 - rotateAngle;
    }
    if(x1 < 0 && y1 > 0){
        finalAngle = 270 + rotateAngle * -1;
    }

    return finalAngle
}


export  {
    gameNpcUnitsCounting,
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
    fullScreenSwitch,
    angleFinder,
    getImageFromFields,
    searchExplosionObject,
    createScreenshots,
    deleteObjectsOnDemand
}