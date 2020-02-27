var { enemiesModel } = require('../enemies/enemiesModules');

class EnemyObject {
    shipPresent: boolean = true;
    x: number; y: number;
    sx: number; sy: number;
    sWidth: number; sHeight: number;
    picturesWidth: number;
    shipWidth: number; shipHeight: number;
    shipTexture: string;
    shipDirectory: string;
    enemySpeed: number;
    status: string; name: string;
    bulletType: number; rapidFire: number; pointsPerUnit: number;
    healthPoint: number; animationSteps: number;
    detectFrame: number;

    placeEnemyes: any;
    moveEnemyes: any;
    loadEnemyes: any;
    shoot: any;
    enemyAnimation: any;
    constructor(
        x: number, y: number,
        sx: number, sy: number,
        sWidth: number, sHeight: number,
        picturesWidth: number,
        shipWidth: number, shipHeight: number,
        shipTexture: string,
        speed: number,
        status: string, name: string,
        bulletType: number, rapidFire: number, pointsPerUnit: number,
        healthPoint: number, animationSteps: number,
        ){
            this.x = x; this.y = y;
            this.sx = sx; this.sy = sy;
            this.sWidth = sWidth; this.sHeight = sHeight;
            this.picturesWidth = picturesWidth;
            this.shipWidth = shipWidth; this.shipHeight = shipHeight;
            this.shipTexture = location.origin + '/images/spaceShips/' + shipTexture;
            this.enemySpeed = speed;
            this.status = status; this.name = name;
            this.bulletType = bulletType; this.rapidFire = rapidFire; this.pointsPerUnit = pointsPerUnit;
            this.healthPoint = healthPoint; this.animationSteps = animationSteps;
            this.detectFrame = 0;
    }
}

EnemyObject.prototype.placeEnemyes = enemiesModel.placeEnemyes;
EnemyObject.prototype.moveEnemyes = enemiesModel.moveEnemyes;
EnemyObject.prototype.loadEnemyes = enemiesModel.loadEnemyes;
EnemyObject.prototype.shoot = enemiesModel.shoot;
EnemyObject.prototype.enemyAnimation = enemiesModel.enemyAnimation;

module.exports.objectConstructor = {
    EnemyObject: EnemyObject,
};