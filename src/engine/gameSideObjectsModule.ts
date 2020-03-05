function explosionFire(targetData, mainGameObject, hitObject, SideObject){
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
    let sideObject = new SideObject({...explosionData});
    sideObject.img.src = sideObject.texture;
    sideObject.img.onload = () => {
        mainGameObject.gameInitData.allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects.concat(sideObject);
    }
    console.log(mainGameObject.gameInitData.allGameSideObjects)
}
var test = "test";

export {
    explosionFire,
    test
}
