var { sideObjectsConstructor } = require('../constructors/gameSideObjectConstructor');

function explosionFire(targetData, mainGameObject, hitObject ){
    //console.log(targetData, mainGameObject, hitObject)
    let explosionData = {
        x: targetData.x,
        y: targetData.y,
        sx: 0,
        sy: 0,
        picturesWidth: targetData.explosion.imageWidth,
        sHeight: targetData.explosion.height,
        width: targetData.explosion.imageWidth/targetData.explosion.numberOfItems,
        height: targetData.explosion.height,
        animationSteps: targetData.explosion.animationSteps,
        target: hitObject.objectOwner,
        numberOfItems: targetData.explosion.imageWidth/targetData.explosion.numberOfItems,
        texture: targetData.explosion.texture
    }
    let sideObject = new sideObjectsConstructor.SideObject({...explosionData});
    sideObject.img.src = sideObject.texture;
    sideObject.img.onload = () => {
        mainGameObject.gameInitData.allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects.concat(sideObject);
    }
    console.log(mainGameObject.gameInitData.allGameSideObjects)
}
function fireAnimationEnded( allGameSideObjects ){
    //this.enemyAnimation(this.animationState)
    //if(this.sx >= this.picturesWidth){
      //  this.animationState = false;
    //}
}

module.exports.sideObjectsModules = {
    explosionFire: explosionFire,
    fireAnimationEnded: fireAnimationEnded
}
