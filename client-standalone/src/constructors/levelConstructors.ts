import { warpEffect } from '../engine/engineModules';
import { updateMap, changePartOfTexture } from '../engine/backgroundModule';
import { spriteObjectsAnimation, moveEnemyes, placeBackground } from '../enemies/animationHitBoxModules';
import { loadTexture } from '../engine/gameSideObjectsModule';

class GameBackground{
    x: number = 0; y: number = 0;
    defaultY: number; defaultX: number;
    texture: string; speed: number; defaultSpeed: number;
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
    partOfScreenStatus: boolean;
    alwaysMove: boolean;

    updateMap: any;
    warpEffect: any;
    changePartOfTexture: any;
    spriteObjectsAnimation: any;
    moveEnemyes: any;
    placeBackground: any;
    loadTexture: any;
    constructor(
       {...data}
        ){
            this.texture = __dirname +  data.texture;
            this.speed = data.speed;
            this.defaultSpeed = data.speed;
            this.screenData = data.screenData;
            this.ctx = data.ctx;
            this.x = (data.partOfScreenStatus)? 0 - 1: window.innerWidth + 1;
            this.y = (data.y)? data.y : 0;
            this.defaultY = (data.y)? data.y : 0;
            this.defaultX = (data.x)? data.x : 0;
            this.img = new Image();
            this.extraMap = data.extraMap;
            this.timeToEressLevel = 4;
            this.warpObjects = [];
            this.timeToExtraMapSeconds = data.timeToExtraMapSeconds;
            this.timeToExtraMapMinutes = data.timeToExtraMapMinutes;
            this.partOfScreenStatus = (data.partOfScreenStatus)? data.partOfScreenStatus: null;
            this.alwaysMove = (data.alwaysMove)? data.alwaysMove: false;

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
            this.width = (data.partOfScreenStatus)? window.innerWidth + 2 : window.innerWidth;
            this.height = (data.height)? data.height : window.innerHeight;
        }

}

GameBackground.prototype.updateMap = updateMap;
GameBackground.prototype.warpEffect = warpEffect;
GameBackground.prototype.changePartOfTexture = changePartOfTexture;
GameBackground.prototype.spriteObjectsAnimation = spriteObjectsAnimation;
GameBackground.prototype.moveEnemyes = moveEnemyes;
GameBackground.prototype.placeBackground = placeBackground;
GameBackground.prototype.loadTexture = loadTexture;


export {
    GameBackground
}