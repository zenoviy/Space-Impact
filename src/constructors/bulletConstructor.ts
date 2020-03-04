var { bulletsModule } = require('../engine/bulletsModule');
var { gameMethods } = require('../engine/engineModules');
var { enemiesModel } = require('../enemies/enemiesModules');
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

    createBullets: any;
    initBullets: any;
    moveBullets: any;
    getObjectPosition: any;
    takeDamage: any;
    constructor(
        x: number, y: number,
        bulletType: string,
        bulletTexture: string,
        objectOwner: string,
        bulletSpeed: number,
        width: number, height: number,
        damage: number, type: number, texture: string,
        sx: number, sy: number, sWidth: number, sHeight: number
    ){
        this.x = x; this.y = y;
        this.bulletType = bulletType;
        this.bulletTexture = bulletTexture;
        this.objectOwner = objectOwner;
        this.bulletSpeed = bulletSpeed;
        this.width = width; this.height = height;
        this.damage = damage;
        this.id = new Date().getTime();
        this.objectPresent = true;
        this.type = type;
        this.img = new Image();
        this.texture = location.origin + '/images/' +  texture;
        this.sx = sx, this.sy = sy, this.sWidth = sWidth, this.sHeight = sHeight

    }
}

BulletConstruct.prototype.createBullets = bulletsModule.createBullets;
BulletConstruct.prototype.initBullets = bulletsModule.initBullets;
BulletConstruct.prototype.moveBullets = bulletsModule.moveBullets;
BulletConstruct.prototype.getObjectPosition = gameMethods.getObjectPosition;

BulletConstruct.prototype.takeDamage = enemiesModel.takeDamage;


module.exports.bulletModule = {
    BulletConstruct : BulletConstruct
}