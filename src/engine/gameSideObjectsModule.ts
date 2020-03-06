import { timingSafeEqual } from "crypto";

function explosionFire(targetData, mainGameObject, hitObject, SideObject){
    console.log(targetData, mainGameObject, hitObject, SideObject)
    let explosionData = {
        x: targetData.x - 30,
        y: targetData.y - 30,
        sx: 0,
        sy: 0,
        sWidth: targetData.explosion.imageWidth/targetData.explosion.numberOfItems,
        sHeight: targetData.explosion.imageHeight,//targetData.explosion.height,
        width: 70,
        height: 70,
        animationSteps: targetData.explosion.animationSteps,
        target: hitObject.objectOwner,
        numberOfItems: targetData.explosion.imageWidth/targetData.explosion.numberOfItems,
        texture: targetData.explosion.texture,
        speed: (hitObject.objectOwner != "boos")?  hitObject.enemySpeed/2: 0,
        picturesWidth: targetData.explosion.imageWidth
    }
    let sideObject = new SideObject({...explosionData});
    sideObject.img.src = sideObject.texture;
    sideObject.img.onload = () => {
        mainGameObject.gameInitData.allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects.concat(sideObject);
        console.log(mainGameObject.gameInitData.allGameSideObjects)
    }
}
function fireAnimationEnded( allGameSideObjects ){
    this.detectFrame += 1;
    if(this.detectFrame % this.animationSteps == 0){
        this.detectFrame = 0;
        this.sx += this.sWidth;
        this.x -= this.speed;
        if(this.sx >= this.picturesWidth){
            this.objectPresent = false;
            this.sx = 0;
        }
    }
    if(this.sx >= this.picturesWidth){
        this.animationState = false;
    }
}
var test = "test";

export {
    explosionFire,
    fireAnimationEnded
}
