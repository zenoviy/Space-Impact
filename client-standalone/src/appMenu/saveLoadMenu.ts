import { createSave, collectData } from '../engine/gameModules/save_load/saveGameModules';
import { showSaveData, displaySavesOnScreen } from '../engine/gameModules/save_load/loadGameData';

async function initSaveLoadScreen({mainGameObject}){
    let menuObjects = {
        saveForm: document.forms['main-save-form'],
        saveScreen: document.querySelectorAll(".save-load-wrapper")
    }
    let saveData = await showSaveData()
    displaySavesOnScreen({
        saveScreen: menuObjects.saveScreen,
        saveData: saveData,
        mainGameObject: mainGameObject
    })
    return {
        saveForm: menuObjects.saveForm,
        saveScreen: menuObjects.saveScreen,
    }
}


async function saveGameEvents({mainGameObject}){
    //if(mainGameObject.gameStatus)
    let getContext = await initSaveLoadScreen({mainGameObject: mainGameObject})
    getContext.saveForm.addEventListener('submit', async function (event) {
        event.preventDefault()

        if(!mainGameObject.gameInitData.gameStatus || mainGameObject.gameInitData.gameOver ||
            mainGameObject.gameInitData.gameWin || mainGameObject.gameInitData.shopActive ||
            mainGameObject.gameInitData.levelChange) return false

        let saveName = collectData.call(this);
        await createSave({saveName: saveName, saveData: mainGameObject, mainGameObject: mainGameObject})
    })
}



export {
    initSaveLoadScreen,
    saveGameEvents
}