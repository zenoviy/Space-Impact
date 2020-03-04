var { viewModules } = require('../view/displayModules');
var { levelConstructor } = require('../constructors/levelConstructors');


function initField(screenWidth = window.innerWidth, screenHeight = window.innerHeight){
    let gameField = [].concat(
        this.gameInitData.gameField,
        this.gameInitData.gameActionField,
        this.gameInitData.gameUIField
        )
    if(!gameField) throw Error(ERROR_LIST.noObject);
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
    // Animation 
    let screenSiz = this.getScreenSize();
    let ctx = this.gameInitData.ctx;
    let gameWarpObjects = this.gameInitData.warpObjects;
    this.getSecondMeasure(warpTimer, {timeToEressLevel: this.gameInitData.timeToEressLevel, ctx: ctx, screenSiz: this.getScreenSize()})

    //console.log(ctx, gameWarpObjects)
    //alert(1)
    this.gameInitData.warpObjects = (gameWarpObjects.length < 350)? this.gameInitData.warpObjects.concat({
        x: screenSiz.width,
        y: this.gameRandomizer(screenSiz.height),
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
            viewModules.draw(ctx, 'fillRect', warper.x, warper.y, warper.width, warper.height);
            ctx.fill();
        }
    }
    function warpTimer(levelData){
        //if(levelData.timeToEressLevel >=0 ) levelData.timeToEressLevel -=1;
        //console.log(levelData, this)
        let leveChangeStatus = (this.gameInitData.timeToEressLevel >=0 )? false : true;
        if(this.gameInitData.timeToEressLevel >=0 && !leveChangeStatus) this.gameInitData.timeToEressLevel -= 1;
        if(this.gameInitData.timeToEressLevel < 0 && !leveChangeStatus) this.changeLevelProcedure();

    }
}

function levelInit(backgroundConstructor, ctx, mainGameObject){
    let gameData = this.showLevelData();
    let backgrundImages = gameData.levelMap;
    let allBackgroundElements = gameData.levelBackgroundElements;
    mainGameObject.gameInitData.backScreenPause = false;

    for(let mapObject of allBackgroundElements){
        let mapItem = new backgroundConstructor(
            mapObject.levelMap, mapObject.speed, this.gameInitData.screen, ctx,
            (this.gameInitData.mapBackgroundObjects.length % 2 == 0)? true : null
        );
            mainGameObject.gameInitData.mapBackgroundObjects = mainGameObject.gameInitData.mapBackgroundObjects.concat(mapItem);
        mapItem.img.src = this.showGameInfo().imageDirrection + mapItem.backgroundTexture;
    }
}


function createContext(){
    this.gameInitData.ctx = this.gameInitData.gameField.getContext('2d');
    this.gameInitData.ctxActionField = this.gameInitData.gameActionField.getContext('2d');
    this.gameInitData.ctxUIField = this.gameInitData.gameUIField.getContext('2d');
}


function getScreenSize(){
    let width = this.gameInitData.screen.width,
    height = this.gameInitData.screen.height;
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
        alert("Win Game Screen ")
    }
}
function levelTimer(){
        let data = this.getLevelUserData()
        let levelTime = data.sourse.levelData.levelDetails  // { levelMinutes: 3, levelSeconds: 43 }
        if(!this.gameInitData.levelChange) this.getSecondMeasure( levelTimeAction, data.sourse.levelData.levelDetails,  );

        function levelTimeAction(time){
            if(time.levelSeconds <= 0){
                time.levelMinutes = (time.levelMinutes > 0)? time.levelMinutes-1 : 0;
                if(time.levelMinutes == 0 && time.levelSeconds == 0){
                    time.levelSeconds = 0;
                    this.gameInitData.levelChange = true;
                    //this.changeLevelProcedure()
                }
            }
            time.levelSeconds = (time.levelSeconds > 0)? time.levelSeconds-1 :(this.gameInitData.levelChange)? 0 : 59;
        }
}
function getSecondMeasure(callback, ...data){
        this.gameInitData.gemeExtraSeconds += 1;

    let gameSecond = 1000/this.gameInitData.intervalCount;
    if(this.gameInitData.gemeExtraSeconds % gameSecond == 0){
        this.gameInitData.gemeExtraSeconds = 0;
        if(callback) return callback.call(this, ...data);
        return gameSecond;
    }
}
function getLevelUserData(){
    let dataSourse = this.gameInitData.gameData;
    let levelTime = dataSourse.levelData.levelDetails;
    return {
        sourse: dataSourse,
        currentLevel: dataSourse.currentLevel,
        allLevels: dataSourse.levelData.allLevels,
        points: dataSourse.currentPoint,
        life:  dataSourse.playerObject.numberOflife, //dataSourse.playerObject.healthPoint
        minutes: levelTime.levelMinutes,
        seconds: levelTime.levelSeconds
    }
}
function deleteBullet(bullet){
    if(bullet.x > this.gameInitData.screen.width
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
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

module.exports.gameMethods = {
    initField: initField,
    warpEffect: warpEffect,
    setGameFields: setGameFields,
    levelInit: levelInit,
    createContext: createContext,
    getScreenSize: getScreenSize,
    getRandomColor: getRandomColor,
    getLevelUserData: getLevelUserData,
    changeLevelProcedure: changeLevelProcedure,
    levelTimer: levelTimer,
    getSecondMeasure: getSecondMeasure,
    deleteBullet: deleteBullet,
    deleteObjects: deleteObjects,
    getObjectPosition: getObjectPosition,
    collectPoints: collectPoints
}