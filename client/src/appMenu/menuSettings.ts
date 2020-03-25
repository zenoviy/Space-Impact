import { writeLocalData } from '../server/serverRequestModules';

interface settingsData {
    soundLevel: number;
    soundOn: boolean;
    autoshoot: boolean;
    fullScreen: boolean,
    screenResolution: {
        title: string,
        width: number,
        height: number
    },
    keyControls: any,
    screenVariaton: any[]
}
interface returnSettings {
    soundLevel: number;
    soundOn: boolean;
}

function gameSettingsMenu({...data}){
    const settingsMenu = {
        volumeDisplay: document.querySelector('#volume-display'),
        soundLevel: document.querySelector('#soundLevel'),
        soundOnSwitcher: document.querySelector('#soundOn'),
    }
    settingsMenu.volumeDisplay.innerHTML = (data.soundLevel)? data.soundLevel: "";
    settingsMenu.soundLevel['value'] = (data.soundLevel)? data.soundLevel: 0;

    settingsMenu.soundOnSwitcher['checked'] = data.soundOn;


    process.env.MAIN_GAME_SOUND_ON = data.soundOn.toString()
    process.env.MAIN_GAME_SOUND = data.soundLevel.toString()
}


function gameSettingsMenuInit(){
    const menuSettingsForm = document.querySelector('#menu-settings-form');
    const context = this;
    let gameData = this.showGameInfo();
    let settingsData: settingsData = gameData.settings;

    let data: settingsData = {
        soundLevel: settingsData.soundLevel,
        soundOn: settingsData.soundOn,
        autoshoot: settingsData.autoshoot,
        fullScreen: settingsData.fullScreen,
        keyControls: settingsData.keyControls,
        screenResolution: settingsData.screenResolution,
        screenVariaton: settingsData.screenVariaton
    }

    gameSettingsMenu(data)
    menuSettingsForm.addEventListener('change', function(event){
        event.preventDefault()
        let data = transformMenuData(this)
        gameSettingsMenu(data)

        gameData.gameData.levelSounds.changeVolume({volume: data.soundLevel})
        gameData.gameData.levelSounds.turnSoundOff({value: data.soundOn})

    })
    menuSettingsForm.addEventListener('submit', function(event){
        event.preventDefault()
        let menuData = transformMenuData(this)
        let settingsResult = replaceData({newData: menuData, settingsData: data});
        writeLocalData({fileName: 'game-settings.json', data: JSON.stringify(settingsResult)})
    })
}

function replaceData({newData, settingsData}){
    for(let [key, value] of Object.entries(newData)){
        if(key && value || key && typeof value === "boolean"){
            settingsData[key] = value;
        }
    }
    return settingsData
}

function transformMenuData(data: any){
    if(!data) throw Error("No data to transform")
    var obj: returnSettings = { soundLevel: null, soundOn: null};
    for(let item of data){
        if(item.name && item.value){
            (item.value === "on")? obj[item.name] = item.checked :obj[item.name] = item.value;
        }
    }
    return obj
}

export {
    gameSettingsMenu,
    gameSettingsMenuInit
}