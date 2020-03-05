import '../sass/main.sass';

import * as gameDataModules from './engine/gameModules'
import * as constructors from './constructors';
import { clearField } from './view/displayModules';



(async function init(){
    /*  gameEngineInit  */
    var gameState = await gameDataModules.gameDataInit(constructors.PlayerShip);
    var gameObject = await new constructors.Game(gameState.data);
    var playerShipData = gameObject.gameInitData.gameData.playerObject;
    var engine = setInterval(gameInterval, gameObject.gameInitData.intervalCount);
/**/
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
            clearField(
                gameObject.gameInitData.ctxUIField,
                gameObject.gameInitData.screen.width,
                gameObject.gameInitData.screen.height);
        }
        if(gameObject.gameInitData.ctxActionField &&  !gameObject.gameInitData.gamePause){
                clearField(
                gameObject.gameInitData.ctxActionField,
                gameObject.gameInitData.screen.width,
                gameObject.gameInitData.screen.height);
        }
        if(gameObject.gameInitData.backScreenPause){
            gameObject.levelInit(constructors.GameBackground, gameObject.gameInitData.ctx, gameObject);
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
                        enemy.enemyAnimation(true);
                        enemy.shoot(constructors.BulletConstruct, gameObject);
                        gameObject.deleteObjects(enemy);
                    }
                }
                if(gameObject.gameInitData.allGameSideObjects.length > 0){
                    for(let object of gameObject.gameInitData.allGameSideObjects){
                        //object.placeEnemyes(gameObject);
                        object.fireAnimationEnded(gameObject.gameInitData.allGameSideObjects);
                    }
                }
                gameObject.levelTimer()
                playerShipData.placeShip();
                playerShipData.movePlayerShip();
            }else if(gameObject.gameInitData.gameStatus == false){
            //     gameObject.showStartWindow()
            }

        }
        if(!gameObject.gameInitData.backScreenPause || !gameObject.gameInitData.gamePause || !gameObject.gameInitData.gameStatus){
            if(!gameObject.gameInitData.gamePause || !gameObject.gameInitData.gameStatus){
                if(gameObject.gameInitData.ctx){
                    clearField(
                        gameObject.gameInitData.ctx,
                        gameObject.gameInitData.screen.width,
                        gameObject.gameInitData.screen.height);
                }
                for(let backgroundMap of gameObject.gameInitData.mapBackgroundObjects){
                        backgroundMap.updateMap();
                }
            if(gameObject.gameInitData.levelChange) gameObject.warpEffect(gameObject);
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

