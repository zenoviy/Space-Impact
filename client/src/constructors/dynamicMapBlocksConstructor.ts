import { placeEnemyes } from '../enemies/enemiesModules';


class DynamicBlockConstructor {
    x: number; y: number;
    xMove: number; yMove: number;
    width: number; height: number;
    details: any;
    degree: number;
    img: any;
    sx: number; sy: number;
    sWidth: number; sHeight: number;

    moveMap: any;
    placeEnemyes: any;
    constructor({ ...data }){
        this.x = data.x;
        this.y = data.y;
        this.xMove = data.x;
        this.yMove = data.y;
        this.width = data.width;
        this.height = data.height;
        this.details = data.details;
        this.degree = (data.details.degree)? data.details.degree : 0;
        this.img = new Image();
        this.img.src = process.env.HOST + data.details.texture;
        this.sx = 0; this.sy = 0;
        this.sWidth = data.width; this.sHeight = data.height;
    }
}
DynamicBlockConstructor.prototype.placeEnemyes = placeEnemyes;


export {
    DynamicBlockConstructor
}