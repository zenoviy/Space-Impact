
import { initPlayerShip,
    movePlayerShip,
    shipControl,
    moveShip,
    placeShip,
    setContext 
} from '../engine/playerShipModule';
import { getObjectPosition } from '../engine/engineModules';
import { takeDamage } from '../enemies/enemiesModules';


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
    maxHealth: number;
    numberOflife: number;
    x: number; y: number;
    xFinal: number; yFinal: number;
    ctx: any; collisionAllow: boolean;
    objectOwner: string; width: number; height: number;
    xAdj: number; speed: number; explosion: any; damage: number;

    initPlayerShip: any;
    movePlayerShip: any;
    shipControl: any;
    showInformation: any;
    setContext: any;
    placeShip: any;
    moveShip: any;
    getObjectPosition: any;
    takeDamage: any;
    constructor(
        data: shipData,
        points: number,
        healthPoint: number,
        numberOflife: number,
        x: number = 100,
        y: number = 100,
        width: number, height: number, damage: number
    ){
        this.data = data;
        this.points = points;
        this.numberOflife = numberOflife;
        this.healthPoint = healthPoint + data.armor;
        this.maxHealth = healthPoint + data.armor;
        this.x = x - (width/2); this.y = y - (height/2);
        this.xFinal = x; this.yFinal = y;
        this.collisionAllow = true;
        this.objectOwner = "player";
        this.width = width; this.height = height;
        this.xAdj = 0; this.speed = data.speed;
        this.explosion = data.explosion; this.damage = damage;
    }

}

PlayerShip.prototype.initPlayerShip = initPlayerShip;
PlayerShip.prototype.movePlayerShip = movePlayerShip;
PlayerShip.prototype.shipControl = shipControl;
PlayerShip.prototype.moveShip = moveShip;
PlayerShip.prototype.placeShip = placeShip;
PlayerShip.prototype.setContext = setContext;
PlayerShip.prototype.getObjectPosition = getObjectPosition;

PlayerShip.prototype.takeDamage = takeDamage;

export {
    PlayerShip
};