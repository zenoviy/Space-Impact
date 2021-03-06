import { displayObjectAtScene, takeDamage } from '../enemies/animationHitBoxModules';
import { loadTexture } from '../engine/gameSideObjectsModule';
import { elevatorMove } from '../engine/dynamicLevels/dynamicLevelModule';
import { spriteObjectsAnimation, solidColorFill } from '../enemies/animationHitBoxModules';



class DynamicBlockConstructor {
    x: number; y: number;
    defaultMapX: number; defaultMapY: number;
    xMove: number; yMove: number;
    width: number; height: number;
    details: any;
    degree: number;
    img: any;
    sx: number; sy: number;
    backgroundSx: number; backgroundSy: number;
    sWidth: number; sHeight: number;
    texture: string;
    xTarget: number; yTarget: number;
    verticalSpeed: number;
    horizontalSpeed: number;
    defaultSpeed: number;
    index: number;
    mapSizeHorizontal: number;
    mapSizeVertical: number;
    backgroundTexture: any;
    backgroundTextureImg: any;
    backgroundImageLink: any;
    blockRelativeXPos: number;
    blockRelativeYPos: number;
    detectFrame: number;
    animationSteps: number;
    numberOfVerticalItems: number;
    numberOfItems: number;
    picturesWidth: number;
    explosionAnimation: any;
    defaultHealth: number;

    moveMap: any;
    displayObjectAtScene: any;
    loadTexture: any;
    elevatorMove: any;
    spriteObjectsAnimation: any;
    takeDamage: any;
    solidColorFill: any;
    constructor({ ...data }){
        this.x = data.x;
        this.y = data.y;
        this.defaultMapX = data.defaultMapX;
        this.defaultMapY = data.defaultMapY;
        this.xTarget = data.x;
        this.yTarget = data.y;
        this.mapSizeHorizontal = (data.mapSizeHorizontal)? data.mapSizeHorizontal: 0;
        this.mapSizeVertical = (data.mapSizeVertical)? data.mapSizeVertical: 0;
        this.xMove = data.x;
        this.yMove = data.y;
        this.width = parseInt(data.width);
        this.height = parseInt(data.height);
        this.details = data.details;
        this.degree = (data.details.degree)? data.details.degree : 0;
        this.texture = process.env.HOST + data.details.texture;
        this.img = new Image();
        this.img.src = process.env.HOST + data.details.texture;
        this.backgroundTextureImg = new Image();
        this.backgroundImageLink = (data.backgroundTexture)? process.env.HOST + data.backgroundTexture.texture: false;
        this.backgroundTextureImg.src = (data.backgroundTexture)? process.env.HOST + data.backgroundTexture.texture: '#';
        this.sx = 0; this.sy = 0;
        this.backgroundSx = 0; this.backgroundSy = 0;
        this.sWidth = (data.details.sWidth)? data.details.sWidth : data.details.imageWidth;
        this.sHeight = (data.details.sHeight)? data.details.sHeight : data.details.imageHeight;
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.defaultSpeed = data.speed;
        this.index = data.index;
        this.backgroundTexture = (data.backgroundTexture)? data.backgroundTexture : null ;
        this.blockRelativeXPos = (data.blockRelativeXPos)? parseInt(data.blockRelativeXPos) : 0 ;
        this.blockRelativeYPos = (data.blockRelativeYPos)? parseInt(data.blockRelativeYPos) : 0 ;
        this.detectFrame = 0;
        this.animationSteps = (data.details.animationSteps)? data.details.animationSteps : 0;
        this.numberOfVerticalItems = (data.details.numberOfVerticalItems)? data.details.numberOfVerticalItems : 0;
        this.numberOfItems = (data.details.numberOfItems)? data.details.numberOfItems : 0;
        this.picturesWidth = (data.details.picturesWidth)? data.details.picturesWidth : 0;
        this.explosionAnimation = (data.details.explosionAnimation)? data.details.explosionAnimation : null;
        this.defaultHealth = (data.details.healthPoint)? data.details.healthPoint : null;
    }
}
DynamicBlockConstructor.prototype.displayObjectAtScene = displayObjectAtScene;
DynamicBlockConstructor.prototype.loadTexture = loadTexture;
DynamicBlockConstructor.prototype.elevatorMove = elevatorMove;
DynamicBlockConstructor.prototype.spriteObjectsAnimation = spriteObjectsAnimation;
DynamicBlockConstructor.prototype.takeDamage = takeDamage;
DynamicBlockConstructor.prototype.solidColorFill = solidColorFill;

export {
    DynamicBlockConstructor
}

/*
"imageHeight": 58,
        "picturesWidth": 59,
        "animationSteps": 10,
        "sx": 0,
        "sy": 0,
        "sWidth": 59,
        "sHeight": 58,
        "numberOfItems": 1,
        "numberOfVerticalItems": 1,
        "detectFrame": 0
*/