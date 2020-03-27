import { warpEffect } from '../engine/engineModules';
import { updateMap, changePartOfTexture } from '../engine/backgroundModule';

class GameBackground{
    x: number = 0; y: number = 0;
    backgroundTexture: string; backgroundSpeed: number;
    screenData: any;
    ctx: any;
    img: any;
    timeToEressLevel: any;
    warpObjects: any[];
    extraMap: string; timeToExtraMapSeconds: number; timeToExtraMapMinutes: number

    updateMap: any;
    warpEffect: any;
    changePartOfTexture: any;
    constructor(
        backgroundTexture: string,
        backgroundSpeed: number,
        screenData: any,
        ctx: any,
        partOfScreenStatus: boolean,
        extraMap: string,
        timeToExtraMapSeconds: number, timeToExtraMapMinutes: number
        ){
            this.backgroundTexture = backgroundTexture;
            this.backgroundSpeed = backgroundSpeed;
            this.screenData = screenData;
            this.ctx = ctx;
            this.x = (partOfScreenStatus)? 0 : window.innerWidth;
            this.y = 0;
            this.img = new Image();
            this.extraMap = extraMap;
            this.timeToEressLevel = 4;
            this.warpObjects = [];
            this.timeToExtraMapSeconds = timeToExtraMapSeconds;
            this.timeToExtraMapMinutes = timeToExtraMapMinutes;
        }

}
GameBackground.prototype.updateMap = updateMap;
GameBackground.prototype.warpEffect = warpEffect;
GameBackground.prototype.changePartOfTexture = changePartOfTexture;


export {
    GameBackground
}