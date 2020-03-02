var { enemiesModel } = require('../enemies/enemiesModules');
var { gameMethods } = require('../engine/engineModules');
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

    placeEnemyes: any;
    moveEnemyes: any;
    loadEnemyes: any;
    shoot: any;
    enemyAnimation: any;
    getObjectPosition: any;
    takeDamage: any;
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
        damage: number, objectOwner: string, guns: any
        ){
            this.id = new Date().getTime();
            this.x = x; this.y = y;
            this.sx = sx; this.sy = sy;
            this.sWidth = sWidth; this.sHeight = sHeight;
            this.picturesWidth = picturesWidth; this.numberOfItems = numberOfItems;
            this.width = width; this.height = height;
            this.shipTexture = location.origin + '/images/spaceShips/' + shipTexture;
            this.enemySpeed = speed;
            this.status = status; this.name = name;
            this.bulletTypeNumber = bulletTypeNumber; this.rapidFire = rapidFire; this.pointsPerUnit = pointsPerUnit;
            this.healthPoint = healthPoint; this.animationSteps = animationSteps;
            this.damage = damage; this.guns = guns;
            this.detectFrame = 0;
            this.objectPresent = true;
            this.objectOwner = objectOwner;
    }
}

EnemyObject.prototype.placeEnemyes = enemiesModel.placeEnemyes;
EnemyObject.prototype.moveEnemyes = enemiesModel.moveEnemyes;
EnemyObject.prototype.loadEnemyes = enemiesModel.loadEnemyes;
EnemyObject.prototype.shoot = enemiesModel.shoot;
EnemyObject.prototype.enemyAnimation = enemiesModel.enemyAnimation;
EnemyObject.prototype.getObjectPosition = gameMethods.getObjectPosition;

EnemyObject.prototype.takeDamage = enemiesModel.takeDamage;

module.exports.objectConstructor = {
    EnemyObject: EnemyObject,
};