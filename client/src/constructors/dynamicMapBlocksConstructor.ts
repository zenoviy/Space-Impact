import { placeEnemyes } from '../enemies/enemiesModules';
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

    moveMap: any;
    placeEnemyes: any;
    loadTexture: any;
    elevatorMove: any;
    enemyAnimation: any;
    constructor({ ...data }){
        this.x = data.x;
        this.y = data.y;
        this.xTarget = data.x;
        this.yTarget = data.y;
        this.mapSizeHorizontal = 0;
        this.mapSizeVertical = 0;
        this.xMove = data.x;
        this.yMove = data.y;
        this.width = data.width;
        this.height = data.height;
        this.details = data.details;
        this.degree = (data.details.degree)? data.details.degree : 0;
        this.texture = process.env.HOST + data.details.texture;
        this.img = new Image();
        this.img.src = process.env.HOST + data.details.texture;
        this.sx = 0; this.sy = 0;
        this.sWidth = data.width;
        this.sHeight = data.height;
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.defaultSpeed = data.speed;
        this.index = data.index;
    }
}
DynamicBlockConstructor.prototype.placeEnemyes = placeEnemyes;
DynamicBlockConstructor.prototype.loadTexture = loadTexture;
DynamicBlockConstructor.prototype.elevatorMove = elevatorMove;
DynamicBlockConstructor.prototype.enemyAnimation = enemyAnimation;

export {
    DynamicBlockConstructor
}