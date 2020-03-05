import { warpEffect } from '../engine/engineModules';
import { updateMap } from '../engine/backgroundModule';

class GameBackground{
    x: number = 0; y: number = 0;
    backgroundTexture: string; backgroundSpeed: number;
    screenData: any;
    ctx: any;
    img: any;
    timeToEressLevel: any;
    warpObjects: any[];

    updateMap: any;
    warpEffect: any;
    constructor(
        backgroundTexture: string,
        backgroundSpeed: number,
        screenData: any,
        ctx: any,
        partOfScreenStatus: boolean,
        timeToEressLevel: any
        ){
            this.backgroundTexture = backgroundTexture;
            this.backgroundSpeed = backgroundSpeed;
            this.screenData = screenData;
            this.ctx = ctx;
            this.x = (partOfScreenStatus)? 0 : screenData.width;
            this.y = 0;
            this.img = new Image();
            this.timeToEressLevel = 4;
            this.warpObjects = [];
        }

}
GameBackground.prototype.updateMap = updateMap;
GameBackground.prototype.warpEffect = warpEffect;


export {
    GameBackground
}