import '../sass/main.sass';

const {levelConstructor} = require('./constructors/levelConstructors');
const {engineModule} = require('./engine/engineModules');
const {serverModules} = require('./server/serverRequestModules');
const {enemies} = require('./enemies/enemiesModules');
const {viewModules} = require('./view/dsiplayModules');



(async function init(){
    async function gameDataInit(){
        let serverLocation = {
                host: (document.location.hostname === "localhost")? "http://localhost:3000/" : "",
                levelData: {
                    method: "GET",
                    url: "api/level-data"
                },
                enemylData: {
                    method: "GET",
                    url: "api/level-data"
                }
        }
        let gameField = document.querySelector('#gamefield');
        return {data: {
            ctx: null,
            gameField: (gameField)? gameField: null,
            gameData:{
                currentLevel: 2,
                currentPoint: 0,
                playerInformation: null
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
                headerLevel: 2
            })
        }, locations: serverLocation
    }
    }


    /*  gameEngineInit  */
    var gameState = await gameDataInit(),
    gameObject = new levelConstructor.Game(gameState.data); // new levelConstructor.Game(gd);

    gameObject.initField();
    gameObject.createContext();

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
