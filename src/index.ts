import '../sass/main.sass';

var { levelConstructor } = require('./constructors/levelConstructors');
var { playerModules } = require('./constructors/userConstructor');
var { gameModule } = require('./constructors/mainGameComponent');
var { engineModule } = require('./engine/engineModules');
var { serverModules } = require('./server/serverRequestModules');
var { enemies } = require('./enemies/enemiesModules');
var { viewModules } = require('./view/displayModules');



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
            headers:{ 'maplevel': 1}
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
        const enemyData = await serverModules.getData({
            url: serverLocation.host + serverLocation.enemylData.url,
            method: serverLocation.enemylData.method,
            data: null,
            headers:{ 'ship-type-number': 1}
        })
        return {data: {
            ctx: null,
            gameField: (gameField)? gameField: null,
            gameActionField : (gameActionField)? gameActionField: null,
            gameUIField : (gameUIfield)? gameUIfield: null,
            gameData:{
                currentLevel: 1,
                currentPoint: 0,
                playerObject: new playerModules.PlayerShip(userData, 0, 3, 100, 100),
                levelData: levelData,
                gameSetings: gameSetings,
                enemyData: enemyData,
                constrollers: null
            },
            screen:{
                width: window.innerWidth,
                height: window.innerHeight
            },
            enemyType: null,
            allGameEnemies: [],
            allGameBullets: [],
            allGameMapOBjects: [],
            mapBackgroundObjects: [],
            levelChange: false,
            gamePause: false,
            backScreenPause: true,
            gameStatus: false,
            gameEngine: setInterval(gameInterval, 20),
        }, locations: serverLocation
    }
}


    /*  gameEngineInit  */
    var gameState = await gameDataInit();
    var gameObject = new gameModule.Game(gameState.data, gameState.locations);
    var playerShipData = gameObject.gameInitData.gameData.playerObject;

    gameObject.uiController()
    gameObject.setGameFields();
    //gameObject.setGameFields();
    let contexts = gameObject.returnContext();

    //  create context
    playerShipData.ctx = contexts.gameActionField;
    // ship move
    playerShipData.initPlayerShip(gameObject);
    playerShipData.shipControl(gameObject);

    function gameInterval(){
        if(!gameObject.gameInitData.gamePause){
            gameObject.spawnEnemyLogic(gameObject);
            if(gameObject.gameInitData.ctxActionField){
                viewModules.clearField(
                    gameObject.gameInitData.ctxActionField,
                    gameObject.gameInitData.screen.width,
                    gameObject.gameInitData.screen.height);
            }
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
            if(gameObject.gameInitData.allGameBullets.length > 0){
                for(let bullet of gameObject.gameInitData.allGameBullets){
                    bullet.moveBullets();
                    bullet.createBullets(gameObject);
                    gameObject.deleteBullet(bullet);
                    gameObject.hitDetection(bullet, gameObject.gameInitData.allGameEnemies);
                }
            }
            if(!gameObject.gamePause){
                if(gameObject.gameInitData.allGameEnemies.length > 0){
                    for(let enemy of gameObject.gameInitData.allGameEnemies){
                        enemy.placeEnemyes(gameObject);
                        enemy.moveEnemyes();
                        enemy.enemyAnimation();
                        gameObject.deleteObjects(enemy);
                    }
                }
                playerShipData.placeShip();
                playerShipData.movePlayerShip();
            }
        }
    }
})()


