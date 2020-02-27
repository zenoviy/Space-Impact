const {bulletsModule} = require('../engine/bulletsModule');
class BulletConstruct{
    id: number;
    x: number; y: number;
    bulletType: string;
    bulletTexture: string;
    bulletDirection: string;
    bulletSpeed: number;
    width: number; height: number;
    createBullets: any;
    placeBullets: any;
    moveBullets: any;
    constructor(
        x: number, y: number,
        bulletType: string,
        bulletTexture: string,
        bulletDirection: string,
        bulletSpeed: number,
        width: number, height: number,
    ){
        this.x = x; this.y = y;
        this.bulletType = bulletType;
        this.bulletTexture = bulletTexture;
        this.bulletDirection = bulletDirection;
        this.bulletSpeed = bulletSpeed;
        this.width = width; this.height = height;
        this.id = new Date().getTime();
    }
}

BulletConstruct.prototype.createBullets = bulletsModule.createBullets;
BulletConstruct.prototype.placeBullets = bulletsModule.placeBullets;
BulletConstruct.prototype.moveBullets = bulletsModule.moveBullets;


module.exports.bulletModule = {
    BulletConstruct : BulletConstruct
}