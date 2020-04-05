import {initSaveLoadScreen} from '../../../appMenu/saveLoadMenu';
import { writeElectronLocalData } from '../../../server/serverRequestModules';
import { showSaveData } from './loadGameData';

async function createSave({saveName, saveData}){
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



export{
    createSave,
    collectData
}