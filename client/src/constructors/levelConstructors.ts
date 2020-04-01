import { warpEffect } from '../engine/engineModules';
import { updateMap, changePartOfTexture } from '../engine/backgroundModule';
import { enemyAnimation, moveEnemyes, placeBackground } from '../enemies/enemiesModules';

class GameBackground{
    x: number = 0; y: number = 0;
    backgroundTexture: string; speed: number;
    screenData: any;
    ctx: any;
    img: any;
    timeToEressLevel: any;
    warpObjects: any[];
    extraMap: string; timeToExtraMapSeconds: number; timeToExtraMapMinutes: number;
    picturesWidth: number;
    imageHeight: number;
    animationSteps: number;
    numberOfItems: number;
    numberOfVerticalItems: number;
    detectFrame: number;
    sx: number;
    sy: number;
    sWidth: number;
    sHeight: number;
    width: number;
    height: number;

    updateMap: any;
    warpEffect: any;
    changePartOfTexture: any;
    enemyAnimation: any;
    moveEnemyes: any;
    placeBackground: any;
    constructor(
       {...data}
        ){
            this.backgroundTexture = data.backgroundTexture;
            this.speed = data.speed;
            this.screenData = data.screenData;
            this.ctx = data.ctx;
            this.x = (data.partOfScreenStatus)? 0 - 1 : window.innerWidth - 1;
            this.y = 0;
            this.img = new Image();
            this.extraMap = data.extraMap;
            this.timeToEressLevel = 4;
            this.warpObjects = [];
            this.timeToExtraMapSeconds = data.timeToExtraMapSeconds;
            this.timeToExtraMapMinutes = data.timeToExtraMapMinutes;

            this.picturesWidth = data.imageWidth;
            this.imageHeight = data.imageHeight;
            this.animationSteps = data.animationSteps;
            this.numberOfItems = data.numberOfItems;
            this.numberOfVerticalItems = data.numberOfVerticalItems;
            this.detectFrame = 0;
            this.sx = 0;
            this.sy = 0;
            this.sWidth = data.imageWidth/data.numberOfItems;
            this.sHeight = data.imageHeight;
            this.width = window.innerWidth + 2;
            this.height = window.innerHeight;
        }

}

GameBackground.prototype.updateMap = updateMap;
GameBackground.prototype.warpEffect = warpEffect;
GameBackground.prototype.changePartOfTexture = changePartOfTexture;
GameBackground.prototype.enemyAnimation = enemyAnimation;
GameBackground.prototype.moveEnemyes = moveEnemyes;
GameBackground.prototype.placeBackground = placeBackground;


export {
    GameBackground
}