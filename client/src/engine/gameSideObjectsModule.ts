import { timingSafeEqual } from "crypto";

function explosionFire(targetData, mainGameObject, hitObject, SideObject){
    //console.log(targetData, mainGameObject, hitObject, SideObject)
    let explosionData = {
        x: targetData.x - targetData.width/2,
        y: targetData.y - targetData.width/2,
        sx: 0,
        sy: 0,
        sWidth: targetData.explosion.imageWidth/targetData.explosion.numberOfItems,
        sHeight: targetData.explosion.imageHeight,//targetData.explosion.height,
        width: targetData.width*2,
        height: targetData.width*2,
        animationSteps: targetData.explosion.animationSteps,
        target: hitObject.objectOwner,
        numberOfItems: targetData.explosion.imageWidth/targetData.explosion.numberOfItems,
        texture: targetData.explosion.texture,
        speed: hitObject.enemySpeed/2,
        picturesWidth: targetData.explosion.imageWidth
    }
    let sideObject = new SideObject({...explosionData});
    sideObject.img.src = sideObject.texture;
    sideObject.img.onload = () => {
        mainGameObject.gameInitData.allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects.concat(sideObject);
    }
}
function fireAnimationEnded( allGameSideObjects ){
    this.detectFrame += 1;
    this.x -= (this.speed)? this.speed: 3;
    if(this.detectFrame % this.animationSteps == 0){
        this.detectFrame = 0;
        this.sx += this.sWidth;
        if(this.sx >= this.picturesWidth){
            this.objectPresent = false;
            this.sx = 0;
        }
    }
    if(this.sx >= this.picturesWidth){
        this.animationState = false;
    }
}

export {
    explosionFire,
    fireAnimationEnded
}
