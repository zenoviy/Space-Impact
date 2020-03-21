
async function loadGrabbleToSideObject(mainGameObject, target, GrappleObject){
    let gameInfo = mainGameObject.showGameInfo(),
    gameData = gameInfo.gameData,
    screenData = mainGameObject.getScreenSize();

    let context = mainGameObject;
    let sideObject = this;
        let objectData = {
            x: (target.x)? target.x + context.gameRandomizer(sideObject.width) : screenData.width + 100,
            y: (target.y)? target.y + context.gameRandomizer(sideObject.height) :context.gameRandomizer(screenData.height),
            sx: 0,
            sy: 0,
            objectOwner: target.objectOwner,
            sWidth: target.imageWidth/target.numberOfItems,
            sHeight: target.imageHeight,
            width: target.width,
            height: target.height,
            animationSteps: target.animationSteps,
            target: null,
            numberOfItems: target.numberOfItems,
            texture: target.skinName,
            speed: target.speed,
            picturesWidth: target.imageWidth,
            healthPoint: target.healthPoint,
            damage: target.damage,
            isBackground: null,
            explosion: target.explosionAnimation,
            pointsPerUnit: target.pointsPerUnit,
            isGrapple: target.isGrapple,
            grapplePower: target.grapplePower
        }
        let grappleObject = new GrappleObject({...objectData});
        grappleObject.img.onload = () => {
            mainGameObject.gameInitData.grappleObjectOnScreen = true;
            mainGameObject.gameInitData.allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects.concat(grappleObject);
        }
        grappleObject.img.src = await grappleObject.texture;
}
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

        loadGrabbleToSideObject(this, randomObject, GrappleObject)
    }
}



function addPlayerLife({ allGameSideObjects, playerShipData, mainGameObject }){
    playerShipData.numberOflife += this.grapplePower.value;
}
function collectCoin({ allGameSideObjects, playerShipData, mainGameObject }){
    let gameInfo = mainGameObject.showGameInfo(),
    gameData = gameInfo.gameData,
    levelData = gameData.levelData,
    grappleData = gameData.grappleObjects

    gameData.gameCoins += this.grapplePower.value;
}

export {
    initGrappleObject,
    addPlayerLife,
    collectCoin,
    loadGrabbleToSideObject
}