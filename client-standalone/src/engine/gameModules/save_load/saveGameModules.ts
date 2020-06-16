var fs = require('fs');
var storage = require('electron-json-storage');
import {initSaveLoadScreen} from '../../../appMenu/saveLoadMenu';
import { writeElectronLocalData } from '../../../server/serverRequestModules';
import {
    showSaveData,
    displaySavesOnScreen,
    loadedScreenActive,
    loadedScreenDeactive
} from './loadGameData';



function compareSaveName({allData, saveGameData}): boolean{
    let searchData = allData.find(save => save.saveName === saveGameData.saveName);
    if(searchData) saveDialog({text: "I cant create save, Name already Exist!", typeOfWarning: "reject-text"});
    return (searchData)? false : true;
}





function saveDialog({text, typeOfWarning}){
    let target = Array.prototype.slice.call(document.querySelectorAll(".save-dialog-window"));
    writeInsideElements({data: ""});
    if(!text) return false
    writeInsideElements({data: text});

    function writeInsideElements({ data }){
        target.forEach(item => item.innerHTML = `<p class=${typeOfWarning}>${data}</p>`);
    }
}





async function createSave({saveName, saveData, mainGameObject}){
    if(!saveName || !saveData) return console.error('There is no saveName or saveData');
    if(parseInt(process.env.NUMBER_OF_SAVES) >= 10){
        loadedScreenDeactive()
        return saveDialog({text: "You have 10 saves it`s maximum", typeOfWarning: "warning-text"})
    }
    loadedScreenActive();
    let getContext = await initSaveLoadScreen({mainGameObject: mainGameObject});
    let saveTime = new Date().getTime();
    let pleyerInformation = mainGameObject.showGameInfo();
    let informationToShow = {
        currentLevel: pleyerInformation.gameData.currentLevel,
        points: pleyerInformation.gameData.currentPoint,
        coins: pleyerInformation.gameData.gameCoins,
        minutes: pleyerInformation.gameData.levelData.levelDetails.levelMinutes,
        seconds: pleyerInformation.gameData.levelData.levelDetails.levelSeconds,
        playerLife: pleyerInformation.playerObject.numberOflife
    }

    let saveGameData = {
        savePicture: null,
        saveName: (saveName.saveName)? saveName.saveName: saveTime,
        saveTime: saveTime,
        playerInformation: informationToShow,
        saveData: JSON.stringify(saveData)
    }
    //let allowToSave = compareSaveName({allData: allData, saveGameData: saveGameData});

    //if(!allowToSave) return false
    let image = await mainGameObject.getImageFromFields({saveGameData: saveGameData, screenshot: false});

    saveGameData.savePicture = image;
    //allData = allData.concat(saveGameData);
    //await writeElectronLocalData({fileName: process.env.SAVE_DATA_FILE, data: JSON.stringify(allData)});
    await writeElectronLocalData({fileName: (saveName.saveName)? saveName.saveName: saveTime, data: JSON.stringify(saveGameData)})
    let allData: any = await showSaveData();

    saveDialog({text: "Save created successfully", typeOfWarning: "success-text"});
    displaySavesOnScreen({
        saveScreen: getContext.saveScreen,
        saveData: allData,
        mainGameObject: mainGameObject
    })
    loadedScreenDeactive()
}





function collectData(){
    let saveFomName = {};
    for(let fieldData of this){
        if(fieldData.name && fieldData.value){
            saveFomName[fieldData.name] = fieldData.value;
        }
    }
    return saveFomName
}


async function deleteSaveData({currentSave, mainGameObject}){
    loadedScreenActive();
    let getContext = await initSaveLoadScreen({mainGameObject: mainGameObject});
    let allData: any = await showSaveData();
    let pictureURL = storage.getDataPath() + '/' + currentSave.saveName + '.png';
    let targetItem = allData.find((obj, i) => {
        return obj.saveTime === currentSave.saveTime;
    })
    let index = allData.indexOf(targetItem);
    await allData.splice(index, 1);

    try {
        await fs.unlinkSync(pictureURL);
    }catch(err){
        console.log('no image');
    }

    saveDialog({text: `You just delete save ${currentSave.saveName}`, typeOfWarning: "success-text"});
    //await writeElectronLocalData({fileName: process.env.SAVE_DATA_FILE, data: JSON.stringify(allData)});
    await fs.unlinkSync(storage.getDataPath() + '/' +  currentSave.saveName + '.json')
    displaySavesOnScreen({
        saveScreen: getContext.saveScreen,
        saveData: allData,
        mainGameObject: mainGameObject
    })
    loadedScreenDeactive();
}








async function overwriteSaveData({currentSave, mainGameObject}){
    loadedScreenActive();
    let getContext = await initSaveLoadScreen({mainGameObject: mainGameObject});
    let allData: any = await showSaveData();
    let targetItem = allData.find((obj, i) => {
        return obj.saveTime === currentSave.saveTime;
    })
    let index = allData.indexOf(targetItem);


    let saveTime = new Date().getTime();
    let pleyerInformation = mainGameObject.showGameInfo();
    let informationToShow = {
        currentLevel: pleyerInformation.gameData.currentLevel,
        points: pleyerInformation.gameData.currentPoint,
        coins: pleyerInformation.gameData.gameCoins,
        minutes: pleyerInformation.gameData.levelData.levelDetails.levelMinutes,
        seconds: pleyerInformation.gameData.levelData.levelDetails.levelSeconds,
        playerLife: pleyerInformation.playerObject.numberOflife
    }
    let saveGameData = {
        savePicture: null,
        saveName: (currentSave.saveName)? currentSave.saveName: saveTime,
        saveTime: saveTime,
        playerInformation: informationToShow,
        saveData: JSON.stringify(mainGameObject)
    }

    saveDialog({text: "Save overwrite successfully", typeOfWarning: "success-text"});
    //allData.splice(index, 1, saveGameData);
    let image = await mainGameObject.getImageFromFields({saveGameData: saveGameData, screenshot: false});
    saveGameData.savePicture = image;
    //await writeElectronLocalData({fileName: process.env.SAVE_DATA_FILE, data: JSON.stringify(allData)})
    await fs.unlinkSync(storage.getDataPath() + '/' +  currentSave.saveName + '.json');
    await writeElectronLocalData({fileName: (currentSave.saveName)? currentSave.saveName: saveTime, data: JSON.stringify(saveGameData)})
    allData = await showSaveData();
    displaySavesOnScreen({
        saveScreen: getContext.saveScreen,
        saveData: allData,
        mainGameObject: mainGameObject
    })
    loadedScreenDeactive();
}





export{
    createSave,
    collectData,
    deleteSaveData,
    overwriteSaveData,
    saveDialog
}