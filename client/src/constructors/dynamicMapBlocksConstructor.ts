import { placeEnemyes, takeDamage } from '../enemies/enemiesModules';
import { loadTexture } from '../engine/gameSideObjectsModule';
import { elevatorMove } from '../engine/dynamicLevels/dynamicLevelModule';
import { enemyAnimation } from '../enemies/enemiesModules';



class DynamicBlockConstructor {
    x: number; y: number;
    xMove: number; yMove: number;
    width: number; height: number;
    details: any;
    degree: number;
    img: any;
    sx: number; sy: number;
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

    moveMap: any;
    placeEnemyes: any;
    loadTexture: any;
    elevatorMove: any;
    enemyAnimation: any;
    takeDamage: any;
    constructor({ ...data }){
        this.x = data.x;
        this.y = data.y;
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
        this.sWidth = data.details.imageWidth;
        this.sHeight = data.details.imageHeight;
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.defaultSpeed = data.speed;
        this.index = data.index;
        this.backgroundTexture = (data.backgroundTexture)? data.backgroundTexture : null ;
    }
}
DynamicBlockConstructor.prototype.placeEnemyes = placeEnemyes;
DynamicBlockConstructor.prototype.loadTexture = loadTexture;
DynamicBlockConstructor.prototype.elevatorMove = elevatorMove;
DynamicBlockConstructor.prototype.enemyAnimation = enemyAnimation;
DynamicBlockConstructor.prototype.takeDamage = takeDamage;

export {
    DynamicBlockConstructor
}