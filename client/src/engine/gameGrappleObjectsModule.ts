import { getData } from '../server/serverRequestModules';
import { shopInventory,
    selectInventoryItem,
    inventoryFreeItem,
    putInsideInventory,
    replaceItemFromStorage,
    putItemToStorage,
    saleItem,
    hideDescriptionArea,
    showDescriptionArea,
    salePercentAddToPrice} from '../ui/gameInventoryModules';



async function loadGrabbleToSideObject(mainGameObject, target, GrappleObject){
    //let gameInfo = mainGameObject.showGameInfo(),
    //gameData = gameInfo.gameData,
    //screenData = mainGameObject.getScreenSize();

    let randomApear = mainGameObject.gameRandomizer(target.probability);
    if(randomApear > 10 && target.name != 'goldCoin' || randomApear > 10 && target.name != 'lifepoint') return false
    let context = mainGameObject;

    let sideObject = this;
        let objectData = {
            x: (target.x)? target.x + context.gameRandomizer(sideObject.width) : window.innerWidth + 100,
            y: (target.y)? target.y + context.gameRandomizer(sideObject.height) :context.gameRandomizer(window.innerHeight),
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
            grapplePower: target.grapplePower,
            sound: target.sound
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
    grappleData = gameData.grappleObjects;
    //screenData = this.getScreenSize();

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


async function collectObjectsToInventory({allGameSideObjects, playerShipData, mainGameObject}){
    let shopAreaItems = mainGameObject.shopArea.selectedShopItem;
        let playerObject = mainGameObject.gameInitData.gameData.playerObject
        let playerObjectData = playerObject.data;
    //console.log('grappleGun', this.grapplePower.content.name, playerObjectData)


    let inventoryInformation = inventoryFreeItem({inventory: playerObjectData.inventory, inventoryCapacity: playerObjectData.inventoryCapacity})
   // console.log(inventoryInformation, playerObjectData.inventory, playerObjectData.inventoryCapacity, "<<<")
    let headers = {"usercoins" : Infinity,
        "itemName": this.grapplePower.content.name}
        if(!inventoryInformation['firstEmptyItem']){
            mainGameObject.shopArea.shopErrorMessage.innerHTML = 'Your`s inventeary is full';
            console.log('Your`s inventeary is full')
            return false
        }
    let data = await getData({url: process.env.HOST + process.env.SHOP_GUNS_URL, method: 'PUT', data: null, headers: headers})
 
       // console.log(data, " DDD")
    putInsideInventory({mainGameObject, saveItem: data.data, inventoryItem: inventoryInformation['firstEmptyItem']})

}

export {
    initGrappleObject,
    addPlayerLife,
    collectCoin,
    loadGrabbleToSideObject,
    collectObjectsToInventory
}