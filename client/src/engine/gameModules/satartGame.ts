import { getData, getLocalData, getElectronLocalData } from '../../server/serverRequestModules';
import { preloadImage } from '../engineModules';
import { loadWindow } from '../../ui/loadScreen';
import { horizontalVerticalSearch, renewPlayerShip } from './changeLevels';
const { ipcRenderer, remote } = require( "electron" );


async function serverRequest(gameInformation){
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

        preloadImage(enemyData)
        preloadImage(levelData)
        preloadImage(levelObjects)
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

function newPlayerShipConstruct({ PlayerShip, userData, shipLife }){
    let shipData = {
        data: userData,
        points: 0,
        numberOflife: shipLife,
        maxOfLife: shipLife,
        healthPoint: userData.healthPoint,
        armor: userData.armor,
        x: 0,
        y: 0,
        xFinal: userData.x,
        yFinal: userData.y,
        collisionAllow: true,
        objectOwner: "player",
        width: userData.width,
        height: userData.height,
        xAdj: 0, speed: userData.speed,
        explosion: userData.explosionAnimation,
        damage: userData.damage,
        sx: userData.sx, sy: userData.sy, picturesWidth: userData.imageWidth,
        imageHeight: userData.imageHeight,
        sWidth: userData.sWidth, sHeight: userData.sHeight,
        animationSteps: userData.animationSteps,
        numberOfItems: userData.numberOfItems,
        numberOfVerticalItems: userData.numberOfVerticalItems,
        collideExplosionAnimation: userData.collideExplosionAnimation
    }

    return new PlayerShip(shipData);
}
async function gameDataInit(PlayerShip, soundObject){
    loadWindow({loadStatus: "load"})
    let level = 1, shipType = 1, shipLife = 15;
    let gameField = document.querySelector('#gamefield'),
        gameActionField = document.querySelector('#gameObjectsfield'),
        gameUIfield = document.querySelector('#gameUifield');


        let res = await serverRequest({level: level,  shipConfiguration: shipType})
        const levelData = res.levelData;
        const levelObjects = res.levelObjects;
        const grappleObjects = res.grappleObjects;
        const preloadData = res.preloadData;
        const gameSetings = res.gameSetings;
        const userData = res.userData;
        const enemyData = res.enemyData;

        if(levelData.status === "error" || levelObjects === "error" || grappleObjects === "error" ||
        levelData.gameSetings === "error" || userData === "error" || enemyData === "error"){
            loadWindow({loadStatus: "serverError"})
            return null
        }else{
            loadWindow({loadStatus: "success"})
        }


        let playerShipData = newPlayerShipConstruct({ PlayerShip: PlayerShip, userData: userData, shipLife: shipLife});
        if(this.gameInitData){
            playerShipData = renewPlayerShip.call(this, { originData: this.gameInitData.gameData.playerObject, newData: playerShipData})
            playerShipData.playerShipTextureChange()
            this.shopArea.selectedShopItem = {
                title: "",
                price: "",
                inventorySelectedItem: null,
                hangarSelectedItem: null,
                hangarElements: []
            }
            process.env.SHOP_ACTIVE_WINDOW = 'false';
        }

        return {data: {
            ctx: null,
            gameField: (gameField)? gameField: null,
            gameActionField : (gameActionField)? gameActionField: null,
            gameUIField : (gameUIfield)? gameUIfield: null,
            gameData:{
                currentLevel: level,
                currentPoint: 0,
                gameCoins: 1111110,
                playerObject: playerShipData,
                levelData: levelData,
                levelObjects: levelObjects,
                grappleObjects: grappleObjects,
                levelSounds:  (soundObject)? soundObject: null,
                preloadData: preloadData,
                gameSetings: gameSetings,
                enemyData: enemyData,
                controllers: null
            },
            screen:{
                width: window.innerWidth,
                height: window.innerHeight
            },
            intervalCount: 20,
            enemyType: null,
            allGameSideObjects: [],
            allGameEnemies: [],
            allGameBullets: [],
            mapBackgroundObjects: [],
            warpObjects: [],
            timeToEressLevel: 6,
            levelChange: false,
            gamePause: false,
            gameUiPause: false,
            backScreenPause: true,
            gameStatus: false,
            gameOver: false,
            gameWin: false,
            levelWindowDescription: false,
            grappleObjectOnScreen: false,
            tradepostInRange: false,
            shopActive: false,
            gemeExtraSeconds: 0,
            tradeShipTimeToUndock: 0
        }
    }
}
function gameStart(){
    this.mapSoundChanger({soundStatus:'regular_level'})
    process.env.BOSS_LOAD_AT_LEVEL = "false";
    let contexts = this.returnContext()
    this.initPlayerShip()

    this.gameInitData.gameOver = false;
    this.gameInitData.gameStatus = true;
}

function mapSoundChanger({soundStatus}){
    let gameData = this.showGameInfo().gameData;
    let mapSound = gameData.levelData.levelSound;
    let gameSoundObject = gameData.levelSounds;

    switch(soundStatus){
        case 'start_screen':
            mapSound = gameData.preloadData.startSound;
            break
        case 'regular_level':
            mapSound = gameData.levelData.levelSound;
            break
        case 'game_over_screen':
            mapSound = gameData.preloadData.gameOverSound;
            break
        case 'game_win':
            mapSound = gameData.preloadData.gameWinSound;
            break
        default:
            mapSound
    }

    gameSoundObject.changeTrack({url: mapSound})
    gameSoundObject.soundPlay()
}




async function backToStartScreen(PlayerShip){
    let soundObject = this.showGameInfo().gameData.levelSounds;
    let newInitdata = await gameDataInit.call(this, PlayerShip, soundObject);
    if(!newInitdata.data) throw new Error("No 'newInitdata.data'");

    for(let [key, value] of Object.entries( newInitdata.data)){
        if(value !== null) {
            this.gameInitData[key] = value
        };
    }
    this.mapSoundChanger({soundStatus:'start_screen'})
    this.gameInitData.gameOver = false;
    this.gameInitData.gameStatus = false;
}

function exitTheGame(){
        let w = remote.getCurrentWindow()
        w.close()
}

export {
    gameDataInit,
    serverRequest,
    gameStart,
    backToStartScreen,
    exitTheGame,
    mapSoundChanger,
    newPlayerShipConstruct
}