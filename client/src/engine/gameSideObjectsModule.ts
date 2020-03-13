import { timingSafeEqual } from "crypto";

function explosionFire(targetData, mainGameObject, hitObject, SideObject){
    //console.log(targetData, mainGameObject, hitObject, SideObject)
    let explosionData = {
        x: targetData.x - targetData.width/2,
        y: targetData.y - targetData.width/2,
        sx: 0,
        sy: 0,
        objectOwner: "explosion",
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

function mapRanomObjectSpawn(levelObjects: any[], SideObject: any, allGameSideObjects: any[]){
    this.getSecondMeasure( mapObjectSpawner, levelObjects, SideObject, allGameSideObjects)

    function mapObjectSpawner (levelObjects, SideObject, allGameSideObjects){
        let gameData = this.showGameInfo().gameData;
        let levelData = gameData.levelData;
        let spawnProbability = this.gameRandomizer(levelData.objectProbability);
        if(spawnProbability < levelData.objectMinTimeSpawn){
            let screenData  = this.getScreenSize();
            let levelObjectProps = levelObjects[this.gameRandomizer(levelObjects.length)];
            let yPosition = (levelObjectProps.spawnDetails.position == "bottom" && typeof levelObjectProps.spawnDetails.position === "string")
            ? this.gameRandomizer(screenData.height - screenData.height/3)
            :(levelObjectProps.spawnDetails.position == "top" && typeof levelObjectProps.spawnDetails.position === "string")
            ? this.gameRandomizer(screenData.height/3)
            :(typeof levelObjectProps.spawnDetails.position === "string")? this.gameRandomizer(screenData.height)
            : levelObjectProps.spawnDetails.position ;
            
            /*let explosionData = {
                x: targetData.x - screenData.width + 200,
                y: yPosition,
                sx: 0,
                sy: 0,
                objectOwner: levelObjectProps.objectOwner,
                sWidth: objectOwner.imageWidth/objectOwner.numberOfItems,
                sHeight: objectOwner.imageHeight,
                width: objectOwner.width,
                height: objectOwner.height,
                animationSteps: objectOwner.animationSteps,
                target: null,
                numberOfItems: objectOwner.numberOfItems,
                texture: objectOwner.skinName,
                speed: objectOwner.speed,
                picturesWidth: objectOwner.imageWidth
            }
            let sideObject = new SideObject({...explosionData});
            sideObject.img.src = sideObject.texture;
            sideObject.img.onload = () => {
                mainGameObject.gameInitData.allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects.concat(sideObject);
            }*/


            //let levelObject = new SideObject()
            console.log(levelObjectProps)
        }
    }
}

export {
    explosionFire,
    fireAnimationEnded,
    mapRanomObjectSpawn
}
