import '../sass/main.sass';
const { ipcRenderer, remote } = require( "electron" );


var path = require('path');
import * as gameDataModules from './engine/gameModules';
import * as constructors from './constructors';
import { clearField } from './view/displayModules';
import { appMenu, hideShowMenu, dialogWindow } from './appMenu/appMenu';
import { loadShopArea } from './ui/shop/gameShopModule';
import { saveGameEvents } from './appMenu/saveLoadMenu';
import { createScreenshots, deleteObjectsOnDemand } from './engine/engineModules';
import { mapGravityInit, blockCollision, npcCollisionDetect } from './engine/dynamicLevels/dynamicLevelModule';
import { doorFunctionality, openClosedDoorAnimation } from './engine/dynamicLevels/dynamicLevelInteractiveElements';
import { objectIntersectionDetect } from './enemies/enemiesModules';
import { syncKeyControl } from './engine/playerShipModule';
import { shot, placeEnemyes } from './enemies/enemiesModules';
import { explosionFire } from './engine/gameSideObjectsModule';





function bulletEngineFunction({gameObject}){
    if(gameObject.gameInitData.allGameBullets.length > 0){
        for(let bullet of gameObject.gameInitData.allGameBullets){
            bullet.placeEnemyes(gameObject)
            if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
                bullet.moveBullets(gameObject.gameInitData.gameData.playerObject, gameObject);

                gameObject.deleteBullet(bullet, "allGameBullets")
                gameObject.hitDetection({
                    object1: bullet,
                    objectsArr: gameObject.gameInitData.allGameEnemies,
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })
                if(!gameObject.gameInitData.dynamicLevelsActive){
                    gameObject.hitDetection({
                        object1: gameObject.gameInitData.gameData.playerObject,
                        objectsArr: [bullet],
                        mainGameObject: gameObject,
                        GrappleObject : constructors.GrappleObject
                    })
                }
                gameObject.hitDetection({
                    object1: bullet,
                    objectsArr: gameObject.gameInitData.allGameSideObjects,
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })
                bullet.enemyAnimation();
            }
        }
    }
}


function groundBulletEngineFunction({gameObject}){
    if(!gameObject.gameInitData.dynamicLevelsActive) return false
    if(gameObject.gameInitData.allGroundGameBullets.length > 0){
        for(let bullet of gameObject.gameInitData.allGroundGameBullets){
            bullet.placeEnemyes(gameObject)
            if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
                bullet.moveBullets(gameObject.gameInitData.gameData.playerObject, gameObject);

                gameObject.deleteBullet(bullet, "allGroundGameBullets")
                gameObject.hitDetection({
                    object1: bullet,
                    objectsArr: gameObject.gameInitData.allGameEnemies,
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })

                gameObject.hitDetection({
                    object1: bullet,
                    objectsArr: gameObject.gameInitData.allGameSideObjects,
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })

                gameObject.hitDetection({
                    object1: gameObject.gameInitData.gameData.groundPlayerCharacter,
                    objectsArr: [bullet],
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })

                gameObject.hitDetection({
                    object1: bullet,
                    objectsArr: gameObject.gameInitData.dynamicLevelEnemy,
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })

                gameObject.hitDetection({
                    object1: bullet,
                    objectsArr: gameObject.gameInitData.dynamicLevelMapBlocks,
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })
                gameObject.hitDetection({
                    object1: bullet,
                    objectsArr: gameObject.gameInitData.dynamicLevelEnemy,
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })
                bullet.enemyAnimation();
            }
        }
    }
}

function enemyEngineFunction({gameObject}){
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
                enemy.shot(constructors.BulletConstruct, gameObject, constructors.SoundCreator, "enemy", "allGameBullets")
                gameObject.deleteObjects({ object: enemy, target: ''} )
                gameObject.hitDetection({
                    object1: gameObject.gameInitData.gameData.playerObject,
                    objectsArr: [enemy],
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })
                gameObject.hitDetection({
                    object1: enemy,
                    objectsArr: gameObject.gameInitData.allGameSideObjects,
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })
            }
        }
    }
}

function sideObjectBehaviour({object, gameObject}){
    if(object.objectOwner == "enemy" || object.objectOwner == "collide" ||
        object.objectOwner == "grappleObject" || object.objectOwner == "hangar" || object.objectOwner == "enemy")
    {
        gameObject.hitDetection({
            object1: gameObject.gameInitData.gameData.playerObject,
            objectsArr: [object],
            mainGameObject: gameObject,
            GrappleObject : constructors.GrappleObject
        })
        if(object.objectOwner != "enemy"){
            object.sideObjectShot(
                constructors.BulletConstruct,
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
    }
}




function sideObjectsEngineFunction({gameObject}){
    if(gameObject.gameInitData.allGameSideObjects.length > 0){
        for(let object of gameObject.gameInitData.allGameSideObjects){
            object.placeEnemyes(gameObject);
            if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
                if (object.objectOwner == "explosion" || object.objectOwner == "smoke"){
                    object.fireAnimationEnded(gameObject.gameInitData.allGameSideObjects);
                }else{
                    sideObjectBehaviour({object: object, gameObject: gameObject})
                    object.enemyAnimation()
                }
                if(!gameObject.gameInitData.shopActive){
                    object.mapObjectMove()
                }
                gameObject.delateSideObject(object);
            }
        }
    }
}



function gameBackgroundEngineFunction({ gameObject }){
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
                backgroundMap.updateMap({ mainGameObject: gameObject })}
                backgroundMap.enemyAnimation()
            }
            backgroundMap.placeBackground()
            backgroundMap.changePartOfTexture(gameObject, gameObject.gameInitData.mapBackgroundObjects);
        }
        levelChangesEngineFunction({ gameObject })
    }
}




function levelChangesEngineFunction({ gameObject }){
    if(gameObject.gameInitData.levelChange){
        gameObject.warpEffect(constructors)
    }
    if(gameObject.gameInitData.levelWindowDescription){
        gameObject.levelChangeWindow()
    }
}



function spaceShipEngineFunction({ gameObject }){
    let data = gameObject.getLevelUserData();
    
    if(gameObject.gameInitData.dynamicLevelsActive || data.currentLevel === 0) return false
    if(!gameObject.gameInitData.gameOver){
        if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
            if(!gameObject.gameInitData.shopActive){
                gameObject.gameInitData.gameData.playerObject.placeShip()
            }
            gameObject.gameInitData.gameData.playerObject.enemyAnimation()
        }
        if(gameObject.gameInitData.gameStatus) gameObject.gameInitData.gameData.playerObject.placeEnemyes(gameObject);
    }
}




function gameChangeEngineFunction({ gameObject }){
    if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
        if(gameObject.gameInitData.gameStatus){
            if(gameObject.gameInitData.gameData.levelObjects){
                if(!gameObject.gameInitData.dynamicLevelsActive){
                gameObject.mapRandomObjectSpawn(
                    gameObject.gameInitData.gameData.levelObjects,
                    constructors.SideObject,
                    gameObject.gameInitData.allGameSideObjects)
                }
            }
            if(!gameObject.gameInitData.levelChange) gameObject.spawnEnemyLogic(constructors.EnemyObject);
            if(!gameObject.gameInitData.levelChange) gameObject.initGrappleObject(constructors.GrappleObject, gameObject.gameInitData.gameData.playerObject);
            gameObject.gameSecondsIncrease()
            if(!gameObject.gameInitData.shopActive){
                if(gameObject.gameInitData.dynamicLevelsActive) return false
                gameObject.levelTimer()
            }
        }
    }
}


function gameDynamicLevelBoxRender({ gameObject }){
    if(!gameObject.gameInitData.dynamicLevelsActive) return false
    let allBlocks = gameObject.gameInitData.dynamicLevelMapBlocks;

    if(!allBlocks) return false
    for(let block of allBlocks){
        if(!block) continue
            if(block.backgroundTexture){
                //console.log(block)
               placeEnemyes.call({
                    x: block.x,
                    y: block.y,
                    sx: block.backgroundSx,
                    sy: block.backgroundSy,
                    sWidth: block.backgroundTexture.sWidth,
                    sHeight: block.backgroundTexture.sWidth,
                    width: block.backgroundTexture.width,
                    height: block.backgroundTexture.height,
                    degree: 0,
                    img: block.backgroundTextureImg
                }, gameObject)
                block.backgroundTexture.degree = 0;
            }
            if(block.details.type === 'enemy_spawner' || block.details.type === 'npc_spawner' ||
             !block.details.display && block.details.type === "health" ||
             !block.details.display && block.details.type === "blue_card") continue

             block.placeEnemyes(gameObject)
            if(!gameObject.gameInitData.gamePause) block.elevatorMove({ mainGameObject: gameObject })
            if(!gameObject.gameInitData.gamePause && block.details.type != 'door') block.enemyAnimation()
            openClosedDoorAnimation({ currentWallBlock : block, mainGameObject: gameObject })
    }
}



 function gameDynamicEnemyRender({ gameObject }){
    if(!gameObject.gameInitData.dynamicLevelsActive) return false
    let levelInformation = gameObject.gameInitData.gameData.levelData;
    let allEnemy = gameObject.gameInitData.dynamicLevelEnemy;
    let groundPlayer = gameObject.gameInitData.gameData.groundPlayerCharacter;
    let allBlocks = gameObject.gameInitData.dynamicLevelMapBlocks;
    let extraSeconds = gameObject.gameInitData.gameExtraSeconds;
    groundPlayer.isRun = false;
    //levelInformation.jumpImpuls;
    if(!allEnemy) return false

    for(let enemy of allEnemy){
        if(!enemy) continue
        enemy.placeEnemyes(gameObject)
            if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus){
                deleteObjectsOnDemand({object: enemy, mainGameObject: gameObject, target: 'dynamicLevelEnemy' })
                enemy.changeVerticalAnimationPicture()
                enemy.enemyAnimation()
                enemy.groundEnemyMove({
                    mainGameObject: gameObject,
                    levelInformation: levelInformation
                })
                blockCollision({
                    objectsToCollide: allBlocks,
                    targetObject: enemy,
                    objectIntersectionDetect: objectIntersectionDetect,
                    mainGameObject: gameObject,
                    explosionFire: explosionFire,
                    constructors: constructors
                })
                enemy.enemyDetectNpc({
                    mainGameObject: gameObject,
                    npcData: allEnemy,
                    allBlocks: allBlocks,
                    objectIntersectionDetect: objectIntersectionDetect
                })

                enemy.detectPlayer({
                    mainGameObject: gameObject,
                    groundPlayer: groundPlayer,
                    allBlocks: allBlocks,
                    objectIntersectionDetect: objectIntersectionDetect
                })
                enemy.groundEnemyDecided({
                    mainGameObject: gameObject,
                    allBlocks: allBlocks
                })
                enemy.groundEnemyPathFinder({
                    mainGameObject: gameObject,
                    allBlocks: allBlocks
                })
                enemy.jumpDown({mainGameObject: gameObject})
                enemy.groundPlayerJump({
                    mainGameObject: gameObject,
                    allBlocks: allBlocks,
                    levelInformation: levelInformation
                })
                enemy.jumpDown({
                    mainGameObject: gameObject,
                    allBlocks: allBlocks,
                    levelInformation: levelInformation
                })
                enemy.groundEnemyShot({mainGameObject: gameObject,
                    allBlocks: allBlocks,
                    callback: shot,
                    constructors: constructors
                })

                npcCollisionDetect({ mainGameObject: gameObject, enemy: enemy })
            }
            enemy.onLeader = false;
    }
   // groundPlayer.xPos = 0;
}





async function gameDynamicPlayer({ gameObject }){
    if(!gameObject.gameInitData.dynamicLevelsActive) return false
    if(!gameObject.gameInitData.gameOver && gameObject.gameInitData.gameStatus){
        //   відмальовувати плеєра
            let extraSeconds = gameObject.gameInitData.gameExtraSeconds;
            let groundPlayer = gameObject.gameInitData.gameData.groundPlayerCharacter;
            let allBlocks = gameObject.gameInitData.dynamicLevelMapBlocks;
            let allEnemy = gameObject.gameInitData.dynamicLevelEnemy;

            groundPlayer.placeEnemyes(gameObject)
            if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus){
                groundPlayer.changeVerticalAnimationPicture()
                groundPlayer.enemyAnimation()

                if(groundPlayer.shotState && extraSeconds % 10 === 0 && groundPlayer.shotAngle){
                    shot.call(groundPlayer, constructors.BulletConstruct, gameObject, constructors.SoundCreator, "player", "allGroundGameBullets")
                }
                await blockCollision({
                    objectsToCollide: allBlocks,
                    targetObject: groundPlayer,
                    objectIntersectionDetect: objectIntersectionDetect,
                    mainGameObject: gameObject,
                    explosionFire: explosionFire,
                    constructors: constructors
                })
                await mapGravityInit({mainGameObject: gameObject,
                    mapObjects: gameObject.gameInitData.dynamicLevelMapBlocks,
                    targetObject: groundPlayer,
                    constructors: constructors
                })
                gameObject.hitDetection({
                    object1: groundPlayer,
                    objectsArr: gameObject.gameInitData.allGameSideObjects,
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })
                //doorFunctionality.call(groundPlayer)
                groundPlayer.xPos = 0;
        }
    }

}



// спавн модуля ворогів на майбутнє


function gameUiGameStats({ gameObject }){
    if(!gameObject.gameInitData.gameStatus){
        gameObject.showStartWindow()
    }
    if(gameObject.gameInitData.gameStatus){
        gameObject.showGameStats({playerObject: gameObject.gameInitData.gameData.playerObject, mainGameObject: gameObject})
    }
    if(gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus){
        gameObject.showPauseWindow()
    }
    if(gameObject.gameInitData.gameUiPause && gameObject.gameInitData.gameStatus){
        gameObject.showMenuWindow()
        gameObject.showPauseWindow()
    }
}
function gameUiEngineFunction({ gameObject }){

    gameUiGameStats({ gameObject: gameObject })
    if(gameObject.gameInitData.gameOver){
        gameObject.gameOverWindow()
    }
    if(gameObject.gameInitData.gameWin && !gameObject.gameInitData.gameUiPause && !gameObject.gameInitData.gamePause){
        gameObject.gameWinWindow()
    }
}

function initAppGlobalVariable(){
    process.env.MAX_NUMBER_OF_EXPLOSION = '20';
    process.env.MAX_NUMBER_OF_BULLETS = '150';

    process.env.SAVE_DATA_FILE = 'game-saves';

    process.env.LEVEL_DATA_URL = 'api/level-data';
    process.env.LEVEL_OBJECT_URL = 'api/level-objects';
    process.env.LEVEL_GRAPPLE_OBJECTS_URL = 'api/grapple-objects';
    process.env.GAME_SETTINGS_URL = 'api/game-settings';
    process.env.USER_SHIP_URL = 'api/user-ship';
    process.env.ENEMY_SHIP_URL = 'api/enemy-ship';

    process.env.DYNAMIC_LEVEL_BLOCKS = 'level-creator/complete-maps';
    process.env.GROUND_CHARACTERS_URL = 'api/get-ground-characters';
    process.env.DYNAMIC_LEVEL_ENEMY_COLLECTION_URL = 'api/get-constructor-ground-enemy';
    process.env.GROUND_CHARACTERS_INVENTORY = 'false';
    process.env.GROUND_ACTIVE_BLOCK_IN_RANGE = 'false';


    process.env.SHOP_GUNS_URL = 'api/shop/guns';
    process.env.SHOP_SHIPYARD_URL = 'api/shop/shipyard';
    process.env.SHOP_STORE_ITEMS = "api/shop/store-items";

    process.env.APP_SAVE_DIRECTORY = '/appData/saves';
    process.env.APP_SCREENSHOTS_DIRECTORY = '/appData/saves/screenshots';


    process.env.MAIN_GAME_SOUND = '';
    process.env.MAIN_GAME_SOUND_EFFECTS = '';
    process.env.MAIN_GAME_SOUND_ON = '';

    process.env.SHOP_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SALE_WINDOW = 'false';
    process.env.SHOP_STORE_WINDOW = 'false';

    process.env.BOSS_LOAD_AT_LEVEL = 'false';
    process.env.SUB_LOAD_AT_LEVEL = 'false';

    process.env.OVERWRITE_SAVE = 'false';

    if(process.env.NODE_ENV === 'development') process.env.HOST = 'http://localhost:3300/';
    else if(process.env.NODE_ENV === 'production'){ process.env.HOST = 'http://localhost:3300/'; console.log("production mode check HOST")};

}
/**/


(async function init(){

    document.addEventListener('dragover',function(event){
        event.preventDefault();
        return false;
      },false);

      document.addEventListener('drop',function(event){
        event.preventDefault();
        return false;
      },false);

    initAppGlobalVariable()
    async function initGameObject(){
        var mainMenu = document.querySelector("#main-menu");
        var gameState = await gameDataModules.gameDataInit(constructors.PlayerShip, null, constructors);
        if(!gameState){
            let navigation = appMenu(gameObject, dialogWindow)
            navigation.menu.init()
            throw new Error("There is no data in: gameState");
        }
        var gameObject = await new constructors.Game(gameState.data);
        var playerShipData = gameObject.gameInitData.gameData.playerObject;
        return {
            mainMenu: mainMenu,
            gameObject: gameObject,
            playerShipData: playerShipData
        }
    }
    async function appMenuAndSoundInit({gameObject}){
        const navigation = appMenu(gameObject, dialogWindow)
        navigation.menu.init()
        return navigation
    }
    async function appSoundInit({gameObject}){
        await gameObject.gameSettingsMenuInit()
        gameObject.createSound(constructors.SoundCreator)
    }
    async function gameObjectStart(){
        gameObject.uiController()
        gameObject.setGameFields()
        gameObject.getScreenSize()

        gameObject.shopArea = loadShopArea(gameObject);
        let contexts = gameObject.returnContext()
        /*  create context  */
        gameObject.gameInitData.gameData.playerObject.ctx = contexts.gameActionField;
        gameObject.gameInitData.gameData.playerObject.initPlayerShip()
        /*  ship move  */
        playerShipData.shipControl(gameObject)
        window.addEventListener('resize', ()=>{
            gameObject.getScreenSize()
            gameObject.setGameFields()
            gameObject.initField()
        })
    }
    const mainGameObject = await initGameObject()
    const mainMenu = await mainGameObject.mainMenu;
    const gameObject = await mainGameObject.gameObject;
    const playerShipData = await mainGameObject.playerShipData;



    const navigation: any = await appMenuAndSoundInit({gameObject: gameObject});
    await appSoundInit({gameObject: gameObject})
    var engine = setInterval(gameInterval, gameObject.gameInitData.intervalCount)
    gameObjectStart()
    saveGameEvents({mainGameObject: gameObject})


    createScreenshots({mainGameObject: gameObject })
    /*   game engin runing   */
   async  function gameInterval(){
        //if(gameObject.gameInitData.gamePause) return false
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
            clearField(
                gameObject.gameInitData.ctxGameDialogField,
                window.innerWidth,
                window.innerHeight)
        }
        if(gameObject.gameInitData.backScreenPause){
            gameObject.levelInit(constructors.GameBackground, gameObject.gameInitData.ctx, gameObject)
        }
        process.env.GROUND_ACTIVE_BLOCK_IN_RANGE = 'false';
        enemyEngineFunction({ gameObject: gameObject })

        bulletEngineFunction({ gameObject: gameObject })
        gameDynamicLevelBoxRender({ gameObject: gameObject })

        groundBulletEngineFunction({ gameObject: gameObject })
        gameDynamicPlayer({ gameObject: gameObject })
        gameDynamicEnemyRender({ gameObject: gameObject })


        syncKeyControl({ mainGameObject: gameObject })

        spaceShipEngineFunction({ gameObject: gameObject })
        sideObjectsEngineFunction({ gameObject: gameObject })
        gameChangeEngineFunction({ gameObject: gameObject })
        gameBackgroundEngineFunction({ gameObject: gameObject })

        ///   game UI load
        gameUiEngineFunction({ gameObject: gameObject })
        hideShowMenu(mainMenu, navigation.menu, gameObject.gameInitData.gameWin, gameObject.gameInitData.gameStatus, gameObject.gameInitData.gameUiPause)
    }
})()

