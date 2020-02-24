import '../sass/main.sass';

const {levelConstructor} = require('./constructors/levelConstructors');
const PlayerObject = require('./constructors/userConstructor');
const {engineModule} = require('./engine/engineModules');
const {serverModules} = require('./server/serverRequestModules');
const {enemies} = require('./enemies/enemiesModules');
const {viewModules} = require('./view/dsiplayModules');



(async function init(){
    async function gameDataInit(){
        //console.log(playerObject)
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
                }
        }
        let gameField = document.querySelector('#gamefield'),
        gameActionField = document.querySelector('#gameObjectsfield'),
        gameUIfield = document.querySelector('#gameUifield');
        return {data: {
            ctx: null,
            gameField: (gameField)? gameField: null,
            gameActionField : (gameActionField)? gameActionField: null,
            gameUIField : (gameUIfield)? gameUIfield: null,
            gameData:{
                currentLevel: 2,
                currentPoint: 0,
                playerObject: null//new PlayerObject()
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
            levelData: await serverModules.getData({
                url: serverLocation.host + serverLocation.levelData.url,
                method: serverLocation.levelData.method,
                data: null,
                headers:{ 'mapLevel': 2}
            })
        }, locations: serverLocation
    }
}


    /*  gameEngineInit  */
    var gameState = await gameDataInit(),
    gameObject = new levelConstructor.Game(gameState.data, gameState.locations); // new levelConstructor.Game(gd); gameState.locations

    gameObject.initField();
    gameObject.createContext();

    console.log(gameObject.gameInitData)

    function gameInterval(){
        /*viewModules.clearField(gameObject.gameInitData.ctx,
            gameObject.gameInitData.screen.width,
            gameObject.gameInitData.screen.height);*/

        if(gameObject.gameInitData.backScreenPause){
            gameObject.gameInitData.backScreenPause = false;
            gameObject.levelInit(levelConstructor.GameBackground, gameObject.gameInitData.ctx);
            gameObject.levelInit(levelConstructor.GameBackground, gameObject.gameInitData.ctx);
        }
        for(let backgroundMap of gameObject.gameInitData.mapBackgroundObjects){

                backgroundMap.updateMap()
        }
    }
})()
