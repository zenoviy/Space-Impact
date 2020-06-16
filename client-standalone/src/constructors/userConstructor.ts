
import { initPlayerShip,
    shipControl,
    moveShip,
    placeShip,
    setContext,
    playerShipTextureChange,
    addVehicleSpeed
} from '../engine/playerShipModule';
import { getObjectPosition } from '../engine/engineModules';
import { takeDamage, spriteObjectsAnimation, displayObjectAtScene } from '../enemies/animationHitBoxModules';
import { bulletSpeed } from '../engine/bulletsModule';


interface shipData{
    id: number
    name: string,
    texture: string,
    armor: number,
    speed: number,
    minSpeed: number,
    firespot: number,
    explosion: any,
    size:{
            width: number,
            height: number
    },
    guns: object[]
}
class PlayerShip{
    data: shipData;
    points: number;
    healthPoint: number;
    maxOfLife: number;
    maxHealth: number;
    numberOflife: number;
    x: number; y: number;
    xFinal: number; yFinal: number;
    ctx: any; collisionAllow: boolean;
    objectOwner: string; width: number; height: number;
    xAdj: number; speed: number; explosion: any; damage: number;
    sx: number; sy: number; picturesWidth: number;
    imageHeight: number;
    sWidth: number; sHeight: number;
    animationSteps: number;
    numberOfItems: number;
    numberOfVerticalItems: number;
    detectFrame: number;
    collideExplosionAnimation: any;
    isShot: boolean; shotAngle: number;
    img: any; defaultSpeed: number;
    defaultShipData: any;
    journal: any;

    initPlayerShip: any;
    shipControl: any;
    showInformation: any;
    setContext: any;
    placeShip: any;
    moveShip: any;
    getObjectPosition: any;
    takeDamage: any;
    spriteObjectsAnimation: any;
    displayObjectAtScene: any;
    bulletSpeed: any;
    playerShipTextureChange: any;
    addVehicleSpeed: any;
    constructor({...data}){
        this.data = data.data;
        this.points = data.points;
        this.numberOflife = data.numberOflife;
        this.maxOfLife = data.numberOflife;
        this.healthPoint = data.healthPoint + data.armor;
        this.maxHealth = data.healthPoint + data.armor;
        this.x = data.x - (data.width/2); this.y = data.y - (data.height/2);
        this.xFinal = data.x; this.yFinal = data.y;
        this.collisionAllow = true;
        this.objectOwner = "player";
        this.width = data.width; this.height = data.height;
        this.xAdj = 0; this.speed = data.speed;
        this.explosion = data.explosion; this.damage = data.damage;
        this.sx = data.sx; this.sy = data.sy; this.picturesWidth = data.picturesWidth;
        this.imageHeight = data.imageHeight;
        this.sWidth = data.sWidth; this.sHeight = data.sHeight;
        this.animationSteps = data.animationSteps;
        this.numberOfItems = data.numberOfItems;
        this.numberOfVerticalItems = data.numberOfVerticalItems;
        this.detectFrame = 0;
        this.collideExplosionAnimation = data.collideExplosionAnimation;
        this.isShot = true;
        this.shotAngle = 0;
        this.defaultSpeed = data.data.minSpeed;
        this.img = new Image();
        this.journal = {
            defaultData: {
                numberFlyOfEnemy: 0,
                numberOfGroundEnemy: 0
            },
            levelTasks: []
        };
    }
    getPlayerInformation(){
        return {
            health: this.healthPoint,
            maxHealthPoint: this.maxHealth
        }
    }

}
PlayerShip.prototype.initPlayerShip = initPlayerShip;
PlayerShip.prototype.shipControl = shipControl;
PlayerShip.prototype.moveShip = moveShip;
PlayerShip.prototype.placeShip = placeShip;
PlayerShip.prototype.setContext = setContext;
PlayerShip.prototype.getObjectPosition = getObjectPosition;

PlayerShip.prototype.takeDamage = takeDamage;
PlayerShip.prototype.spriteObjectsAnimation = spriteObjectsAnimation;
PlayerShip.prototype.displayObjectAtScene = displayObjectAtScene;
PlayerShip.prototype.bulletSpeed = bulletSpeed;
PlayerShip.prototype.playerShipTextureChange = playerShipTextureChange;
PlayerShip.prototype.addVehicleSpeed = addVehicleSpeed;

export {
    PlayerShip
};