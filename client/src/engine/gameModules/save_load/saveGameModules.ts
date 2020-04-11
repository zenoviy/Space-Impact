var fs = require('fs');
var storage = require('electron-json-storage');
import {initSaveLoadScreen} from '../../../appMenu/saveLoadMenu';
import { writeElectronLocalData } from '../../../server/serverRequestModules';
import { showSaveData, displaySavesOnScreen } from './loadGameData';



function compareSaveName({allData, saveGameData}): boolean{
    let result = true;

    let searchData = allData.find(save => save.saveName === saveGameData.saveName);
    return (searchData)? false : true;
}


async function createSave({saveName, saveData, mainGameObject}){
    if(!saveName || !saveData) return console.error('There is no saveName or saveData')
    let allData: any = await showSaveData()

    let getContext = await initSaveLoadScreen({mainGameObject: mainGameObject})
    let saveTime = new Date().getTime();
    let pleyerInformation = mainGameObject.showGameInfo()
    let informationToShow = {
        currentLevel: pleyerInformation.gameData.currentLevel,
        points: pleyerInformation.gameData.currentPoint,
        coins: pleyerInformation.gameData.gameCoins,
        minutes: pleyerInformation.gameData.levelData.levelDetails.levelMinutes,
        seconds: pleyerInformation.gameData.levelData.levelDetails.levelSeconds,
        playerLife: pleyerInformation.playerObject.numberOflife
    }

    let saveGameData = {
        saveName: (saveName.saveName)? saveName.saveName: saveTime,
        saveTime: saveTime,
        playerInformation: informationToShow,
        saveData: JSON.stringify(saveData)
    }
    let allowToSave = compareSaveName({allData: allData, saveGameData: saveGameData})

    if(!allowToSave) return false
    await mainGameObject.getImageFromFields({saveGameData: saveGameData})
    allData = allData.concat(saveGameData)
    await writeElectronLocalData({fileName: process.env.SAVE_DATA_FILE, data: JSON.stringify(allData)})
    displaySavesOnScreen({
        saveScreen: getContext.saveScreen,
        saveData: allData,
        mainGameObject: mainGameObject
    })
}





function collectData(){
    let saveFomName = {};
    for(let fieldData of this){
        if(fieldData.name && fieldData.value){
            saveFomName[fieldData.name] = fieldData.value
        }
    }
    return saveFomName
}


async function deleteSaveData({currentSave, mainGameObject}){
    let getContext = await initSaveLoadScreen({mainGameObject: mainGameObject})
    let allData: any = await showSaveData()
    let pictureURL = storage.getDataPath() + '/' + currentSave.saveName + '.png';
    let targetItem = allData.find((obj, i) => {
        return obj.saveTime === currentSave.saveTime
    })
    let index = allData.indexOf(targetItem)
    await allData.splice(index, 1)


    try {
        await fs.unlinkSync(pictureURL)
    }catch(err){
        console.log('no image')
    }

    await writeElectronLocalData({fileName: process.env.SAVE_DATA_FILE, data: JSON.stringify(allData)})
    displaySavesOnScreen({
        saveScreen: getContext.saveScreen,
        saveData: allData,
        mainGameObject: mainGameObject
    })
}

async function overwriteSaveData({currentSave, mainGameObject}){
    let getContext = await initSaveLoadScreen({mainGameObject: mainGameObject})

    let allData: any = await showSaveData()
    let targetItem = allData.find((obj, i) => {
        return obj.saveTime === currentSave.saveTime
    })
    let index = allData.indexOf(targetItem)


    let saveTime = new Date().getTime();
    let pleyerInformation = mainGameObject.showGameInfo()
    let informationToShow = {
        currentLevel: pleyerInformation.gameData.currentLevel,
        points: pleyerInformation.gameData.currentPoint,
        coins: pleyerInformation.gameData.gameCoins,
        minutes: pleyerInformation.gameData.levelData.levelDetails.levelMinutes,
        seconds: pleyerInformation.gameData.levelData.levelDetails.levelSeconds,
        playerLife: pleyerInformation.playerObject.numberOflife
    }
    let saveGameData = {
        saveName: (currentSave.saveName)? currentSave.saveName: saveTime,
        saveTime: saveTime,
        playerInformation: informationToShow,
        saveData: JSON.stringify(mainGameObject)
    }

    allData.splice(index, 1, saveGameData)
    await mainGameObject.getImageFromFields({saveGameData: saveGameData})
    await writeElectronLocalData({fileName: process.env.SAVE_DATA_FILE, data: JSON.stringify(allData)})
    displaySavesOnScreen({
        saveScreen: getContext.saveScreen,
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