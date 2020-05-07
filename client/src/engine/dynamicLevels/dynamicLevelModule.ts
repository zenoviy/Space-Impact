import * as constructors from '../../constructors';
import { getData } from '../../server/serverRequestModules';
import { objectIntersectionDetect } from '../../enemies/enemiesModules';
import {  show, hide} from '../../appMenu/appMenu';
import { backToTheMapAgain } from './playerUnitModule';

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
    let dynamicMainCharacter = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    let allEnemy = mainGameObject.gameInitData.dynamicLevelEnemy;
    dynamicMainCharacter.playerDirectionVertical = null;
    //console.log(dynamicMainCharacter.playerDirection, "Direction")
    //console.log(levelInformation.jumpImpuls)
  backgroundMoveDuringMove({
        mainGameObject: mainGameObject,
        jumpImpuls: mainGameObject.gameInitData.gameData.levelData.jumpImpuls,
        xPos: dynamicMainCharacter.xPos,
        groundPlayer: dynamicMainCharacter,
        constructors: constructors
    })

    if(Math.round(levelInformation.horizontalSpeed) > 0 &&
    levelInformation.horizontalSpeed > 0 &&
    extraSeconds % 2 === 0 ){
        levelInformation.horizontalSpeed -= 1;
        dynamicMainCharacter.xPos = 0;
    }
    if(Math.round(levelInformation.horizontalSpeed) < 0 &&
    levelInformation.horizontalSpeed < 0 &&
    extraSeconds % 2 === 0 ){
        levelInformation.horizontalSpeed += 1;
        dynamicMainCharacter.xPos = 0;
    }
    if(dynamicMainCharacter.onElevator){
       //console.log('on Elevator')
        //let gravity = levelInformation.gravity;
        //levelInformation.jumpImpuls =  gravity * -1;
        //levelInformation.jumpImpuls = 0;
       // targetObject.groundTouch = false;
    }

    //console.log(dynamicMainCharacter.leftWallTouch, dynamicMainCharacter.rightWallTouch)
    //console.log(targetObject.groundTouch, levelInformation.jumpImpuls)
    
    if(targetObject.groundTouch && !dynamicMainCharacter.onElevator) return false
    if(levelInformation.jumpImpuls != levelInformation.gravity && extraSeconds % 2 === 0){
        if(!dynamicMainCharacter.onElevator) levelInformation.jumpImpuls += 0.5;
    }
    if(dynamicMainCharacter.groundTouch){
        levelInformation.jumpImpuls = (dynamicMainCharacter.onElevatorSpeed)?  dynamicMainCharacter.onElevatorSpeed + levelInformation.gravity + 0.6: levelInformation.gravity/2 * -1;
    }
    if(dynamicMainCharacter.leftWallTouch || dynamicMainCharacter.rightWallTouch){
        levelInformation.horizontalSpeed = 0;
    }
    if(dynamicMainCharacter.ceilingTouch){
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
    backToTheMapAgain({ mainGameObject: mainGameObject, player: dynamicMainCharacter })
}

function enemyGroundGravity({mainGameObject}){
    let allEnemy
}








async function blockCollision({objectsToCollide, targetObject, callback, mainGameObject}){

    if(!objectsToCollide) return false

    targetObject.groundTouch = false;
    targetObject.rightWallTouch = false;
    targetObject.leftWallTouch = false;
    targetObject.ceilingTouch = false;
    let floorCollision = false;
    let currentActiveBlock;
    //mainGameObject.mapNearActiveElement = null;
    targetObject.onElevator = false;
    //targetObject.xPos = 0;
    //process.env.GROUND_ACTIVE_BLOCK_IN_RANGE = 'false';
    for(let item of objectsToCollide){
        //item.elevatorMove()
        if(!item) continue
        let collision = callback({object: item, target: targetObject })
        if(collision){
           if(item.details.collision){
               floorCollision = findPointOfCollision.call(targetObject, {object: targetObject, target: item, mainGameObject: mainGameObject})
           }
           if(targetObject != "groundEnemy") currentActiveBlock = useObject({ mainGameObject: mainGameObject, player: targetObject, item: item})
        }
    }
}





 function findPointOfCollision({object, target, mainGameObject}){
    let levelInformation = mainGameObject.gameInitData.gameData.levelData;
    let dynamicMainCharacter = mainGameObject.gameInitData.gameData.groundPlayerCharacter;

    let x2 = target.x + target.width;
    let y2 = target.y + target.height;
    let x1 = this.x + this.width/2;
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

    if(this.objectOwner != "groundEnemy"){
        //console.log(x, y , this.height, this.width , target.width, isWall, distance)
    }
    //console.log(collision, isWall, isBottomWall)
    //console.log(x, y , this.height, this.width , target.width, isWall, distance)

    //if( (y > this.height || x > this.width )  && !isWall && distance < this.width && this.objectOwner != "groundEnemy" ||
    //    this.objectOwner === "groundEnemy" && y > 0 && !isWall && distance < this.width){
    if(this.y + this.height -1 < target.y + target.height/2  && collision && !isWall && distance < this.width && this.objectOwner != "groundEnemy" ||
        this.objectOwner === "groundEnemy" && y > 0 && !isWall && distance < this.width){
            //console.log('Bottom side of block', target)

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
                if(this.objectOwner === "groundEnemy") this.currentGroundBlock = target;
                if(this.objectOwner != "groundEnemy") levelInformation.jumpImpuls = levelInformation.gravity
                this.groundTouch = true;
                //if(target.details.type === 'elevator' ){return false}
           }
       }
    }

    // ==========================================
    if( this.x < target.x && this.x + this.width > target.x && this.y > target.y &&
        this.y > target.y && this.y < target.y + target.height -1 && this.playerDirectionHorizontal === 'right'){
            if(target.details){
                if(target.details.type === 'elevator' ){
                    return false
                }
                this.rightWallTouch = true;
                if(this.objectOwner === "groundEnemy") this.currentWallBlock = target;
               // console.log('Right side of block V!')

            }
        }
    if(this.x < target.x + target.width && this.x + this.width > target.x  && this.y > target.y &&
        this.y  > target.y && this.y < target.y + target.height - 1 && this.playerDirectionHorizontal === 'left'){
            if(target.details){
                if(target.details.type === 'elevator' ){
                    return false
                }
                this.leftWallTouch =  true;
                if(this.objectOwner === "groundEnemy") this.currentWallBlock = target;
               // console.log('Left side of block V')

            }
    }

    //console.log(y , object.height , y > 0 , !isWall, distance, isBottomWall)
    if(this.objectOwner != "groundEnemy"){
       // console.log(target.y, target.y + target.height, this.y, this.y + this.height, collision, isBottomWall, distance, this.width/2)
    }
    //if(y > (target.height * -1) && y < 0 && !isBottomWall  && distance < this.width/2 && collision){
    if(target.y + target.height > this.y && this.y + this.height > target.y + target.height &&
         !isBottomWall  && collision && target.details.type != 'elevator' && !this.groundTouch){
       // console.log('Top side of block')
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







function useObject({ mainGameObject, player, item }){
    let currentActiveBlock;
        switch(item.details.type){
            case 'exit':
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            case 'terminal_object':
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            case 'spawner':
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            default:
                return currentActiveBlock
        }
        return currentActiveBlock
}





function displayText({ mainGameObject, player, item }){
    let contexts = mainGameObject.returnContext()
    mainGameObject.mapNearActiveElement = item;
    let details = item.details
    if(details.rules.requireText){
        renderText(details.rules.requireText, player.x, player.y - 50, 'red')
    }
    if(details.rules.successText && !details.rules.requireText && !details.rules.tips){
        renderText(details.rules.successText, player.x, player.y - 50, 'white')
    }
    if(details.rules.tips){
        renderText(details.rules.tips, player.x + 50, player.y, 'orange')
    }

    process.env.GROUND_ACTIVE_BLOCK_IN_RANGE = 'true';
    return item
    function renderText(displayText, x, y, color){
        let textDivider = displayText.split('*');

        textDivider.forEach((text, index) => {
            contexts.gameDialogField.shadowColor = 'rgba(0, 0, 0, 1)';
            contexts.gameDialogField.shadowBlur = 4;

            contexts.gameDialogField.font = 'bold 14px Courier New';
            contexts.gameDialogField.textAlign = 'left';
            contexts.gameDialogField.fillStyle = color;
            contexts.gameDialogField.fillText(text, x, y + (index * 12) )
        })
    }
}

function interactWithObjects({ mainGameObject, constructors }){
    //console.log(mainGameObject.mapNearActiveElement, mainGameObject.gameInitData.gameData.groundPlayerCharacter, process.env.GROUND_ACTIVE_BLOCK_IN_RANGE)
    if(process.env.GROUND_ACTIVE_BLOCK_IN_RANGE === 'true'){
        let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;

        let requireData = searchInPlayerInventory({
            data: groundPlayer.inventory,
            searchTarget: mainGameObject.mapNearActiveElement.details.rules.require
        })

        //console.log(groundPlayer.inventory, 22)
        if( mainGameObject.mapNearActiveElement.details.rules.contain && !mainGameObject.mapNearActiveElement.details.rules.require ||
            mainGameObject.mapNearActiveElement.details.rules.require && requireData ){
            if( mainGameObject.mapNearActiveElement.details.rules.contain == 'exit' ){

                mainGameObject.gameInitData.dynamicLevelsActive = false;
                mainGameObject.gameInitData.levelChange = true;
                mainGameObject.warpEffect(constructors)
            }
            groundPlayer.inventory = groundPlayer.inventory.concat({
                innerData: mainGameObject.mapNearActiveElement.details.rules.contain,
                texture: process.env.HOST + mainGameObject.mapNearActiveElement.details.texture
            })

            mainGameObject.mapNearActiveElement.details.rules.tips = null;
            mainGameObject.mapNearActiveElement.details.rules.contain = null;
            mainGameObject.mapNearActiveElement.details.rules.requireText = null;
            mainGameObject.mapNearActiveElement.details.rules.require = null;

            return
        }
    }
}







function searchInPlayerInventory({ data, searchTarget }){
    let searchData = data.find( data => data.innerData === searchTarget );
    return searchData
}


function openInventory(){

}





function elevatorPlayerMove({ mainGameObject, levelInformation, elevator, player }){
    if(player.objectOwner != "groundPlayer") return false

    let gravity = levelInformation.gravity;
    levelInformation.jumpImpuls = (Math.sign(elevator.details.speed) > 0)? (elevator.details.speed + gravity-1)* -1: (elevator.details.speed )  ;
    player.onElevatorSpeed = (Math.sign(elevator.details.speed) > 0)? (elevator.details.speed + gravity -1)* -1: (elevator.details.speed)  ;

    player.ceilingTouch = false;
    player.groundTouch = true;

}



function elevatorMove({ mainGameObject }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(!this.details) return false
    if(this.details.type === 'elevator'){

    let elevatorCompensation = 5;
    //if(extraSeconds % 0 != elevatorCompensation) return false
        let currentValue = this.details.currentValueOfMove;
        let defaultValue = this.details.valueOfMove;

        //console.log(this.details.speed)

        if(this.details.currentDirection){
            this.y += this.details.speed/elevatorCompensation;
            this.details.currentValueOfMove -= this.details.speed/elevatorCompensation;
            if(currentValue <= 0){
                this.details.currentDirection = false;
            }
        }else if(!this.details.currentDirection){
            this.y -= this.details.speed/elevatorCompensation;
            this.details.currentValueOfMove += this.details.speed/elevatorCompensation;

            if(currentValue >= defaultValue){
                this.details.currentDirection = true;
            }
        }
    }
}


function wallFinder({ mainGameObject, currentBlock}){
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    let currentBlockIndex = allBlocks.indexOf(currentBlock);
    let closeBlocks = allBlocks[currentBlockIndex - 1];

    let upperBlocks = false;
    if(closeBlocks && closeBlocks.details.collision){
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
            //if(!groundPlayer.leftWallTouch && !groundPlayer.rightWallTouch && xPos) item.x -= (item.defaultSpeed + xPos);
            if(item.speed != 0 && !groundPlayer.groundTouch && !groundPlayer.groundTouch && !groundPlayer.ceilingTouch){
                item.y = (item.Grapple)?  item.y - jumpImpuls  : item.y + jumpImpuls * -1;
            }
        }
    }
    groundPlayer.xPos = 0;
}

export {
    loadLevelMap,
    mapGravityInit,
    blockCollision,
    interactWithObjects,
    elevatorMove,
    backgroundMoveDuringMove
}