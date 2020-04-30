import { placeEnemyes } from '../enemies/enemiesModules';

class DynamicUserConstructor {
    x: number; y: number;
    width: number; height: number;


    placeEnemyes: any;
    constructor({...data}){
        this.x = data.x;
        this.y = data.y;
        this.width = data.width;
        this.height = data.height;
    }
}

DynamicUserConstructor.prototype.placeEnemyes = placeEnemyes;

export {
    DynamicUserConstructor
}