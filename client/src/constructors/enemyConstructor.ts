import { enemyShipLogicVertical, enemyVerticalMoveCalculation } from '../ai/regularEnemyAiModules';
import { placeEnemyes,
    moveEnemyes,
    loadEnemyes,
    shoot,
    enemyAnimation,
    takeDamage,
    enemyDamageAnimation,
    spawnCoin } from '../enemies/enemiesModules';
import { getObjectPosition } from '../engine';


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
    width: number; height: number;
    shipTexture: string;
    shipDirectory: string;
    speed: number;
    status: string; name: string;
    bulletTypeNumber: number; rapidFire: number; pointsPerUnit: number;
    healthPoint: number; animationSteps: number;
    detectFrame: number; objectPresent: boolean;
    damage: number; guns: any; objectOwner: string;
    explosion: explosionAnimation; numberOfVerticalItems: number;
    originalHealthPoint: number; isMove: boolean; isShoot: boolean;
    spotDistance: number; verticalSpeed: number; yFinal: number; xFinal: number; behavior: string;
    direction: string; isBoss: boolean;
    extraObjects: any[]; collideExplosionAnimation: any;

    placeEnemyes: any;
    moveEnemyes: any;
    loadEnemyes: any;
    shoot: any;
    enemyAnimation: any;
    getObjectPosition: any;
    takeDamage: any;
    enemyDamageAnimation: any;
    enemyShipLogicVertical: any;
    enemyVerticalMoveCalculation: any;
    spawnCoin: any;
    constructor({...data}){
            this.id = new Date().getTime();
            this.x = data.x; this.y = data.y;
            this.sx = data.sx; this.sy = data.sy;
            this.sWidth = data.sWidth; this.sHeight = data.sHeight;
            this.picturesWidth = data.picturesWidth; this.numberOfItems = data.numberOfItems;
            this.width = data.width; this.height = data.height;
            this.shipTexture = __dirname + data.shipTexture;
            this.speed = data.speed;
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
            this.isShoot = data.isShoot;
            this.verticalSpeed = (data.verticalSpeed)? data.verticalSpeed:  Math.floor(Math.random() * data.speed +1);
            this.spotDistance = (data.isBoss)? data.spotDistance : Math.floor(Math.random() * data.spotDistance );
            this.yFinal = 0;
            this.xFinal = 0;
            this.behavior = data.behavior;
            this.direction = null;
            this.isBoss = data.isBoss;
            this.extraObjects = data.extraObjects;
            this.collideExplosionAnimation = data.collideExplosionAnimation;
            /// load amount fo coins, ando coins object from server
    }
}

EnemyObject.prototype.placeEnemyes = placeEnemyes;
EnemyObject.prototype.moveEnemyes = moveEnemyes;
EnemyObject.prototype.loadEnemyes = loadEnemyes;
EnemyObject.prototype.shoot = shoot;
EnemyObject.prototype.enemyAnimation = enemyAnimation;
EnemyObject.prototype.getObjectPosition = getObjectPosition;
EnemyObject.prototype.enemyDamageAnimation = enemyDamageAnimation;
EnemyObject.prototype.enemyShipLogicVertical = enemyShipLogicVertical;
EnemyObject.prototype.enemyVerticalMoveCalculation = enemyVerticalMoveCalculation;

EnemyObject.prototype.takeDamage = takeDamage;
EnemyObject.prototype.spawnCoin = spawnCoin;

export {
    EnemyObject
};