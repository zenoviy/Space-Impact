import { show,
    hide,
    toggler,
    addClassList,
    removeClassList } from '../../appMenu/appMenu';
import { getData } from '../../server/serverRequestModules';
import { pageBuilder, createElements } from '../../appMenu/pagesBuilder';
import { createImage, createWindow, draw } from '../../view/displayModules';
import { objectIntersectionDetect } from '../../enemies/enemiesModules';
import { loadHangar } from './gameHangarModules';
import { shopInventory,
    selectInventoryItem,
    inventoryFreeItem,
    putInsideInventory,
    replaceItemFromStorage,
    putItemToStorage,
    saleItem,
    hideDescriptionArea,
    showDescriptionArea,
    salePercentAddToPrice} from './gameInventoryModules';
import { replaceShipData } from './gameShopShipyard';
import { addPlayerLife } from '../../engine/gameGrappleObjectsModule';




function loadShopArea (mainGameObject) {
    const shopArea = {
        selectedShopItem: {
            title: "",
            price: "",
            inventorySelectedItem: null,
            hangarSelectedItem: null,
            hangarElements: [],
            tradePropertyes: null
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
    showShopData({element: shopArea, url: process.env.SHOP_GUNS_URL, mainGameObject: mainGameObject, customWrapperClass: null})
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

    shopArea.hangarShipArea.addEventListener('mousemove', function(event) {
        let hangarElements = mainGameObject.shopArea.selectedShopItem.hangarElements
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
                    if(!hangarElements[i].object) return false
                    showDescriptionArea({selectObject: hangarElements[i].object, event: event, mainGameObject: mainGameObject})
                }
            }
        }

    })
    shopArea.hangarShipArea.addEventListener('mouseleave', function(event) {
        hideDescriptionArea()
    })
    shopArea.hangarShipArea.addEventListener('click', function(event: any) {
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
                    }
                    if(shopAreaItems.inventorySelectedItem || shopAreaItems.inventorySelectedItem === 0){
                        putItemToStorage({name: 'outside-storage',
                            putIndex: i,
                            selectedIndex: shopAreaItems.inventorySelectedItem,
                            storage: playerObjectData.inventory,
                            selectedStorage: playerObjectData.guns,
                            mainGameObject: mainGameObject
                        })
                    }
                    if(shopAreaItems.hangarSelectedItem || shopAreaItems.hangarSelectedItem === 0){
                        putItemToStorage({name: 'inside-storage',
                            putIndex: i,
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
        }
    })
    shopArea.shopWrapper.addEventListener('click', function(event) {
        shopInventory({element: shopArea, mainGameObject: mainGameObject})
        switch(event.target['dataset'].targetBtnId){
            case 'weapons':
                mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
                mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
                process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
                process.env.SHOP_STORE_WINDOW = 'false'
                showShopData({element: shopArea, url: process.env.SHOP_GUNS_URL, mainGameObject: mainGameObject, customWrapperClass: null})
                break;
            case 'ship':
                mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
                mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
                process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'true';
                process.env.SHOP_STORE_WINDOW = 'false'
                showShopData({element: shopArea, url: process.env.SHOP_SHIPYARD_URL, mainGameObject: mainGameObject, customWrapperClass: "shipyard-item"})
                break;
            case 'market':
                mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
                mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
                //process.env.SHOP_STORE_ITEMS
                process.env.SHOP_STORE_WINDOW = 'true'
                process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
                showShopData({element: shopArea, url: process.env.SHOP_STORE_ITEMS, mainGameObject: mainGameObject, customWrapperClass: null})
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
                //process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
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
            selectedItemsPicture({status: true, event: event,
                picture: (shopAreaItems.inventorySelectedItem || shopAreaItems.inventorySelectedItem === 0)
                ? playerObjectData.inventory[shopAreaItems.inventorySelectedItem]
                : playerObjectData.guns[shopAreaItems.hangarSelectedItem]}) // event.clientX
        }else selectedItemsPicture({status: false, event: event, picture: null})
    })

    shopArea.shopDialog.addEventListener('click', function(event) {
        switch(event.target['dataset'].targetBtnId){
            case 'ok':
                if(process.env.SHOP_ACTIVE_WINDOW === 'false'){

                    mainGameObject.gameInitData.shopActive = false;
                    hide(shopArea.shopWrapper)
                    hide(this)

                }else if(process.env.SHOP_ACTIVE_WINDOW === 'true'
                && process.env.SHOP_SALE_WINDOW === 'false'
                && process.env.SHOP_SHIPYARD_ACTIVE_WINDOW === 'false' && process.env.SHOP_STORE_WINDOW === 'false'){

                    buyItem({url: process.env.SHOP_GUNS_URL, mainGameObject: mainGameObject})

                }else if(process.env.SHOP_SALE_WINDOW === 'true' && process.env.SHOP_ACTIVE_WINDOW === 'true'){
                    process.env.SHOP_SALE_WINDOW = 'false';
                    process.env.SHOP_ACTIVE_WINDOW ='false';
                    saleItem({mainGameObject: mainGameObject})
                    shopInventory({element: shopArea, mainGameObject: mainGameObject})
                    loadHangar({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
                    hide(this)
                }else if (process.env.SHOP_SHIPYARD_ACTIVE_WINDOW === 'true' && process.env.SHOP_ACTIVE_WINDOW === 'true'){
                    buyShip({mainGameObject: mainGameObject, url: process.env.SHOP_SHIPYARD_URL})  ////
                }else if(process.env.SHOP_STORE_WINDOW === 'true' && process.env.SHOP_SHIPYARD_ACTIVE_WINDOW === 'false' &&
                process.env.SHOP_ACTIVE_WINDOW === 'true'){
                    console.log('buy sale items')
                    //buyStoreItem({mainGameObject: mainGameObject, url: process.env.SHOP_STORE_ITEMS})
                    buyItem({ url: process.env.SHOP_STORE_ITEMS, mainGameObject: mainGameObject})
                }
                break;
            case 'cancel':
                process.env.SHOP_SALE_WINDOW = 'false';
                hide(this)
                break;
            default:
                false
        }
    })
}



function buyStoreItem({mainGameObject, data}){
    let hangarElements = mainGameObject.shopArea.selectedShopItem;
    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;

    if(!data) return false
        if(data.type === "power" && data.name === 'extralife'){
            mainGameObject.gameInitData.gameData.gameCoins -= data.price;
            addPlayerLife.call(data, {
                allGameSideObjects: null,
                playerShipData: mainGameObject.gameInitData.gameData.playerObject,
                mainGameObject: mainGameObject
            })
            hide(mainGameObject.shopArea.shopDialog)
        }else if(data.type === "object"){

        }
}




function shipCardDescription({shipData}){
    if(!shipData) return false
    let shipDescriptionText = `
    <p> status: ${(shipData.status)? shipData.status : ''}</p>
    <p>armor: ${(shipData.armor)? shipData.armor : ''}</p>
    <p>healthPoint ${(shipData.healthPoint)? shipData.healthPoint : ''}</p>
    <p>speed: ${(shipData.minSpeed)? shipData.minSpeed : ''}</p>
    <p>inventoryCapacity: ${(shipData.inventoryCapacity)? shipData.inventoryCapacity : ''}</p>
    <p>firespots ${(shipData.firespots)? shipData.firespots : ''}</p>
    `
    return shipDescriptionText
}



function weaponsCardDescription({card}){
    if(!card) return false
    let shipDescriptionText = `
    <p>${(card.status)? 'status: ' + card.status : ''}</p>
    <p>${(card.damage)? 'damage: ' + card.damage : ''}</p>
    <p>${(card.speed)? 'speed: ' + card.speed : ''}</p>
    `
    return shipDescriptionText
}






function labelShip({playerObject, card, mainGameObject}){
    if(playerObject.data.title === card.title){
        process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'true';
        return `<div class="current-ship-label"><img src=${process.env.HOST + 'static/shop/misc/accept_label_1024x1024.png'}></div>
        <div class="sale-ship-price"> Sale price ${salePercentAddToPrice({price: card.price, mainGameObject: mainGameObject})}</div>`;
    }
    else return ''
}







async function showShopData({element, url, mainGameObject, customWrapperClass}){
    let playerObject = mainGameObject.gameInitData.gameData.playerObject;
    let data = await getData({url: process.env.HOST + url, method: 'GET', data: null, headers: null})

    element.displayShopItem.innerHTML = "";
    if(data.message) console.error(data.message)
    for(let card of data){
        if(card.title === 'Reaper') continue
        let shipDescription = (customWrapperClass === 'shipyard-item')? shipCardDescription({shipData: card}) : weaponsCardDescription({card: card});
        let currentShip = labelShip({playerObject: playerObject, card: card, mainGameObject: mainGameObject});
        let cardRender = createElements({tagName: 'div',
        styleClass: (customWrapperClass)? `${customWrapperClass} ${(playerObject.data.title === card.title)? 'current-ship' : ''}` : 'shop-card',
        inlineStyle: `background-image: url(${process.env.HOST + card.background} )`,
        pictureUrl: null, linkUrl: null, text: null,
        innerContent: `<div class="inner-card">
            <h2>${card.title} ${currentShip}</h2>
            <img src=${process.env.HOST + card.loadImage}>
            <div class="${(customWrapperClass === 'shipyard-item')? 'card-body' : 'card-regular-description-wrapper'}">
                <div class="card-main-data">
                    <p>${card.description}</p>
                    <h3>Cost: ${card.price}</h3>
                </div>
                <div class="card-details">${shipDescription}</div>
            </div>
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






function enterToTheShopDialog({mainGameObject, tradePropertyes}){
    if(mainGameObject.gameInitData.gameOver) return false
    shopInventory({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
    mainGameObject.gameInitData.shopActive = true;
    let shopUiItems = mainGameObject.shopArea;

    mainGameObject.shopArea.selectedShopItem.tradePropertyes = (!tradePropertyes.salePercentage)? salePercentage({tradePropertyes: tradePropertyes, mainGameObject: mainGameObject}): tradePropertyes;
    switchShopHangar('to-shop', mainGameObject.shopArea)
    show(shopUiItems.shopWrapper)
}







function salePercentage({tradePropertyes, mainGameObject}){
    tradePropertyes.salePercentage = mainGameObject.gameRandomizer(tradePropertyes.buyPricePercent , tradePropertyes.buyPricePercent/2)
    return tradePropertyes
}





function selectedItemsPicture({status, event, picture}){
    let displayElement: any = document.querySelector('#item-dragable-picture');
    if(status){
        show(displayElement)
        displayElement.style = `margin-top: ${event.clientY - 50}px; margin-left: ${event.clientX - 100}px;`;
        displayElement.src = process.env.HOST + picture.loadImage;
    }else hide(displayElement)
}



async function buyShip({mainGameObject, url}){
    let playerObject = mainGameObject.gameInitData.gameData.playerObject
    let playerObjectData = playerObject.data;


    let shipInventoryLastItems = 0;
    let shipGunsLastItems = 0;

    for(let i = 0; i < playerObjectData.inventory.length; i++){
        if(playerObjectData.inventory[i]) shipInventoryLastItems = i;
        console.log(playerObjectData.guns)
        if(playerObjectData.guns[i]) shipGunsLastItems = i;
    }

    let headers = {
        "usercoins" : mainGameObject.gameInitData.gameData.gameCoins + salePercentAddToPrice({price: playerObjectData.price, mainGameObject: mainGameObject}),
        "itemname" : mainGameObject.shopArea.selectedShopItem.title,
        "currentshipname": playerObjectData.title,
        "shipinventoryitems": shipInventoryLastItems,
        "shipgunsitems": shipGunsLastItems
    }
    let data = await getData({url: process.env.HOST + url, method: 'PUT', data: null, headers: headers})
    if(!data) return false

    if(data.status === 'false'){
        mainGameObject.shopArea.shopErrorMessage.innerHTML = data.message;
    }else if(data.data){
        mainGameObject.gameInitData.gameData.gameCoins = parseInt(data.money);
        replaceShipData({ mainGameObject: mainGameObject, buyShipData: data})
        hide(mainGameObject.shopArea.shopDialog)
        shopInventory({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
        showShopData({element: mainGameObject.shopArea, url: process.env.SHOP_SHIPYARD_URL, mainGameObject: mainGameObject, customWrapperClass: "shipyard-item"})
    }
}


async function buyItem({url, mainGameObject}){
    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject;

    let inventoryInformation = inventoryFreeItem({inventory: playerObjectData.data.inventory, inventoryCapacity: playerObjectData.data.inventoryCapacity })

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

        if(data.data.type === "power" && data.data.name === 'extralife'){
            buyStoreItem({ mainGameObject: mainGameObject, data: data.data})
            return false
        }
        mainGameObject.gameInitData.gameData.gameCoins = parseInt(data.money);
        putInsideInventory({mainGameObject, saveItem: data.data, inventoryItem: inventoryInformation['firstEmptyItem']})
        hide(mainGameObject.shopArea.shopDialog)
        shopInventory({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
    }
}



export {
    loadShopArea,
    enterToTheShopDialog,
    leaveShop
}