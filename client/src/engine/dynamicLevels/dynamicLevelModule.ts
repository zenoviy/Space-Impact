import * as constructors from '../../constructors';
import { getData } from '../../server/serverRequestModules';
import { objectIntersectionDetect } from '../../enemies/enemiesModules';
import {  show, hide} from '../../appMenu/appMenu';
import { backToTheMapAgain } from './playerUnitModule';
import { stairsMove,
    doorFunctionality,
    elevatorMove,
    elevatorPlayerMove
} from './dynamicLevelInteractiveElements';
import {
    useObject,
    displayText,
    interactWithObjects,
    levelRestore,
    saveObjectToBackPack
} from './dynamicDialog';
import { respawnEnemy } from './dynamicLevelEnemyModules';


// process.env.DYNAMIC_LEVEL_BLOCKS
// process.env.HOST



/*===========

Module to load ground level block to game
and operate with block scripts

============== */


/*===========

Method to load data from .json file with map object, sorted elements
position map related to main character

============== */
async function loadLevelMap({ levelMapName, constructors }){
    let dynamicMap = process.env.HOST + process.env.DYNAMIC_LEVEL_BLOCKS + '/' + levelMapName;
    let dynamicEnemyCollection = process.env.HOST + process.env.DYNAMIC_LEVEL_ENEMY_COLLECTION_URL;

    let resultData = await getData({
        url: dynamicMap,
        method: 'GET',
        data: null,
        headers: null
    })

    let spawnPoint = await resultData.allMapObjects.find(obj => {
        if(obj.details) return obj.details.type === "spawner";
    })
    if(!spawnPoint) return false
    let xRangeCompensation = window.innerWidth/2 - ( await spawnPoint.x + spawnPoint.width/2);
    let yRangeCompensation = window.innerHeight/2 - await spawnPoint.y;


    let levelBlocks = await resultData.allMapObjects.filter(block => {
       return block.details
    }).map(block => {
       // console.log(resultData.mapSize.width, resultData.mapSize.height)
        block.mapSizeHorizontal = resultData.mapSize.width;
        block.mapSizeVertical = resultData.mapSize.height;
        block.x += xRangeCompensation;
        block.y += yRangeCompensation;
        return new constructors.DynamicBlockConstructor({...block })
    })
    return levelBlocks
}

/*===========

Gravity simulation, accelerate object

============== */
async function mapGravityInit({mainGameObject, mapObjects, targetObject, constructors}){
    let levelInformation = mainGameObject.gameInitData.gameData.levelData;
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    let allEnemy = mainGameObject.gameInitData.dynamicLevelEnemy;
    groundPlayer.playerDirectionVertical = null;

    await backgroundMoveDuringMove({
        mainGameObject: mainGameObject,
        jumpImpuls: mainGameObject.gameInitData.gameData.levelData.jumpImpuls,
        xPos: groundPlayer.xPos,
        groundPlayer: groundPlayer,
        constructors: constructors
    })/**/

    if(Math.round(levelInformation.horizontalSpeed) > 0 &&
    levelInformation.horizontalSpeed > 0 &&
    extraSeconds % 2 === 0 ){
        levelInformation.horizontalSpeed -= 1;
        groundPlayer.xPos = 0;
    }
    if(Math.round(levelInformation.horizontalSpeed) < 0 &&
    levelInformation.horizontalSpeed < 0 &&
    extraSeconds % 2 === 0 ){
        levelInformation.horizontalSpeed += 1;
        groundPlayer.xPos = 0;
    }


    if(targetObject.groundTouch && !groundPlayer.onElevator) return false
    if(levelInformation.jumpImpuls != levelInformation.gravity && extraSeconds % 2 === 0){
        if(!groundPlayer.onElevator) levelInformation.jumpImpuls += 0.5;
    }
    if(groundPlayer.groundTouch){
        levelInformation.jumpImpuls = (groundPlayer.onElevatorSpeed)?  groundPlayer.onElevatorSpeed + levelInformation.gravity + 0.6: levelInformation.gravity/2 * -1;
    }
    if(groundPlayer.leftWallTouch || groundPlayer.rightWallTouch){
        levelInformation.horizontalSpeed = 0;
    }
    if(groundPlayer.ceilingTouch){
        levelInformation.jumpImpuls = 1;
    }


    if(levelInformation.jumpImpuls > levelInformation.gravity*3) levelInformation.jumpImpuls = levelInformation.gravity;
    if(levelInformation.jumpImpuls * -1 > levelInformation.gravity*3) levelInformation.jumpImpuls = levelInformation.gravity * -1;

    for(let item of mapObjects){
        item.y -= (levelInformation.jumpImpuls)? levelInformation.jumpImpuls : 0;
        item.x -= (levelInformation.horizontalSpeed)? levelInformation.horizontalSpeed : 0;
    }
    for(let enemy of allEnemy){
        enemy.y -= (levelInformation.jumpImpuls)? levelInformation.jumpImpuls : 0;
        enemy.x -= (levelInformation.horizontalSpeed)? levelInformation.horizontalSpeed : 0;
    }
    backToTheMapAgain({ mainGameObject: mainGameObject, player: groundPlayer })
    groundPlayer.onStairs = 0;
}



/*===========

Method to detect colision betwean player and NPC

============== */


function npcCollisionDetect({mainGameObject, enemy}){
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;

    let x2 = enemy.x + enemy.width;
    let y2 = enemy.y + enemy.height;
    let x1 = groundPlayer.x + groundPlayer.width;
    let y1 = groundPlayer.y + groundPlayer.height;
    var x = x2 - x1;
    var y = y2 - y1;

    var distance = Math.sqrt(x*x + y*y)-(enemy.height/2 + groundPlayer.height/2);

    if(distance < 0){
        enemy.isRun = false;
        useObject({ mainGameObject: mainGameObject, player: groundPlayer, item: enemy})
    }

}









/*===========

Main method to detect collide and stop of block

============== */

async function blockCollision({objectsToCollide, targetObject, objectIntersectionDetect, mainGameObject, explosionFire, constructors}){
    if(!objectsToCollide) return false

    targetObject.groundTouch = false;
    targetObject.rightWallTouch = false;
    targetObject.leftWallTouch = false;
    targetObject.ceilingTouch = false;
    targetObject.onStairs = false;
    targetObject.currentWallBlock = null;
    let floorCollision = false;
    let currentActiveBlock;
    targetObject.onElevator = false;

    for(let item of objectsToCollide){
        if(!item) continue
        let collision = objectIntersectionDetect({object: item, target: targetObject })
        if(collision){
           if(item.details.collision || item.details.type === 'door' ||
           item.details.type === 'leader' || item.details.type === "health" && item.details.display ||
            item.details.type === "blue_card" && item.details.display ||
             item.details.type === "green_card" && item.details.display ||
             item.details.type === "yellow_card" && item.details.display ||
             item.details.type === "red_card" && item.details.display ||
             item.details.type === "laptop_with_data" && item.details.display ||
             item.details.type === "scenario_object" && item.details.display){
               floorCollision = findPointOfCollision.call(targetObject,
                {
                    object: targetObject,
                    target: item,
                    mainGameObject: mainGameObject,
                    explosionFire: explosionFire,
                    constructors: constructors
                })
           }
           if(targetObject.objectOwner != "groundEnemy" && targetObject.objectOwner != "groundNPC" && item.details.type != 'npc_spawner') currentActiveBlock = useObject({ mainGameObject: mainGameObject, player: targetObject, item: item})
        }
    }
}







function findPointOfCollision({object, target, mainGameObject, explosionFire, constructors}){
    let levelInformation = mainGameObject.gameInitData.gameData.levelData;
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;

    let blockRelativeXPos = ((target.blockRelativeXPos)? parseInt(target.blockRelativeXPos) : 0);
    let blockRelativeYPos = ((target.blockRelativeYPos)? parseInt(target.blockRelativeYPos) : 0);

    let targetX = target.x + blockRelativeXPos;
    let targetY = target.y + blockRelativeYPos;

    let x2 = targetX  + target.width;
    let y2 = targetY + target.height;
    let x1 = this.x + (this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC")? this.width/2 : this.width;
    let y1 = this.y + this.height;
    var x = x2 - x1;
    var y = y2 - y1;

    let floorCollision = false;
    var distance = Math.sqrt(x*x + y*y)-(this.height/2 + target.height/2);

    if(!distance) return false
    var isWall = wallFinder({ mainGameObject: mainGameObject, currentBlock: target})
    var isBottomWall = wallBottomFinder({ mainGameObject: mainGameObject, currentBlock: target})
    let collision = (Math.sign(x) < 0 || Math.sign(x) < 0)? false : "collision";

    if(target.details.type === 'elevator' && this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC"){
        this.onElevator = true;
    }

    let grappleObject = dynamicLevelGrappleObjects({
        mainGameObject: mainGameObject,
        groundPlayer: this,
        target: target,
        explosionFire: explosionFire, constructors: constructors })

    if(grappleObject) return false;

    if(target.details.type === "stairs-left" || target.details.type === "stairs-right"){
        /*if(target.details.type === "stairs-left" &&  this.y + this.height < target.y + target.height - 10 &&
            this.x + this.width < target.x + target.width  ||
            target.details.type === "stairs-right" &&  this.y + this.height < target.y + target.height - 10 &&
            this.x + this.width > target.x + target.width){
                this.groundTouch = false;
        }*/
        if(this.objectOwner != "groundPlayer"){
            //this.onStairs = true;
            stairsMove({
                mainGameObject: mainGameObject,
                levelInformation: levelInformation,
                stairs: target,
                player: this,
                x: x,
                y: y
            })
            return false
        }else if(!this.isRun){
            this.isRun = false;
            this.isJump = false;
            this.jumpImpuls = 0;
            this.groundTouch = true;
            return false
        }
    }

    if(this.objectOwner === "groundEnemy" || this.objectOwner === "groundNPC"){
        if(this.x < 0 || this.y < 0 || this.x > window.innerWidth || this.y > window.innerHeight ||
            groundPlayer.onStairs && this.onStairs && groundPlayer.isRun){
            this.isRun = false;
            this.isJump = false;
            this.jumpImpuls = 0;
            this.groundTouch = true;
            return false
        }
    }

    groundBlockCollision.call(this, {
        mainGameObject: mainGameObject,
        target: target,
        targetX: targetX,
        targetY: targetY,
        levelInformation: levelInformation,
        collision: collision,
        isWall: isWall
    })
    if(target.details.type === "leader"){
        this.onLeader = true;
    }
    if(this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC" && target.details.type === "leader" ){
        this.ceilingTouch = false;
        return false
    }

    // ==========================================
    rightSideBlockCollision.call(this, {
        mainGameObject: mainGameObject,
        target: target,
        targetX: targetX,
        targetY: targetY,
        levelInformation: levelInformation,
        x: x,
        y: y
    })
    leftSideBlockCollision.call(this, {
        mainGameObject: mainGameObject,
        target: target,
        targetX: targetX,
        targetY: targetY,
        levelInformation: levelInformation,
        x: x,
        y: y
    })

    if(targetY + target.height > this.y && this.y + this.height > targetY + target.height &&
        !isBottomWall  && collision && target.details.type != 'elevator' && !this.groundTouch){
        //console.log('Top side of block', target)
        if(target.details){
            if(target.details.type === 'elevator' ){
                this.ceilingTouch = false;
                return false
            }
            this.ceilingTouch = true;
        }
    }
    return floorCollision
}





/*===============

block side collision detect

============== */

function groundBlockCollision({mainGameObject, target, targetX, targetY, levelInformation, collision, isWall}){
    if(this.y + this.height < targetY + target.height/2 && collision && !isWall &&
        target.details.type != "stairs-left" && target.details.type != "stairs-right"){
        // console.log("Ground To" )
        if(target.details ){
           if(target.details.type === 'elevator' ){
                this.onElevator = true;
                elevatorPlayerMove({
                    mainGameObject: mainGameObject,
                    levelInformation: levelInformation,
                    elevator: target,
                    player: this
                })
           }else{
                this.currentGroundBlock = target;
                if(this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC"){

                    levelInformation.jumpImpuls = levelInformation.gravity
                }
                if(this.objectOwner === "groundEnemy" || this.objectOwner === "groundNPC"){
                    if(this.y + this.height - 5 > targetY){
                        this.y -= 0.01;
                    }
                }
                this.groundTouch = true;
           }
       }
    }
}

function rightSideBlockCollision({mainGameObject, target, targetX, targetY, levelInformation, x, y}){
    if( this.x < targetX && this.x + this.width > targetX &&
        this.y + this.height > targetY + 5 && this.playerDirectionHorizontal === 'right'){
            if( this.y + this.height >= targetY - 20 && targetY - 20 > this.y && this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC" && target.height < 20 ||
            this.groundTouch && this.y + this.height >= targetY - 20 && targetY - 20 > this.y && this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC"){
                this.rightWallTouch = false;
                levelInformation.jumpImpuls = levelInformation.gravity * -1;
                this.groundTouch = false;
                return false
            }
            if(target.details.type === "stairs-left"){
                this.rightWallTouch = false;
                this.rightWallTouch = false;
                this.groundTouch = false;
                stairsMove({
                    mainGameObject: mainGameObject,
                    levelInformation: levelInformation,
                    stairs: target,
                    player: this,
                    x: x,
                    y: y
                })
                return false
            }
            if(target.details){
                if(target.details.type === 'elevator' ){
                    return false
                }
                this.rightWallTouch = true;
                //let rightSide = (this.x + this.width) - targetX;
                //let leftSide =  (targetX + target.width) - this.x;
                if(this.objectOwner === "groundEnemy" || this.objectOwner === "groundNPC"){
                    if(target.details.type != "leader" && target.details.collision && this.y > targetY){
                        let rightSide = (this.x + this.width) - targetX;
                        this.x -= rightSide;
                    }
                }
               if(!target.details.collision && target.details.type === 'door'){
                    this.rightWallTouch = false;
                    this.groundTouch = true;
                }
                this.currentWallBlock = target;
                //console.log('Right side of block V!')
            }
        }
}

function leftSideBlockCollision({mainGameObject, target, targetX, targetY, levelInformation, x, y}){
    if(this.x < targetX + target.width && this.x + this.width > targetX  && this.x > targetX &&
        this.y + this.height > targetY + 5 &&
        this.playerDirectionHorizontal === 'left'){
            if( this.y + this.height >= targetY - 20 && targetY - 20 > this.y && this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC" && target.height < 20 ||
            this.groundTouch && this.y + this.height >= targetY - 20 && targetY - 20 > this.y && this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC"){
                this.leftWallTouch = false;
                levelInformation.jumpImpuls = levelInformation.gravity * -1;
                this.groundTouch = false;
                return false
            }
            if(target.details.type === "stairs-right"){
                this.rightWallTouch = false;
                this.leftWallTouch = false;
                this.groundTouch = false;
                stairsMove({
                    mainGameObject: mainGameObject,
                    levelInformation: levelInformation,
                    stairs: target,
                    player: this,
                    x: x,
                    y: y
                })
                return false
            }
           if(target.details){
               if(target.details.type === 'elevator' ){
                   return false
               }
               if(this.objectOwner === "groundEnemy" || this.objectOwner === "groundNPC"){
                   if(target.details.type != "leader" && target.details.collision && this.y > targetY){
                       let leftSide =  (targetX + target.width) - this.x;
                       this.x += leftSide;
                   }
                }
               this.leftWallTouch = true;
               if(!target.details.collision && target.details.type === 'door'){
                    this.leftWallTouch = false;
                    this.groundTouch = true;
                }
                this.currentWallBlock = target;
               //console.log('Left side of block V')
           }
   }
}

/*===============

block side collision detect end

============== */



/*===========

Main method to detect and launch script during take grapple objects

============== */

function dynamicLevelGrappleObjects({ mainGameObject, groundPlayer, target, explosionFire, constructors }){
    var levelData = mainGameObject.getLevelUserData();
    let mainPlayerData = levelData.source.playerObject;
    let prepareTarget = null;
    if(groundPlayer.objectOwner === "groundPlayer" && target.details.type === "health" && target.details.display){
        target.details.display = false;
        target.details.active = false;
        mainPlayerData.numberOflife += 1;

        prepareTarget = Object.assign({}, {
            objectOwner: 'groundPlayer',
            explosion: target.details.explosionAnimation,
            width: 30,
            height: 30,
            x: target.x,
            y: target.y,
            speed: 0,
            type: target.details.type
        })
    }else if(groundPlayer.objectOwner === "groundPlayer" && target.details.type === "blue_card" && target.details.display ||
    groundPlayer.objectOwner === "groundPlayer" && target.details.type === "green_card" && target.details.display ||
    groundPlayer.objectOwner === "groundPlayer" && target.details.type === "yellow_card" && target.details.display ||
    groundPlayer.objectOwner === "groundPlayer" && target.details.type === "red_card" && target.details.display ||
    groundPlayer.objectOwner === "groundPlayer" && target.details.type === "laptop_with_data" && target.details.display ||
    groundPlayer.objectOwner === "groundPlayer" && target.details.type === "scenario_object" && target.details.display){
        if(target.details.scripts){
            respawnEnemy({ mainGameObject: mainGameObject, constructors: constructors })
        }
        saveObjectToBackPack({
            groundPlayer: groundPlayer,
            data: target.details.type,
            previewPicture: process.env.HOST + target.details.previewTexture
        })

        target.details.display = false;
        target.details.active = false;

        prepareTarget = Object.assign({}, {
            objectOwner: 'groundPlayer',
            explosion: target.details.explosionAnimation,
            width: 30,
            height: 30,
            x: target.x,
            y: target.y,
            speed: 0,
            type: target.details.type
        })
    }
    if(prepareTarget){
        explosionFire({
            targetData: prepareTarget,
            mainGameObject: mainGameObject,
            hitObject: groundPlayer,
            SideObject: constructors.SideObject,
            explosion: "explosion"
        });
    }
    return false
}




/*===============

block wall detector

============== */

function wallFinder({ mainGameObject, currentBlock}){
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    let currentBlockIndex = allBlocks.indexOf(currentBlock);
    let closeBlocks = allBlocks[currentBlockIndex - 1];

    let upperBlocks = false;
    if(closeBlocks && closeBlocks.details.collision && closeBlocks.width >= currentBlock.width){
        upperBlocks = (currentBlock.y - closeBlocks.height === closeBlocks.y)? true : false
    }
    return (upperBlocks)? true : false
}

function wallBottomFinder({ mainGameObject, currentBlock }){
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    let currentBlockIndex = allBlocks.indexOf(currentBlock);
    let closeBlocks = allBlocks[currentBlockIndex + 1];

    let bottomBlocks = false;
    if(closeBlocks && closeBlocks.details.collision){
        bottomBlocks = (currentBlock.y + currentBlock.height === closeBlocks.y)? true : false;
    }
    return (bottomBlocks)? true : false;
}

/*===============

block wall detector end

============== */


/*===============

Moving all background object at scene

============== */
function backgroundMoveDuringMove({mainGameObject, jumpImpuls, xPos, groundPlayer, constructors}){
    let allBullets = mainGameObject.gameInitData.allGameBullets;
    let levelInformation = mainGameObject.gameInitData.gameData.levelData;
    let allGameFlyEnemyes = mainGameObject.gameInitData.allGameEnemies;
    let allGameBackgroundElements = mainGameObject.gameInitData.mapBackgroundObjects;
    let allGroundGameBullets = mainGameObject.gameInitData.allGroundGameBullets;

    let allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects;
    let allGamesObject = [].concat(allGameBackgroundElements, allGameFlyEnemyes, allBullets, allGameSideObjects, allGroundGameBullets)

    for(let item of allGamesObject){
        if(item instanceof constructors.GameBackground ){
             item.speed = ( groundPlayer.playerDirectionHorizontal === 'right')? (item.defaultSpeed/2): (item.defaultSpeed/2) * -1;
            if(!groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && xPos ||
                !groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && !groundPlayer.groundTouch && xPos) item.x -= item.speed;
            if(item.speed != 0 && !groundPlayer.groundTouch && !groundPlayer.groundTouch && !groundPlayer.ceilingTouch)item.y -= item.defaultSpeed * (jumpImpuls/10)
        }
        if(item instanceof constructors.EnemyObject){
            if(!groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && xPos){
                item.x = ( groundPlayer.playerDirectionHorizontal === 'right')? item.x - xPos  : item.x - xPos ;
            }
            if(item.speed != 0 && !groundPlayer.groundTouch && !groundPlayer.groundTouch && !groundPlayer.ceilingTouch) item.y += ((jumpImpuls * 0.50)* -1)
        }
        if(item instanceof constructors.BulletConstruct || item instanceof constructors.SideObject || item instanceof constructors.GrappleObject ){
                if(!groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && xPos){
                    item.x = (item.Grapple && groundPlayer.playerDirectionHorizontal === 'right')? item.x + xPos:
                    ( item.Grapple && groundPlayer.playerDirectionHorizontal === 'left' )?  item.x - xPos :
                    ( groundPlayer.playerDirectionHorizontal === 'right' )? item.x - xPos  : item.x - xPos ;
                }
                if(!groundPlayer.groundTouch && item instanceof constructors.GrappleObject){
                    item.y += (Math.sign(levelInformation.jumpImpuls) > 0)? (levelInformation.jumpImpuls * -1) : (levelInformation.jumpImpuls * -1) - 0.40;
                    item.x += levelInformation.horizontalSpeed * -1;
                    jumpImpuls = 0;
                }
            if(item.speed != 0 && !groundPlayer.groundTouch && !groundPlayer.ceilingTouch || !groundPlayer.groundTouch){
                let jumpImpulsVertical = jumpImpuls;
                item.y = (item.Grapple)?  item.y - jumpImpulsVertical : item.y + jumpImpulsVertical * -1;
            }
        }
    }
}

export {
    loadLevelMap,
    mapGravityInit,
    blockCollision,
    interactWithObjects,
    elevatorMove,
    backgroundMoveDuringMove,
    stairsMove,
    npcCollisionDetect
}