import { show, hide } from '../../../appMenu/appMenu';
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
import { loadHangar } from '../gameHangarModules';
import { buyShip,
    buyItem, showShopData,
    switchShopHangar,
    changePage,
    leaveShop } from '../gameShopModule';

function shopDialogActivity({mainGameObject, shopArea}){
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
        buyShip({mainGameObject: mainGameObject, url: process.env.SHOP_SHIPYARD_URL})
    }else if(process.env.SHOP_STORE_WINDOW === 'true' && process.env.SHOP_SHIPYARD_ACTIVE_WINDOW === 'false' &&
    process.env.SHOP_ACTIVE_WINDOW === 'true'){
        buyItem({ url: process.env.SHOP_STORE_ITEMS, mainGameObject: mainGameObject})
    }
}



function shopWeaponsActivity({ mainGameObject, shopArea}){
    mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
    mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
    process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
    process.env.SHOP_STORE_WINDOW = 'false';
    mainGameObject.shopArea.shopPageInformation.currentPage = 1;
    showShopData({element: shopArea, url: process.env.SHOP_GUNS_URL,
        mainGameObject: mainGameObject,
        customWrapperClass: null,
        shopPageInformation: mainGameObject.shopArea.shopPageInformation})
}


function shopShipActivity({ mainGameObject, shopArea}){
    mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
    mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
    process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'true';
    process.env.SHOP_STORE_WINDOW = 'false';
    mainGameObject.shopArea.shopPageInformation.currentPage = 1;
    showShopData({element: shopArea, url: process.env.SHOP_SHIPYARD_URL,
        mainGameObject: mainGameObject,
        customWrapperClass: "shipyard-item",
        shopPageInformation: mainGameObject.shopArea.shopPageInformation})
}


function shopMarketActivity({ mainGameObject, shopArea}){
    mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
    mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
    process.env.SHOP_STORE_WINDOW = 'true';
    process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
    mainGameObject.shopArea.shopPageInformation.currentPage = 1;
    showShopData({element: shopArea, url: process.env.SHOP_STORE_ITEMS,
        mainGameObject: mainGameObject,
        customWrapperClass: null,
        shopPageInformation: mainGameObject.shopArea.shopPageInformation})
}


function shopExitActivity({ mainGameObject, shopArea}){
    mainGameObject.shopArea.selectedShopItem.inventorySelectedItem = null;
    mainGameObject.shopArea.selectedShopItem.hangarSelectedItem = null;
    process.env.SHOP_ACTIVE_WINDOW = 'false';
    leaveShop({element: shopArea, mainGameObject: mainGameObject, text: 'back to the game'})
}



function shopMenuActivity({ mainGameObject, shopArea }){
    switch(event.target['dataset'].targetBtnId){
        case 'weapons':
            shopWeaponsActivity({ mainGameObject: mainGameObject, shopArea: shopArea })
            break;
        case 'ship':
            shopShipActivity({ mainGameObject: mainGameObject, shopArea: shopArea })
            break;
        case 'market':
            shopMarketActivity({ mainGameObject: mainGameObject, shopArea: shopArea })
            break;
        case 'to-hangar':
            switchShopHangar('to-hangar', shopArea)
            loadHangar({element: shopArea,
                mainGameObject: mainGameObject})
            break;
        case 'to-shop':
            switchShopHangar('to-shop', shopArea)
            break;
        case 'previous-items':
            changePage({mainGameObject: mainGameObject, flag: "back"})
            break;
        case 'next-items':
            changePage({mainGameObject: mainGameObject, flag: "next"})
            break;
        case 'exit':
            shopExitActivity({ mainGameObject: mainGameObject, shopArea: shopArea })
            break;
        default:
            false
    }
}

export {
    shopDialogActivity,
    shopMenuActivity
}