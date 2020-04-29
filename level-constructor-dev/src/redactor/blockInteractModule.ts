function collisionDetector({object, target}){
    if(!object || !target) return false
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
    if(!mainObject || !result || !mainObject.selectedBlockPanelItem) return false

    let allBlock = mainObject.allRedactorBlock;
    let currentBlock = allBlock[result.index];

    currentBlock.details = mainObject.selectedBlockPanelItem;

}


export {
    collisionDetector,
    changeObjectModel,
    moveSingleBlock,
    moveAllScene
}