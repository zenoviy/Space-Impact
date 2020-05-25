import { getData, getLocalData, getElectronLocalData } from '../../server/serverRequestModules';
import { serverDataRequest } from '../../server/gameDataRequestsServicesModule';
import { preloadImage } from '../engineModules';
import { loadWindow } from '../../ui/loadScreen';
import { horizontalVerticalSearch, renewPlayerShip } from './changeLevels';
const { ipcRenderer, remote } = require( "electron" );
import { loadLevelMap, backgroundAdjustment } from '../dynamicLevels/dynamicLevelModule';
import { loadLevelEnemy } from '../dynamicLevels/dynamicLevelEnemyModules';
import { initGroundPlayer } from '../dynamicLevels/playerUnitModule';
import * as constructors from '../../constructors';
import { loadExtraObject } from '../../ai/regularEnemyAiModules';
import { hideInventory } from '../dynamicLevels/playerUnitModule';


async function serverRequest(gameInformation){
        console.log(process.env.NODE_ENV, process.env.HOST)
        return await serverDataRequest(gameInformation)
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
async function gameDataInit(PlayerShip, soundObject, constructors){
    loadWindow({loadStatus: "load"})
    let level = 3, shipType = 3, shipLife = 15;
    let gameField = document.querySelector('#gamefield'),
        gameActionField = document.querySelector('#gameObjectsfield'),
        gameDialogField = document.querySelector('#gameActionDialogfield'),
        gameUIfield = document.querySelector('#gameUifield');


        let res = await serverRequest({level: level,  shipConfiguration: shipType})

        const levelData = res.levelData;
        const levelObjects = res.levelObjects;
        const grappleObjects = res.grappleObjects;
        const preloadData = res.preloadData;
        const gameSetings = res.gameSetings;
        const userData = res.userData;
        const enemyData = res.enemyData;

        if(levelData['status'] === "error" || levelObjects === "error" || grappleObjects === "error" ||
        levelData['gameSetings'] === "error" || userData === "error" || enemyData === "error"){
            loadWindow({loadStatus: "serverError"})
            return null
        }else{
            loadWindow({loadStatus: "success"})
        }


        let playerShipData = newPlayerShipConstruct({ PlayerShip: constructors.PlayerShip, userData: userData, shipLife: shipLife});
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
        let dynamicLevelMapBlocks: any[] = (levelData['dynamicLevelsActive'])? await loadLevelMap({
            levelMapName: levelData['dynamicBlockMap'] + '.json',
            constructors: constructors }) : [];

        let dynamicLevelEnemy = (levelData['dynamicLevelsActive'])? await loadLevelEnemy({
            levelDynamicMapBlocks: dynamicLevelMapBlocks,
            constructors: constructors }) : [];
        return {data: {
            ctx: null,
            gameField: (gameField)? gameField: null,
            gameActionField : (gameActionField)? gameActionField: null,
            gameDialogField : (gameDialogField)? gameDialogField: null,
            gameUIField : (gameUIfield)? gameUIfield: null,
            gameData:{
                currentLevel: level,
                currentPoint: 0,
                gameCoins: 1000000,
                playerObject: playerShipData,
                groundPlayerCharacter: await initGroundPlayer({
                    DynamicUserConstructor: constructors.DynamicUserConstructor
                }),
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
            allGroundGameBullets: [],
            mapBackgroundObjects: [],
            warpObjects: [],
            mapKeyCode: {},
            dynamicLevelMapBlocks:  dynamicLevelMapBlocks,
            dynamicLevelEnemy: dynamicLevelEnemy,
            timeToEressLevel: 6,
            levelChange: false,
            gamePause: false,
            gameUiPause: false,
            backScreenPause: true,
            gameStatus: false,
            gameOver: false,
            gameWin: false,
            subBossPresent: false,
            gatePresent: false,
            levelWindowDescription: false,
            grappleObjectOnScreen: false,
            dynamicLevelsActive: (levelData['dynamicLevelsActive'])? true : false,
            tradepostInRange: false,
            inventoryActive: false,
            shopActive: false,
            gameExtraSeconds: 0,
            tradeShipTimeToUndock: 0
        }
    }
}
function gameStart(){
    this.mapSoundChanger({soundStatus:'regular_level'})
    process.env.BOSS_LOAD_AT_LEVEL = "false";

    process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
    process.env.SHOP_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SALE_WINDOW = 'false';
    process.env.SHOP_STORE_WINDOW = 'false';
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




async function backToStartScreen(constructors){
    hideInventory()
    let soundObject = this.showGameInfo().gameData.levelSounds;
    let newInitdata = await gameDataInit.call(this, constructors.PlayerShip, soundObject, constructors);
    if(!newInitdata.data) throw new Error("No 'newInitdata.data'");
    console.log(newInitdata)
    for(let [key, value] of Object.entries( newInitdata.data)){
        if(value !== null) {
            this.gameInitData[key] = value;
        };
    }
    console.log(newInitdata)
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