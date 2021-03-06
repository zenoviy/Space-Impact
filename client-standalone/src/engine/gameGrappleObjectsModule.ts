import { getShopServerData } from '../server/gameDataRequestsServicesModule';
import {
    inventoryFreeItem,
    putInsideInventory } from '../ui/shop/gameInventoryModules';
import { findIntInventory } from '../ui/shop/shopEvents/shopEventsModules';
import { inventoryItemGunsAssign } from '../ui/shop/gameShopModule';


async function loadGrabbleToSideObject(mainGameObject, target, GrappleObject){

    let randomApear = mainGameObject.gameRandomizer(target.probability);

    if(randomApear > 10 && target.name != 'goldCoin' || randomApear > 20 && target.name != 'lifepoint') return false

    let context = mainGameObject;
    let objectSpeed = (mainGameObject.gameInitData.dynamicLevelsActive)? -0.0000001 :  target.speed;

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
            absoluteLink: (target.absoluteLink)? target.absoluteLink : null,
            texture: (target.absoluteLink)? target.absoluteLink : target.skinName,
            speed: objectSpeed,
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
        grappleObject.loadTexture();
}
async function initGrappleObject(GrappleObject, playerShipData){
    if(this.gameInitData.grappleObjectOnScreen) return false

    let gameInfo = this.showGameInfo(),
    gameData = gameInfo.gameData,
    levelData = gameData.levelData,
    grappleData = gameData.grappleObjects;

    let spawnProbability = this.gameRandomizer(levelData.grapleObjectProbability);
    if(spawnProbability < 1){
        let randomObject = grappleData[this.gameRandomizer(grappleData.length)];
        if(!randomObject) return false
        if(!randomObject.grapplePower) return false
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

function collectCoin({ allGameSideObjects = null, playerShipData = null, mainGameObject }){
    let gameInfo = mainGameObject.showGameInfo(),
    gameData = gameInfo.gameData;

    gameData.gameCoins += this.grapplePower.value;
}


async function collectObjectsToInventory ({allGameSideObjects, playerShipData, mainGameObject}){
    let playerObject = mainGameObject.gameInitData.gameData.playerObject
    let playerObjectData = playerObject.data;
    let inventoryInformation = inventoryFreeItem({inventory: playerObjectData.inventory, inventoryCapacity: playerObjectData.inventoryCapacity})
    let headers = {"usercoins" : Infinity,
        "itemName": this.grapplePower.content.name}
        if(!inventoryInformation['firstEmptyItem']){
            mainGameObject.shopArea.shopErrorMessage.innerHTML = 'Your`s inventory is full';
            return false
        }
    let shopUrl = (this.grapplePower.store === 'market')?
    process.env.SHOP_STORE_ITEMS :
    process.env.SHOP_GUNS_URL;

    let data = await getShopServerData({
        shopUrl: shopUrl,
        headers: headers
    });
    if(this.grapplePower.type === "inventory weapon"){
        let searchItem: any = findIntInventory({ inventory: playerObjectData.inventory, searchObject: data.data})
        inventoryItemGunsAssign({ mainGameObject: mainGameObject, data: data.data, targetData: searchItem, buying: false })
        if(searchItem) return
    }
    putInsideInventory({mainGameObject, saveItem: data.data, inventoryItem: inventoryInformation['firstEmptyItem']})
}

export {
    initGrappleObject,
    addPlayerLife,
    collectCoin,
    loadGrabbleToSideObject,
    collectObjectsToInventory
}