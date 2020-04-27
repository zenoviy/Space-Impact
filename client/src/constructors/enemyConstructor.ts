import { enemyShipLogicVertical, enemyVerticalMoveCalculation } from '../ai/regularEnemyAiModules';
import { placeEnemyes,
    moveEnemyes,

    shot,
    enemyAnimation,
    takeDamage,
    enemyDamageAnimation,
    spawnCoin } from '../enemies/enemiesModules';
import { getObjectPosition, bulletSpeed } from '../engine';
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
interface enemyGuns{
    name: string,
    fireRepead: number,
    speed: number,
    texture: any,
    color: string,
    width: number,
    height: number,
    damage: number
}
class EnemyObject {
    id: number;
    shipPresent: boolean;
    x: number; y: number;
    sx: number; sy: number;
    sWidth: number; sHeight: number;
    picturesWidth: number; numberOfItems: number;
    img: any;
    width: number; height: number;
    texture: string;
    shipDirectory: string;
    speed: number; defaultSpeed: number;
    status: string; name: string;
    bulletTypeNumber: number; rapidFire: number; pointsPerUnit: number;
    healthPoint: number; animationSteps: number;
    detectFrame: number; objectPresent: boolean;
    damage: number; guns: any; objectOwner: string;
    explosion: explosionAnimation; numberOfVerticalItems: number;
    originalHealthPoint: number; isMove: boolean; isShot: boolean;
    spotDistance: number; verticalSpeed: number; yFinal: number; xFinal: number; behavior: string;
    direction: string; isBoss: boolean; isSubBoss: boolean;
    extraObjects: any[]; collideExplosionAnimation: any;
    changeXposition: boolean; changeSpeed: boolean;
    shotAngle: number;  defaultAngle: any; hitShape: string;

    placeEnemyes: any;
    moveEnemyes: any;
    shot: any;
    enemyAnimation: any;
    getObjectPosition: any;
    takeDamage: any;
    enemyDamageAnimation: any;
    enemyShipLogicVertical: any;
    enemyVerticalMoveCalculation: any;
    spawnCoin: any;
    bulletSpeed: any;
    loadTexture: any;
    constructor({...data}){
            this.id = new Date().getTime();
            this.x = data.x; this.y = data.y;
            this.sx = data.sx; this.sy = data.sy;
            this.sWidth = data.sWidth; this.sHeight = data.sHeight;
            this.picturesWidth = data.picturesWidth; this.numberOfItems = data.numberOfItems;
            this.width = data.width; this.height = data.height;
            this.texture = __dirname + data.texture;
            this.img = new Image();
            this.speed = data.speed;
            this.defaultSpeed = data.speed;
            this.status = data.status; this.name = data.name;
            this.bulletTypeNumber = data.bulletTypeNumber; this.rapidFire = data.rapidFire; this.pointsPerUnit = data.pointsPerUnit;
            this.healthPoint = data.healthPoint; this.animationSteps = data.animationSteps;
            this.damage = data.damage; this.guns = data.guns;
            this.detectFrame = 0;
            this.objectPresent = true;
            this.objectOwner = data.objectOwner;
            this.guns = data.guns; this.explosion = data.explosion;
            this.numberOfVerticalItems = data.numberOfVerticalItems;
            this.originalHealthPoint = data.healthPoint;
            this.isMove = data.isMove;
            this.isShot = data.isShot;
            this.verticalSpeed = (data.verticalSpeed)? data.verticalSpeed:  Math.floor(Math.random() * data.speed +1);
            this.spotDistance = (data.isBoss)? data.spotDistance : Math.floor(Math.random() * data.spotDistance );
            this.yFinal = 0;
            this.xFinal = 0;
            this.behavior = data.behavior;
            this.direction = null;
            this.isBoss = data.isBoss;
            this.isSubBoss = (data.isSubBoss)? data.isSubBoss : false;
            this.extraObjects = data.extraObjects;
            this.collideExplosionAnimation = data.collideExplosionAnimation;
            this.shotAngle = 180;
            this.defaultAngle = (data.defaultAngle)? data.defaultAngle : null;
            this.hitShape = (data.hitShape)? data.hitShape : null;
    }
}

EnemyObject.prototype.placeEnemyes = placeEnemyes;
EnemyObject.prototype.moveEnemyes = moveEnemyes;
EnemyObject.prototype.shot = shot;
EnemyObject.prototype.enemyAnimation = enemyAnimation;
EnemyObject.prototype.getObjectPosition = getObjectPosition;
EnemyObject.prototype.enemyDamageAnimation = enemyDamageAnimation;
EnemyObject.prototype.enemyShipLogicVertical = enemyShipLogicVertical;
EnemyObject.prototype.enemyVerticalMoveCalculation = enemyVerticalMoveCalculation;

EnemyObject.prototype.takeDamage = takeDamage;
EnemyObject.prototype.spawnCoin = spawnCoin;
EnemyObject.prototype.bulletSpeed = bulletSpeed;
EnemyObject.prototype.loadTexture = loadTexture;

export {
    EnemyObject
};