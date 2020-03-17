import '../sass/main.sass';

var path = require('path');
import * as gameDataModules from './engine/gameModules';
import * as constructors from './constructors';
import { clearField } from './view/displayModules';
import { appMenu, hideShowMenu } from './appMenu/appMenu';


(async function init(){
    var wrapper = document.querySelector("#wrapper")
    var mainMenu = document.querySelector("#main-menu")
    /*  gameEngineInit  */
    var gameState = await gameDataModules.gameDataInit(constructors.PlayerShip)
    var gameObject = await new constructors.Game(gameState.data)
    var playerShipData = gameObject.gameInitData.gameData.playerObject;

   var engine = setInterval(gameInterval, gameObject.gameInitData.intervalCount)

    gameObject.uiController()
    gameObject.setGameFields()
    gameObject.getScreenSize()

    let contexts = gameObject.returnContext()

    //  create context
    playerShipData.ctx = contexts.gameActionField
    // ship move
    playerShipData.initPlayerShip(gameObject)
    playerShipData.shipControl(gameObject)

    /*  init electron App memnu  */
    const navigation = appMenu(gameObject)
    navigation.menu.init()


    /*   game engin runing   */
    async function gameInterval(){

        if(gameObject.gameInitData.ctxUIField){
            clearField(
                gameObject.gameInitData.ctxUIField,
                gameObject.gameInitData.screen.width,
                gameObject.gameInitData.screen.height)
        }
        if(gameObject.gameInitData.ctxActionField && !gameObject.gameInitData.gamePause){
            clearField(
                gameObject.gameInitData.ctxActionField,
                gameObject.gameInitData.screen.width,
                gameObject.gameInitData.screen.height)
        }
        if(gameObject.gameInitData.backScreenPause){
            gameObject.levelInit(constructors.GameBackground, gameObject.gameInitData.ctx, gameObject)
        }
        if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
            if(gameObject.gameInitData.gameStatus){
                if(!gameObject.gameInitData.levelChange) gameObject.spawnEnemyLogic(constructors.EnemyObject);

                if(gameObject.gameInitData.allGameBullets.length > 0){
                    for(let bullet of gameObject.gameInitData.allGameBullets){
                        bullet.moveBullets(playerShipData, gameObject);
                        bullet.createBullets(gameObject)
                        gameObject.deleteBullet(bullet)
                        gameObject.hitDetection(bullet, gameObject.gameInitData.allGameEnemies, gameObject)
                        gameObject.hitDetection(playerShipData, [bullet], gameObject)

                        gameObject.hitDetection(bullet, gameObject.gameInitData.allGameSideObjects, gameObject)
                    }
                }
                if(gameObject.gameInitData.allGameEnemies.length > 0){
                    for(let enemy of gameObject.gameInitData.allGameEnemies){
                        enemy.placeEnemyes(gameObject)
                        enemy.moveEnemyes();
                        enemy.enemyShipLogicVertical({
                            x: playerShipData.x,
                            y: playerShipData.y
                        }, gameObject);
                        enemy.enemyAnimation(true);
                        enemy.shoot(constructors.BulletConstruct, gameObject)
                        gameObject.deleteObjects(enemy)
                        gameObject.hitDetection(playerShipData, [enemy], gameObject)
                    }
                }
                if(!gameObject.gameInitData.gameOver){
                    playerShipData.placeShip()
                    playerShipData.movePlayerShip()
                }
                if(gameObject.gameInitData.allGameSideObjects.length > 0){
                    for(let object of gameObject.gameInitData.allGameSideObjects){
                        object.placeEnemyes(gameObject);
                        if (object.objectOwner == "explosion"){
                             object.fireAnimationEnded(gameObject.gameInitData.allGameSideObjects);
                        }else{
                            if(object.objectOwner == "enemy" || object.objectOwner == "collide" ){
                                gameObject.hitDetection(playerShipData, [object], gameObject);
                            }
                            object.enemyAnimation()
                        }
                        object.mapObjectMove()
                        gameObject.delateSideObject(object);
                    }
                }
                if(gameObject.gameInitData.gameData.levelObjects){
                    gameObject.mapRanomObjectSpawn(
                        gameObject.gameInitData.gameData.levelObjects,
                        constructors.SideObject,
                        gameObject.gameInitData.allGameSideObjects)
                }
                gameObject.gameSecondsIncrease()
                gameObject.levelTimer()
            }
        }
        if(!gameObject.gameInitData.backScreenPause || !gameObject.gameInitData.gamePause || !gameObject.gameInitData.gameStatus){
            if(!gameObject.gameInitData.gamePause || !gameObject.gameInitData.gameStatus){
                if(gameObject.gameInitData.ctx){
                    clearField(
                        gameObject.gameInitData.ctx,
                        gameObject.gameInitData.screen.width,
                        gameObject.gameInitData.screen.height)
                }
                for(let backgroundMap of gameObject.gameInitData.mapBackgroundObjects){
                    backgroundMap.updateMap()
                    backgroundMap.changePartOfTexture(gameObject, gameObject.gameInitData.mapBackgroundObjects);
                }
            if(gameObject.gameInitData.levelChange) gameObject.warpEffect()
            }
        }

        ///   game UI load
        if(!gameObject.gameInitData.gameStatus && !gameObject.gameInitData.gameUiPause){
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
        if(gameObject.gameInitData.gameOver){
            gameObject.gameOverWindow()
        }
        if(gameObject.gameInitData.gameWin && !gameObject.gameInitData.gameUiPause && !gameObject.gameInitData.gamePause){
            gameObject.gameWinWindow()
        }

        hideShowMenu(mainMenu, navigation.menu, gameObject.gameInitData.gameWin, gameObject.gameInitData.gameStatus, gameObject.gameInitData.gameUiPause)
        //
    }
})()

