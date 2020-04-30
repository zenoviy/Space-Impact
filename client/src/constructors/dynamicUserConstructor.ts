import { placeEnemyes } from '../enemies/enemiesModules';

class DynamicUserConstructor {
    x: number; y: number;
    width: number; height: number;
    imageWidth: number;
    imageHeight: number;
    img: any;
    sx: number; sy: number;
    sWidth: number; sHeight: number;

    placeEnemyes: any;
    constructor({...data}){
        this.x = (data.x)? data.x:0;
        this.y = (data.y)? data.y:0;
        this.width = data.width;
        this.height = data.height;
        this.imageWidth = data.imageWidth;
        this.imageHeight = data.imageHeight
        this.img = new Image();
        this.img.src = __dirname + data.displayTexture;
        this.sx = 0; this.sy = 0;
        this.sWidth = data.width; this.sHeight = data.height;
    }
}

DynamicUserConstructor.prototype.placeEnemyes = placeEnemyes;

export {
    DynamicUserConstructor
}