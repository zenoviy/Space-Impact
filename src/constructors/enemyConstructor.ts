var { enemiesModel } = require('../enemies/enemiesModules');

class EnemyObject {
    shipPresent: boolean = true;
    x: number; y: number;
    sx: number; sy: number;
    sWidth: number; sHeight: number;
    singleFrame: number;
    shipwidth: number; shipHeight: number;
    shipTexture: string;
    shipDirectory: string;
    enemySpeed: number;
    status: string; name: string;
    bulletType: number; rapidFire: number; pointsPerUnit: number;
    healthPoint: number;

    placeEnemyes: any;
    moveEnemyes: any;
    loadEnemyes: any;
    shoot: any;
    constructor(
        x: number, y: number,
        sx: number, sy: number,
        sWidth: number, sHeight: number,
        singleFrame: number,
        shipwidth: number, shipHeight: number,
        shipTexture: string,
        speed: number,
        status: string, name: string,
        bulletType: number, rapidFire: number, pointsPerUnit: number,
        healthPoint: number
        ){
            this.x = x; this.y = y;
            this.sx = sx; this.sy = sy;
            this.sWidth = sWidth; this.sHeight = sHeight;
            this.singleFrame = singleFrame;
            this.shipwidth = shipwidth; this.shipHeight = shipHeight;
            this.shipTexture = location.origin + '/images/spaceShips/' + shipTexture;
            this.enemySpeed = speed;
            this.status = status; this.name = name;
            this.bulletType = bulletType; this.rapidFire = rapidFire; this.pointsPerUnit = pointsPerUnit;
            this.healthPoint = healthPoint;
    }
}
/*
shipDetails.speed,
        shipDetails.status, shipDetails.name,
        shipDetails.bulletType, shipDetails.rapidFire, shipDetails.pointsPerUnit,
        shipDetails.healthPoint
             */

EnemyObject.prototype.placeEnemyes = enemiesModel.placeEnemyes;
EnemyObject.prototype.moveEnemyes = enemiesModel.moveEnemyes;
EnemyObject.prototype.loadEnemyes = enemiesModel.loadEnemyes;
EnemyObject.prototype.shoot = enemiesModel.shoot;

module.exports.objectConstructor = {
    EnemyObject: EnemyObject,
};