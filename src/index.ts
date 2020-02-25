import '../sass/main.sass';

var {levelConstructor} = require('./constructors/levelConstructors');
var {playerModules} = require('./constructors/userConstructor');
var {gameModule} = require('./constructors/mainGameComponent');
var {engineModule} = require('./engine/engineModules');
var {serverModules} = require('./server/serverRequestModules');
var {enemies} = require('./enemies/enemiesModules');
var {viewModules} = require('./view/displayModules');



(async function init(){
    async function gameDataInit(){
        let gameField = document.querySelector('#gamefield'),
        gameActionField = document.querySelector('#gameObjectsfield'),
        gameUIfield = document.querySelector('#gameUifield');


        let serverLocation = {
                host: (document.location.hostname === "localhost")? "http://localhost:3000/" : "",
                picturesDirection: location.origin + '/images/',
                levelData: {
                    method: "GET",
                    url: "api/level-data"
                },
                enemylData: {
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
                }
        }
        const levelData = await serverModules.getData({
            url: serverLocation.host + serverLocation.levelData.url,
            method: serverLocation.levelData.method,
            data: null,
            headers:{ 'maplevel': 2}
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
            headers:{ 'usership': 1}
        })
        return {data: {
            ctx: null,
            gameField: (gameField)? gameField: null,
            gameActionField : (gameActionField)? gameActionField: null,
            gameUIField : (gameUIfield)? gameUIfield: null,
            gameData:{
                currentLevel: 2,
                currentPoint: 0,
                playerObject: new playerModules.PlayerShip(userData, 0, 3, 0, 0),
                gameSetings: gameSetings,
                constrollers: null
            },
            screen:{
                width: window.innerWidth,
                height: window.innerHeight
            },
            allGameEnemies: [],
            allGameBullets: [],
            allGameMapOBjects: [],
            mapBackgroundObjects: [],
            gamePause: false,
            backScreenPause: true,
            gameStatus: false,
            gameEngine: setInterval(gameInterval, 20),
            levelData: levelData
        }, locations: serverLocation
    }
}


    /*  gameEngineInit  */
    var gameState = await gameDataInit(),
    gameObject = new gameModule.Game(gameState.data, gameState.locations),
    playerShipData = gameObject.gameInitData.gameData.playerObject;

    gameObject.setGameFields();
    gameObject.setGameFields();
    let contexts = gameObject.returnContext();
    playerShipData.ctx = contexts.gameActionField;
    playerShipData.parrent = gameObject;

    playerShipData.initPlayerShip()

    playerShipData.shipControl()
    function gameInterval(){
        //
            if(gameObject.gameInitData.ctxActionField){
                viewModules.clearField(gameObject.gameInitData.ctxActionField,
                    gameObject.gameInitData.screen.width,
                    gameObject.gameInitData.screen.height);
            }
            playerShipData.placeShip();
            playerShipData.displayPlayerShip();
        if(gameObject.gameInitData.backScreenPause){
            gameObject.gameInitData.backScreenPause = false;
            gameObject.levelInit(levelConstructor.GameBackground, gameObject.gameInitData.ctx, gameObject);
            gameObject.levelInit(levelConstructor.GameBackground, gameObject.gameInitData.ctx, gameObject);
        }
        if(!gameObject.gameInitData.backScreenPause){
            for(let backgroundMap of gameObject.gameInitData.mapBackgroundObjects){
                backgroundMap.updateMap();
            }
        }
    }
})()
