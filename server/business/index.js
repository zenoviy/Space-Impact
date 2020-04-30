const { levelData } = require('./level Data/level-data');
const { getUserShip } = require('./ship Data/user-ship');
const { getEnemyShip } = require('./ship Data/enemy-ship')
const { getLevelObjects } = require('./level Data/level-objects');
const { getResultlData, postResultlData, updateResultlData } = require('./game Data/game-result');
const { getGrappleObjects } = require('./level Data/grapple-objects');

const { getShopWeaponData, putShopWeaponData } = require('./game Data/game-weapon-shop');
const { getShopShipyardData, putShopShipyardData } = require('./game Data/game-shipyard-shop');


const { getStoreItemsData, putStoreItemsData } = require('./game Data/game-store-items');


const { constructorBlockData, saveMap, loadMap, loadAllMap, constructorCharacterData} = require('./level Data/constructor-objects');

module.exports = {
    getLevelData : levelData,
    getUserShip : getUserShip,
    getEnemyShip : getEnemyShip,
    getLevelObjects : getLevelObjects,
    getResultlData: getResultlData,
    postResultlData: postResultlData,
    getGrappleObjects: getGrappleObjects,
    updateResultlData: updateResultlData,
    getShopWeaponData: getShopWeaponData,
    putShopWeaponData: putShopWeaponData,
    getShopShipyardData: getShopShipyardData,
    putShopShipyardData: putShopShipyardData,
    getStoreItemsData: getStoreItemsData,
    putStoreItemsData: putStoreItemsData,
    constructorBlockData: constructorBlockData,
    saveMap: saveMap,
    loadMap: loadMap,
    loadAllMap: loadAllMap,
    constructorCharacterData: constructorCharacterData
}