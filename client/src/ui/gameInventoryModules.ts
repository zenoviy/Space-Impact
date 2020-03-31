import { show,
    hide,
    toggler,
    addClassList,
    removeClassList } from '../appMenu/appMenu';
import { pageBuilder, createElements } from '../appMenu/pagesBuilder';
import { loadHangar } from './gameHangarModules';

function shopInventory({element, mainGameObject}){
    element.shopInventoryWrapper.innerHTML = "";
    let playerObject = mainGameObject.gameInitData.gameData.playerObject
    let playerObjectData = playerObject.data;
    for( let index = 0; index < playerObjectData.inventoryCapapcity; index++){
        let itemRender = createElements({tagName: 'div', styleClass: 'inventory-item', inlineStyle: ``,
        pictureUrl: null, linkUrl: null, text: null,
        innerContent: (playerObjectData.inventory[index])?`<div class="inventory-inner-item">
                <img src=${(playerObjectData.inventory[index].loadImage)? process.env.HOST + playerObjectData.inventory[index].loadImage : ""}>
        </div>` : `<div class="inventory-inner-item"></div>`,
        attribute: null, attributeName: null,
        attribute1: null, attributeName1: null})



        itemRender.addEventListener('mousemove', (event) => {
            if(!playerObjectData.inventory[index]) return false
            let item: any = document.querySelector('#item-descripton');
            item.style = `margin-top: ${event.clientY-100}px; margin-left: ${event.clientX - 200}px; `;
            item.innerHTML = `<p>${playerObjectData.inventory[index].title}</p>
            <p>${playerObjectData.inventory[index].price}</p> <p>${playerObjectData.inventory[index].description}</p>`
            show(item)
        })



        itemRender.addEventListener('mouseleave', (event) => {
            let item = document.querySelector('#item-descripton');
            hide(item)
        })



        itemRender.addEventListener('click', () => {
            let hangarElements = mainGameObject.shopArea.selectedShopItem.hangarElements
            let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;
            let shopAreaItems = mainGameObject.shopArea.selectedShopItem
            let previusInventorySelectedItem = (mainGameObject.shopArea.selectedShopItem.inventorySelectedItem ||
                mainGameObject.shopArea.selectedShopItem.inventorySelectedItem === 0)
            ? mainGameObject.shopArea.selectedShopItem.inventorySelectedItem
            : null
            mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = (mainGameObject.shopArea.selectedShopItem.inventorySelectedItem == index)? null: index;
            console.log('fire', previusInventorySelectedItem, mainGameObject.shopArea.selectedShopItem.inventorySelectedItem)
            if(mainGameObject.shopArea.selectedShopItem.hangarSelectedItem || mainGameObject.shopArea.selectedShopItem.hangarSelectedItem === 0){
                console.log('clicked 1 put from hangar to storage')
                putItemToStorage({name: 'outside-storage',
                    putIndex: index,
                    selectedIndex: shopAreaItems.hangarSelectedItem,
                    storage: playerObjectData.guns,
                    selectedStorage: playerObjectData.inventory,
                    mainGameObject: mainGameObject
                })
            }else if(mainGameObject.shopArea.selectedShopItem.inventorySelectedItem || mainGameObject.shopArea.selectedShopItem.inventorySelectedItem === 0){
                if(previusInventorySelectedItem && !playerObjectData.inventory[index] || previusInventorySelectedItem === 0 && !playerObjectData.inventory[index]){
                console.log('clicked 1 put from storage to storage', previusInventorySelectedItem)
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



function putInsideInventory({mainGameObject, saveItem, inventoryItem}){
    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;
    playerObjectData.inventory.splice(inventoryItem.index, 1, saveItem);
}



function replaceItemFromStorage({index, storage, value}){
    storage.splice(index, 1, value)
}
function putItemToStorage({name, putIndex , selectedIndex, storage, selectedStorage, mainGameObject}){
    let hangarElements = mainGameObject.shopArea.selectedShopItem.hangarElements
    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;

    console.log(putIndex, mainGameObject.shopArea.selectedShopItem.hangarSelectedItem,
        mainGameObject.shopArea.selectedShopItem.inventorySelectedItem, selectedStorage)
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
            console.log(1, selectedStorage[putIndex])
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
    console.log(selectGun, "( | | )", selectedStorage)
    selectGun = assignGunsPossition({gun: selectGun, firespot: firespot[putIndex]})

    replaceItemFromStorage({index: putIndex, storage: selectedStorage, value: selectGun})
    replaceItemFromStorage({index: selectedIndex, storage: storage, value: null})
    mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
    mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
    console.log(selectGun, "( - - )", selectedStorage)
}


function assignGunsPossition({gun, firespot}){
    console.log(firespot)
    if(!firespot || !gun) return gun
    console.log(gun, firespot, '<>')

    gun.firePositionX = firespot.shipXPosition;
    gun.firePosition = firespot.shipYPosition;
    return gun
}


export {
    shopInventory,
    selectInventoryItem,
    inventoryFreeItem,
    putInsideInventory,
    replaceItemFromStorage,
    putItemToStorage
}