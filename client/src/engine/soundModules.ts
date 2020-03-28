import { SoundCreator } from "../constructors/soundConstructor";

async function createSound(SoundCreator){
    let gameData = this.showGameInfo().gameData;
    let pageSettings = gameData.gameSetings;

    let soundProps = {
        soundUrl: await gameData.preloadData.startSound,
        soundLoop: true,
        volume: pageSettings.soundLevel
    }
    process.env.MAIN_GAME_SOUND = pageSettings.soundLevel.toString()
    this.gameInitData.gameData.levelSounds = initSoundObject({SoundCreator: SoundCreator, mainGameObject: this, soundProps: soundProps })
    return gameData.levelSounds
}
function initSoundObject({SoundCreator, mainGameObject, soundProps} ){
    let gameData = mainGameObject.showGameInfo().gameData;
    let pageSettings = gameData.gameSetings;

    let data = {
        soundUrl: soundProps.soundUrl,
        soundLoop: soundProps.soundLoop,
        soundOn: pageSettings.soundOn,
        volume: soundProps.volume
    }
    let sound = new SoundCreator(data);
    sound.initSound({levelSound: soundProps.soundUrl, volume: data.volume})
    return sound
}

function changeVolume({volume}){
    this.volume = (volume)? volume: process.env.MAIN_GAME_SOUND_EFFECTS;
    this.soundObject.volume = (process.env.MAIN_GAME_SOUND_ON === 'true')?this.volume/1000: 0;
}
function changeTrack({url}){
    this.soundObject.src = __dirname + url;
}
function soundPlay(){
    this.soundObject.play()
}
function soundPause(){
    this.soundObject.pause()
}
function makeLoop(){
    this.soundObject.loop = this.soundLoop;
}
function turnSoundOff({value}){
    this.soundOn = value;
    this.changeVolume({volume: this.volume})
}

function initSound({levelSound,  volume}){
    this.changeVolume({volume: volume})
    this.changeTrack({url: levelSound})
    this.soundPlay()
    this.makeLoop()
}

export {
    createSound,
    initSoundObject,
    changeVolume,
    changeTrack,
    initSound,
    soundPlay,
    soundPause,
    makeLoop,
    turnSoundOff
}