import * as enemyModules from '../enemies';
import { fireAnimationEnded, mapObjectMove } from '../engine/gameSideObjectsModule';
import { placeEnemyes,
    moveEnemyes,
    loadEnemyes,
    shot, enemyAnimation,
    takeDamage,
    enemyDamageAnimation,
    spawnCoin} from '../enemies/enemiesModules';


interface grappleOBject {
    name: string,
    description: string,
    value: number,
    methodName: string
}
class SideObject{
    x: number; y: number;
    sx: number; sy: number;
    sWidth: number; sHeight: number;
    width: number; height: number;
    animationSteps: number;
    numberOfItems: number;
    img: any;
    texture: string; target: string;
    animationState: boolean;
    detectFrame: number;
    objectPresent: boolean;
    speed: number; picturesWidth: number;
    damage: number; objectOwner: string; healthPoint: number;
    isBackground: boolean; explosion: any; pointsPerUnit: number;
    extraObjects: any;
    collideExplosionAnimation: any;
    sound: any;

    fireAnimationEnded: any;
    placeEnemyes: any;
    enemyAnimation: any;
    takeDamage: any;
    mapObjectMove: any;
    enemyDamageAnimation: any;
    spawnCoin: any;
    constructor({...data}){
            this.x = data.x; this.y = data.y;
            this.sx = data.sx; this.sy = data.sy;
            this.sWidth = data.sWidth; this.sHeight = data.sHeight;
            this.width = data.width; this.height = data.height;
            this.img = new Image();
            this.texture = __dirname + data.texture;
            this.animationSteps = data.animationSteps; this.numberOfItems = data.numberOfItems;
            this.target = data.target;
            this.animationState = true;
            this.detectFrame = 0;
            this.objectPresent = true;
            this.speed = data.speed;
            this.picturesWidth = data.picturesWidth;
            this.damage = (data.damage)? data.damage : null;
            this.objectOwner = (data.objectOwner)? data.objectOwner : null;
            this.healthPoint = (data.healthPoint)? data.healthPoint : null;
            this.isBackground = (data.isBackground)? data.isBackground : null;
            this.explosion = (data.explosion)? data.explosion : null;
            this.pointsPerUnit = (data.pointsPerUnit)? data.pointsPerUnit : 0;
            this.extraObjects = (data.extraObjects)? data.extraObjects : 0;
            this.collideExplosionAnimation = data.collideExplosionAnimation;
            this.sound = (data.sound)? data.sound : null;
    }
}

SideObject.prototype.enemyAnimation = enemyModules.enemyAnimation;
SideObject.prototype.placeEnemyes = enemyModules.placeEnemyes;
SideObject.prototype.fireAnimationEnded = fireAnimationEnded;

SideObject.prototype.takeDamage = takeDamage;
SideObject.prototype.mapObjectMove = mapObjectMove;
SideObject.prototype.enemyDamageAnimation = enemyDamageAnimation
SideObject.prototype.spawnCoin = spawnCoin;

export {
   SideObject
}