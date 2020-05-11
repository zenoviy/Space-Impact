import { useObject, searchInPlayerInventory } from './dynamicDialog';

function elevatorPlayerMove({ mainGameObject, levelInformation, elevator, player }){
    if(player.objectOwner != "groundPlayer") return false

    let gravity = levelInformation.gravity;
    if(elevator.details.moveDirection === "vertical"){
        levelInformation.jumpImpuls = (Math.sign(elevator.details.speed) > 0)? (elevator.details.speed + gravity-1)* -1: (elevator.details.speed );
        player.onElevatorSpeed = (Math.sign(elevator.details.speed) > 0)? (elevator.details.speed + gravity -1)* -1: (elevator.details.speed);
    }else if(elevator.details.moveDirection === "horizontal"){
        levelInformation.horizontalSpeed = (elevator.details.currentDirection)? elevator.details.speed/5: (elevator.details.speed/5 ) * -1;
        levelInformation.jumpImpuls = 0;
        //player.onElevatorSpeed = (elevator.details.currentDirection)? (elevator.details.speed + gravity -1)* -1: (elevator.details.speed);
        player.onElevatorSpeed = 0;
    }

    player.ceilingTouch = false;
    player.groundTouch = true;

}



function elevatorMove({ mainGameObject }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
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
           // this.y -= this.details.speed/elevatorCompensation;
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
    //console.log("Stairs", player.isRun, player.xPos, x, y )  // .objectOwner === "groundEnemy"
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    let stairsVerticalIndex = stairs.height / stairs.width;

    //if(!stairs.details.angle) return false
    let percentOfSteps = stairs.height/stairs.details.angle;
        player.onStairs = true;
    if(!player.isRun){
       // console.log('exit stairs', player.isRun)
        player.groundTouch = true;
        levelInformation.jumpImpuls = -1;

        if(player.y < stairs.y && player.onStairs && player.x <= stairs.x && stairs.details.type === "stairs-left" ||
        player.y < stairs.y && player.onStairs && player.x/2 <= stairs.x + stairs.width && stairs.details.type === "stairs-right"){
                player.groundTouch = false;
                levelInformation.jumpImpuls = levelInformation.gravity;
        }
        return false
    }
    let xMax = Math.max(player.x + player.width, stairs.x) - Math.min(player.x + player.width, stairs.x);

    if(stairs.details.type === "stairs-left"){
        levelInformation.jumpImpuls = ( player.playerDirectionHorizontal === 'right' )?
        (levelInformation.gravity + stairsVerticalIndex) * -1 :
        levelInformation.gravity;

    }else if(stairs.details.type === "stairs-right" && player.isRun){
        levelInformation.jumpImpuls = ( player.playerDirectionHorizontal === 'right' )?
        levelInformation.gravity/stairsVerticalIndex:
        (levelInformation.gravity + stairsVerticalIndex * 2) * -1;
    }
}





// Open door by pressing E
function doorFunctionality({ mainGameObject }){
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
            console.log(currentWallBlock.details.rules.require, searchObject, this.inventory)
            if(!searchObject) return false
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


/*
requireData = searchInPlayerInventory({
    data: groundPlayer.inventory,
    searchTarget: mainGameObject.mapNearActiveElement.details.rules.require
})
"picturesWidth": 236,
        "picturesHeight": 58,
        "animationSteps": 10,
        "sx": 0,
        "sy": 0,
        "sWidth": 59,
        "sHeight": 58,
        "numberOfItems": 4,
        "numberOfVerticalItems": 1,
        "detectFrame": 0
*/

function openClosedDoorAnimation({ currentWallBlock, mainGameObject }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(currentWallBlock.details.type != 'door') return false
    let doorState = currentWallBlock.details.collision;
    let doorAnimationItems = currentWallBlock.details.numberOfItems;
    let doorPictureWidth = currentWallBlock.details.sWidth;
    if(extraSeconds % 5 === 0){
        if(doorState &&  currentWallBlock.sx > 0){
            currentWallBlock.sx -= doorPictureWidth;
        }else if(!doorState && currentWallBlock.sx >= 0 && currentWallBlock.sx < doorPictureWidth * (doorAnimationItems - 1)){
            currentWallBlock.sx += doorPictureWidth;
        }
    }
}



function leadersFunctionality(){
    if(!this.currentGroundBlock) return true
    //console.log(this.currentGroundBlock)
    let currentGroundBlock = this.currentGroundBlock;
    //console.log(currentGroundBlock)
    if(currentGroundBlock.details.type != "leader") return true
    else return false
}



export {
    elevatorPlayerMove,
    elevatorMove,
    stairsMove,
    doorFunctionality,
    openClosedDoorAnimation,
    leadersFunctionality
}