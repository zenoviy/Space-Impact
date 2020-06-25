import { useObject, searchInPlayerInventory } from './dynamicDialog';
import { playerChangeMapPosition, positionToSpawner, groundPlayerMinusLife} from './playerUnitModule';
import { initSoundObject } from '../soundModules';
import { drawRectangle } from '../../enemies/animationHitBoxModules';


function elevatorPlayerMove({ mainGameObject, levelInformation, elevator, player }){
    if(player.objectOwner != "groundPlayer") return false

    let gravity = levelInformation.gravity;
    if(elevator.details.moveDirection === "vertical"){
        levelInformation.jumpImpuls =  (Math.sign(elevator.details.speed) > 0)? -1: 0;//(Math.sign(elevator.details.speed) > 0)? (elevator.details.speed + gravity-1)* -1
        //: (elevator.details.speed );
        player.onElevatorSpeed = (Math.sign(elevator.details.speed) > 0)? (elevator.details.speed + gravity -1)* -1
        : (elevator.details.speed);
    }else if(elevator.details.moveDirection === "horizontal"){
        levelInformation.horizontalSpeed = (elevator.details.currentDirection)? elevator.details.speed/5: (elevator.details.speed/5 ) * -1;
        levelInformation.jumpImpuls = 0;
        player.onElevatorSpeed = 0;
    }
    player.ceilingTouch = false;
    //player.groundTouch = true;
}



function elevatorMove({ mainGameObject }){
    if(!this.details) return false
    if(this.details.type === 'elevator'){

    let elevatorCompensation = 5;
        let currentValue = this.details.currentValueOfMove;
        let defaultValue = this.details.valueOfMove;

        if(this.details.currentDirection){
            if(this.details.moveDirection === "vertical") this.y += this.details.speed/elevatorCompensation;
            if(this.details.moveDirection === "horizontal") this.x += this.details.speed/elevatorCompensation;
            this.details.currentValueOfMove -= this.details.speed/elevatorCompensation;
            if(currentValue <= 0){
                this.details.currentDirection = false;
            }
        }else if(!this.details.currentDirection){
            if(this.details.moveDirection === "vertical") this.y -= this.details.speed/elevatorCompensation;
            if(this.details.moveDirection === "horizontal") this.x -= this.details.speed/elevatorCompensation;
            this.details.currentValueOfMove += this.details.speed/elevatorCompensation;

            if(currentValue >= defaultValue){
                this.details.currentDirection = true;
            }
        }
    }
}







function stairsMove({ mainGameObject, levelInformation, stairs, player, x, y }){
    let stairsVerticalIndex = stairs.height / stairs.width;
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;

    player.onStairs = true;
    if(player.objectOwner === "groundEnemy" || player.objectOwner === "groundNPC"){
        if(extraSeconds % 5 === 0){
            this.y += this.jumpImpuls;
            if(stairs.details.type === "stairs-left" && player.isRun){
                player.y += ( player.playerDirectionHorizontal === 'right' )?
                (levelInformation.gravity + stairsVerticalIndex * 2) * -1 :
                0;
            }else if(stairs.details.type === "stairs-right" && player.isRun){
                player.y += ( player.playerDirectionHorizontal === 'right' )?
                0: (levelInformation.gravity + stairsVerticalIndex * 2) * -1;
            }
            this.rightWallTouch = false;
            this.leftWallTouch = false;
            return false
        }
        player.groundTouch = true;
        return false
    }
    player.onStairs = true;
    if(!player.isRun){
        player.groundTouch = true;
        levelInformation.jumpImpuls = -1;

        if(player.y < stairs.y && player.onStairs && player.x <= stairs.x && stairs.details.type === "stairs-left" ||
        player.y < stairs.y && player.onStairs && player.x + (player.width/2) <= stairs.x + stairs.width && stairs.details.type === "stairs-right"){
                player.groundTouch = false;
                levelInformation.jumpImpuls = levelInformation.gravity;
        }
        return false
    }
    let xMax = Math.max(player.x + player.width, stairs.x) - Math.min(player.x + player.width, stairs.x);

    if(stairs.details.type === "stairs-left"){

        levelInformation.jumpImpuls = ( player.playerDirectionHorizontal === 'right' )?
        levelInformation.gravity * -1: levelInformation.gravity;
        player.groundTouch = false;
    }else if(stairs.details.type === "stairs-right" && player.isRun){
        levelInformation.jumpImpuls = ( player.playerDirectionHorizontal === 'right' )?
        levelInformation.gravity : (levelInformation.gravity + stairsVerticalIndex * 2) * -1;
        player.groundTouch = false;
    }
}





// Open door by pressing E
function doorFunctionality({ mainGameObject, constructors }){
    let currentWallBlock = this.currentWallBlock;
    let currentGroundBlock = this.currentGroundBlock;
    let levelInformation = mainGameObject.gameInitData.gameData.levelData;
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    let currentBlockIndex = (currentGroundBlock)? currentGroundBlock.index : null;

    let compareBlock = allBlocks.find(block =>{
        let bottomBlockIndex = currentBlockIndex - 1;
        return block.index === bottomBlockIndex
    })
    if(!currentWallBlock || currentGroundBlock === currentWallBlock ||
        compareBlock === currentWallBlock && this.x + this.width > currentWallBlock.x + currentWallBlock.width && this.x < currentWallBlock.x + currentWallBlock.width - 5) return false

    if(currentWallBlock.details.type === 'door'){

        if(currentWallBlock.details.rules.require){
            let searchObject = searchInPlayerInventory({
                data: this.inventory,
                searchTarget: currentWallBlock.details.rules.require
            })
            if(!searchObject){
                if(currentWallBlock.details.sound){
                    initSoundObject({
                        SoundCreator: constructors.SoundCreator,
                        mainGameObject: mainGameObject,
                        soundProps: {
                            soundUrl: currentWallBlock.details.sound.second,
                            soundLoop: false
                        }
                    })
                }
                return false
            }
        }
        if(currentWallBlock.details.collision === true){
            currentWallBlock.details.rules.successText = "door is open";
            currentWallBlock.details.collision = false;
        } else {
            currentWallBlock.details.rules.successText = "door is closed";
            currentWallBlock.details.collision = true;
        }
        levelInformation.horizontalSpeed = 3;
    }
}



async function teleportFunctionality({ mainGameObject }){
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    let currentGroundBlock = this.currentGroundBlock;
    let currentBlockIndex = (currentGroundBlock)? currentGroundBlock.index : null;
    if(!currentGroundBlock || !currentBlockIndex) return false
    let teleportDoor = allBlocks.find(block =>{
        let bottomBlockIndex = currentBlockIndex - 1;
        return block.index == bottomBlockIndex
    });

    if(!teleportDoor) return false
    if(!teleportDoor.details ) return false
    if(teleportDoor.details.type === "teleport_door"){
        if(teleportDoor.details.rules.require){
            let searchObject = searchInPlayerInventory({
                data: this.inventory,
                searchTarget: teleportDoor.details.rules.require
            })
            if(!searchObject){
                return false
            }
        }
        let doorId = teleportDoor.details.rules.doorId
        let targetId = teleportDoor.details.rules.targetId

        let spawnPoint = allBlocks.filter(obj =>{
            if(obj.details) return obj.details.type === "teleport_door";
        }).find(obj => {
            if(obj.details.rules) return targetId == obj.details.rules.doorId;
        })
        if(!spawnPoint) return false
        let positionRange = await playerChangeMapPosition({newSpawnPoint: spawnPoint, mainGameObject: mainGameObject})
        backgroundChange({mainGameObject: mainGameObject, positionRange: positionRange})
    }
}



function openClosedDoorAnimation({ currentWallBlock, mainGameObject, constructors }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(currentWallBlock.details.type != 'door') return false

    let doorState = currentWallBlock.details.collision;
    let doorAnimationItems = currentWallBlock.details.numberOfItems;
    let doorPictureWidth = currentWallBlock.details.sWidth;

    if(extraSeconds % 5 === 0){
        if(doorState &&  currentWallBlock.sx > 0){
            currentWallBlock.sx -= doorPictureWidth;
            doorSound({mainGameObject: mainGameObject, door: currentWallBlock, constructors: constructors})
        }else if(!doorState && currentWallBlock.sx >= 0 && currentWallBlock.sx < doorPictureWidth * (doorAnimationItems - 1)){
            currentWallBlock.sx += doorPictureWidth;
            doorSound({mainGameObject: mainGameObject, door: currentWallBlock, constructors: constructors})
        }
    }
}



function doorSound({mainGameObject, door, constructors}){
    if(!door.details.sound) return false
   initSoundObject({
        SoundCreator: constructors.SoundCreator,
        mainGameObject: mainGameObject,
        soundProps: {
            soundUrl: door.details.sound.main,
            soundLoop: false
        }
    })
}


function leadersFunctionality(){
    if(this.objectOwner === "groundEnemy" || this.objectOwner === "groundNPC") return false
    if(!this.currentGroundBlock) return true
    let currentGroundBlock = this.currentGroundBlock;
    if(currentGroundBlock.details.type != "leader") return true
    else return false
}



function backgroundChange({mainGameObject, positionRange}){
    let levelInformation = mainGameObject.gameInitData.gameData.levelData;
    let allGameBackgroundElements = mainGameObject.gameInitData.mapBackgroundObjects;
    for(let item of allGameBackgroundElements){
        item.y += (item.defaultSpeed/(10)) * (positionRange.yRangeCompensation -1);
    }
}




function deadlyBlocks({mainGameObject, curentBlock, constructors}){
    if(!curentBlock.details) return false
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(this.objectOwner != "groundEnemy" && this.objectOwner != "groundNPC" && curentBlock.details.deadly){
        let allEnemy = mainGameObject.gameInitData.dynamicLevelEnemy;
        if((extraSeconds % 50 === 0 && curentBlock.details.id != "deadly-spikes" && curentBlock.details.id != "deadly-ice-spikes-1")
        || curentBlock.details.id === "deadly-spikes" || curentBlock.details.id === "deadly-ice-spikes"){
             let allBlocks = [].concat(mainGameObject.gameInitData.dynamicLevelMapBlocks, allEnemy);
            positionToSpawner({mainGameObject: mainGameObject, allBlocks: allBlocks})
            groundPlayerMinusLife({mainGameObject: mainGameObject, constructors: constructors})
        }
    }else if(curentBlock.details.deadly && (this.objectOwner === "groundEnemy" || this.objectOwner === "groundNPC")){
        this.healthPoint -= 1;
        if(this.healthPoint <= 0){
            this.objectPresent = false;
        }
    }
}

export {
    elevatorPlayerMove,
    elevatorMove,
    stairsMove,
    doorFunctionality,
    openClosedDoorAnimation,
    leadersFunctionality,
    teleportFunctionality,
    deadlyBlocks
}