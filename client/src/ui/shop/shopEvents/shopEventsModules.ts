import { shopHitObjectsDetection, leaveShop } from '../gameShopModule';
import { loadHangar } from '../gameHangarModules';
import { shopInventory,
    selectInventoryItem,
    inventoryFreeItem,
    putInsideInventory,
    putItemToStorage,
    saleItem,
    hideDescriptionArea,
    showDescriptionArea,
    salePercentAddToPrice,
    assignEffectsToShip } from '../gameInventoryModules';

function hangarMouseMoveEvent({ mainGameObject, event }){
    let hangarElements = mainGameObject.shopArea.selectedShopItem.hangarElements
    for(let i = 0; i < hangarElements.length; i++ ){
        if(hangarElements[i]){
            let hitObject = shopHitObjectsDetection({
            event: event, hangarElements: hangarElements, index: i
        })
        if(hitObject === "collision"){
            if(!hangarElements[i].object) return false
            showDescriptionArea({selectObject: hangarElements[i].object, event: event, mainGameObject: mainGameObject})
        }
        }
    }
}

function checkItems({ item }){
    if(!item.grapplePower || !item) return true
    if(item.type === 'inventory weapon') return false
    return true
}
function findIntInventory({ inventory, searchObject }){

    let result = inventory.find((item) => {
        if(item && searchObject) return item.name === searchObject.name
    })
    if( result ){
        result = {
            dataObject: result,
            index: inventory.indexOf(result)
        }
        return result
    }
    return false
}



async function inventoryColisionEvent({ hitObject, playerObjectData, shopAreaItems, mainGameObject, playerObject, index }){
    if(hitObject === "collision"){
        if(playerObjectData.guns[ index ] && (!shopAreaItems.inventorySelectedItem || shopAreaItems.inventorySelectedItem != 0)){
            shopAreaItems.hangarSelectedItem = (shopAreaItems.hangarSelectedItem == index)? null: index;
            mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
        }
        if(shopAreaItems.inventorySelectedItem || shopAreaItems.inventorySelectedItem === 0){
            let checkStatus = checkItems({item: playerObjectData.inventory[shopAreaItems.inventorySelectedItem]});
            if(!checkStatus) return false
            await assignEffectsToShip({playerObject: playerObject, item: playerObjectData.inventory[shopAreaItems.inventorySelectedItem]})
            putItemToStorage({
                name: 'outside-storage',
                putIndex: index,
                selectedIndex: shopAreaItems.inventorySelectedItem,
                storage: playerObjectData.inventory,
                selectedStorage: playerObjectData.guns,
                mainGameObject: mainGameObject
            })
        }
        if(shopAreaItems.hangarSelectedItem || shopAreaItems.hangarSelectedItem === 0){
            putItemToStorage({
                name: 'inside-storage',
                putIndex: index,
                selectedIndex: shopAreaItems.hangarSelectedItem,
                storage: playerObjectData.guns,
                selectedStorage: null,
                mainGameObject: mainGameObject
            })
        }
        loadHangar({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
        return
    }
}


function saleBoxEvent({ mainGameObject }){
    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;
            let shopAreaItems = mainGameObject.shopArea.selectedShopItem
            if((!shopAreaItems.inventorySelectedItem && shopAreaItems.inventorySelectedItem != 0) &&
                (!shopAreaItems.hangarSelectedItem && shopAreaItems.hangarSelectedItem != 0)) return false
            process.env.SHOP_SALE_WINDOW = 'true';
            process.env.SHOP_ACTIVE_WINDOW = 'true';
            if(shopAreaItems.inventorySelectedItem || shopAreaItems.inventorySelectedItem === 0){
                let inventoryItem = playerObjectData.inventory[shopAreaItems.inventorySelectedItem];
                let salePrice = (inventoryItem)? inventoryItem.price : 0;
                let finalPricePercent = salePercentAddToPrice({price: salePrice, mainGameObject: mainGameObject});
                if(!inventoryItem) return false
                leaveShop({element: mainGameObject.shopArea,
                     mainGameObject: mainGameObject,
                     text: (finalPricePercent)? `You want to sale ${(inventoryItem.title)? inventoryItem.title : 'this item?'}
                    for the ${finalPricePercent} credits`: `You want to destroy this item?`})

            }else if(shopAreaItems.hangarSelectedItem || shopAreaItems.hangarSelectedItem === 0){
                let hangarItem = playerObjectData.guns[shopAreaItems.hangarSelectedItem];
                let salePrice = playerObjectData.guns[shopAreaItems.hangarSelectedItem].price;
                leaveShop({element: mainGameObject.shopArea,
                     mainGameObject: mainGameObject,
                     text: `You want to sale ${(hangarItem)? hangarItem.title : 'this item?'}
                    for the ${salePercentAddToPrice({price: salePrice, mainGameObject: mainGameObject})} credits`})
            }
}



export {
    hangarMouseMoveEvent,
    inventoryColisionEvent,
    findIntInventory,
    saleBoxEvent
}