import { show,
    hide,
    addClassList,
    removeClassList } from '../../appMenu/appMenu';
import { createElements } from '../../appMenu/pagesBuilder';
import { loadHangar } from './gameHangarModules';
import { leaveShop, saleBoxLabelChange } from './gameShopModule';



function shopInventory({element, mainGameObject}){
    element.shopInventoryWrapper.innerHTML = "";
    let playerObject = mainGameObject.gameInitData.gameData.playerObject;
    let playerObjectData = playerObject.data;

    for( let index = 0; index < playerObjectData.inventoryCapacity; index++){
        let itemRender = createElements({tagName: 'div', styleClass: 'inventory-item', inlineStyle: ``,
        pictureUrl: null, linkUrl: null, text: null,
        innerContent: (playerObjectData.inventory[index])?`<div class="inventory-inner-item">
            ${(playerObjectData.inventory[index].type === "inventory weapon")?
            '<span>'+ playerObjectData.inventory[index].grapplePower.number +'</span>': ''}
            <img src=${(playerObjectData.inventory[index].loadImage)? process.env.HOST + playerObjectData.inventory[index].loadImage : ""}>
            </div>` : `<div class="inventory-inner-item"></div>`,
        attribute: null, attributeName: null,
        attribute1: null, attributeName1: null})
        itemRender.addEventListener('mousemove', (event) => {
            if(!playerObjectData.inventory[index]) return false
            showDescriptionArea({selectObject: playerObjectData.inventory[index],
                event: event,
                mainGameObject: mainGameObject
            })
        })



        itemRender.addEventListener('mouseleave', (event) => {
            hideDescriptionArea()
        })



        itemRender.addEventListener('click',async () => {
            let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;
            let shopAreaItems = mainGameObject.shopArea.selectedShopItem;

            let previusInventorySelectedItem = (mainGameObject.shopArea.selectedShopItem.inventorySelectedItem ||
                mainGameObject.shopArea.selectedShopItem.inventorySelectedItem === 0)
            ? mainGameObject.shopArea.selectedShopItem.inventorySelectedItem
            : null
            mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = (mainGameObject.shopArea.selectedShopItem.inventorySelectedItem == index)? null: index;
            if(mainGameObject.shopArea.selectedShopItem.hangarSelectedItem || mainGameObject.shopArea.selectedShopItem.hangarSelectedItem === 0){
                await disableEffects({playerObject: playerObject, item: playerObjectData.guns[shopAreaItems.hangarSelectedItem]})
                putItemToStorage({name: 'outside-storage',
                    putIndex: index,
                    selectedIndex: shopAreaItems.hangarSelectedItem,
                    storage: playerObjectData.guns,
                    selectedStorage: playerObjectData.inventory,
                    mainGameObject: mainGameObject
                })

            }else if(mainGameObject.shopArea.selectedShopItem.inventorySelectedItem || mainGameObject.shopArea.selectedShopItem.inventorySelectedItem === 0){
                if(previusInventorySelectedItem && !playerObjectData.inventory[index] || previusInventorySelectedItem === 0 && !playerObjectData.inventory[index]){
                    putItemToStorage({name: 'inside-storage',
                        putIndex: index,
                        selectedIndex: previusInventorySelectedItem,
                        storage: playerObjectData.inventory,
                        selectedStorage: playerObjectData.inventory,
                        mainGameObject: mainGameObject
                    })
                }
            }
            loadHangar({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
            return
        })
        element.shopInventoryWrapper.appendChild(itemRender)
    }
    element.shopInventoryWrapper.prepend(saleBox({mainGameObject: mainGameObject}))
    saleBoxLabelChange({ mainGameObject: mainGameObject})
}



function saleBox({mainGameObject}){
    let itemRender = createElements({tagName: 'div',
        styleClass: 'shop-sale-part',
        inlineStyle: ``,
        pictureUrl: null,
        linkUrl: null,
        text: null,
        innerContent: `<div class="sale-inner-item">
        </div>`,
        attribute: "inventory-box", attributeName: "id",
        attribute1: null, attributeName1: null})
        itemRender.addEventListener('click', function(){
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

        })
    return itemRender
}



function selectInventoryItem({index, mainGameObject}){
    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;
    if(!playerObjectData.inventory[index]) return false
    let inventoryItems = Array.prototype.slice.call(document.querySelectorAll('.inventory-item'));
    for(let singleItem of inventoryItems){
        removeClassList(singleItem, 'inventory-selected-items');
    }
    if(!index && index != 0) return false
    addClassList(inventoryItems[index], 'inventory-selected-items');
}




function inventoryFreeItem({inventory, inventoryCapacity}){
    if(!inventory || !inventoryCapacity) return false
    let inventoryInformation = {
        emptyItems: [],
        fullItems: [],
        firstEmptyItem: null
    }
    for(let i = 0; i < inventoryCapacity; i++){
        if(inventory[i]){
            inventoryInformation.fullItems = inventoryInformation.fullItems.concat(inventoryInformation.fullItems, { index: i, item: inventory[i]})
        }else if(!inventory[i]){
            if(!inventoryInformation.firstEmptyItem) inventoryInformation.firstEmptyItem = { index: i, item: inventory[i]};
            inventoryInformation.fullItems = inventoryInformation.emptyItems.concat(inventoryInformation.emptyItems, { index: i, item: inventory[i]})
        }
    }
    return inventoryInformation
}


function saleItem({mainGameObject}){
    let hangarElements = mainGameObject.shopArea.selectedShopItem;
    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;
    let playerObject = mainGameObject.gameInitData.gameData.playerObject;

    if(hangarElements.inventorySelectedItem || hangarElements.inventorySelectedItem === 0){
       let selPrice = salePercentAddToPrice({price: playerObjectData.inventory[hangarElements.inventorySelectedItem].price, mainGameObject: mainGameObject})
       mainGameObject.gameInitData.gameData.gameCoins += selPrice

       replaceItemFromStorage({index: hangarElements.inventorySelectedItem, storage: playerObjectData.inventory, value: null })
       mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
    }
    if(hangarElements.hangarSelectedItem || hangarElements.hangarSelectedItem === 0){
        let selPrice = salePercentAddToPrice({price: playerObjectData.guns[hangarElements.hangarSelectedItem].price, mainGameObject: mainGameObject})
        disableEffects({playerObject: playerObject, item: playerObjectData.guns[hangarElements.hangarSelectedItem]})
        replaceItemFromStorage({index: hangarElements.hangarSelectedItem, storage: playerObjectData.guns, value: null })
        mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
        mainGameObject.gameInitData.gameData.gameCoins  += selPrice;
    }
}


function salePercentAddToPrice({price, mainGameObject}){
    let hangarElements = mainGameObject.shopArea.selectedShopItem;
    let finalPrice = Math.round(price - ((price/100)*hangarElements.tradePropertyes.salePercentage));
    return finalPrice
}



function putInsideInventory({mainGameObject, saveItem, inventoryItem}){
    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;
    playerObjectData.inventory.splice(inventoryItem.index, 1, saveItem);
}



function replaceItemFromStorage({index, storage, value}){
    storage.splice(index, 1, value)
}


function putItemToStorage({name, putIndex , selectedIndex, storage, selectedStorage, mainGameObject}){
    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;

    if(!storage[putIndex] && (mainGameObject.shopArea.selectedShopItem.hangarSelectedItem  && name == "inside-storage" ||
        mainGameObject.shopArea.selectedShopItem.hangarSelectedItem === 0) && name == "inside-storage" ||
        selectedStorage && (mainGameObject.shopArea.selectedShopItem.inventorySelectedItem && name == "inside-storage" ||
        mainGameObject.shopArea.selectedShopItem.inventorySelectedItem === 0  && name == "inside-storage")){
        shopStorageReplacer({
            putIndex: putIndex,
            selectedIndex: selectedIndex,
            storage: storage,
            selectedStorage: storage,
            firespot: playerObjectData.firespot,
            mainGameObject: mainGameObject
        })
    }else if(selectedStorage && (mainGameObject.shopArea.selectedShopItem.inventorySelectedItem && name == "outside-storage" ||
        mainGameObject.shopArea.selectedShopItem.inventorySelectedItem === 0  && name == "outside-storage")){
        if(selectedStorage[putIndex]) return false
        shopStorageReplacer({
            putIndex: putIndex,
            selectedIndex: selectedIndex,
            storage: storage,
            selectedStorage: selectedStorage,
            firespot: playerObjectData.firespot,
            mainGameObject: mainGameObject
        })
    }
}

function shopStorageReplacer({putIndex, selectedIndex, storage, selectedStorage, firespot, mainGameObject}){
    let selectGun = storage[selectedIndex];
    selectGun = assignGunsPosition({gun: selectGun, firespot: firespot[putIndex]})

    replaceItemFromStorage({index: putIndex, storage: selectedStorage, value: selectGun })
    replaceItemFromStorage({index: selectedIndex, storage: storage, value: null })
    mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
    mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
}


function assignEffectsToShip({playerObject, item}){
        if(!item || !item.grapplePower) return
        switch (item.grapplePower.name){
            case 'guns_rapid':
                break
            case 'add_speed':
                playerObject.addVehicleSpeed({value: item.grapplePower.value, flag: true})
                break
            default:
                false
        }
}

function disableEffects({playerObject, item}){
        if(!item || !item.grapplePower) return
        switch (item.grapplePower.name){
            case 'guns_rapid':
                break
            case 'add_speed':
                playerObject.addVehicleSpeed({value: item.grapplePower.value, flag: false})
                break
            default:
                false
        }
}


function assignGunsPosition({gun, firespot}){
    if(!firespot || !gun) return gun
    gun.firePositionX = firespot.shipXPosition;
    gun.firePosition = firespot.shipYPosition;
    return gun
}




function hideDescriptionArea(){
    let item = document.querySelector('#item-description');
    hide(item)
}
function showDescriptionArea({selectObject, event, mainGameObject}){
    let item: any = document.querySelector('#item-description');
            item.style = `margin-top: ${event.clientY-100}px; margin-left: ${event.clientX - 200}px; `;
            item.innerHTML = `<p>${selectObject.title}</p>
            <p>Cost: ${salePercentAddToPrice({price: selectObject.price, mainGameObject: mainGameObject})}</p>
            <p>speed: ${selectObject.speed}</p>
            <p>damage: ${selectObject.damage}</p>
            <p>${selectObject.description}</p>`
        show(item)
}

export {
    shopInventory,
    selectInventoryItem,
    inventoryFreeItem,
    putInsideInventory,
    replaceItemFromStorage,
    putItemToStorage,
    saleItem,
    hideDescriptionArea,
    showDescriptionArea,
    assignGunsPosition,
    salePercentAddToPrice,
    disableEffects,
    assignEffectsToShip,
    leaveShop
}