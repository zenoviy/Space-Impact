import '../sass/main.sass';

const {engineModule, gameRuning} = require('./engine/engineModules');
const {serverModules} = require('./server/serverRequestModules');
const {display} = require('./enemies/enemiesModules');



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
        return {
            gameData:{
                currentLevel: 0,
                currentPoint: 0,
                playerInformation: null
            },
            allGameEnemies: [],
            allGameBullets: [],
            allGameMapOBjects: [],
            gamePause: false,
            backScreenPause: false,
            gameStatus: false,
            gameEngine: setInterval(gameInterval, 20),
            levelData: await serverModules.getData({
                url: serverLocation.host + serverLocation.levelData.url,
                method: serverLocation.levelData.method,
                data: null
            })
        }
    }
    var gameState = await gameDataInit();
    console.log(gameState)
    function gameInterval(){
        gameRuning(2)
    }
})()
