import { moveBullets } from '../engine/bulletsModule';
import { getObjectPosition } from '../engine/engineModules';
import { takeDamage, spriteObjectsAnimation, displayObjectAtScene } from '../enemies/animationHitBoxModules';
import { loadTexture } from '../engine/gameSideObjectsModule';


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
    bulletOriginOwner: any;
    bulletSpeed: number;
    defaultSpeed: number;
    width: number; height: number;
    damage: number;
    objectPresent: boolean;
    type: number; texture: string;
    img: any; sx: number; sy: number; sWidth: number; sHeight: number;
    explosion: explosionAnimation;
    smoke: any;
    picturesWidth: number;
    imageHeight: number;
    animationSteps: number;
    numberOfItems: number;
    numberOfVerticalItems: number;
    detectFrame: number;
    sound: any; verticalSpeed: number;
    degree: number;
    objectNameFlag: string;
    radius: number;
    atBackground: boolean;


    moveBullets: any;
    getObjectPosition: any;
    takeDamage: any;
    spriteObjectsAnimation: any;
    displayObjectAtScene: any;
    loadTexture: any;
    constructor({...data}){
        this.x = data.x; this.y = data.y;
        this.bulletType = data.bulletType;
        this.bulletTexture = data.bulletTexture;
        this.objectOwner = data.objectOwner;
        this.bulletSpeed = data.bulletSpeed;
        this.defaultSpeed = data.speed;
        this.width = data.width; this.height = data.height;
        this.damage = data.damage;
        this.id = new Date().getTime();
        this.objectPresent = true;
        this.type = data.type;
        this.img = new Image();
        this.texture = __dirname + data.texture;
        this.sx = data.sx; this.sy = data.sy;
        this.explosion = data.explosion;
        this.smoke = (data.smoke)? data.smoke : null;
        this.picturesWidth = data.imageWidth;
        this.imageHeight = data.imageHeight;
        this.animationSteps = data.animationSteps;
        this.numberOfItems = data.numberOfItems;
        this.numberOfVerticalItems = data.numberOfVerticalItems;
        this.detectFrame = 0;
        this.atBackground = false;

        this.sWidth = data.sWidth; this.sHeight = data.sHeight;
        this.sound = (data.sound)? data.sound: null;
        this.verticalSpeed = (data.verticalSpeed)? data.verticalSpeed : 0;
        this.degree = (data.degree)? data.degree : 0;
        this.objectNameFlag = "bullet";
        this.radius = (data.radius)? data.radius : null;
        this.bulletOriginOwner = {
            objectOwner: (data.originOwner)? data.originOwner.objectOwner: null
        }

        //this.picturesWidth = data.picturesWidth;
    }
}



BulletConstruct.prototype.moveBullets = moveBullets;
BulletConstruct.prototype.getObjectPosition = getObjectPosition;

BulletConstruct.prototype.takeDamage = takeDamage;
BulletConstruct.prototype.spriteObjectsAnimation = spriteObjectsAnimation;
BulletConstruct.prototype.displayObjectAtScene = displayObjectAtScene;

BulletConstruct.prototype.loadTexture = loadTexture;
export {
    BulletConstruct
}