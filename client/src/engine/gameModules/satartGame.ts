import { getData, getLocalData, getElectronLocalData } from '../../server/serverRequestModules';
import { preloadImage } from '../engineModules';
import { loadWindow } from '../../ui/loadScreen';
const { ipcRenderer, remote } = require( "electron" );


async function serverRequest(gameInformation){
        console.log(process.env.NODE_ENV, process.env.HOST)
        let serverLocation = {
                host: process.env.HOST,
                picturesDirection: __dirname + '/public/images/',
                levelData: {
                    method: "GET",
                    url: "api/level-data"
                },
                levelObjects: {
                    method: "GET",
                    url: "api/level-objects"
                },
                grappleObjects: {
                    method: "GET",
                    url: "api/grapple-objects"
                },
                gameSetings: {
                    method: "GET",
                    url: "api/game-settings"
                },
                userShip: {
                    method: "GET",
                    url: "api/user-ship"
                },
                enemylData: {
                    method: "GET",
                    url: "api/enemy-ship"
                }
        }
        const levelData = await getData({
            url: serverLocation.host + serverLocation.levelData.url,
            method: serverLocation.levelData.method,
            data: null,
            headers:{ 'maplevel': gameInformation.level}
        })
        const levelObjects = await getData({
            url: serverLocation.host + serverLocation.levelObjects.url,
            method: serverLocation.levelObjects.method,
            data: null,
            headers:{ 'mapObject': levelData.levelOBjects}
        })
        const grappleObjects = await getData({
            url: serverLocation.host + serverLocation.grappleObjects.url,
            method: serverLocation.grappleObjects.method,
            data: null,
            headers:{ 'grappleObject': levelData.grappleObject}
        })
        const preloadData = await getLocalData({ fileName: 'preloadData.json' })

        const gameSetings: any = await getElectronLocalData({ fileName: 'game-settings.json' })
        const userData = await getData({
            url: serverLocation.host + serverLocation.userShip.url,
            method: serverLocation.userShip.method,
            data: null,
            headers:{ 'usership': gameInformation.shipConfiguration}
        })
        const enemyData = await getData({
            url: serverLocation.host + serverLocation.enemylData.url,
            method: serverLocation.enemylData.method,
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
async function gameDataInit(PlayerShip, soundObject){
    loadWindow({loadStatus: "load"})
    let gameField = document.querySelector('#gamefield'),
        gameActionField = document.querySelector('#gameObjectsfield'),
        gameUIfield = document.querySelector('#gameUifield');

        let level = 1, shipType = 1, shipLife = 5;
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
        let shipData = {
            data: userData,
            points: 0,
            numberOflife: shipLife,
            maxOfLife: shipLife,
            healthPoint:300,
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

        return {data: {
            ctx: null,
            gameField: (gameField)? gameField: null,
            gameActionField : (gameActionField)? gameActionField: null,
            gameUIField : (gameUIfield)? gameUIfield: null,
            gameData:{
                currentLevel: level,
                currentPoint: 0,
                gameCoins: 0,
                playerObject: new PlayerShip(shipData),
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
            allGameMapOBjects: [],
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
            gemeExtraSeconds: 0,
        }
    }
}
function gameStart(){
    this.mapSoundChanger({soundStatus:'regular_level'})

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
    let newInitdata = await gameDataInit(PlayerShip, soundObject);
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
    mapSoundChanger
}