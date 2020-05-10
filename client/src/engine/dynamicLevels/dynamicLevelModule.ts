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
    levelRestore
} from './dynamicDialog';

// process.env.DYNAMIC_LEVEL_BLOCKS
// process.env.HOST
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
    let xRangeCompensation = window.innerWidth/2 - (spawnPoint.x + spawnPoint.width/2);
    let yRangeCompensation = window.innerHeight/2 - spawnPoint.y;


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


function mapGravityInit({mainGameObject, mapObjects, targetObject, constructors}){
    let levelInformation = mainGameObject.gameInitData.gameData.levelData;
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    let allEnemy = mainGameObject.gameInitData.dynamicLevelEnemy;
    groundPlayer.playerDirectionVertical = null;
    //console.log(groundPlayer.playerDirection, "Direction")
    //console.log(levelInformation.jumpImpuls)
  backgroundMoveDuringMove({
        mainGameObject: mainGameObject,
        jumpImpuls: mainGameObject.gameInitData.gameData.levelData.jumpImpuls,
        xPos: groundPlayer.xPos,
        groundPlayer: groundPlayer,
        constructors: constructors
    })

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

function enemyGroundGravity({mainGameObject}){
    let allEnemy
}








async function blockCollision({objectsToCollide, targetObject, objectIntersectionDetect, mainGameObject}){
    if(!objectsToCollide) return false

    targetObject.groundTouch = false;
    targetObject.rightWallTouch = false;
    targetObject.leftWallTouch = false;
    targetObject.ceilingTouch = false;
    targetObject.onStairs = false;
    //targetObject.onLeader = false;
    targetObject.currentWallBlock = null;
    let floorCollision = false;
    let currentActiveBlock;
    //mainGameObject.mapNearActiveElement = null;
    targetObject.onElevator = false;
    //targetObject.xPos = 0;
    //process.env.GROUND_ACTIVE_BLOCK_IN_RANGE = 'false';
    for(let item of objectsToCollide){
        //item.elevatorMove()
        if(!item) continue
        let collision = objectIntersectionDetect({object: item, target: targetObject })
        if(collision){
           if(item.details.collision || item.details.type === 'door' || item.details.type === 'leader'){
               floorCollision = findPointOfCollision.call(targetObject, {object: targetObject, target: item, mainGameObject: mainGameObject})
           }
           if(targetObject.objectOwner != "groundEnemy") currentActiveBlock = useObject({ mainGameObject: mainGameObject, player: targetObject, item: item})
        }
    }
    //targetObject.isRun = false;
}







 function findPointOfCollision({object, target, mainGameObject}){
    let levelInformation = mainGameObject.gameInitData.gameData.levelData;
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;

    let blockRelativeXPos = ((target.blockRelativeXPos)? parseInt(target.blockRelativeXPos) : 0);
    let blockRelativeYPos = ((target.blockRelativeYPos)? parseInt(target.blockRelativeYPos) : 0);

    let targetX = target.x + blockRelativeXPos;
    let targetY = target.y + blockRelativeYPos;

    //console.log(targetX, targetY, target.x, target.y)

    let x2 = targetX  + target.width;
    let y2 = targetY + target.height;
    let x1 = this.x + (this.objectOwner != "groundEnemy")? this.width/2 : this.width;
    let y1 = this.y + this.height;
    var x = x2 - x1;
    var y = y2 - y1;

    let floorCollision = false;
    var distance = Math.sqrt(x*x + y*y)-(this.height/2 + target.height/2);
    
    if(!distance) return false
    var isWall = wallFinder({ mainGameObject: mainGameObject, currentBlock: target})
    var isBottomWall = wallBottomFinder({ mainGameObject: mainGameObject, currentBlock: target})

    let collision = (Math.sign(x) < 0 || Math.sign(x) < 0)? false : "collision";

    if(target.details.type === 'elevator' && this.objectOwner != "groundEnemy" ){
        this.onElevator = true;
    }


    if(target.details.type === "stairs-left" || target.details.type === "stairs-right"){
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


    if(this.y + this.height < targetY + target.height/2 && collision && !isWall ){
        //console.log("Ground To" )
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
                if(this.objectOwner != "groundEnemy") levelInformation.jumpImpuls = levelInformation.gravity
                this.groundTouch = true;
           }
       }
    }
    if(this.objectOwner != "groundEnemy" && target.details.type === "leader" ){
        this.onLeader = true;
        this.ceilingTouch = false;
        this.rightWallTouch = false;
        this.leftWallTouch = false;
        return false
    }

    // ==========================================
    if( this.x < targetX && this.x + this.width > targetX &&
        this.y + this.height > targetY + 5 && this.playerDirectionHorizontal === 'right'){
            if( this.y + this.height >= targetY - 20 && targetY - 20 > this.y && this.objectOwner != "groundEnemy" && target.height < 20 ||
            this.groundTouch && this.y + this.height >= targetY - 20 && targetY - 20 > this.y && this.objectOwner != "groundEnemy"){
                this.rightWallTouch = false;
                levelInformation.jumpImpuls = levelInformation.gravity * -1 //this.height * -1;
                this.groundTouch = false;
                return false
            }
            if(target.details){
                if(target.details.type === 'elevator' ){
                    return false
                }
                this.rightWallTouch = true;
               if(!target.details.collision && target.details.type === 'door'){
                    this.rightWallTouch = false;
                    this.groundTouch = true;
                }
                this.currentWallBlock = target;
                //console.log('Right side of block V!')
            }
        }

    if(this.x < targetX + target.width && this.x + this.width > targetX  && this.x > targetX &&
        this.y + this.height > targetY + 5 &&
        this.playerDirectionHorizontal === 'left'){
            if( this.y + this.height >= targetY - 20 && targetY - 20 > this.y && this.objectOwner != "groundEnemy" && target.height < 20 ||
            this.groundTouch && this.y + this.height >= targetY - 20 && targetY - 20 > this.y && this.objectOwner != "groundEnemy"){
                this.leftWallTouch = false;
                levelInformation.jumpImpuls = levelInformation.gravity * -1 //this.height * -1;
                this.groundTouch = false;
                return false
            }
           if(target.details){
               if(target.details.type === 'elevator' ){
                   return false
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
        bottomBlocks = (currentBlock.y + currentBlock.height === closeBlocks.y)? true : false
    }
    return (bottomBlocks)? true : false
}





function backgroundMoveDuringMove({mainGameObject, jumpImpuls, xPos, groundPlayer, constructors}){
    let allBullets = mainGameObject.gameInitData.allGameBullets;
    let allGameFlyEnemyes = mainGameObject.gameInitData.allGameEnemies;
    let allGameBackgroundElements = mainGameObject.gameInitData.mapBackgroundObjects;
    let allGroundGameBullets = mainGameObject.gameInitData.allGroundGameBullets;
    //allGameSideObjects
    let allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects;
    let allGamesObject = [].concat(allGameBackgroundElements, allGameFlyEnemyes, allBullets, allGameSideObjects, allGroundGameBullets)

    for(let item of allGamesObject){
        if(item instanceof constructors.GameBackground ){
             item.speed = ( groundPlayer.playerDirectionHorizontal === 'right')? (item.defaultSpeed/2): (item.defaultSpeed/2) * -1;
            if(!groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && xPos ||
                !groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && !groundPlayer.groundTouch && xPos) item.x -= item.speed;
            if(item.speed != 0 && !groundPlayer.groundTouch && !groundPlayer.groundTouch && !groundPlayer.ceilingTouch)item.y -= item.defaultSpeed * (jumpImpuls/10)
            continue
        }
        if(item instanceof constructors.EnemyObject){
            if(!groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && xPos){
                item.x = ( groundPlayer.playerDirectionHorizontal === 'right')? item.x - xPos  : item.x - xPos ;
            }
            if(item.speed != 0 && !groundPlayer.groundTouch && !groundPlayer.groundTouch && !groundPlayer.ceilingTouch) item.y += ((jumpImpuls * 0.50)* -1)
        }
        if(item instanceof constructors.BulletConstruct || item instanceof constructors.SideObject ||
             item instanceof constructors.GrappleObject  ){
                if(!groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && xPos){
                    item.x = (item.Grapple && groundPlayer.playerDirectionHorizontal === 'right')? item.x + xPos:
                    ( item.Grapple && groundPlayer.playerDirectionHorizontal === 'left' )?  item.x - xPos :
                    ( groundPlayer.playerDirectionHorizontal === 'right' )? item.x - xPos  : item.x - xPos ;
                }
            if(item.speed != 0 && !groundPlayer.groundTouch && !groundPlayer.groundTouch && !groundPlayer.ceilingTouch){
                item.y = (item.Grapple)?  item.y - jumpImpuls  : item.y + jumpImpuls * -1;
            }
        }
    }
    //groundPlayer.xPos = 0;
}

export {
    loadLevelMap,
    mapGravityInit,
    blockCollision,
    interactWithObjects,
    elevatorMove,
    backgroundMoveDuringMove,
    stairsMove
}