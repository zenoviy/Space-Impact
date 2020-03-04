import '../sass/main.sass';

var { levelConstructor } = require('./constructors/levelConstructors');
var { playerModules } = require('./constructors/userConstructor');
var { gameModule } = require('./constructors/mainGameComponent');
var { engineModule } = require('./engine/engineModules');
var { serverModules } = require('./server/serverRequestModules');
var { enemies } = require('./enemies/enemiesModules');
var { viewModules } = require('./view/displayModules');
var { uiStateModules } = require('./ui/gameUiModels/gameUiLoadMenu');
var { startGameModules } = require('./engine/gameModules/satartGame');
var { bulletModule } = require('./constructors/bulletConstructor');



(async function init(){
    //startGameModules.gameEngine(startGameModules.gameDataInit)

    /*  gameEngineInit  */
    var gameState = await startGameModules.gameDataInit();
    var gameObject = new gameModule.Game(gameState.data, gameState.locations);
    var playerShipData = gameObject.gameInitData.gameData.playerObject;
    var engine = setInterval(gameInterval, gameObject.gameInitData.intervalCount);

    gameObject.uiController()
    gameObject.setGameFields();
    gameObject.getScreenSize();

    let contexts = gameObject.returnContext();

    //  create context
    playerShipData.ctx = contexts.gameActionField;
    // ship move
    playerShipData.initPlayerShip(gameObject);
    playerShipData.shipControl(gameObject);

    async function gameInterval(){

        if(gameObject.gameInitData.ctxUIField){
            viewModules.clearField(
                gameObject.gameInitData.ctxUIField,
                gameObject.gameInitData.screen.width,
                gameObject.gameInitData.screen.height);
        }
        if(gameObject.gameInitData.ctxActionField &&  !gameObject.gameInitData.gamePause){
                viewModules.clearField(
                gameObject.gameInitData.ctxActionField,
                gameObject.gameInitData.screen.width,
                gameObject.gameInitData.screen.height);
        }
        if(gameObject.gameInitData.backScreenPause){
            gameObject.levelInit(levelConstructor.GameBackground, gameObject.gameInitData.ctx, gameObject);
        }
        if(!gameObject.gameInitData.backScreenPause || !gameObject.gameInitData.gamePause || !gameObject.gameInitData.gameStatus){
            if(!gameObject.gameInitData.gamePause || !gameObject.gameInitData.gameStatus){
                if(gameObject.gameInitData.ctx){
                    viewModules.clearField(
                        gameObject.gameInitData.ctx,
                        gameObject.gameInitData.screen.width,
                        gameObject.gameInitData.screen.height);
                }
                for(let backgroundMap of gameObject.gameInitData.mapBackgroundObjects){
                        backgroundMap.updateMap();
                    }
                }
                if(gameObject.gameInitData.levelChange) gameObject.warpEffect(gameObject);
            }
        if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
            if(gameObject.gameInitData.gameStatus == true){
                if(!gameObject.gameInitData.levelChange) gameObject.spawnEnemyLogic(gameObject);

                if(gameObject.gameInitData.allGameBullets.length > 0){
                    for(let bullet of gameObject.gameInitData.allGameBullets){
                        bullet.moveBullets();
                        bullet.createBullets(gameObject);
                        gameObject.deleteBullet(bullet);
                        gameObject.hitDetection(bullet, gameObject.gameInitData.allGameEnemies, gameObject);
                        gameObject.hitDetection(playerShipData, [bullet], gameObject);
                    }
                }
                if(gameObject.gameInitData.allGameEnemies.length > 0){
                    for(let enemy of gameObject.gameInitData.allGameEnemies){
                        enemy.placeEnemyes(gameObject);
                        enemy.moveEnemyes();
                        enemy.enemyAnimation();
                        enemy.shoot(bulletModule.BulletConstruct, gameObject);
                        gameObject.deleteObjects(enemy);
                    }
                }
                gameObject.levelTimer()
                playerShipData.placeShip();
                playerShipData.movePlayerShip();
            }else if(gameObject.gameInitData.gameStatus == false){
            //     gameObject.showStartWindow()
            }

        }

        ///   game UI load
        if(!gameObject.gameInitData.gameStatus ){
            gameObject.showStartWindow()
        }
        if(gameObject.gameInitData.gameStatus){
            gameObject.showGameStats()
        }
        if(gameObject.gameInitData.gamePause){
            gameObject.showPauseWindow()
        }
        if(gameObject.gameInitData.gameUiPause){
            gameObject.showMenuWindow()
            gameObject.showPauseWindow()
        }
    }
})()


