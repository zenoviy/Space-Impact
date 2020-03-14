import { createBullets, initBullets, moveBullets } from '../engine/bulletsModule';
import { getObjectPosition } from '../engine/engineModules';
import { takeDamage } from '../enemies/enemiesModules';
interface explosionAnimation{
    texture: string,
    imageWidth: number,
    imageHeight: number,
    animationSteps: number,
    numberOfItems: number,
    sx: number,
    sy: number,
    width: number,
    height: number
}
class BulletConstruct{
    id: number;
    x: number; y: number;
    bulletType: string;
    bulletTexture: string;
    objectOwner: string;
    bulletSpeed: number;
    width: number; height: number;
    damage: number;
    objectPresent: boolean;
    type: number; texture: string;
    img: any; sx: number; sy: number; sWidth: number; sHeight: number;
    explosion: explosionAnimation;

    createBullets: any;
    initBullets: any;
    moveBullets: any;
    getObjectPosition: any;
    takeDamage: any;
    constructor(
        x: number, y: number,
        bulletType: string,
        bulletTexture: string,
        objectOwner: string,
        bulletSpeed: number,
        width: number, height: number,
        damage: number, type: number, texture: string,
        sx: number, sy: number, sWidth: number, sHeight: number, explosion: explosionAnimation
    ){
        this.x = x; this.y = y;
        this.bulletType = bulletType;
        this.bulletTexture = bulletTexture;
        this.objectOwner = objectOwner;
        this.bulletSpeed = bulletSpeed;
        this.width = width; this.height = height;
        this.damage = damage;
        this.id = new Date().getTime();
        this.objectPresent = true;
        this.type = type;
        this.img = new Image();
        this.texture = __dirname + texture;
        this.sx = sx; this.sy = sy; this.sWidth = sWidth; this.sHeight = sHeight;
        this.explosion = explosion;

    }
}

BulletConstruct.prototype.createBullets = createBullets;
BulletConstruct.prototype.initBullets = initBullets;
BulletConstruct.prototype.moveBullets = moveBullets;
BulletConstruct.prototype.getObjectPosition = getObjectPosition;

BulletConstruct.prototype.takeDamage = takeDamage;


export {
    BulletConstruct
}