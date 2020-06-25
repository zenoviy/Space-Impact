import * as constructors from '../../constructors';
import { getData } from '../../server/serverRequestModules';
import { objectIntersectionDetect } from '../../enemies/animationHitBoxModules';
import {  show, hide} from '../../appMenu/appMenu';
import { backToTheMapAgain, groundPlayerCheckpointActivate } from './playerUnitModule';
import { stairsMove,
    elevatorMove,
    elevatorPlayerMove,
    deadlyBlocks
} from './dynamicLevelInteractiveElements';
import {
    useObject,
    interactWithObjects,
    saveObjectToBackPack
} from './dynamicDialog';
import { respawnEnemy } from './dynamicLevelEnemyModules';



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
    let gravityIndex = (levelInformation.gravityIndex || levelInformation.gravityIndex === 0)? levelInformation.gravityIndex: levelInformation.gravity;




    if(Math.round(levelInformation.horizontalSpeed) > 0 &&
    levelInformation.horizontalSpeed > 0 &&
    extraSeconds % 2 === 0 && targetObject.groundTouch){
        levelInformation.horizontalSpeed -= 1;
        groundPlayer.xPos = 0;
    }




    if(Math.round(levelInformation.horizontalSpeed) < 0 &&
    levelInformation.horizontalSpeed < 0 &&
    extraSeconds % 2 === 0 && targetObject.groundTouch ){
        levelInformation.horizontalSpeed += 1;
        groundPlayer.xPos = 0;
    }

    await backgroundMoveDuringMove({
        mainGameObject: mainGameObject,
        jumpImpuls: mainGameObject.gameInitData.gameData.levelData.jumpImpuls,
        xPos: groundPlayer.xPos,
        groundPlayer: groundPlayer,
        constructors: constructors
    })
    if(targetObject.groundTouch && !groundPlayer.onElevator ){
        return false
    }

    if(levelInformation.jumpImpuls != gravityIndex && extraSeconds % 2 === 0){
        if(!groundPlayer.onElevator) levelInformation.jumpImpuls += (gravityIndex * 0.1);
    }
    if(groundPlayer.groundTouch){
        levelInformation.jumpImpuls = (groundPlayer.onElevatorSpeed)? groundPlayer.onElevatorSpeed + levelInformation.gravity + 0.6
        : levelInformation.gravity/2 * -1;
    }
    if(groundPlayer.leftWallTouch || groundPlayer.rightWallTouch){
        levelInformation.horizontalSpeed = 0;
        groundPlayer.xPos = 0;
    }
    if(groundPlayer.ceilingTouch){
        levelInformation.jumpImpuls = 1;
    }

    if(levelInformation.jumpImpuls > levelInformation.gravity*3) levelInformation.jumpImpuls = gravityIndex;
    if(levelInformation.jumpImpuls * -1 > levelInformation.gravity*3) levelInformation.jumpImpuls = gravityIndex * -1;

    for(let item of mapObjects){
        item.y -= (levelInformation.jumpImpuls)? levelInformation.jumpImpuls : 0;
        item.x -= (levelInformation.horizontalSpeed)? levelInformation.horizontalSpeed : 0;
    }
    backToTheMapAgain({ mainGameObject: mainGameObject, player: groundPlayer, constructors: constructors })
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



function computersDialog({mainGameObject, allBlocks}){
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    let nearestBlocks = allBlocks.filter(block => {
        if(
        (Math.max(block.x, groundPlayer.x) - Math.min(block.x, groundPlayer.x)) <= 200 &&
        (Math.max(block.y, groundPlayer.y) - Math.min(block.y, groundPlayer.y) <= 200)
        ) return block
    })
    for(let block of nearestBlocks){
        if(!block.details) return false
        if(block.details.type === 'read_terminal'){
            npcCollisionDetect({mainGameObject: mainGameObject, enemy: block})
        }
    }
}





/*===========

Main method to detect collide and stop of block

============== */

async function blockCollision({objectsToCollide, targetObject, objectIntersectionDetect, mainGameObject, explosionFire, constructors}){
    if(!objectsToCollide) return false
    let floorCollision = false;
    let currentActiveBlock;

    targetObject.groundTouch = false;
    targetObject.rightWallTouch = false;
    targetObject.leftWallTouch = false;
    targetObject.ceilingTouch = false;
    targetObject.onStairs = false;
    targetObject.currentWallBlock = null;
    targetObject.onElevator = false;

    let nearMapObjects = objectsToCollide.filter(object => {
        if((Math.max(targetObject.x, object.x) - Math.min(targetObject.x, object.x)) <= 200 &&
        (Math.max(targetObject.y, targetObject.y) - Math.min(targetObject.y, object.y)) <= 200){
            return object
        }
    })

    for(let item of nearMapObjects){
        if(!item) continue
        if(!item || item.x > window.innerWidth + 200 || item.x < (item.width * -1) ||
            item.y > window.innerHeight + 200 || item.y < (200 * -1)) continue

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
           if(
               targetObject.objectOwner != "groundEnemy" &&
               targetObject.objectOwner != "groundNPC" &&
               item.details.type != 'npc_spawner' &&
               item.details.type != 'read_terminal'){
               currentActiveBlock = useObject({ mainGameObject: mainGameObject, player: targetObject, item: item});
               groundPlayerCheckpointActivate({block: item,  mainGameObject: mainGameObject})
           }
        }
    }
}






async function findPointOfCollision({object, target, mainGameObject, explosionFire, constructors}){
    var moveStopState = true;
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
    var isWall = wallFinder({ mainGameObject: mainGameObject, currentBlock: target});
    var isBottomWall = wallBottomFinder({ mainGameObject: mainGameObject,  currentBlock: target});
    let collision = (Math.sign(x) < 0 || Math.sign(x) < 0)? false : "collision";

    if(target.details.type === 'elevator' && this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC"){
        this.onElevator = true;
        if(target.details.moveDirection === "vertical") this.playerDirectionVertical = "down";
    }

    let grappleObject =  dynamicLevelGrappleObjects({
        mainGameObject: mainGameObject,
        groundPlayer: this,
        target: target,
        explosionFire: explosionFire, constructors: constructors })

    if(grappleObject) return false;

    if(target.details.type === "stairs-left" || target.details.type === "stairs-right"){
        if(this.objectOwner != "groundPlayer"){
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
    deadlyBlocks.call(this, {mainGameObject: mainGameObject, curentBlock: target, constructors: constructors});
    if(target.details.deadly) return false
    groundBlockCollision.call(this, {
        mainGameObject: mainGameObject,
        target: target,
        targetX: targetX,
        targetY: targetY,
        levelInformation: levelInformation,
        collision: collision,
        isWall: isWall,
        isBottomWall: isBottomWall,
        y: y
    })
    if(target.details.type === "leader"){
        this.onLeader = true;
    }
    if(this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC" && target.details.type === "leader" ){
        this.ceilingTouch = false;
        return false
    }

    // ==========================================
    leftRightBlockInteract.call(this, {
        mainGameObject: mainGameObject,
        target: target,
        targetX: targetX,
        targetY: targetY,
        levelInformation: levelInformation,
        x: x,
        y: y
    })

    // =============================================
    if(targetY + target.height > this.y && this.y + this.height > targetY + target.height &&
        !isBottomWall  && collision && target.details.type != 'elevator' && target.details.type != "stairs-right" && target.details.type != "stairs-left" && !this.groundTouch){
        //console.log('Top side of block', target)
        if(target.details){
            if(target.details.type === 'elevator' ){
                this.ceilingTouch = false;
                return false
            }
            this.ceilingTouch = true;
            this.groundTouch = false;
        }
    }
    return floorCollision
}





/*===============

block side collision detect

============== */



function leftRightBlockInteract({mainGameObject, target, targetX, targetY, levelInformation, x, y}){
    if(this.rightWallTouch || this.leftWallTouch) return false
    let stearsStateProps = {
        state: false
    }
    let moveStopState = true;

    moveStopState =  rightSideBlockCollision.call(this, {
        mainGameObject: mainGameObject,
        target: target,
        targetX: targetX,
        targetY: targetY,
        levelInformation: levelInformation,
        x: x,
        y: y
    })
    if(!moveStopState) return false
    moveStopState =  leftSideBlockCollision.call(this, {
        mainGameObject: mainGameObject,
        target: target,
        targetX: targetX,
        targetY: targetY,
        levelInformation: levelInformation,
        x: x,
        y: y
    })
}

async function groundBlockCollision({mainGameObject, target, targetX, targetY, levelInformation, collision, isWall, isBottomWall, y}){
    if(this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC" && isWall){
            let playerMeedle = this.width/2;
        if(this.y + this.height > targetY && this.x + playerMeedle/2 > targetX &&
            ((this.x + this.width) - playerMeedle/2) < targetX + target.width){
        }
    }
    if(this.y + this.height < targetY + target.height/2 && collision && !isWall &&
        target.details.type != "stairs-left" && target.details.type != "stairs-right"){
         //console.log("Ground", isBottomWall, isWall)
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
                if(this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC"){
                    levelInformation.jumpImpuls =  levelInformation.gravityIndex; //levelInformation.gravity;
                }
                if(this.objectOwner === "groundEnemy" || this.objectOwner === "groundNPC"){
                    if(this.y + this.height - 5 > targetY){
                        this.y -= 0.01;
                    }
                }
                this.groundTouch = true;
           }
           this.currentGroundBlock = target;
       }
    }
    return true
}

function rightSideBlockCollision({mainGameObject, target, targetX, targetY, levelInformation, x, y, stearsStateProps}){
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
                    this.rightWallTouch = false;
                    this.groundTouch = false;
                    return false
                }
                this.rightWallTouch = true;
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
                return false
                //console.log('Right side of block V!')
            }
        }
        return true
}

function leftSideBlockCollision({mainGameObject, target, targetX, targetY, levelInformation, x, y, stearsStateProps}){
    if(this.x < targetX + target.width && this.x + this.width > targetX  && this.x > targetX &&
        this.y + this.height > targetY + 5 &&
        this.playerDirectionHorizontal === 'left'){
            this.leftWallTouch = true;
            if( this.y + this.height >= targetY - 20 && targetY - 20 > this.y && this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC" && target.height < 20 ||
            this.groundTouch && this.y + this.height >= targetY - 20 && targetY - 20 > this.y && this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC"){
                this.leftWallTouch = false;
                levelInformation.jumpImpuls = levelInformation.gravity * -1;
                this.groundTouch = false;
                return false
            }
            if(target.details.type === "stairs-right"){
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
                this.groundTouch = false;
                return false
            }
           if(target.details){
               if(target.details.type === 'elevator' ){
                    this.leftWallTouch = false;
                    this.groundTouch = false;
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
                return false
               //console.log('Left side of block V')
           }
    }
   return true
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
            respawnEnemy({ mainGameObject: mainGameObject, constructors: constructors, costumeBlocks: null })
        }
        saveObjectToBackPack({
            groundPlayer: groundPlayer,
            data: target.details.type,
            previewPicture: process.env.HOST + target.details.previewTexture,
            name: (target.details.objectName)? target.details.objectName : null
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
    let xPosGround = (xPos && groundPlayer.groundTouch)? xPos: levelInformation.horizontalSpeed

    for(let item of allGamesObject){
        if(item instanceof constructors.GameBackground && !item.alwaysMove){
             item.speed = ( groundPlayer.playerDirectionHorizontal === 'right')? (item.defaultSpeed/2): (item.defaultSpeed/2) * -1;
            if(!groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && xPosGround ||
                !groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && !groundPlayer.groundTouch && xPosGround) item.x -= item.speed;
            if(item.speed != 0 && !groundPlayer.groundTouch && !groundPlayer.ceilingTouch ) item.y -= item.defaultSpeed * (jumpImpuls/10)

            if(groundPlayer.currentGroundBlock){
                if(groundPlayer.currentGroundBlock.details.type === 'elevator' ){
                    let elevatorSpeed = groundPlayer.currentGroundBlock.details.speed;
                    if(item.speed != 0 && groundPlayer.groundTouch && groundPlayer.onElevator && !groundPlayer.ceilingTouch && groundPlayer.currentGroundBlock.details.moveDirection === "vertical"){

                        item.y -= (!groundPlayer.currentGroundBlock.details.currentDirection)? (item.defaultSpeed/(jumpImpuls ) * (elevatorSpeed/10)) : 0;
                    }else if(item.speed != 0 && groundPlayer.groundTouch && groundPlayer.onElevator && !groundPlayer.ceilingTouch && groundPlayer.currentGroundBlock.details.moveDirection === "horizontal"){
                        item.x -= (!groundPlayer.currentGroundBlock.details.currentDirection)? (item.defaultSpeed/(elevatorSpeed)) * -1 : item.defaultSpeed/(elevatorSpeed)
                    }
                }
            }

        }
        if(item instanceof constructors.EnemyObject){
            if(!groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && xPos){
                item.x = ( groundPlayer.playerDirectionHorizontal === 'right')? item.x - levelInformation.horizontalSpeed  : item.x - levelInformation.horizontalSpeed ;
            }
            if(item.speed != 0 && !groundPlayer.groundTouch && !groundPlayer.groundTouch && !groundPlayer.ceilingTouch) item.y += ((jumpImpuls * 0.50)* -1)
        }
    }
}




function backgroundAdjustment({mainGameObject}){
    if(!mainGameObject.gameInitData.dynamicLevelsActive || mainGameObject.gameInitData.mapBackgroundObjects.length === 0) return false
    let allGameBackgroundElements = mainGameObject.gameInitData.mapBackgroundObjects;
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    let levelInformation = mainGameObject.gameInitData.gameData.levelData;
    if(levelInformation.space) return
    let upperObjectYNumber = {
        y: Infinity,
        object: null
    };
    for(let i = 0; i < allBlocks.length; i++){
        if(allBlocks[i].y < upperObjectYNumber.y){
            upperObjectYNumber.y = allBlocks[i].y;
            upperObjectYNumber.object = allBlocks[i];
        }
    }
    let userUpperWidth = groundPlayer.y - ((upperObjectYNumber.y < Infinity)? upperObjectYNumber.y : 0);

    for(let background of allGameBackgroundElements){
        if(!background.defaultSpeed) continue
        background.y -= background.defaultSpeed*(userUpperWidth/(levelInformation.gravity*2)) - 100;//-100//(background.defaultSpeed/(levelInformation.jumpImpuls ))
        background.defaultY = background.y;
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
    npcCollisionDetect,
    backgroundAdjustment,
    computersDialog
}