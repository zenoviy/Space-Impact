import { getData, getLocalData, getElectronLocalData } from './serverRequestModules';

async function getExtraObjects ({ randomObject }){
    return await getData({
        url: process.env.HOST + "api/grapple-objects",      // change to process.env
        method: "GET",
        data: null,
        headers: { 'grappleObject': randomObject.object}})
}


async function getGameResultData ({method, data}){
    return await getData({
        url: process.env.HOST + 'api/game-result',
        method: method,
        data: data,
        headers: null})
}

async function getShopServerData ({shopUrl, headers}){
    return await getData({
        url: process.env.HOST + shopUrl,
        method: 'PUT',
        data: null,
        headers: headers})
}
async function loadGroundEnemy({dynamicEnemyCollection}){
    return await getData({
        url: dynamicEnemyCollection,
        method: 'GET',
        data: null,
        headers: null
    })
}
async function loadGroundPlayer(){
    return await getData({
        url: process.env.HOST + process.env.GROUND_CHARACTERS_URL,
        method: 'GET',
        data: null,
        headers: {
            'item-id': "main_character",
        }
    })
}




/* Game start data */

async function serverDataRequest(gameInformation){
    console.log(process.env.NODE_ENV, process.env.HOST)

    const levelData = await getData({
        url: process.env.HOST + process.env.LEVEL_DATA_URL,
        method: 'GET',
        data: null,
        headers:{ 'maplevel': gameInformation.level}
    })
    const levelObjects = await getData({
        url: process.env.HOST + process.env.LEVEL_OBJECT_URL,
        method: 'GET',
        data: null,
        headers:{ 'mapObject': levelData.levelOBjects}
    })
    const grappleObjects = await getData({
        url: process.env.HOST + process.env.LEVEL_GRAPPLE_OBJECTS_URL,
        method: 'GET',
        data: null,
        headers:{ 'grappleObject': levelData.grappleObject}
    })
    const preloadData = await getLocalData({ fileName: 'preloadData.json' })

    const gameSetings: any = await getElectronLocalData({ fileName: 'game-settings.json' })
    const userData = await getData({
        url: process.env.HOST + process.env.USER_SHIP_URL,
        method: 'GET',
        data: null,
        headers:{ 'usership': gameInformation.shipConfiguration}
    })
    const enemyData = await getData({
        url: process.env.HOST + process.env.ENEMY_SHIP_URL,
        method: 'GET',
        data: null,
        headers:{ 'ship-type-number': levelData.enemyType}
    })

    /*preloadImage(enemyData)
    preloadImage(levelData)
    preloadImage(levelObjects)*/
    return {
        levelData: levelData,
        levelObjects: levelObjects,
        grappleObjects : grappleObjects,
        preloadData: preloadData,
        gameSetings: await gameSetings,
        userData: userData,
        enemyData: enemyData
    }
}

export {
    getExtraObjects,
    getGameResultData,
    getShopServerData,
    loadGroundEnemy,
    loadGroundPlayer,
    serverDataRequest
}