import '../sass/main.sass';
const { ipcRenderer, remote } = require( "electron" );


var path = require('path');
import * as gameDataModules from './engine/gameModules';
import * as constructors from './constructors';
import { clearField } from './view/displayModules';
import { appMenu, hideShowMenu, dialogWindow } from './appMenu/appMenu';
import { loadShopArea } from './ui/shop/gameShopModule';
import { saveGameEvents } from './appMenu/saveLoadMenu';



(async function init(){
    process.env.SAVE_DATA_FILE = 'game-saves';

    process.env.LEVEL_DATA_URL = 'api/level-data';
    process.env.LEVEL_OBJECT_URL = 'api/level-objects';
    process.env.LEVEL_GRAPPLE_OBJECTS_URL = 'api/grapple-objects';
    process.env.GAME_SETTINGS_URL = 'api/game-settings';
    process.env.USER_SHIP_URL = 'api/user-ship';
    process.env.ENEMY_SHIP_URL = 'api/enemy-ship';


    process.env.SHOP_GUNS_URL = 'api/shop/guns';
    process.env.SHOP_SHIPYARD_URL = 'api/shop/shipyard';
    process.env.SHOP_STORE_ITEMS = "api/shop/store-items";

    process.env.APP_SAVE_DIRECTORY = '/appData/saves';


    process.env.MAIN_GAME_SOUND = '';
    process.env.MAIN_GAME_SOUND_EFFECTS = '';
    process.env.MAIN_GAME_SOUND_ON = '';

    process.env.SHOP_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SALE_WINDOW = 'false';
    process.env.SHOP_STORE_WINDOW = 'false';

    process.env.BOSS_LOAD_AT_LEVEL = 'false';

    process.env.OVERWRITE_SAVE = 'false';

    if(process.env.NODE_ENV === 'development') process.env.HOST = 'http://localhost:3000/';
    else if(process.env.NODE_ENV === 'production'){ process.env.HOST = 'http://localhost:3000/'; alert("production mode check HOST")};

    var mainMenu = document.querySelector("#main-menu")

    /*  gameEngineInit  */
    var playerShipData;
    var gameState = await gameDataModules.gameDataInit(constructors.PlayerShip, null)
    if(!gameState){
        let navigation = appMenu(gameObject, dialogWindow)
        navigation.menu.init()
        throw new Error("There is no data in: gameState");
    }

    var gameObject = await new constructors.Game(gameState.data)
    playerShipData = gameObject.gameInitData.gameData.playerObject;

    /*  initialization electron App memnu  */
    const navigation = appMenu(gameObject, dialogWindow)
    navigation.menu.init()

    await gameObject.gameSettingsMenuInit()
    gameObject.createSound(constructors.SoundCreator)
    var engine = setInterval(gameInterval, gameObject.gameInitData.intervalCount)


    gameObject.uiController()
    gameObject.setGameFields()
    gameObject.getScreenSize()

    gameObject.shopArea = loadShopArea(gameObject);
    let contexts = gameObject.returnContext()

    //  create context
    gameObject.gameInitData.gameData.playerObject.ctx = contexts.gameActionField;
    gameObject.gameInitData.gameData.playerObject.initPlayerShip()


    // ship move
    playerShipData.shipControl(gameObject)

    window.addEventListener('resize', ()=>{
        gameObject.getScreenSize()
        gameObject.setGameFields()
        gameObject.initField()
    })








    saveGameEvents({mainGameObject: gameObject})
    /*   game engin runing   */
    async function gameInterval(){
        if(gameObject.gameInitData.ctxUIField){
            clearField(
                gameObject.gameInitData.ctxUIField,
                window.innerWidth,
                window.innerHeight)
        }
        if(gameObject.gameInitData.ctxActionField ){
            clearField(
                gameObject.gameInitData.ctxActionField,
                window.innerWidth,
                window.innerHeight)
        }
        if(gameObject.gameInitData.backScreenPause){
            gameObject.levelInit(constructors.GameBackground, gameObject.gameInitData.ctx, gameObject)
        }

                if(gameObject.gameInitData.allGameBullets.length > 0){
                    for(let bullet of gameObject.gameInitData.allGameBullets){
                        bullet.placeEnemyes(gameObject)
                        if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
                            bullet.moveBullets(gameObject.gameInitData.gameData.playerObject, gameObject);

                            gameObject.deleteBullet(bullet)
                            gameObject.hitDetection(bullet, gameObject.gameInitData.allGameEnemies, gameObject, constructors.GrappleObject)
                            gameObject.hitDetection(gameObject.gameInitData.gameData.playerObject, [bullet], gameObject, constructors.GrappleObject)

                            gameObject.hitDetection(bullet, gameObject.gameInitData.allGameSideObjects, gameObject, constructors.GrappleObject)
                            bullet.enemyAnimation();
                        }
                    }
                }
                if(gameObject.gameInitData.allGameEnemies.length > 0){
                    for(let enemy of gameObject.gameInitData.allGameEnemies){
                        enemy.placeEnemyes(gameObject)
                        if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
                            enemy.moveEnemyes();
                            enemy.enemyShipLogicVertical({
                                x: gameObject.gameInitData.gameData.playerObject.x,
                                y: gameObject.gameInitData.gameData.playerObject.y
                            }, gameObject);
                            enemy.enemyAnimation(true);
                            enemy.shot(constructors.BulletConstruct, gameObject, constructors.SoundCreator, "enemy")
                            gameObject.deleteObjects(enemy)
                            gameObject.hitDetection(gameObject.gameInitData.gameData.playerObject, [enemy], gameObject, constructors.GrappleObject)
                            gameObject.hitDetection(enemy, gameObject.gameInitData.allGameSideObjects, gameObject, constructors.GrappleObject)
                        }
                    }
                }
                if(!gameObject.gameInitData.gameOver){
                    if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
                        if(!gameObject.gameInitData.shopActive){
                            gameObject.gameInitData.gameData.playerObject.placeShip()
                        }
                        gameObject.gameInitData.gameData.playerObject.enemyAnimation()
                    }
                    if(gameObject.gameInitData.gameStatus) gameObject.gameInitData.gameData.playerObject.placeEnemyes(gameObject)
                }
                if(gameObject.gameInitData.allGameSideObjects.length > 0){
                    for(let object of gameObject.gameInitData.allGameSideObjects){
                        object.placeEnemyes(gameObject);
                        if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
                            if (object.objectOwner == "explosion"){
                                object.fireAnimationEnded(gameObject.gameInitData.allGameSideObjects);
                            }else{
                                if(object.objectOwner == "enemy" ||
                                object.objectOwner == "collide" ||
                                object.objectOwner == "grappleObject" ||
                                object.objectOwner == "hangar" || object.objectOwner == "enemy"){
                                    gameObject.hitDetection(gameObject.gameInitData.gameData.playerObject, [object], gameObject, constructors.GrappleObject);
                                    if(object.objectOwner != "enemy"){
                                        object.sideObjectShot(constructors.BulletConstruct,
                                        gameObject, constructors.SoundCreator,
                                        "hangarbullet",
                                        gameObject.gameInitData.allGameEnemies.concat(
                                            gameObject.gameInitData.allGameSideObjects.map(object =>{
                                                if(object.objectOwner === "enemy") return object})
                                        ))
                                    }else if(object.objectOwner === "enemy"){
                                        object.sideObjectShot(constructors.BulletConstruct,
                                            gameObject, constructors.SoundCreator,
                                            "enemy",
                                            [gameObject.gameInitData.gameData.playerObject].concat(
                                                gameObject.gameInitData.allGameSideObjects.map(object =>{
                                                    if(object.objectOwner === "hangar" || object.objectOwner === "collide") return object
                                                })
                                            ))
                                    }
                                    //object.shot(constructors.BulletConstruct, gameObject, constructors.SoundCreator, "hangar")
                                }
                                object.enemyAnimation()
                            }
                            if(!gameObject.gameInitData.shopActive){
                                object.mapObjectMove()
                            }
                            gameObject.delateSideObject(object);
                        }
                    }
                }
        if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
            if(gameObject.gameInitData.gameStatus){
                if(gameObject.gameInitData.gameData.levelObjects){
                    gameObject.mapRandomObjectSpawn(
                        gameObject.gameInitData.gameData.levelObjects,
                        constructors.SideObject,
                        gameObject.gameInitData.allGameSideObjects)
                }
                if(!gameObject.gameInitData.levelChange) gameObject.spawnEnemyLogic(constructors.EnemyObject);
                if(!gameObject.gameInitData.levelChange) gameObject.initGrappleObject(constructors.GrappleObject, gameObject.gameInitData.gameData.playerObject);
                gameObject.gameSecondsIncrease()
                if(!gameObject.gameInitData.shopActive){
                    gameObject.levelTimer()
                }
            }
        }
        if(!gameObject.gameInitData.backScreenPause || !gameObject.gameInitData.gamePause || !gameObject.gameInitData.gameStatus){
                if(gameObject.gameInitData.ctx){
                    clearField(
                        gameObject.gameInitData.ctx,
                        gameObject.gameInitData.screen.width,
                        gameObject.gameInitData.screen.height)
                }
                for(let backgroundMap of gameObject.gameInitData.mapBackgroundObjects){
                    if(!gameObject.gameInitData.gamePause || !gameObject.gameInitData.gameStatus){
                        if(!gameObject.gameInitData.shopActive){
                        backgroundMap.updateMap()}
                        backgroundMap.enemyAnimation()
                    }
                    backgroundMap.placeBackground()
                    backgroundMap.changePartOfTexture(gameObject, gameObject.gameInitData.mapBackgroundObjects);
                }
                if(gameObject.gameInitData.levelChange){
                    gameObject.warpEffect()
                }
                if(gameObject.gameInitData.levelWindowDescription){
                    gameObject.levelChangeWindow()
                }
        }

        ///   game UI load
        if(!gameObject.gameInitData.gameStatus){
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

