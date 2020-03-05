

import * as enemyModules from '../enemies';
import { fireAnimationEnded } from '../engine/engineModules';

class SideObject{
    x: number; y: number;
    sx: number; sy: number;
    picturesWidth: number; sHeight: number;
    width: number; height: number;
    animationSteps: number;
    numberOfItems: number;
    img: any;
    texture: string; target: string;
    animationState: boolean;

    fireAnimationEnded: any;
    placeEnemyes: any;
    enemyAnimation: any;
    constructor({...data}){
            this.x = data.x; this.y = data.y;
            this.sx = data.sx; this.sy = data.sy;
            this.picturesWidth = data.picturesWidth; this.sHeight = data.sHeight;
            this.width = data.width; this.height = data.height;
            this.img = new Image();
            this.texture = location.origin + '/images/' + data.texture;
            this.animationSteps = data.animationSteps; this.numberOfItems = data.numberOfItems;
            this.target = data.target;
            this.animationState = true;
    }
}

SideObject.prototype.enemyAnimation = enemyModules.enemyAnimation;
SideObject.prototype.placeEnemyes = enemyModules.placeEnemyes;
SideObject.prototype.fireAnimationEnded = fireAnimationEnded;

export {      // sideObjectsConstructor
   SideObject
}