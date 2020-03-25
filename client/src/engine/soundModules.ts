import { SoundCreator } from "../constructors/soundConstructor";

function createSound(SoundCreator){
    let gameData = this.showGameInfo().gameData;
    let pageSettings = gameData.gameSetings;
    let soundProps = {
        soundUrl: '/public/sound/ambiant/01 Born To Be Wild.mp3',
        soundLoop: true,
        volume: pageSettings.soundLevel
    }
    process.env.MAIN_GAME_SOUND = pageSettings.soundLevel.toString()
    console.log("preload sound")
    gameData.levelSounds = initSoundObject({SoundCreator: SoundCreator, mainGameObject: this, soundProps: soundProps })
    return gameData.levelSounds
}
function initSoundObject({SoundCreator, mainGameObject, soundProps} ){
    let gameData = mainGameObject.showGameInfo().gameData;
    let pageSettings = gameData.gameSetings;
    let levelData = gameData.levelData;

    let data = {
        soundUrl: soundProps.soundUrl,
        soundLoop: soundProps.soundLoop,
        soundOn: pageSettings.soundOn,
        volume: process.env.MAIN_GAME_SOUND
    }
    let sound = new SoundCreator(data);
    sound.initSound({levelSound: soundProps.soundUrl, volume: data.volume})
    return sound
}

function changeVolume({volume}){
    this.volume = process.env.MAIN_GAME_SOUND;
    this.soundObject.volume = (process.env.MAIN_GAME_SOUND_ON === 'true')?volume/1000: 0;
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