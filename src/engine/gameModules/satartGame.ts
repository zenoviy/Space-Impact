var { levelConstructor } = require('../../constructors/levelConstructors');
var { playerModules } = require('../../constructors/userConstructor');
var { gameModule } = require('../../constructors/mainGameComponent');
var { engineModule } = require('../../engine/engineModules');
var { serverModules } = require('../../server/serverRequestModules');
var { enemies } = require('../../enemies/enemiesModules');
var { viewModules } = require('../../view/displayModules');
var { uiStateModules } = require('../../ui/gameUiModels/gameUiLoadMenu');


async function serverRequest(gameInformation){
        let serverLocation = {
                host: (document.location.hostname === "localhost")? "http://localhost:3000/" : "",
                picturesDirection: location.origin + '/images/',
                levelData: {
                    method: "GET",
                    url: "api/level-data"
                },
                gameSetings: {
                    method: "GET",
                    url: "api/game-ettings"
                },
                userShip: {
                    method: "GET",
                    url: "api/user-ship"
                },
                enemylData: {
                    method: "GET",
                    url: "api/enemy-ship"
                }
        }
        const levelData = await serverModules.getData({
            url: serverLocation.host + serverLocation.levelData.url,
            method: serverLocation.levelData.method,
            data: null,
            headers:{ 'maplevel': gameInformation.level}
        })
        const gameSetings = await serverModules.getData({
            url: serverLocation.host + serverLocation.gameSetings.url,
            method: serverLocation.gameSetings.method,
            data: null,
            headers: null
        })
        const userData = await serverModules.getData({
            url: serverLocation.host + serverLocation.userShip.url,
            method: serverLocation.userShip.method,
            data: null,
            headers:{ 'usership': gameInformation.shipConfiguration}
        })
        const enemyData = await serverModules.getData({
            url: serverLocation.host + serverLocation.enemylData.url,
            method: serverLocation.enemylData.method,
            data: null,
            headers:{ 'ship-type-number': gameInformation.enemyType}
        })
        return {
            levelData: levelData,
            gameSetings: gameSetings,
            userData: userData,
            enemyData: enemyData
        }
}
async function gameDataInit(){
    let gameField = document.querySelector('#gamefield'),
        gameActionField = document.querySelector('#gameObjectsfield'),
        gameUIfield = document.querySelector('#gameUifield');


        let res = await serverRequest({level: 1,  shipConfiguration: 1, enemyType: 1})
        const levelData = res.levelData;
        const gameSetings = res.gameSetings;
        const userData = res.userData;
        const enemyData = res.enemyData
        return {data: {
            ctx: null,
            gameField: (gameField)? gameField: null,
            gameActionField : (gameActionField)? gameActionField: null,
            gameUIField : (gameUIfield)? gameUIfield: null,
            gameData:{
                currentLevel: 1,
                currentPoint: 0,
                playerObject: new playerModules.PlayerShip(userData, 0, 300, 5, 100, 100, userData.size.width, userData.size.height),
                levelData: levelData,
                gameSetings: gameSetings,
                enemyData: enemyData,
                controllers: null
            },
            screen:{
                width: window.innerWidth,
                height: window.innerHeight
            },
            intervalCount: 20,
            enemyType: null,
            allGameEnemies: [],
            allGameBullets: [],
            allGameMapOBjects: [],
            mapBackgroundObjects: [],
            warpObjects: [],
            timeToEressLevel: 6,
            levelChange: false,
            gamePause: false,
            gameUiPause: false,
            backScreenPause: true,
            gameStatus: false,
            gemeExtraSeconds: 0,
        }, locations: null
    }
}
async function gameEngine(gameDataInit){

}
function gameStart(){
    this.gameInitData.gameStatus = true;
}
async function backToStartScreen(){
    let newInitdata = await gameDataInit();
    for(let [key, value] of Object.entries( newInitdata.data)){
        if(value !== null) {
                this.gameInitData[key] = value
        };
    }
    this.gameInitData.gameStatus = false;
}

module.exports.startGameModules = {
    gameDataInit: gameDataInit,
    serverRequest: serverRequest,
    gameEngine: gameEngine,
    gameStart: gameStart,
    backToStartScreen: backToStartScreen
}