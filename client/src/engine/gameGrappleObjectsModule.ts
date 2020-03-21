async function initGrappleObject(GrappleObject, playerShipData){
    if(this.gameInitData.grappleObjectOnScreen) return false

    let gameInfo = this.showGameInfo(),
    gameData = gameInfo.gameData,
    levelData = gameData.levelData,
    grappleData = gameData.grappleObjects,
    screenData = this.getScreenSize();

    let spawnProbability = this.gameRandomizer(levelData.grapleObjectProbability);
    if(spawnProbability < 1){
        let randomObject = grappleData[this.gameRandomizer(grappleData.length)];

        switch (randomObject.grapplePower.name){
            case "life":
                if(playerShipData.numberOflife >= playerShipData.maxOfLife - 1) return
                break
            default:
                false
        }

        let context = this;
        let objectData = {
            x: screenData.width + 100,
            y: context.gameRandomizer(screenData.height),
            sx: 0,
            sy: 0,
            objectOwner: randomObject.objectOwner,
            sWidth: randomObject.imageWidth/randomObject.numberOfItems,
            sHeight: randomObject.imageHeight,
            width: randomObject.width,
            height: randomObject.height,
            animationSteps: randomObject.animationSteps,
            target: null,
            numberOfItems: randomObject.numberOfItems,
            texture: randomObject.skinName,
            speed: randomObject.speed,
            picturesWidth: randomObject.imageWidth,
            healthPoint: randomObject.healthPoint,
            damage: randomObject.damage,
            isBackground: null,
            explosion: randomObject.explosionAnimation,
            pointsPerUnit: randomObject.pointsPerUnit
        }
        let grappleObject = new GrappleObject({...objectData});
        grappleObject.img.onload = () => {
            this.gameInitData.grappleObjectOnScreen = true;
            this.gameInitData.allGameSideObjects = this.gameInitData.allGameSideObjects.concat(grappleObject);
        }
        grappleObject.img.src = await grappleObject.texture;
    }
}
function addPlayerLife({ allGameSideObjects, playerShipData }){
    console.log(allGameSideObjects)
    console.log(playerShipData)
    playerShipData.numberOflife += 1;
}

export {
    initGrappleObject,
    addPlayerLife
}