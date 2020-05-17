import { positionReducer } from './blockDataRedactorModule';


function collisionDetector({object, target}){
    if(!object || !target) return false

    target.width = parseInt(target.width)
    target.height = parseInt(target.height)
    object.width = parseInt(object.width)
    object.height = parseInt(object.height)
    let xMin = Math.min(object.xMove, target.x);
    let yMin = Math.min(object.yMove, target.y);

    let xMax = Math.max(object.xMove + object.width, target.x + target.width);
    let yMax = Math.max(object.yMove + object.height, target.y + target.height);


    let resX = xMax - xMin;
    let resY = yMax - yMin;
    let collision = (resX > object.width || resY > object.height)? false : "collision";

    if(collision) return object
    else return false
}


function moveSingleBlock({xMoveValue, yMoveValue}){
    if(xMoveValue) this.xMove += xMoveValue;
    if(yMoveValue) this.yMove += yMoveValue;
}


function moveAllScene({ mainObject, xMoveValue, yMoveValue }){
    for( let singleBlock of mainObject.allRedactorBlock){
        singleBlock.moveSingleBlock({ xMoveValue: xMoveValue, yMoveValue: yMoveValue })
    }
}


function changeObjectModel({ result, mainObject }){
    if(!mainObject || !result || !mainObject.selectedBlockPanelItem || mainObject.miniMapActive || mainObject.activeDescriptionFields) return false

    let allBlocks = mainObject.allRedactorBlock;
    let currentBlock = allBlocks[result.index];

    //console.log(mainObject.selectedBlockPanelItem, "<<", currentBlock)

    let selectedBlockPanelItem = Object.assign({}, mainObject.selectedBlockPanelItem);
    //console.log( mainObject.selectedBlockPanelItem, selectedBlockPanelItem, currentBlock )
   // console.log(mainObject.selectedBlockPanelItem, "|")
    if(!mainObject.selectedBlockPanelItem.destroyer){

        if(mainObject.selectedBlockPanelItem.type === "background-wall" && currentBlock.details){
            selectedBlockPanelItem.width = mainObject.blockSize;
            selectedBlockPanelItem.height = mainObject.blockSize;
            selectedBlockPanelItem.x = currentBlock.x;
            selectedBlockPanelItem.y = currentBlock.y;
            selectedBlockPanelItem.xMove = currentBlock.xMove;
            selectedBlockPanelItem.yMove = currentBlock.yMove;

            currentBlock.backgroundTexture = selectedBlockPanelItem;
            return false
        }
        currentBlock.details = selectedBlockPanelItem;
        //console.log(selectedBlockPanelItem)
    }else if(mainObject.selectedBlockPanelItem.destroyer === 'destroyer'){
        if(currentBlock.details && currentBlock.details.valueOfMove){
            positionReducer({ allBlocks: allBlocks })
        }
        currentBlock.width = mainObject.blockSize;
        currentBlock.height = mainObject.blockSize;

        currentBlock.details = null;
        currentBlock.backgroundTexture = null;
    }else if(mainObject.selectedBlockPanelItem.destroyer === 'redactorDecoration'){
        currentBlock.backgroundTexture = null;
    }

   // console.log(mainObject.selectedBlockPanelItem, "||")
}


export {
    collisionDetector,
    changeObjectModel,
    moveSingleBlock,
    moveAllScene
}