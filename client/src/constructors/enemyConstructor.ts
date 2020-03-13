import { enemyShipLogicVertical, enemyVerticalMoveCalculation } from '../ai/regularEnemyAiModules';
import { placeEnemyes, moveEnemyes, loadEnemyes, shoot, enemyAnimation, takeDamage, enemyDamageAnimation } from '../enemies/enemiesModules';
import { getObjectPosition } from '../engine';


console.log(enemyShipLogicVertical , " <<<<")
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
    enemySpeed: number;
    status: string; name: string;
    bulletTypeNumber: number; rapidFire: number; pointsPerUnit: number;
    healthPoint: number; animationSteps: number;
    detectFrame: number; objectPresent: boolean;
    damage: number; guns: any; objectOwner: string;
    explosion: explosionAnimation; numberOfVerticalItems: number;
    originalHealthPoint: number; isMove: boolean; isShoot: boolean;
    spotDistance: number; verticalSpeed: number; yFinal: number; xFinal: number; behavior: string;
    direction: string;

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
    constructor(
        x: number, y: number,
        sx: number, sy: number,
        sWidth: number, sHeight: number,
        picturesWidth: number, numberOfItems: number,
        width: number, height: number,
        shipTexture: string,
        speed: number,
        status: string, name: string,
        bulletTypeNumber: number, rapidFire: number, pointsPerUnit: number,
        healthPoint: number, animationSteps: number,
        damage: number, objectOwner: string, guns: any, explosion: any, numberOfVerticalItems: number,
        isMove: boolean, isShoot: boolean, spotDistance: number, behavior: string
        ){
            this.id = new Date().getTime();
            this.x = x; this.y = y;
            this.sx = sx; this.sy = sy;
            this.sWidth = sWidth; this.sHeight = sHeight;
            this.picturesWidth = picturesWidth; this.numberOfItems = numberOfItems;
            this.width = width; this.height = height;
            this.shipTexture = __dirname + '/public/images/spaceShips/' + shipTexture;
            this.enemySpeed = speed;
            this.status = status; this.name = name;
            this.bulletTypeNumber = bulletTypeNumber; this.rapidFire = rapidFire; this.pointsPerUnit = pointsPerUnit;
            this.healthPoint = healthPoint; this.animationSteps = animationSteps;
            this.damage = damage; this.guns = guns;
            this.detectFrame = 0;
            this.objectPresent = true;
            this.objectOwner = objectOwner;
            this.guns = guns; this.explosion = explosion;
            this.numberOfVerticalItems = numberOfVerticalItems;
            this.originalHealthPoint = healthPoint;
            this.isMove = isMove;
            this.isShoot = isShoot;
            this.verticalSpeed = Math.floor(Math.random() * speed);
            this.spotDistance = Math.floor(Math.random() * spotDistance );
            this.yFinal = 0;
            this.xFinal = 0;
            this.behavior = behavior;
            this.direction = null;
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

export {
    EnemyObject
};