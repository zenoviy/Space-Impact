var { bulletsModule } = require('../engine/bulletsModule');
var { gameMethods } = require('../engine/engineModules');// getObjectPosition
var { enemiesModel } = require('../enemies/enemiesModules');
class BulletConstruct{
    id: number;
    x: number; y: number;
    bulletType: string;
    bulletTexture: string;
    bulletDirection: string;
    bulletSpeed: number;
    width: number; height: number;
    damage: number;
    objectPresent: boolean;

    createBullets: any;
    placeBullets: any;
    moveBullets: any;
    getObjectPosition: any;
    takeDamage: any;
    constructor(
        x: number, y: number,
        bulletType: string,
        bulletTexture: string,
        bulletDirection: string,
        bulletSpeed: number,
        width: number, height: number,
        damage: number
    ){
        this.x = x; this.y = y;
        this.bulletType = bulletType;
        this.bulletTexture = bulletTexture;
        this.bulletDirection = bulletDirection;
        this.bulletSpeed = bulletSpeed;
        this.width = width; this.height = height;
        this.damage = damage;
        this.id = new Date().getTime();
        this.objectPresent = true;
    }
}

BulletConstruct.prototype.createBullets = bulletsModule.createBullets;
BulletConstruct.prototype.placeBullets = bulletsModule.placeBullets;
BulletConstruct.prototype.moveBullets = bulletsModule.moveBullets;
BulletConstruct.prototype.getObjectPosition = gameMethods.getObjectPosition;

BulletConstruct.prototype.takeDamage = enemiesModel.takeDamage;


module.exports.bulletModule = {
    BulletConstruct : BulletConstruct
}