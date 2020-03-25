import { SoundCreator } from "../constructors/soundConstructor";

function createSound(SoundCreator){
    let gameData = this.showGameInfo().gameData;
    let pageSettings = gameData.gameSetings;
    /*let levelData = gameData.levelData;
    let data = {
        soundUrl: levelData.levelSound,
        soundLoop: true,
        soundOn: this.showGameInfo().gameData.gameSetings.soundOn,
        volume: this.showGameInfo().gameData.gameSetings.soundLevel
    }
    gameData.levelSounds = new SoundCreator(data);
    gameData.levelSounds.initSound({levelSound: levelData.levelSound, volume: this.showGameInfo().gameData.gameSetings.soundLevel})
    return gameData.levelSounds*/
    let soundProps = {
        soundUrl: '/public/sound/ambiant/01 Born To Be Wild.mp3',
        soundLoop: true,
    }
    gameData.levelSounds = initSoundObject({SoundCreator: SoundCreator, mainGameObject: this, soundProps: soundProps })
    return gameData.levelSounds
}
function initSoundObject({SoundCreator, mainGameObject, soundProps} ){
    let gameData = mainGameObject.showGameInfo().gameData;
    let pageSettings = gameData.gameSetings;
    let levelData = gameData.levelData;

    let data = {
        soundUrl: levelData.levelSound,
        soundLoop: soundProps.soundLoop,
        soundOn: pageSettings.soundOn,
        volume: pageSettings.soundLevel
    }
    let sound = new SoundCreator(data);
    console.log(pageSettings)
    sound.initSound({levelSound: levelData.levelSound, volume: pageSettings.soundLevel})
    return sound
}

function changeVolume({volume}){
    this.volume = volume;
    this.soundObject.volume = (this.soundOn)?volume/100: 0;
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