var path = require('path');
import { show, hide, addClassList, removeClassList } from '../../appMenu/appMenu';
import { getData } from '../../server/serverRequestModules';
import { createElements } from '../../appMenu/pagesBuilder';
import { objectIntersectionDetect } from '../../enemies/enemiesModules';
import { loadHangar } from './gameHangarModules';
import { shopInventory,
    selectInventoryItem,
    inventoryFreeItem,
    putInsideInventory,
    putItemToStorage,
    saleItem,
    hideDescriptionArea,
    showDescriptionArea,
    salePercentAddToPrice,
    assignEffectsToShip } from './gameInventoryModules';
import { replaceShipData } from './gameShopShipyard';
import { addPlayerLife } from '../../engine/gameGrappleObjectsModule';
import { hangarMouseMoveEvent, inventoryColisionEvent, findIntInventory } from './shopEvents/shopEventsModules';
import { shopDialogActivity, shopMenuActivity, shopWeaponsActivity, toggleShopButtonStyle } from './shopEvents/shopActivityDetectorModules';






function enterToTheShopDialog({mainGameObject, tradePropertyes}){
    if(mainGameObject.gameInitData.gameOver || mainGameObject.gameInitData.levelChange) return false

    shopInventory({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
    saleBoxLabelChange({ mainGameObject: mainGameObject})
    mainGameObject.gameInitData.shopActive = true;
    let shopUiItems = mainGameObject.shopArea;

    if(tradePropertyes) mainGameObject.shopArea.selectedShopItem.tradePropertyes = (!tradePropertyes.salePercentage)? salePercentage({tradePropertyes: tradePropertyes, mainGameObject: mainGameObject}): tradePropertyes;
    else mainGameObject.shopArea.selectedShopItem.tradePropertyes = {buyPricePercent: 100, salePercentage: 100}

    shopWeaponsActivity({ mainGameObject: mainGameObject, shopArea: mainGameObject.shopArea })
    switchShopHangar({ state: 'to-shop', element: mainGameObject.shopArea})
    toggleShopButtonStyle(null)
    show(shopUiItems.shopWrapper)
}

function leaveShop({element, mainGameObject, text}){
    element.shopDialogText.innerHTML = text;
    element.shopErrorMessage.innerHTML = '';
    //mainGameObject.gameInitData.inventoryActive = false;
    show(element.shopDialog)
}

function saleBoxLabelChange({mainGameObject}){

    let inventoryBox = document.querySelector("#inventory-box");
    if(mainGameObject.gameInitData.inventoryActive) addClassList(inventoryBox, 'shop-inventory-part')
    else removeClassList(inventoryBox, 'shop-inventory-part')

}



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
    let shopPageInformation = {
        currentShopUrl: process.env.SHOP_GUNS_URL,
        currentPage: 1,
        totalPages: 1,
        maxItemPerPage: 1,
        currentPageCardIndex: 1,
        customWrapperClass: null
    }
    showShopData({element: shopArea, url: process.env.SHOP_GUNS_URL,
         mainGameObject: mainGameObject,
         customWrapperClass: null,
         shopPageInformation: shopPageInformation})
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
        shopErrorMessage: shopArea.shopErrorMessage,
        shopPageInformation: shopPageInformation
    }
}



function shopHitObjectsDetection({event, hangarElements, index}){
    return objectIntersectionDetect({
        object: {
            x: event.clientX - (event.target.offsetLeft + event.target.parentElement.offsetLeft),
            y: event.clientY - (event.target.offsetTop + event.target.parentElement.offsetTop),
            width: 5,
            height: 5,
        }, target: {
            x: hangarElements[index].positionX,
            y: hangarElements[index].positionY,
            width: hangarElements[index].width,
            height: hangarElements[index].height,
        }
    })
}


function shopEventDetector({ shopArea, mainGameObject }){
    shopInventory({element: shopArea, mainGameObject: mainGameObject})
    shopArea.hangarShipArea.addEventListener('mousemove', function(event) {
        hangarMouseMoveEvent({ mainGameObject: mainGameObject, event: event })
    })
    shopArea.hangarShipArea.addEventListener('mouseleave', function(event) {
        hideDescriptionArea()
    })
    shopArea.hangarShipArea.addEventListener('click', async function(event: any) {
        let hangarElements = mainGameObject.shopArea.selectedShopItem.hangarElements
        let playerObjectData = mainGameObject.gameInitData.gameData.playerObject.data;
        let playerObject = mainGameObject.gameInitData.gameData.playerObject;
        let shopAreaItems = mainGameObject.shopArea.selectedShopItem

        for(let i = 0; i < hangarElements.length; i++ ){
            if(hangarElements[i]){
            let hitObject = shopHitObjectsDetection({
                event: event, hangarElements: hangarElements, index: i
            })
            inventoryColisionEvent({
                hitObject: hitObject,
                playerObjectData: playerObjectData,
                shopAreaItems: shopAreaItems,
                mainGameObject: mainGameObject,
                playerObject: playerObject,
                index: i})
            }
        }
    })
    shopArea.shopWrapper.addEventListener('click', function(event) {
        shopInventory({element: shopArea, mainGameObject: mainGameObject})
        shopMenuActivity({ mainGameObject: mainGameObject, shopArea: shopArea })
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
                : playerObjectData.guns[shopAreaItems.hangarSelectedItem]})
        }else selectedItemsPicture({status: false, event: event, picture: null})
    })

    shopArea.shopDialog.addEventListener('click', function(event) {
        switch(event.target['dataset'].targetBtnId){
            case 'ok':
                shopDialogActivity.call(shopArea.shopDialog, { mainGameObject: mainGameObject, shopArea: shopArea })
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



function changePage({mainGameObject, flag}){
    let shopPageInformation = mainGameObject.shopArea.shopPageInformation;
    if( flag === "back" ) shopPageInformation.currentPage -= 1
    else if( flag === "next" ) shopPageInformation.currentPage += 1

    if( shopPageInformation.currentPage < 1 ) shopPageInformation.currentPage = 1;
    if( shopPageInformation.currentPage > shopPageInformation.totalPages ) shopPageInformation.currentPage = shopPageInformation.totalPages;

    showShopData({element: mainGameObject.shopArea, url: shopPageInformation.currentShopUrl,
        mainGameObject: mainGameObject,
        customWrapperClass: shopPageInformation.customWrapperClass,
        shopPageInformation: mainGameObject.shopArea.shopPageInformation})
}



function buyStoreItem({mainGameObject, data, targetData}){
    let playerObject = mainGameObject.gameInitData.gameData.playerObject;
    //if( playerObject.data.inventory[targetData.index].grapplePower.maxNumber <= playerObject.data.inventory[targetData.index].grapplePower.number ) return false
    if(!data) return false
    
    inventoryItemGunsAssign({ mainGameObject: mainGameObject, data: data, targetData: targetData })
}


function inventoryItemGunsAssign({ mainGameObject, data, targetData }){
    let playerObject = mainGameObject.gameInitData.gameData.playerObject;
    if(data.type === "power" && data.name === 'extralife'){
        addPlayerLife.call(data, {
            allGameSideObjects: null,
            playerShipData: mainGameObject.gameInitData.gameData.playerObject,
            mainGameObject: mainGameObject
        })
        mainGameObject.gameInitData.gameData.gameCoins -= data.price;
        //hide(mainGameObject.shopArea.shopDialog)
    }else if(data.type === "inventory weapon"){
        if( targetData ){
             if( playerObject.data.inventory[targetData.index].grapplePower.maxNumber <= playerObject.data.inventory[targetData.index].grapplePower.number ){
                mainGameObject.shopArea.shopErrorMessage.innerHTML = 'you reach a limit of this item';
                return false
             }
            mainGameObject.gameInitData.gameData.gameCoins -= data.price;
            playerObject.data.inventory[targetData.index].grapplePower.number += 1;
        }
        shopInventory({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
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
        return `<div class="current-ship-label"><img src="${process.env.HOST + 'static/shop/misc/accept_label_1024x1024.png'}"></div>
        <div class="sale-ship-price"> Sale price ${salePercentAddToPrice({price: card.price, mainGameObject: mainGameObject})}</div>`;
    }
    else return ''
}




async function showShopData({element, url, mainGameObject, customWrapperClass, shopPageInformation}){
    let playerObject = mainGameObject.gameInitData.gameData.playerObject;
    let data = await getData({url: url, method: 'GET', data: null, headers: null})
    let listNotToDisplay = ['Reaper', 'Destructor'];  //'Destructor'
    data = cardDataCreator({ data: data, listNotToDisplay: listNotToDisplay})

    shopPageInformation.currentShopUrl = url;
    shopPageInformation.maxItemPerPage = (customWrapperClass === 'shipyard-item')? 1 : 4;
    shopPageInformation.totalPages = Math.ceil(data.length / shopPageInformation.maxItemPerPage);
    shopPageInformation.currentPageCardIndex = shopPageInformation.currentPage * shopPageInformation.maxItemPerPage - shopPageInformation.maxItemPerPage;
    shopPageInformation.customWrapperClass = customWrapperClass;

    element.displayShopItem.innerHTML = "";
    if(data.message) console.error(data.message)
    for(let i = shopPageInformation.currentPageCardIndex; i < shopPageInformation.currentPageCardIndex + shopPageInformation.maxItemPerPage; i++){
        let card = data[i]
        if(!card) continue
        let cardRender = createCard({
            card: card,
            customWrapperClass: customWrapperClass,
            playerObject: playerObject,
            mainGameObject: mainGameObject,
            element: element
        })
        element.displayShopItem.appendChild(cardRender)
    }
}


function cardDataCreator({ data, listNotToDisplay }){
    let resultData = data.map((item) => {
        let displayList = compareTitle({ listNotToDisplay: listNotToDisplay, item: item })
        if(displayList){
            return item
        }else return null
    }).filter(item => { if(item) return item})
    return resultData
}
function compareTitle({ listNotToDisplay, item }){
    if(listNotToDisplay.every((element) => item.title != element)){
        return item
    }else return null
}


function createCard({ card, customWrapperClass, playerObject, mainGameObject, element }){
        let shipDescription = (customWrapperClass === 'shipyard-item')? shipCardDescription({shipData: card}) : weaponsCardDescription({card: card});
        let currentShip = labelShip({playerObject: playerObject, card: card, mainGameObject: mainGameObject});
        //console.log(path.join(process.env.HOST + card.background))
        let backgroundImage = `background-image: url('${'./'+ card.background}');`;
        //backgroundImage.replace(" ", "%")
        console.log(backgroundImage)
        let cardRender = createElements({tagName: 'div',
        styleClass: (customWrapperClass)? `${customWrapperClass} ${(playerObject.data.title === card.title)? 'current-ship' : ''}` : 'shop-card',
        inlineStyle: `${backgroundImage}' `,
        pictureUrl: null, linkUrl: null, text: null,
        innerContent: `<div class="inner-card">
            <h2>${card.title} ${currentShip}</h2>
            <img src="${process.env.HOST, card.loadImage}">
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
        return cardRender
}




function switchShopHangar({state, element}){
    if(state == 'to-hangar'){
        hide(element.shopArea)
        show(element.hangarArea)
    }else if(state == 'to-shop'){
        hide(element.hangarArea)
        show(element.shopArea)
    }
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
        if(playerObjectData.guns[i]) shipGunsLastItems = i;
    }

    let headers = {
        "usercoins" : mainGameObject.gameInitData.gameData.gameCoins + salePercentAddToPrice({price: playerObjectData.price, mainGameObject: mainGameObject}),
        "itemname" : mainGameObject.shopArea.selectedShopItem.title,
        "currentshipname": playerObjectData.title,
        "shipinventoryitems": shipInventoryLastItems,
        "shipgunsitems": shipGunsLastItems
    }
    let data = await getData({url: url, method: 'PUT', data: null, headers: headers})
    if(!data) return false

    if(data.status === 'false'){
        mainGameObject.shopArea.shopErrorMessage.innerHTML = data.message;
    }else if(data.data){
        mainGameObject.gameInitData.gameData.gameCoins = parseInt(data.money);
        replaceShipData({ mainGameObject: mainGameObject, buyShipData: data})
        hide(mainGameObject.shopArea.shopDialog)
        shopInventory({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
        showShopData({element: mainGameObject.shopArea,
            url: process.env.SHOP_SHIPYARD_URL,
            mainGameObject: mainGameObject,
            customWrapperClass: "shipyard-item",
            shopPageInformation: mainGameObject.shopArea.shopPageInformation
        })
    }
}


async function buyItem({url, mainGameObject}){

    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject;

    let inventoryInformation = inventoryFreeItem({inventory: playerObjectData.data.inventory, inventoryCapacity: playerObjectData.data.inventoryCapacity })
    let headers = {"usercoins" : mainGameObject.gameInitData.gameData.gameCoins,
        "itemName": mainGameObject.shopArea.selectedShopItem.title}
    if(!inventoryInformation['firstEmptyItem'] && mainGameObject.shopArea.selectedShopItem.title != 'Rocket'
    && mainGameObject.shopArea.selectedShopItem.title != 'Homing Rocket'
    && mainGameObject.shopArea.selectedShopItem.title != 'Nuclear Blast'
    && mainGameObject.shopArea.selectedShopItem.title != 'Extra life'){
        mainGameObject.shopArea.shopErrorMessage.innerHTML = 'Your`s inventory is full';
        return false
    }
    let data = await getData({url: url, method: 'PUT', data: null, headers: headers})
    if(data.status === 'false'){
        mainGameObject.shopArea.shopErrorMessage.innerHTML = data.message;
        return
    }else if(data.data){
        if(data.data.type === "power" && data.data.name === 'extralife'){
            buyStoreItem({ mainGameObject: mainGameObject, data: data.data, targetData: null})
            return false
        }
        if(data.data.type === "inventory weapon"){
            let searchItem: any = findIntInventory({ inventory: playerObjectData.data.inventory, searchObject: data.data})
            buyStoreItem({ mainGameObject: mainGameObject, data: data.data, targetData: searchItem})
            if(searchItem) return
        }

        mainGameObject.gameInitData.gameData.gameCoins = parseInt(data.money);
        putInsideInventory({mainGameObject, saveItem: data.data, inventoryItem: inventoryInformation['firstEmptyItem']})
        if(data.data.type != "inventory weapon"){hide(mainGameObject.shopArea.shopDialog)}
        shopInventory({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
    }
}



export {
    loadShopArea,
    saleBoxLabelChange,
    enterToTheShopDialog,
    leaveShop,
    shopHitObjectsDetection,
    showDescriptionArea,
    buyShip,
    buyItem,
    showShopData,
    switchShopHangar,
    changePage,
    inventoryItemGunsAssign,
    shopInventory
}