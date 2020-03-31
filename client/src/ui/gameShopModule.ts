import { show,
    hide,
    toggler,
    addClassList,
    removeClassList } from '../appMenu/appMenu';
import { getData } from '../server/serverRequestModules';
import { pageBuilder, createElements } from '../appMenu/pagesBuilder';
import { createImage, createWindow, draw } from '../view/displayModules';
import { objectIntersectionDetect } from '../enemies/enemiesModules';
import { loadHangar } from './gameHangarModules';
import { shopInventory,
    selectInventoryItem,
    inventoryFreeItem,
    putInsideInventory,
    replaceItemFromStorage,
    putItemToStorage } from './gameInventoryModules';
import { isBuffer } from 'util';

function loadShopArea (mainGameObject) {
    const shopArea = {
        selectedShopItem: {
            title: "",
            price: "",
            inventorySelectedItem: null,
            hangarSelectedItem: null,
            hangarElements: []
        },
        shopWrapper: document.querySelector('#shop-wrapper'),
        shopArea: document.querySelector('#shop-area'),
        hangarArea: document.querySelector('#hangar-area'),
        hangarShipArea: document.querySelector('#hangar-ship-area'),
        displayShopItem: document.querySelector('#display-shop-items'),
        shopDialog: document.querySelector('#shop-dialog'),
        shopInventoryWrapper: document.querySelector('#shop-inventory-wrapper'),
        shopDialogText: document.querySelector('#shop-dialog-text'),
        shopErrorMessage: document.querySelector('#shop-error-message')
    }
    showShopData({element: shopArea, url: 'api/shop/guns', mainGameObject: mainGameObject})
    shopEventDetector({shopArea: shopArea, mainGameObject: mainGameObject})

    return {
        selectedShopItem: shopArea.selectedShopItem,
        shopWrapper: shopArea.shopWrapper,
        shopArea: shopArea.shopArea,
        hangarArea: shopArea.hangarArea,
        hangarShipArea: shopArea.hangarShipArea,
        displayShopItem: shopArea.displayShopItem,
        shopDialog: shopArea.shopDialog,
        shopInventoryWrapper: shopArea.shopInventoryWrapper,
        shopDialogText: shopArea.shopDialogText,
        shopErrorMessage: shopArea.shopErrorMessage
    }
}




function shopEventDetector({ shopArea, mainGameObject }){
    shopInventory({element: shopArea, mainGameObject: mainGameObject})

    shopArea.hangarShipArea.addEventListener('click', function(event: any) {
        //console.log(event.clientX - event.target.offsetLeft, event.clientY - event.target.offsetTop)
        let hangarElements = mainGameObject.shopArea.selectedShopItem.hangarElements
        let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;
        let shopAreaItems = mainGameObject.shopArea.selectedShopItem
        for(let i = 0; i < hangarElements.length; i++ ){
            if(hangarElements[i]){
            let hitObject = objectIntersectionDetect({
                    object: {
                        x: event.clientX - event.target.offsetLeft,
                        y: event.clientY - event.target.offsetTop,
                        width: 5,
                        height: 5,
                    }, target: {
                        x: hangarElements[i].positionX,
                        y: hangarElements[i].positionY,
                        width: hangarElements[i].width,
                        height: hangarElements[i].height,
                    }
                })
                if(hitObject === "collision"){
                    if(playerObjectData.guns[i] && (!shopAreaItems.inventorySelectedItem || shopAreaItems.inventorySelectedItem != 0)){
                        shopAreaItems.hangarSelectedItem = (shopAreaItems.hangarSelectedItem ==i)? null: i;
                        mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
                        console.log('clicked 2')
                    }
                    if(shopAreaItems.inventorySelectedItem || shopAreaItems.inventorySelectedItem === 0){
                        putItemToStorage({name: 'outside-storage',
                            putIndex: i,
                            selectedIndex: shopAreaItems.inventorySelectedItem,
                            storage: playerObjectData.inventory,
                            selectedStorage: playerObjectData.guns,
                            mainGameObject: mainGameObject
                        })
                        console.log('clicked 3')

                    }
                    if(shopAreaItems.hangarSelectedItem || shopAreaItems.hangarSelectedItem === 0){
                        putItemToStorage({name: 'inside-storage',
                            putIndex: i,
                            selectedIndex: shopAreaItems.hangarSelectedItem,
                            storage: playerObjectData.guns,
                            selectedStorage: null,
                            mainGameObject: mainGameObject
                        })
                        console.log('clicked 4')
                    }
                    loadHangar({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
                    console.log('clicked 5 reload')
                    return
                }
            }
        }
    })
    shopArea.shopWrapper.addEventListener('click', function(event) {
        shopInventory({element: shopArea, mainGameObject: mainGameObject})
        switch(event.target['dataset'].targetBtnId){
            case 'weapons':
                mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
                mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
                showShopData({element: shopArea, url: 'api/shop/guns', mainGameObject: mainGameObject})
                break;
            case 'ship':
                mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
                mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
                console.log('ship')
                break;
            case 'market':
                mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
                mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
                console.log('market')
                break;
            case 'to-hangar':
                switchShopHangar('to-hangar', shopArea)
                loadHangar({element: shopArea,
                    mainGameObject: mainGameObject})
                break;
            case 'to-shop':
                switchShopHangar('to-shop', shopArea)
                break;
            case 'exit':
                mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
                mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
                process.env.SHOP_ACTIVE_WINDOW = 'false';
                leaveShop({element: shopArea, mainGameObject: mainGameObject, text: 'back to the game'})
                break;
            default:
                false
        }
        selectInventoryItem({index: mainGameObject.shopArea.selectedShopItem.inventorySelectedItem, mainGameObject: mainGameObject})
    })

    document.addEventListener('mousemove', (event) => {
        let shopAreaItems = mainGameObject.shopArea.selectedShopItem;
        let playerObject = mainGameObject.gameInitData.gameData.playerObject
        let playerObjectData = playerObject.data;

        if(playerObjectData.inventory[shopAreaItems.inventorySelectedItem] && shopAreaItems.inventorySelectedItem ||
            playerObjectData.inventory[shopAreaItems.inventorySelectedItem] && shopAreaItems.inventorySelectedItem === 0 ||
            shopAreaItems.hangarSelectedItem || shopAreaItems.hangarSelectedItem === 0){
            //console.log(playerObjectData.inventory)
            selectedItemsPicture({status: true, event: event,
                picture: (shopAreaItems.inventorySelectedItem || shopAreaItems.inventorySelectedItem === 0)
                ? playerObjectData.inventory[shopAreaItems.inventorySelectedItem]
                : playerObjectData.guns[shopAreaItems.hangarSelectedItem]}) // event.clientX
            //console.log(playerObject)
        }else selectedItemsPicture({status: false, event: event, picture: null})
    })

    shopArea.shopDialog.addEventListener('click', function(event) {
        switch(event.target['dataset'].targetBtnId){
            case 'ok':
                if(process.env.SHOP_ACTIVE_WINDOW === 'false'){
                    mainGameObject.gameInitData.shopActive = false;
                    hide(shopArea.shopWrapper)
                    hide(this)
                }else if(process.env.SHOP_ACTIVE_WINDOW === 'true'){
                    buyItem({url: 'api/shop/guns', mainGameObject: mainGameObject})
                }
                break;
            case 'cancel':
                hide(this)
                break;
            default:
                false
        }
    })
}




async function showShopData({element, url, mainGameObject}){
    element.displayShopItem.innerHTML = "";
    let data = await getData({url: process.env.HOST + url, method: 'GET', data: null, headers: null})

    if(data.message) console.error(data.message)
    for(let card of data){
        let cardRender = createElements({tagName: 'div', styleClass: 'shop-card', inlineStyle: `background-image: url(${process.env.HOST + card.background} )`,
        pictureUrl: null, linkUrl: null, text: null,
        innerContent: `<div class="inner-card">
            <img src=${process.env.HOST + card.loadImage}>
            <h2>${card.title}</h2>
            <p>${card.description}</p>
            <h3>${card.price}</h3>
        </div>`,
        attribute: null, attributeName: null,
        attribute1: null, attributeName1: null})

        cardRender.addEventListener('click', () => {
            process.env.SHOP_ACTIVE_WINDOW = 'true';
            let text = `buy ${card.title} cost: ${card.price}`;

            mainGameObject.shopArea.selectedShopItem.title = card.title;
            mainGameObject.shopArea.selectedShopItem.price = card.price;
            leaveShop({element: element, mainGameObject: mainGameObject, text: text})
        })
        element.displayShopItem.appendChild(cardRender)
    }
}






function switchShopHangar(state, element){
    if(state == 'to-hangar'){
        hide(element.shopArea)
        show(element.hangarArea)
    }else if(state == 'to-shop'){
        hide(element.hangarArea)
        show(element.shopArea)
    }
}



function leaveShop({element, mainGameObject, text}){
    element.shopDialogText.innerHTML = text;
    element.shopErrorMessage.innerHTML = '';
    show(element.shopDialog)
}






function enterToTheShopDialog({mainGameObject}){
    shopInventory({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
    mainGameObject.gameInitData.shopActive = true;
    let shopUiItems = mainGameObject.shopArea
    switchShopHangar('to-shop', mainGameObject.shopArea)
    show(shopUiItems.shopWrapper)
}



function selectedItemsPicture({status, event, picture}){
    let displayElement: any = document.querySelector('#item-dragable-picture');
    if(status){
        show(displayElement)
        displayElement.style = `margin-top: ${event.clientY - 50}px; margin-left: ${event.clientX - 100}px;`;
        displayElement.src = process.env.HOST + picture.loadImage;
    }else hide(displayElement)
}




async function buyItem({url, mainGameObject}){
    let levelData = mainGameObject.getLevelUserData();
    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject;
    //let price = mainGameObject.shopArea.selectedShopItem.price;
    let inventoryInformation = inventoryFreeItem({inventory: playerObjectData.data.inventory, inventoryCapacity: playerObjectData.data.inventoryCapapcity })
    //console.log(mainGameObject.gameInitData.gameData.gameCoins)
    let headers = {"usercoins" : mainGameObject.gameInitData.gameData.gameCoins,
        "itemName": mainGameObject.shopArea.selectedShopItem.title}
    if(!inventoryInformation['firstEmptyItem']){
        mainGameObject.shopArea.shopErrorMessage.innerHTML = 'Your`s inventeary is full';
        return false
    }
    let data = await getData({url: process.env.HOST + url, method: 'PUT', data: null, headers: headers})
    if(data.status === 'false'){
        mainGameObject.shopArea.shopErrorMessage.innerHTML = data.message;
        return
    }else if(data.data){
        mainGameObject.gameInitData.gameData.gameCoins = parseInt(data.money);
        putInsideInventory({mainGameObject, saveItem: data.data, inventoryItem: inventoryInformation['firstEmptyItem']})
        hide(mainGameObject.shopArea.shopDialog)
        shopInventory({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
    }
}



export {
    loadShopArea,
    enterToTheShopDialog,
}