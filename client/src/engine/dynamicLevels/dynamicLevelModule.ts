import * as constructors from '../../constructors';
import { getData } from '../../server/serverRequestModules';
import { objectIntersectionDetect } from '../../enemies/enemiesModules';
import {  show, hide} from '../../appMenu/appMenu';

// process.env.DYNAMIC_LEVEL_BLOCKS
// process.env.HOST
async function loadLevelMap({ levelMapName, DynamicBlockConstructor }){
    let dynamicMap = process.env.HOST + process.env.DYNAMIC_LEVEL_BLOCKS + '/' + levelMapName;

    let resultData = await getData({
        url: dynamicMap,
        method: 'GET',
        data: null,
        headers: null
    })
    let spawnPoint = resultData.allMapObjects.find(obj => {
        if(obj.details) return obj.details.type === "spawner";
    })
    let xRangeCompensation = window.innerWidth/2 - (spawnPoint.x + spawnPoint.width/2);
    let yRangeCompensation = window.innerHeight/2 - spawnPoint.y;


    console.log(xRangeCompensation, yRangeCompensation, spawnPoint.x, spawnPoint.y)
    let levelBlocks = await resultData.allMapObjects.filter(block => {
       return block.details
    }).map(block => {
        //block.x = block.xMove;
        //block.y = block.yMove;
        block.x += xRangeCompensation;
        block.y += yRangeCompensation;
        return new DynamicBlockConstructor({...block })
    })


    return levelBlocks
}


function mapGravityInit({mainGameObject, mapObjects, targetObject}){
    let levelInformation = mainGameObject.gameInitData.gameData.levelData;
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    let dynamicMainCharacter = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    dynamicMainCharacter.playerDirectionVertical = null;
    //console.log(dynamicMainCharacter.playerDirection, "Direction")
    if(targetObject.groundTouch) return false
    if(levelInformation.jumpImpuls != levelInformation.gravity && extraSeconds % 2 === 0){
        levelInformation.jumpImpuls += 0.5;
    }
    if(Math.round(levelInformation.horizontalSpeed) > 0 &&
    levelInformation.horizontalSpeed > 0 &&
    extraSeconds % 2 === 0 ){
        levelInformation.horizontalSpeed -= 1;
    }
    if(Math.round(levelInformation.horizontalSpeed) < 0 &&
    levelInformation.horizontalSpeed < 0 &&
    extraSeconds % 2 === 0 ){
        levelInformation.horizontalSpeed += 1;
    }
    if(dynamicMainCharacter.leftWallTouch || dynamicMainCharacter.rightWallTouch){
        levelInformation.horizontalSpeed = 0;
    }
    if(dynamicMainCharacter.ceilingTouch){
        levelInformation.jumpImpuls = 1;
    }
    if(dynamicMainCharacter.groundTouch){
        levelInformation.jumpImpuls = -1;
    }

     if(levelInformation.jumpImpuls > levelInformation.gravity*3) levelInformation.jumpImpuls = levelInformation.gravity;
     if(levelInformation.jumpImpuls * -1 > levelInformation.gravity*3) levelInformation.jumpImpuls = levelInformation.gravity * -1;

    for(let item of mapObjects){
        item.y -= (levelInformation.jumpImpuls)? levelInformation.jumpImpuls : 0;
        item.x -= (levelInformation.horizontalSpeed)? levelInformation.horizontalSpeed : 0;
    }
}








function blockCollision({objectsToCollide, targetObject, callback, mainGameObject}){
    if(!objectsToCollide) return false


    let floorCollision = false;
    targetObject.groundTouch = false;
    targetObject.leftWallTouch = false;
    targetObject.rightWallTouch = false;
    targetObject.ceilingTouch = false;
    mainGameObject.mapNearActiveElement = null;
    process.env.GROUND_ACTIVE_BLOCK_IN_RANGE = 'false';
    for(let item of objectsToCollide){
        item.elevatorMove()
        if(!item) continue
        let collision = callback({object: item, target: targetObject })
        if(collision){
            //console.log('colision')
           if(item.details.collision){
               floorCollision = findPointOfCollision({object: targetObject, target: item, mainGameObject: mainGameObject})
           }
           useObject({ mainGameObject: mainGameObject, player: targetObject, item: item})
        }
    }
}





function findPointOfCollision({object, target, mainGameObject}){
    let levelInformation = mainGameObject.gameInitData.gameData.levelData;

    let x2 = target.x + target.width;
    let y2 = target.y + target.height;
    let x1 = object.x + object.width/2;
    let y1 = object.y + object.height;
    var x = x2 - x1;
    var y = y2 - y1;

    let floorCollision = false;
    var distance = Math.sqrt(x*x + y*y)-(object.height/2 + target.height/2);
    if(!distance) return false
    var isWall = wallFinder({ mainGameObject: mainGameObject, currentBlock: target})
    var isBottomWall = wallBottomFinder({ mainGameObject: mainGameObject, currentBlock: target})

    // console.log(x, y, object.height, "<<<",target.x, target.y)
    //console.log(y , object.height , y > 0 , !isWall, distance)
    if(y > object.height && y > 0 && !isWall && distance < object.width){
        console.log('Bottom side of block', target)
       if(target.details){
           if(target.details.type === 'elevator' ){
               elevatorPlayerMove({
                   mainGameObject: mainGameObject,
                    levelInformation: levelInformation,
                    elevator: target,
                    player: object
                })
           }else{
               levelInformation.jumpImpuls = levelInformation.gravity ;
               object.groundTouch = true;
           }
       }
    }
    if(x < 0 && x > (target.width * -1) && y <= object.height ){
       // console.log('Right side of block')
       if(target.details){
            if(target.details.type === 'elevator' ){
                return false
            }
            object.rightWallTouch = true;

        }
    }
    if(x < target.width && x > 0 && y <= object.height){
       // console.log('Left side of block')
       if(target.details){
            if(target.details.type === 'elevator' ){
                return false
            }
            object.leftWallTouch = true;

        }
    }
    //console.log(y , object.height , y > 0 , !isWall, distance)
    if(y > (target.height * -1) && y < 0 && !isBottomWall  && distance < object.width/2){
       // console.log('Top side of block')
       
        if(target.details){
            if(target.details.type === 'elevator' ){
                object.ceilingTouch = false;
                return false
            }
            object.ceilingTouch = true;
        }
    }
    return floorCollision
}







function useObject({ mainGameObject, player, item }){
        switch(item.details.type){
            case 'exit':
                displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            case 'terminal_object':
                displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            default:
                return false
        }
}

/*
type": "exit",
        "collision": false,
        "rules": {
            "require": "computer_data",
            "contain": "exit",
            "requireText": "You must find computer Data first",
            "successText": "Congratulation",
            "innerObject": null
        }
    },


"id": "computer_with_data",
        "texture": "/level-creator/assets/charactersObjects/computer-3.png",
        "description": "computer with data",
        "type": "terminal_object",
        "collision": false,
        "rules": {
            "tips": "Press 'E' to collect the data",
            "require": null,
            "contain": "computer_data",
            "requireText": null,
            "successText": "You get computer Data now you can continue you journey",
            "innerObject": null
        }
*/
function displayText({ mainGameObject, player, item }){
    let contexts = mainGameObject.returnContext()
    let displayText = '';
    mainGameObject.mapNearActiveElement = item;
    let details = item.details
    if(details.rules.requireText) displayText = details.rules.requireText;
    if(details.rules.successText && !details.rules.requireText) displayText = details.rules.successText;
    if(details.rules.tips) displayText = details.rules.tips;
    contexts.gameActionField.font = 'bold 14px Courier New';
    contexts.gameActionField.fillStyle = "white";
    contexts.gameActionField.fillText(displayText, player.x, player.y - 50 )

    process.env.GROUND_ACTIVE_BLOCK_IN_RANGE = 'true';
}

function interactWithObjects({ mainGameObject, constructors }){
    if(process.env.GROUND_ACTIVE_BLOCK_IN_RANGE === 'true'){
        let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;

       let requireData = searchInPlayerInventory({data: groundPlayer.inventory, searchTarget: mainGameObject.mapNearActiveElement.details.rules.require})

        if(
            mainGameObject.mapNearActiveElement.details.rules.contain && !mainGameObject.mapNearActiveElement.details.rules.require ||
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
    let gravity = levelInformation.gravity;
    levelInformation.jumpImpuls = (elevator.details.speed/4 + gravity) * -1;

    player.ceilingTouch = false;
    player.groundTouch = true;

}



function elevatorMove(){
    if(!this.details) return false
    if(this.details.type === 'elevator'){
        let currentValue = this.details.currentValueOfMove;
        let defaultValue = this.details.valueOfMove;

        if(this.details.currentDirection){
            this.y += this.details.speed/4;
            this.details.currentValueOfMove -= this.details.speed/4;
            if(currentValue <= 0){
                this.details.currentDirection = false;
            }
        }else if(!this.details.currentDirection){
            this.y -= this.details.speed/4;
            this.details.currentValueOfMove += this.details.speed/4;

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
        bottomBlocks = (currentBlock.y + closeBlocks.height === closeBlocks.y)? true : false
    }
    return (bottomBlocks)? true : false
}



export {
    loadLevelMap,
    mapGravityInit,
    blockCollision,
    interactWithObjects,
    elevatorMove
}