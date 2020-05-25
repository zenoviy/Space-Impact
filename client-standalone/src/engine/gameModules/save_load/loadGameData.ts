var fs = require('fs');
var storage = require('electron-json-storage');
import { writeElectronLocalData, getElectronLocalSaves } from '../../../server/serverRequestModules';
import { createElements} from '../../../appMenu/pagesBuilder';
import { renewPlayerShip } from '../changeLevels';
import * as constructor from '../../../constructors';
import { replaceShipData } from '../../../ui/shop/gameShopShipyard';
import { deleteSaveData, overwriteSaveData, saveDialog } from './saveGameModules';
import {
    show,
    hide,
    toggler,
    addClassList,
    removeClassList } from '../../../appMenu/appMenu';
import { hideLoadScreen } from '../../../ui/loadScreen';



async function showSaveData(){
    let saveData = await getElectronLocalSaves({ fileName: process.env.SAVE_DATA_FILE })
    if(!saveData || saveData === 0) return false
    return saveData
}


function clearClassSelectorField({target}){
    for(let item of target){
        item.object.innerHTML = '';
    }
    return
}


function delateClassSelectorField({target}){
    for(let item of target){
        item.remove()
    }
}


async function displaySavesOnScreen({saveScreen, saveData, mainGameObject}){
    let customPageFlags = ['save-screen', 'load-screen'];
    let menuArea = Array.prototype.slice.call(document.querySelectorAll(".save-load-wrapper")).map(((item, i) => {
        return {
            indexFlag: customPageFlags[i],
            object: item
        }
    }));

    await clearClassSelectorField({target: menuArea})
    await saveData.sort(function(a, b){ return a.saveTime - b.saveTime});
    await saveData.reverse()

    if(saveData.length < 1){
        for (let item of menuArea){
            let object = await document.createElement("div");
            object.innerHTML = "<div><h2>No save data</h2></div>";
            await item.object.appendChild(object)
        }
        hideLoadScreen()
        return
    }
    for (let item of menuArea){
        if(!saveData || saveData.length < 1) item.object.innerHTML = '';
        let index = 0;
        for (let save of saveData){
            let time = new Date(save.saveTime),
            year = time.getFullYear(),
            month = time.getUTCMonth() + 1,
            day = time.getDate(),
            hours = time.getHours(),
            minutes = time.getMinutes(),
            seconds = time.getSeconds();

            let img = new Image();
            let pictureURL = save.savePicture; //await storage.getDataPath() + '/' + save.saveName + '.png'  + "?t=" + new Date().getTime() + 1;
            img.src = (pictureURL)? pictureURL : null;
            await new Promise((resolve, reject) => {
                img.src = (save.savePicture)? save.savePicture : null;
                img.onload = () => {
                    resolve({pictureURL: save.savePicture})
                }
            }).then((resolve: any) => {
                index += 1;
                let newElement = createElements({
                    tagName: "li",
                    styleClass: `save-load-list ${item.indexFlag}`,
                    inlineStyle: null,
                    pictureUrl: null,
                    linkUrl: null,
                    text: null,
                    innerContent: `
                    <div class="save-card-body">
                        <div class="saveImage-wrapper-small">
                            <img id="preview-img-${save.saveTime}" src="${ (save.savePicture)? save.savePicture : '' }" alt="${save.saveName}">
                        </div>
                        <p class="single-item"><span class="rate-number">${index}</span>
                        <span>save name:</span> <span class="item-name"> ${save.saveName}</span>
                        <span class="item-date"> ${year}/${month}/${day}    ${hours}:${minutes}:${seconds}</span></p>
                    </div>
                    `,
                    attributeName: 'data-button-id',
                    attribute: save.saveTime,
                    attributeName1: null,
                    attribute1: null
                })
                newElement.addEventListener('click', function(e) {
                    saveDialog({text: null, typeOfWarning: ""})
                    let image: any = document.querySelector(`#preview-img-${save.saveTime}`);
                    let pictureURL = save.savePicture; //storage.getDataPath() + '/' + save.saveName + '.png'  + "?t=" + new Date().getTime() + 1;
                    image.src = (pictureURL)? pictureURL : null;
                    showAcceptButtons.call(this, {mainGameObject: mainGameObject, saveDataItem: save, flag: item.indexFlag})
                })
                item.object.appendChild(newElement)
            })
        }
    }
    hideLoadScreen()
}




function showAcceptButtons({mainGameObject, saveDataItem, flag}){
    delateClassSelectorField({target: Array.prototype.slice.call(document.querySelectorAll('.save-load-buttons-list'))})

    let contextElement = this;
    let loadButtons = `<div class="save-load-button-area">
        <button data-button-id="load-save" class="btn-main">Load</button>
        <button data-button-id="delete-save" class="btn-main btn-orange-reject">Delete</button>
    </div>`;
    let saveButtons = `<div class="save-load-button-area">
        <button data-button-id="overwrite-save" class="btn-main">Overwrite</button>
        <button data-button-id="delete-save" class="btn-main btn-orange-reject">Delete</button>
    </div>`;
    let pictureURL = saveDataItem.savePicture;  //storage.getDataPath() + '/' + saveDataItem.saveName + '.png' + "?t=" + new Date().getTime();
    let img = new Image();
    img.src = (pictureURL)? pictureURL : null;
    img.onload = () => {
        let newElement = createElements({
            tagName: "li",
            styleClass: "save-load-buttons-list",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: null,
            innerContent: `
            <div class="save-preview-image-large">
                <img src="${ saveDataItem.savePicture }" alt="${saveDataItem.saveName}">
                <div class="save-details">
                    <h3>Save: ${saveDataItem.saveName}</h3>
                    <p>Level: ${saveDataItem.playerInformation.currentLevel}</p>
                    <p>minutes: ${(saveDataItem.playerInformation.minutes)? saveDataItem.playerInformation.minutes : 0}</p>
                    <p>seconds: ${(saveDataItem.playerInformation.seconds)? saveDataItem.playerInformation.seconds : 0}</p>
                    <p>Life: ${saveDataItem.playerInformation.playerLife}</p>
                    <p>Points: ${saveDataItem.playerInformation.points}</p>
                    <p>Coins: ${saveDataItem.playerInformation.coins}</p>
                </div>
            </div>
            ${(flag === 'save-screen')? saveButtons: loadButtons}
            `,
            attributeName: null,
            attribute: null,
            attributeName1: null,
            attribute1: null
        })
        let parrentElement = this;
        newElement.addEventListener('click', function(event){
            switch (event.target.dataset.buttonId){
                case 'load-save':
                    createNewDialogWindow({
                        parentElement: parrentElement,
                        callback: loadSaveProcedure,
                        saveDataItem: saveDataItem,
                        mainGameObject: mainGameObject,
                        text: `Load save: ${saveDataItem.saveName} ?`
                    })
                    break
                case 'overwrite-save':
                    if(!mainGameObject.gameInitData.gameStatus || mainGameObject.gameInitData.gameOver ||
                        mainGameObject.gameInitData.gameWin || mainGameObject.gameInitData.shopActive ||
                        mainGameObject.gameInitData.levelChange) return false

                    process.env.OVERWRITE_SAVE = (process.env.OVERWRITE_SAVE === 'true')? 'false' : 'true';
                    if(process.env.OVERWRITE_SAVE) addClassList(contextElement, 'selected-overwrite-data')

                    createNewDialogWindow({
                        parentElement: parrentElement,
                        callback: overwriteSaveData,
                        saveDataItem: saveDataItem,
                        mainGameObject: mainGameObject,
                        text: `Overwrite save: ${saveDataItem.saveName} with a new one?`
                    })
                    break
                case 'delete-save':
                    createNewDialogWindow({
                        parentElement: parrentElement,
                        callback: deleteSaveData,
                        saveDataItem: saveDataItem,
                        mainGameObject: mainGameObject,
                        text: `Delete save: ${saveDataItem.saveName} ?`
                    })
                    break
                default:
                    return false
            }
        })
        this.appendChild(newElement)
    }
}


function createNewDialogWindow({parentElement, callback, saveDataItem, mainGameObject, text}){
    saveDialog({text: null, typeOfWarning: ""})
    let newElement = createElements({
        tagName: "div",
        styleClass: "save-load-dialog",
        inlineStyle: null,
        pictureUrl: null,
        linkUrl: null,
        text: null,
        innerContent: `<div class="save-dialog-wrapper">
        <div class="dialog-content">
            <p>${text}</p>
        </div>
        <button data-button-id="accept-save-action" class="btn-main">ok</button>
        <button data-button-id="reject-save-action" class="btn-main btn-orange-reject">cancel</button>
        </div>`,
        attributeName: null,
        attribute: null,
        attributeName1: null,
        attribute1: null
    })

    newElement.addEventListener('click', function(event){
        switch (event.target.dataset.buttonId){
            case 'accept-save-action':
                callback({currentSave: saveDataItem, mainGameObject: mainGameObject})
                newElement.remove()
                break
            case 'reject-save-action':
                newElement.remove()
                break
            default:
                return false
        }
    })

    parentElement.appendChild(newElement)
}



function backToObject({data, constructor}){
    let res = Object.create(constructor)
    let finalObject = Object.assign( Object.create(res.prototype), data )
    return finalObject
}






function loadSaveProcedure({mainGameObject, currentSave}){
    let save = JSON.parse(currentSave.saveData);
    let datanotToChange = {
        ctx: mainGameObject.gameInitData.ctx,
        gameField: mainGameObject.gameInitData.gameField,
        gameActionField: mainGameObject.gameInitData.gameActionField,
        gameDialogField: mainGameObject.gameInitData.gameDialogField,
        gameUIField: mainGameObject.gameInitData.gameUIField,
        ctxActionField: mainGameObject.gameInitData.ctxActionField,
        ctxGameDialogField: mainGameObject.gameInitData.ctxGameDialogField,
        ctxUIField: mainGameObject.gameInitData.ctxUIField,
        soundObject: mainGameObject.gameInitData.gameData.levelSounds.soundObject,
        shopArea: mainGameObject.shopArea

    }
    let bossPresent = false;

        save.gameInitData.allGameSideObjects = save.gameInitData.allGameSideObjects.map( item => { 
            let constructorType = (item.objectOwner === 'grappleObject')? constructor.GrappleObject: constructor.SideObject;
            let loadMapElement = backToObject({data: item, constructor: constructorType})
            loadMapElement.img = new Image();
            loadMapElement.loadTexture()
            return loadMapElement
        });

        save.gameInitData.allGameEnemies = save.gameInitData.allGameEnemies.map( item => { 
            let loadMapElement = backToObject({data: item, constructor: constructor.EnemyObject})
            if(loadMapElement.isBoss){
                bossPresent = true;
                process.env.BOSS_LOAD_AT_LEVEL = 'true';
            }
            loadMapElement.img = new Image();
            loadMapElement.loadTexture()
            return loadMapElement
        });

        save.gameInitData.allGameBullets = save.gameInitData.allGameBullets.map( item => {
            let loadMapElement = backToObject({data: item, constructor: constructor.BulletConstruct})
            loadMapElement.img = new Image();
            loadMapElement.loadTexture()
            return loadMapElement
        });

        if(save.gameInitData.dynamicLevelMapBlocks){
            save.gameInitData.dynamicLevelMapBlocks = save.gameInitData.dynamicLevelMapBlocks.map( item => {
                let loadMapElement = backToObject({data: item, constructor: constructor.DynamicBlockConstructor})
                loadMapElement.img = new Image();
                loadMapElement.loadTexture()
                if(loadMapElement.backgroundTexture){
                    loadMapElement.backgroundTextureImg = new Image();
                    loadMapElement.backgroundTextureImg.src = process.env.HOST + loadMapElement.backgroundTexture.texture;
                }
                return loadMapElement
            });
        }

//////

        if(save.gameInitData.allGroundGameBullets){
            save.gameInitData.allGroundGameBullets = save.gameInitData.allGroundGameBullets.map( item => {
                let loadMapElement = backToObject({data: item, constructor: constructor.BulletConstruct})
                loadMapElement.img = new Image();
                loadMapElement.loadTexture()
                return loadMapElement
            });
        }

        if(save.gameInitData.dynamicLevelEnemy){
            save.gameInitData.dynamicLevelEnemy = save.gameInitData.dynamicLevelEnemy.map( item => {
                let loadMapElement = backToObject({data: item, constructor: constructor.DynamicEnemyConstructor })
                loadMapElement.img = new Image();
                loadMapElement.loadTexture()
                return loadMapElement
            });
        }

//////
        save.gameInitData.mapBackgroundObjects = save.gameInitData.mapBackgroundObjects.map( item => {
            let loadMapElement = backToObject({data: item, constructor: constructor.GameBackground})
            loadMapElement.x = (loadMapElement.partOfScreenStatus)? 0 - 1: window.innerWidth + 1;
            loadMapElement.width = (loadMapElement.partOfScreenStatus)? window.innerWidth + 2 : window.innerWidth;
            loadMapElement.height = window.innerHeight;
            loadMapElement.img = new Image();
            loadMapElement.ctx = datanotToChange.ctx;
            loadMapElement.loadTexture()
            return loadMapElement
        });

        if(save.gameInitData.gameData.groundPlayerCharacter){
            save.gameInitData.gameData.groundPlayerCharacter = backToObject({data: save.gameInitData.gameData.groundPlayerCharacter, constructor: constructor.DynamicUserConstructor})
            save.gameInitData.gameData.groundPlayerCharacter.img = new Image();
            save.gameInitData.gameData.groundPlayerCharacter.loadTexture()
        }





        save.gameInitData.gameData.playerObject = backToObject({data: save.gameInitData.gameData.playerObject, constructor: constructor.PlayerShip})
        save.gameInitData.gameData.playerObject.ctx = datanotToChange.gameActionField
        save.gameInitData.gameData.playerObject.playerShipTextureChange()

        save.gameInitData.gameData.levelSounds = backToObject({data: save.gameInitData.gameData.levelSounds, constructor: constructor.SoundCreator})
        save.gameInitData.gameData.levelSounds.soundObject = datanotToChange.soundObject;

        save = backToObject({data: save, constructor: constructor.Game})


    save.gameInitData.ctx = datanotToChange.ctx;
    save.gameInitData.gameField = datanotToChange.gameField;
    save.gameInitData.gameActionField = datanotToChange.gameActionField;
    save.gameInitData.gameDialogField = datanotToChange.gameDialogField
    save.gameInitData.gameUIField = datanotToChange.gameUIField;
    save.gameInitData.ctxActionField = datanotToChange.ctxActionField;
    save.gameInitData.ctxGameDialogField = datanotToChange.ctxGameDialogField;
    save.gameInitData.ctxUIField = datanotToChange.ctxUIField;
    save.gameInitData.mapKeyCode = {};
    save.gameInitData.gamePause = true;
    save.gameInitData.gameUiPause = false;
    save.gameInitData.shopActive = false;
    save.gameInitData.randomObject = false;
    save.gameInitData.levelWindowDescription = false;
    save.gameInitData.grappleObjectOnScreen = false;
    save.gameInitData.inventoryActive = false;
    process.env.BOSS_LOAD_AT_LEVEL = (bossPresent)? 'true' : 'false';


    save.shopArea = datanotToChange.shopArea;

    process.env.SHOP_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SALE_WINDOW = 'false';
    process.env.SHOP_STORE_WINDOW = 'false';
    process.env.GROUND_CHARACTERS_INVENTORY = 'false';
    process.env.GROUND_ACTIVE_BLOCK_IN_RANGE = 'false';


    process.env.OVERWRITE_SAVE = 'false';

    let changedShip = save.gameInitData.gameData.playerObject

    hide(mainGameObject.shopArea.shopWrapper)
    hide(mainGameObject.shopArea.shopDialog)

    renewPlayerShip({originData: mainGameObject, newData: save})
    renewPlayerShip({ originData: mainGameObject.gameInitData.gameData.playerObject, newData: changedShip})
    mainGameObject.gameInitData.gameData.playerObject.playerShipTextureChange()

    replaceShipData({mainGameObject: mainGameObject, buyShipData: changedShip})
    mainGameObject.gameInitData.gameData.playerObject.placeShip()
    mainGameObject.gameInitData.gameData.playerObject.x = changedShip.xFinal;
    mainGameObject.gameInitData.gameData.playerObject.y = changedShip.yFinal;
    mainGameObject.mapSoundChanger({soundStatus:'regular_level'})


    mainGameObject.getScreenSize()
    mainGameObject.setGameFields()
    mainGameObject.initField()
}






export {
    showSaveData,
    displaySavesOnScreen
}