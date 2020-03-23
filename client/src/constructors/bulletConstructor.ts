import { createBullets, initBullets, moveBullets } from '../engine/bulletsModule';
import { getObjectPosition } from '../engine/engineModules';
import { takeDamage, enemyAnimation, placeEnemyes } from '../enemies/enemiesModules';

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
    picturesWidth: number;
    imageHeight: number;
    animationSteps: number;
    numberOfItems: number;
    numberOfVerticalItems: number;
    detectFrame: number;


    createBullets: any;
    initBullets: any;
    moveBullets: any;
    getObjectPosition: any;
    takeDamage: any;
    enemyAnimation: any;
    placeEnemyes: any;
    constructor({...data}){
        this.x = data.x; this.y = data.y;
        this.bulletType = data.bulletType;
        this.bulletTexture = data.bulletTexture;
        this.objectOwner = data.objectOwner;
        this.bulletSpeed = data.bulletSpeed;
        this.width = data.width; this.height = data.height;
        this.damage = data.damage;
        this.id = new Date().getTime();
        this.objectPresent = true;
        this.type = data.type;
        this.img = new Image();
        this.texture = __dirname + data.texture;
        this.sx = data.sx; this.sy = data.sy;
        this.explosion = data.explosion;
        this.picturesWidth = data.imageWidth;
        this.imageHeight = data.imageHeight;
        this.animationSteps = data.animationSteps;
        this.numberOfItems = data.numberOfItems;
        this.numberOfVerticalItems = data.numberOfVerticalItems;
        this.detectFrame = 0;

        this.sWidth = data.sWidth; this.sHeight = data.sHeight;
        //this.picturesWidth = data.picturesWidth;
    }
}

/*
this.img,
        this.sx, this.sy,
        this.sWidth, this.sHeight,
        this.x, this.y,
        this.width,this.height


this.sx = data.sx; this.sy = data.sy;
            this.sWidth = data.sWidth; this.sHeight = data.sHeight;
            this.picturesWidth = data.picturesWidth; this.numberOfItems = data.numberOfItems; 
"imageWidth": 3587,
"imageHeight":109,
                "animationSteps": 5,
                "numberOfItems": 12,
                "numberOfVerticalItems": 1,
            */

BulletConstruct.prototype.createBullets = createBullets;
BulletConstruct.prototype.initBullets = initBullets;
BulletConstruct.prototype.moveBullets = moveBullets;
BulletConstruct.prototype.getObjectPosition = getObjectPosition;

BulletConstruct.prototype.takeDamage = takeDamage;
BulletConstruct.prototype.enemyAnimation = enemyAnimation;
BulletConstruct.prototype.placeEnemyes = placeEnemyes;


export {
    BulletConstruct
}