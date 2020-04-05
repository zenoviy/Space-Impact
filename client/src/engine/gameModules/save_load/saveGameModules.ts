import {initSaveLoadScreen} from '../../../appMenu/saveLoadMenu';
import { writeElectronLocalData } from '../../../server/serverRequestModules';
import { showSaveData, displaySavesOnScreen } from './loadGameData';

async function createSave({saveName, saveData, flag}){
    if(!saveName || !saveData) return console.error('There is no saveName or saveData')
    let allData: any = await showSaveData()

    let saveTime = new Date().getTime();
    let saveGameData = {
        saveName: (saveName.saveName)? saveName.saveName: saveTime,
        saveTime: saveTime,
        saveData: JSON.stringify(saveData)
    }
    allData = allData.concat(saveGameData)
    writeElectronLocalData({fileName: process.env.SAVE_DATA_FILE, data: JSON.stringify(allData)})
    console.log('create save data')
}




function collectData(){
    let saveFomName = {};
    for(let fieldData of this){
        if(fieldData.name && fieldData.value){
            console.log(fieldData.name, fieldData.value)
            saveFomName[fieldData.name] = fieldData.value
        }
    }
    return saveFomName
}


async function deleteSaveData({currentSave, mainGameObject}){
    let getGontext = await initSaveLoadScreen({mainGameObject: mainGameObject})
    let allData: any = await showSaveData()
    let targetItem = allData.find((obj, i) => {
        return obj.saveTime === currentSave.saveTime
    })
    let index = allData.indexOf(targetItem)
    allData.splice(index, 1)


    console.log('delate', allData)
    writeElectronLocalData({fileName: process.env.SAVE_DATA_FILE, data: JSON.stringify(allData)})
    displaySavesOnScreen({
        saveScreen: getGontext.saveScreen,
        saveData: allData,
        mainGameObject: mainGameObject
    })
}

async function overwriteSaveData({currentSave, mainGameObject}){
    let getGontext = await initSaveLoadScreen({mainGameObject: mainGameObject})
    console.log('overwrite save data', currentSave)

    let allData: any = await showSaveData()
    let targetItem = allData.find((obj, i) => {
        return obj.saveTime === currentSave.saveTime
    })
    let index = allData.indexOf(targetItem)

    let saveTime = new Date().getTime();
    let saveGameData = {
        saveName: (currentSave.saveName)? currentSave.saveName: saveTime,
        saveTime: saveTime,
        saveData: JSON.stringify(mainGameObject)
    }

    allData.splice(index, 1, saveGameData)
    writeElectronLocalData({fileName: process.env.SAVE_DATA_FILE, data: JSON.stringify(allData)})
    displaySavesOnScreen({
        saveScreen: getGontext.saveScreen,
        saveData: allData,
        mainGameObject: mainGameObject
    })
}



export{
    createSave,
    collectData,
    deleteSaveData,
    overwriteSaveData
}