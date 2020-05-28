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
import {
    mapGravityInit,
    blockCollision,
    npcCollisionDetect
} from './engine/dynamicLevels/dynamicLevelModule';
import { doorFunctionality, openClosedDoorAnimation } from './engine/dynamicLevels/dynamicLevelInteractiveElements';
import { objectIntersectionDetect } from './enemies/animationHitBoxModules';
import { syncKeyControl, shipInSpace } from './engine/playerShipModule';
import { shot, displayObjectAtScene } from './enemies/animationHitBoxModules';
import { explosionFire } from './engine/gameSideObjectsModule';
import { initAppGlobalVariable } from './server/globalVariables';
import { fillJournalDefaultData } from './engine/dynamicLevels/journalModules';






function bulletEngineFunction({gameObject}){
    if(gameObject.gameInitData.allGameBullets.length > 0){
        for(let bullet of gameObject.gameInitData.allGameBullets){
            bullet.displayObjectAtScene(gameObject)
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
                bullet.spriteObjectsAnimation();
            }
        }
    }
}


function groundBulletEngineFunction({gameObject}){
    if(!gameObject.gameInitData.dynamicLevelsActive) return false
    if(gameObject.gameInitData.allGroundGameBullets.length > 0){
        for(let bullet of gameObject.gameInitData.allGroundGameBullets){
            bullet.displayObjectAtScene(gameObject)
            if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
                bullet.moveBullets(gameObject.gameInitData.gameData.playerObject, gameObject);
                if( bullet.x > window.innerWidth + 100 || bullet.x < -100 ||
                    bullet.y > window.innerHeight + 100 || bullet.y < -100) continue


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
                let nearGroundEnemy = gameObject.gameInitData.dynamicLevelEnemy.filter(enemy => {
                    if(Math.max(bullet.x, enemy.x) - Math.min(bullet.x, enemy.x) < 100 &&  Math.max(bullet.y, enemy.y) - Math.min(bullet.y, enemy.y) < 100){
                        return enemy
                    }
                })
                gameObject.hitDetection({
                    object1: bullet,
                    objectsArr: nearGroundEnemy,
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })

/* */
                let nearMapBlock = gameObject.gameInitData.dynamicLevelMapBlocks.filter(block => {
                    if(Math.max(bullet.x, block.x) - Math.min(bullet.x, block.x) < 100 &&
                    Math.max(bullet.y, block.y) - Math.min(bullet.y, block.y) < 100 && block.details.collision){
                        return block
                    }
                })
                gameObject.hitDetection({
                    object1: bullet,
                    objectsArr: nearMapBlock,
                    mainGameObject: gameObject,
                    GrappleObject : constructors.GrappleObject
                })

                bullet.spriteObjectsAnimation();
            }
        }
    }
}

function enemyEngineFunction({gameObject}){
    if(gameObject.gameInitData.allGameEnemies.length > 0){
        for(let enemy of gameObject.gameInitData.allGameEnemies){
            enemy.displayObjectAtScene(gameObject)
            if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
                enemy.moveEnemyes();
                enemy.enemyShipLogicVertical({
                    x: gameObject.gameInitData.gameData.playerObject.x,
                    y: gameObject.gameInitData.gameData.playerObject.y
                }, gameObject);
                enemy.spriteObjectsAnimation(true);
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
            object.displayObjectAtScene(gameObject);
            if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
                if (object.objectOwner == "explosion" || object.objectOwner == "smoke"){
                    object.fireAnimationEnded(gameObject.gameInitData.allGameSideObjects);
                }else{
                    sideObjectBehaviour({object: object, gameObject: gameObject})
                    object.spriteObjectsAnimation()
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
                gameObject.gameInitData.screen.height);
        }
        for(let backgroundMap of gameObject.gameInitData.mapBackgroundObjects){
            if(!gameObject.gameInitData.gamePause || !gameObject.gameInitData.gameStatus){
                if(!gameObject.gameInitData.shopActive){
                backgroundMap.updateMap({ mainGameObject: gameObject })}
                backgroundMap.spriteObjectsAnimation()
            }
            backgroundMap.placeBackground();
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
            gameObject.gameInitData.gameData.playerObject.spriteObjectsAnimation()
            shipInSpace({
                mainGameObject: gameObject,
                playerShip: gameObject.gameInitData.gameData.playerObject,
                constructors: constructors
            })
        }
        if(gameObject.gameInitData.gameStatus) gameObject.gameInitData.gameData.playerObject.displayObjectAtScene(gameObject);
    }
}




function gameChangeEngineFunction({ gameObject }){
    if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus ){
        if(gameObject.gameInitData.gameStatus){
            if(gameObject.gameInitData.gameData.levelObjects){
                if(!gameObject.gameInitData.dynamicLevelsActive && !gameObject.gameInitData.shopActive){
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

    let allElevators = allBlocks.filter(block => block.details.type === 'elevator')
    let allBackgrounds = allBlocks.filter(block => !block.details.collision || block.backgroundTexture)

    for(let background of allBackgrounds){
        //if(!background) continue
        if(!background || background.x > window.innerWidth + 100 || background.x < -100 ||
            background.y > window.innerHeight + 100 || background.y < -100) continue
        if(background.backgroundTexture){
            //console.log(block)
           displayObjectAtScene.call({
                x: background.x,
                y: background.y,
                sx: background.backgroundSx,
                sy: background.backgroundSy,
                sWidth: background.backgroundTexture.sWidth,
                sHeight: background.backgroundTexture.sWidth,
                width: background.backgroundTexture.width,
                height: background.backgroundTexture.height + 1,
                degree: 0,
                img: background.backgroundTextureImg
            }, gameObject)
            background.backgroundTexture.degree = 0;
        }

        if(!gameObject.gameInitData.gamePause && background.details.type != 'door') background.spriteObjectsAnimation()
        if(background.details.type === 'enemy_spawner' || background.details.type === 'hidden_enemy_spawner' ||
        background.details.type === 'npc_spawner' || background.details.type === 'elevator' ||
            background.details.type === "health" || background.details.isDestroy || !background.details.display && background.details.type === "scenario_object" ||
             !background.details.display && background.details.type === "blue_card" ||
             !background.details.display && background.details.type === "green_card" ||
             !background.details.display && background.details.type === "yellow_card" ||
             !background.details.display && background.details.type === "red_card" ||
             !background.details.display && background.details.type === "laptop_with_data" || background.details.type === "ground-destruct" ) continue
        openClosedDoorAnimation({
            currentWallBlock : background,
            mainGameObject: gameObject,
            constructors: constructors
        })
             background.displayObjectAtScene(gameObject)
    }

    for(let elevator of allElevators){
        if(!elevator || elevator.x > window.innerWidth + 100 || elevator.x < -100 ||
            elevator.y > window.innerHeight + 100 || elevator.y < -100) continue
        if(!gameObject.gameInitData.gamePause) elevator.elevatorMove({ mainGameObject: gameObject })
        elevator.displayObjectAtScene(gameObject)
    }
    for(let block of allBlocks){
        if(!block || block.x > block.innerWidth + 100 || block.x < -100 ||
            block.y > window.innerHeight + 100 || block.y < -100) continue
        if(!block) continue
            if(block.details.type === 'enemy_spawner' ||  block.details.type === 'hidden_enemy_spawner' || block.details.type === 'npc_spawner' || block.details.type === 'elevator' ||
             !block.details.display && block.details.type === "health" || !block.details.display && block.details.type === "scenario_object" ||
             !block.details.display && block.details.type === "blue_card" ||
             !block.details.display && block.details.type === "green_card" ||
             !block.details.display && block.details.type === "yellow_card" ||
             !block.details.display && block.details.type === "red_card" ||
             !block.details.display && block.details.type === "laptop_with_data" || block.details.type === "ground-destruct" &&
             block.details.isDestroy && block.details.healthPoint <= 0 || !block.details.type &&
             block.details.isDestroy && block.details.healthPoint <= 0 || !block.details.collision && block.details.type === "background-wall" ||
             !block.details.collision && block.details.type === 'door') continue


             openClosedDoorAnimation({
                 currentWallBlock : block,
                 mainGameObject: gameObject,
                 constructors: constructors
                })
            if(!gameObject.gameInitData.gamePause && block.details.type != 'door') block.spriteObjectsAnimation()
            block.displayObjectAtScene(gameObject)
    }
}



async function gameDynamicEnemyRender({ gameObject }){
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
        if(!enemy || enemy.x > window.innerWidth + 100 || enemy.x < -100 ||
            enemy.y > window.innerHeight + 100 || enemy.y < -100) continue
            enemy.displayObjectAtScene(gameObject)
            enemy.changeVerticalAnimationPicture()
            if(!enemy.objectPresent ){
                if(enemy.details.collision)  enemy.details.collision = false;

                continue
            }
            if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus){
                //deleteObjectsOnDemand({object: enemy, mainGameObject: gameObject, target: 'dynamicLevelEnemy' })
                enemy.spriteObjectsAnimation()
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
                if(enemy.details.type != "npc_spawner"){
                   await enemy.detectPlayer({
                        mainGameObject: gameObject,
                        groundPlayer: groundPlayer,
                        allBlocks: allBlocks,
                        objectIntersectionDetect: objectIntersectionDetect
                    })
                }
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
            //await syncKeyControl({ mainGameObject: gameObject })
            groundPlayer.displayObjectAtScene(gameObject)
            if(!gameObject.gameInitData.gamePause && gameObject.gameInitData.gameStatus){

                if(groundPlayer.onLeader && groundPlayer.leaderClimb){
                    groundPlayer.spriteObjectsAnimation()
                }else if(!groundPlayer.onLeader){
                    groundPlayer.spriteObjectsAnimation()
                }
                groundPlayer.changeVerticalAnimationPicture()
                groundPlayer.detectObjectsAsMap({
                    mainGameObject: gameObject,
                    objectIntersectionDetect: objectIntersectionDetect
                })
                if(groundPlayer.shotState && extraSeconds % 10 === 0 && (groundPlayer.shotAngle || groundPlayer.shotAngle === 0)){
                    //if(process.env.GROUND_NPC_DIALOG_ACTIVE === 'false'){
                        let anglerandimize = (groundPlayer.playerDirectionVertical === "down")? Math.floor(Math.random() * 1)
                        : (!groundPlayer.groundTouch)? Math.floor(Math.random() * 10)
                        : Math.floor(Math.random() * 5);
                        anglerandimize *= ((Math.floor(Math.random() * 10)) > 5)? -1 : 1 ;


                        groundPlayer.shotAngle += anglerandimize;
                        if(groundPlayer.shotAngle < 0) groundPlayer.shotAngle = 0;
                        shot.call(
                            groundPlayer,
                            constructors.BulletConstruct,
                            gameObject,
                            constructors.SoundCreator,
                            "player",
                            "allGroundGameBullets")
                    //}
                }
                await blockCollision({
                    objectsToCollide: allBlocks,
                    targetObject: groundPlayer,
                    objectIntersectionDetect: objectIntersectionDetect,
                    mainGameObject: gameObject,
                    explosionFire: explosionFire,
                    constructors: constructors
                })

                // syncKeyControl({ mainGameObject: gameObject })
                //console.log(groundPlayer.leftWallTouch, groundPlayer.rightWallTouch, groundPlayer.groundTouch)

                //console.log(groundPlayer.groundTouch, "||11")
                await mapGravityInit({
                    mainGameObject: gameObject,
                    mapObjects: gameObject.gameInitData.dynamicLevelMapBlocks,
                    targetObject: groundPlayer,
                    constructors: constructors
                })
                //syncKeyControl({ mainGameObject: gameObject })
                await gameObject.hitDetection({
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
    var engine = await setInterval(gameInterval, gameObject.gameInitData.intervalCount)
    await gameObjectStart();
    saveGameEvents({mainGameObject: gameObject})

    createScreenshots({mainGameObject: gameObject })
    fillJournalDefaultData({mainGameObject: gameObject })



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

        await gameDynamicLevelBoxRender({ gameObject: gameObject })
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
        //process.env.GROUND_PLAYER_STAIRS_GROUND_TOUCH = "false";
    }
})()

