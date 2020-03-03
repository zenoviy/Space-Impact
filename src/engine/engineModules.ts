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

function levelInit(backgroundConstructor, ctx, parrent){
    let gameData = this.showLevelData();
    let backgrundImages = gameData.levelMap;

    let mapObject = new backgroundConstructor(
        backgrundImages, 1, this.gameInitData.screen, ctx,
        (this.gameInitData.mapBackgroundObjects.length % 2 == 0)? true : null
    );
    mapObject.parrent = parrent;
    this.gameInitData.mapBackgroundObjects = this.gameInitData.mapBackgroundObjects.concat(mapObject);
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
    let levelData = this.showLevelData();

    let level = this.changeLevel(levelData.level + 1)
 //   console.log(levelData)
    if(level <= levelData.allLevels){
        this.nextLevelDataReload(levelData)
    }else{
        alert("Win Game Screen ")
    }

}
function levelTimer(){
        // set timer
        // when timer goes out > change level
        let data = this.getLevelUserData()
        let levelTime = data.sourse.levelData.levelDetails  // { levelMinutes: 3, levelSeconds: 43 }
        if(!this.gameInitData.levelChange) this.getSecondMeasure( levelTimeAction, data.sourse.levelData.levelDetails );

        function levelTimeAction(time){
            if(time.levelSeconds <= 0){
                time.levelMinutes = (time.levelMinutes > 0)? time.levelMinutes-1 : 0;
                if(time.levelMinutes == 0 && time.levelSeconds == 0){
                    time.levelSeconds = 0;
                    this.gameInitData.levelChange = true;
                    this.changeLevelProcedure()
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
        if(callback) callback.call(this, ...data);
        return gameSecond;
    }
}
function getLevelUserData(){
    let dataSourse = this.gameInitData.gameData;
    let levelTime = dataSourse.levelData.levelDetails;
    let gameSecond = this.getSecondMeasure();
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

module.exports.gameMethods = {
    initField: initField,
    setGameFields: setGameFields,
    levelInit: levelInit,
    createContext: createContext,
    getScreenSize: getScreenSize,
    getLevelUserData: getLevelUserData,
    changeLevelProcedure: changeLevelProcedure,
    levelTimer: levelTimer,
    getSecondMeasure: getSecondMeasure,
    deleteBullet: deleteBullet,
    deleteObjects: deleteObjects,
    getObjectPosition: getObjectPosition,
    collectPoints: collectPoints
}