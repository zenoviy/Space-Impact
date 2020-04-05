import { writeElectronLocalData, getElectronLocalSaves } from '../../../server/serverRequestModules';
import { createElements} from '../../../appMenu/pagesBuilder';
import { renewPlayerShip } from '../changeLevels';
import * as constructor from '../../../constructors';
import { replaceShipData } from '../../../ui/shop/gameShopShipyard';
import { deleteSaveData, overwriteSaveData } from './saveGameModules';
import {
    show,
    hide,
    toggler,
    addClassList,
    removeClassList } from '../../../appMenu/appMenu';



async function showSaveData(){
    let saveData = await getElectronLocalSaves({ fileName: process.env.SAVE_DATA_FILE })
    if(!saveData) return false
    return saveData
}


function clearClassSelectorField({target}){
    for(let item of target){
        item.object.innerHTML = '';
    }
}


function delateClassSelectorField({target}){
    for(let item of target){
        item.remove()
    }
}


async function displaySavesOnScreen({saveScreen, saveData, mainGameObject}){
    if(!saveData || saveData.length < 1) return false

    let customPageFlags = ['save-screen', 'load-screen'];
    let menuArea = Array.prototype.slice.call(document.querySelectorAll(".save-load-wrapper")).map(((item, i) => {
        return {
            indexFlag: customPageFlags[i],
            object: item
        }
    }));
    clearClassSelectorField({target: menuArea})
    console.log(menuArea, '<<<')

    for(let item of menuArea){
        //console.log(item.indexFlag)
        let index = 0;
        for(let save of saveData){
            index += 1;
            let time = new Date(save.saveTime),
            year = time.getFullYear(),
            month = time.getUTCMonth() + 1,
            day = time.getDate(),
            hours = time.getHours(),
            minutes = time.getMinutes(),
            seconds = time.getSeconds();

            let newElement = createElements({
                tagName: "li",
                styleClass: `save-load-list ${item.indexFlag}`,
                inlineStyle: null,
                pictureUrl: null,
                linkUrl: null,
                text: null,
                innerContent: `<p class="single-item"><span class="rate-number">${index}</span>
                <span>name:</span> <span class="item-name"> ${save.saveName}</span>
                <span class="item-date"> ${year}/${month}/${day}    ${hours}:${minutes}:${seconds}</span></p>`,
                attributeName: 'data-button-id',
                attribute: save.saveTime,
                attributeName1: null,
                attribute1: null
            })
            newElement.addEventListener('click', function(e) {
                showAcceptButtons.call(this, {mainGameObject: mainGameObject, saveDataItem: save, flag: item.indexFlag})
            })
            item.object.appendChild(newElement)
        }
    }
}




function showAcceptButtons({mainGameObject, saveDataItem, flag}){
    delateClassSelectorField({target: Array.prototype.slice.call(document.querySelectorAll('.save-load-buttons-list'))})

    let contextElement = this;
    let loadButtons = `<div class="save-load-button-area">
    <button data-button-id="load-save">Load</button>
    <button data-button-id="delete-save">Delete</button>
</div>`;
    let saveButtons = `<div class="save-load-button-area">
    <button data-button-id="overwrite-save">Overwrite</button>
    <button data-button-id="delete-save">Delete</button>
</div>`;

    let newElement = createElements({
        tagName: "li",
        styleClass: "save-load-buttons-list",
        inlineStyle: null,
        pictureUrl: null,
        linkUrl: null,
        text: null,
        innerContent: (flag === 'save-screen')? saveButtons: loadButtons,
        attributeName: null,
        attribute: null,
        attributeName1: null,
        attribute1: null
    })
    //loadSaveProcedure({mainGameObject: mainGameObject, saveDataItem: saveDataItem})
    newElement.addEventListener('click', function(event){
        switch (event.target.dataset.buttonId){
            case 'load-save':
                console.log('load-save')
                loadSaveProcedure({mainGameObject: mainGameObject, saveDataItem: saveDataItem})
                break
            case 'overwrite-save':
                console.log('overwrite-save', saveDataItem, process.env.OVERWRITE_SAVE)
                process.env.OVERWRITE_SAVE = (process.env.OVERWRITE_SAVE === 'true')? 'false' : 'true';
                if(process.env.OVERWRITE_SAVE) addClassList(contextElement, 'selected-overwrite-data')

                overwriteSaveData({currentSave: saveDataItem, mainGameObject: mainGameObject})
                break
            case 'delete-save':
                console.log('delete-save')
                deleteSaveData({currentSave: saveDataItem, mainGameObject: mainGameObject})
                break
            default:
                return false
        }
    })
    this.appendChild(newElement)
}




function backToObject({data, constructor}){
    let res = Object.create(constructor)
    let finalObject = Object.assign( Object.create(res.prototype), data )
    return finalObject
}






function loadSaveProcedure({mainGameObject, saveDataItem}){
    let save = JSON.parse(saveDataItem.saveData);
    let datanotToChange = {
        ctx: mainGameObject.gameInitData.ctx,
        gameField: mainGameObject.gameInitData.gameField,
        gameActionField: mainGameObject.gameInitData.gameActionField,
        gameUIField: mainGameObject.gameInitData.gameUIField,
        ctxActionField: mainGameObject.gameInitData.ctxActionField,
        ctxUIField: mainGameObject.gameInitData.ctxUIField,
        soundObject: mainGameObject.gameInitData.gameData.levelSounds.soundObject,
        shopArea: mainGameObject.shopArea

    }

        save.gameInitData.allGameSideObjects = save.gameInitData.allGameSideObjects.map( item => { 
            let constructorType = (item.objectOwner === 'grappleObject')? constructor.GrappleObject: constructor.SideObject;
            let loadMapElement = backToObject({data: item, constructor: constructorType})
            loadMapElement.img = new Image();
            loadMapElement.loadTexture()
            return loadMapElement
        });

        save.gameInitData.allGameEnemies = save.gameInitData.allGameEnemies.map( item => { 
            let loadMapElement = backToObject({data: item, constructor: constructor.EnemyObject})
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

        save.gameInitData.mapBackgroundObjects = save.gameInitData.mapBackgroundObjects.map( item => {
            let loadMapElement = backToObject({data: item, constructor: constructor.GameBackground})
            loadMapElement.width = window.innerWidth;
            loadMapElement.height = window.innerHeight;
            loadMapElement.img = new Image();
            loadMapElement.ctx = datanotToChange.ctx;
            loadMapElement.loadTexture()
            return loadMapElement
        });

        save.gameInitData.gameData.playerObject = backToObject({data: save.gameInitData.gameData.playerObject, constructor: constructor.PlayerShip})
        save.gameInitData.gameData.playerObject.ctx = datanotToChange.gameActionField
        save.gameInitData.gameData.playerObject.playerShipTextureChange()


        save.gameInitData.gameData.levelSounds = backToObject({data: save.gameInitData.gameData.levelSounds, constructor: constructor.SoundCreator})
        save.gameInitData.gameData.levelSounds.soundObject = datanotToChange.soundObject;

        save = backToObject({data: save, constructor: constructor.Game})


    save.gameInitData.ctx = datanotToChange.ctx;
    save.gameInitData.gameField = datanotToChange.gameField;
    save.gameInitData.gameActionField = datanotToChange.gameActionField;
    save.gameInitData.gameUIField = datanotToChange.gameUIField;
    save.gameInitData.ctxActionField = datanotToChange.ctxActionField;
    save.gameInitData.ctxUIField = datanotToChange.ctxUIField;
    save.gameInitData.gamePause = true;
    save.gameInitData.gameUiPause = false;
    save.gameInitData.shopActive = false;
    save.shopArea = datanotToChange.shopArea;

    process.env.SHOP_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SALE_WINDOW = 'false';
    process.env.SHOP_STORE_WINDOW = 'false';

    process.env.BOSS_LOAD_AT_LEVEL = 'false';

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