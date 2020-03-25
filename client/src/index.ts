import '../sass/main.sass';

var path = require('path');
import * as gameDataModules from './engine/gameModules';
import * as constructors from './constructors';
import { clearField } from './view/displayModules';
import { appMenu, hideShowMenu, dialogWindow } from './appMenu/appMenu';


(async function init(){
    process.env.MAIN_GAME_SOUND = '';
    process.env.MAIN_GAME_SOUND_ON = '';
    process.env.GAME_STATUS = '';
    if(process.env.NODE_ENV === 'development') process.env.HOST = 'http://localhost:3000/';
    else if(process.env.NODE_ENV === 'production'){ process.env.HOST = 'http://localhost:3000/'; alert("production mode check HOST")};

    var wrapper = document.querySelector("#wrapper")
    var mainMenu = document.querySelector("#main-menu")

    /*  gameEngineInit  */
    var gameState = await gameDataModules.gameDataInit(constructors.PlayerShip)
    if(!gameState){
        let navigation = appMenu(gameObject, dialogWindow)
        navigation.menu.init()
        throw new Error("There is no data in: gameState");
    }

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
    const navigation = appMenu(gameObject, dialogWindow)
    navigation.menu.init()

    gameObject.gameSettingsMenuInit()
    let levelSound = gameObject.createSound(constructors.SoundCreator)


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
                if(!gameObject.gameInitData.levelChange) gameObject.initGrappleObject(constructors.GrappleObject, playerShipData);

                if(gameObject.gameInitData.allGameBullets.length > 0){
                    for(let bullet of gameObject.gameInitData.allGameBullets){
                        bullet.placeEnemyes(gameObject)
                        bullet.moveBullets(playerShipData, gameObject);

                        gameObject.deleteBullet(bullet)
                        gameObject.hitDetection(bullet, gameObject.gameInitData.allGameEnemies, gameObject, constructors.GrappleObject)
                        gameObject.hitDetection(playerShipData, [bullet], gameObject, constructors.GrappleObject)

                        gameObject.hitDetection(bullet, gameObject.gameInitData.allGameSideObjects, gameObject, constructors.GrappleObject)
                        bullet.enemyAnimation();
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
                        enemy.shot(constructors.BulletConstruct, gameObject, constructors.SoundCreator)
                        gameObject.deleteObjects(enemy)
                        gameObject.hitDetection(playerShipData, [enemy], gameObject, constructors.GrappleObject)
                    }
                }
                if(!gameObject.gameInitData.gameOver){
                    playerShipData.placeShip()
                    playerShipData.placeEnemyes(gameObject)
                    playerShipData.enemyAnimation()
                }
                if(gameObject.gameInitData.allGameSideObjects.length > 0){
                    for(let object of gameObject.gameInitData.allGameSideObjects){
                        object.placeEnemyes(gameObject);
                        if (object.objectOwner == "explosion"){
                             object.fireAnimationEnded(gameObject.gameInitData.allGameSideObjects);
                        }else{
                            if(object.objectOwner == "enemy" ||
                             object.objectOwner == "collide" ||
                             object.objectOwner == "grappleObject"){
                                gameObject.hitDetection(playerShipData, [object], gameObject, constructors.GrappleObject);
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
                if(gameObject.gameInitData.levelChange){
                    //gameObject.levelChangeWindow()
                    gameObject.warpEffect()
                }
                if(gameObject.gameInitData.levelWindowDescription){
                    gameObject.levelChangeWindow()
                }
            }
        }

        ///   game UI load
        if(!gameObject.gameInitData.gameStatus ){
            gameObject.showStartWindow()
        }
        if(gameObject.gameInitData.gameStatus){
            gameObject.showGameStats()
        }
        if(gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus){
            gameObject.showPauseWindow()
        }
        if(gameObject.gameInitData.gameUiPause && gameObject.gameInitData.gameStatus){
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

