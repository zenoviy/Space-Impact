import { shopHitObjectsDetection } from '../gameShopModule';
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


async function inventaryColisionEvent({ hitObject, playerObjectData, shopAreaItems, mainGameObject, playerObject, index }){
    if(hitObject === "collision"){
        if(playerObjectData.guns[ index ] && (!shopAreaItems.inventorySelectedItem || shopAreaItems.inventorySelectedItem != 0)){
            shopAreaItems.hangarSelectedItem = (shopAreaItems.hangarSelectedItem == index)? null: index;
            mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
        }
        if(shopAreaItems.inventorySelectedItem || shopAreaItems.inventorySelectedItem === 0){
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






export {
    hangarMouseMoveEvent,
    inventaryColisionEvent
}