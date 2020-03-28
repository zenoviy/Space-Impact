import { changeVolume, changeTrack, initSound,
    soundPlay,
    soundPause,
    makeLoop, turnSoundOff } from '../engine/soundModules'

class SoundCreator{

    soundUrl: string;
    duration: number;
    soundLoop: boolean;
    soundOn: boolean;
    volume: string;
    defaultUrl: string;

    soundObject: any;

    changeVolume: any;
    changeTrack: any;
    initSound: any;
    soundPlay: any;
    soundPause: any;
    makeLoop: any;
    turnSoundOff: any;
    constructor({...data}){
        this.soundObject = new Audio();
        this.soundUrl = __dirname + data.soundUrl;
        this.soundLoop = data.soundLoop;
        this.soundOn = data.soundOn;
        this.volume = process.env.MAIN_GAME_SOUND;
        this.defaultUrl = (data.defaultUrl)? data.defaultUrl: null
    }
}

SoundCreator.prototype.changeVolume = changeVolume;
SoundCreator.prototype.changeTrack = changeTrack;
SoundCreator.prototype.initSound = initSound;
SoundCreator.prototype.soundPlay = soundPlay;
SoundCreator.prototype.soundPause = soundPause;
SoundCreator.prototype.makeLoop = makeLoop;
SoundCreator.prototype.turnSoundOff = turnSoundOff;

export {
    SoundCreator
}