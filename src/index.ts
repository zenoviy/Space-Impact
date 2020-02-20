import '../sass/main.sass';

const {engineModule, gameRuning} = require('./engine/engineModules');
const {serverModule} = require('./server/serverRequestModules');
const {display} = require('./enemies/enemiesModules');



(function init(){
    const gameState = {
        allGameEnemies: [],
        allGameBullets: [],
        allGameMapOBjects: [],
        gamePause: false,
        backScreenPause: false,
        gameStatus: false,
        gameEngine: setInterval(gameInterval, 20)
    }
    function gameInterval(){
        gameRuning(2)
    }
})()
