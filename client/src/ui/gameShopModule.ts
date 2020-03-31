import { show,
    hide,
    toggler,
    addClassList,
    removeClassList } from '../appMenu/appMenu';
import { getData } from '../server/serverRequestModules';
import { pageBuilder, createElements } from '../appMenu/pagesBuilder';
import { createImage, createWindow, draw } from '../view/displayModules';
import { hitDetection, objectIntersectionDetect } from '../enemies/enemiesModules';

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
    shopInventory({element: shopArea, mainGameObject: mainGameObject})
    shopArea.shopWrapper.addEventListener('click', function(event) {
        shopInventory({element: shopArea, mainGameObject: mainGameObject})
        selectInventoryItem({index: mainGameObject.shopArea.selectedShopItem.inventorySelectedItem})
        switch(event.target['dataset'].targetBtnId){
            case 'weapons':
                showShopData({element: shopArea, url: 'api/shop/guns', mainGameObject: mainGameObject})
                break;
            case 'ship':
                console.log('ship')
                break;
            case 'market':
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
                process.env.SHOP_ACTIVE_WINDOW = 'false';
                leaveShop({element: shopArea, mainGameObject: mainGameObject, text: 'back to the game'})
                break;
            default:
                false
        }
    })
    shopArea.hangarShipArea.addEventListener('click', function(event: any) {
        console.log(event.clientX - event.target.offsetLeft, event.clientY - event.target.offsetTop)
        let hangarElements = mainGameObject.shopArea.selectedShopItem.hangarElements
        for(let i = 0; i < hangarElements.length; i++ ){
            console.log(hangarElements[i], "||")

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
                console.log(hitObject, i)
            }

        }
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
    mainGameObject.gameInitData.shopActive = true;
    let shopUiItems = mainGameObject.shopArea

    show(shopUiItems.shopWrapper)
}






function loadHangar({element, mainGameObject}){
    let hangarTextArea = document.querySelector("#hangar-text");
    let playerObject = mainGameObject.gameInitData.gameData.playerObject;
    let shopArea = mainGameObject.shopArea;
    let playerObjectData = playerObject.data
    let ctx = element.hangarShipArea.getContext('2d');
    let img = new Image()
    element.hangarShipArea.style = 'background: #000;'
    element.hangarShipArea.width = 600;
    element.hangarShipArea.height = 350;
    img.src = process.env.HOST + playerObjectData.hangarImage;
    hangarTextArea.innerHTML = playerObjectData.name;

    img.onload = () => {
        createImage(ctx, img, 120, 20, 300, 300)
        for(let i = 0; i < playerObjectData.firespot.length; i++){
            createClicableArea({position: playerObjectData.firespot[i], index: i, gun: playerObject.data.guns[i]})
        }
    }


    function createClicableArea({position, index, gun}){
        console.log(position, index, gun)
        ctx.fillStyle = "rgba(255, 255, 255, .3)";
        ctx.fillRect(position.positionX, position.positionY, 50, 50);
        if(gun){
            let img = new Image()
            img.src = process.env.HOST + gun.loadImage
            img.onload = () => {
                createImage(ctx, img, position.positionX, position.positionY, 50, 50)
            }
        }
            mainGameObject.shopArea.selectedShopItem.hangarElements[index] = {
                object: gun,
                positionX: position.positionX,
                positionY: position.positionY,
                shipXPosition: 5,
                shipYPosition: 12,
                width: 50,
                height: 50
            }
    }
}







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
            let item = document.querySelector('#item-descripton');
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
            mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = (mainGameObject.shopArea.selectedShopItem.inventorySelectedItem == index)? null:index;
        })
        element.shopInventoryWrapper.appendChild(itemRender)
    }
}



function selectInventoryItem({index}){
    let inventoryItems = Array.prototype.slice.call(document.querySelectorAll('.inventory-item'));
    for(let singleItem of inventoryItems){
        removeClassList(singleItem, 'inventory-selected-items');
    }
    if(!index && index != 0) return false
    addClassList(inventoryItems[index], 'inventory-selected-items');
}




async function buyItem({url, mainGameObject}){
    let levelData = mainGameObject.getLevelUserData();
    let playerObjectData = mainGameObject.gameInitData.gameData.playerObject;
    let price = mainGameObject.shopArea.selectedShopItem.price;
    let inventoryInformation = inventoryFreeItem({inventory: playerObjectData.data.inventory, inventoryCapacity: playerObjectData.data.inventoryCapapcity })

    console.log(mainGameObject.gameInitData.gameData.gameCoins)
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
        mainGameObject.gameInitData.gameData.gameCoins -= parseInt(price);
        putInsideInventory({mainGameObject, saveItem: data.data, inventoryItem: inventoryInformation['firstEmptyItem']})
        hide(mainGameObject.shopArea.shopDialog)
        shopInventory({element: mainGameObject.shopArea, mainGameObject: mainGameObject})
    }


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
    playerObjectData.inventory.splice(inventoryItem.index, 0, saveItem);
}

export {
    loadShopArea,
    enterToTheShopDialog
}