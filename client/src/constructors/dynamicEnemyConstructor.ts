import { DynamicUserConstructor } from './dynamicUserConstructor';
import { placeEnemyes, takeDamage } from '../enemies/enemiesModules';
import { groundEnemyMove } from '../engine/dynamicLevels/dynamicLevelEnemyModules';
import { detectPlayer,
    groundEnemyDecided,
    groundEnemyPathFinder,
    groundEnemyShot } from '../engine/dynamicLevels/dynamicLevelEnemyModules';
import { findAngleToShip } from '../engine/gameSideObjectsModule';


class DynamicEnemyConstructor extends DynamicUserConstructor {
    objectOwner: string;
    targetXLastLocation: number;
    targetYLastLocation: number;
    nextPointOfMoveX: number;
    nextPointOfMoveY: number;
    playerInRange: boolean;
    healthPoint: number;
    mapFinder: any[];
    defaultSpeed: number;
    isStop: boolean;
    unitRandomize: number;

    targetAngle: number;
    behavior: any[];
    currentBehavior: string;
    detectRange: number;
    currentGroundBlock: any;
    currentWallBlock: any;
    nextGroundBlock: any
    nextWallBlock: any
    jumpSpeed: number;

    groundEnemyMove: any;
    detectPlayer: any;
    findAngleToShip: any;
    groundEnemyDecided: any;
    groundEnemyPathFinder: any;
    groundEnemyShot: any;
    takeDamage: any;
    constructor({ ...data}){
        super({...data})
        this.objectOwner = "groundEnemy";
        this.detectRange = data.detectRange;
        this.behavior = data.behavior;
        this.defaultSpeed = data.speed;
        this.unitRandomize = Math.floor(Math.random()*100);
        this.jumpSpeed = data.jumpSpeed;

    }
}

DynamicEnemyConstructor.prototype.groundEnemyMove = groundEnemyMove;
DynamicEnemyConstructor.prototype.detectPlayer = detectPlayer;
DynamicEnemyConstructor.prototype.findAngleToShip = findAngleToShip;
DynamicEnemyConstructor.prototype.groundEnemyDecided = groundEnemyDecided;
DynamicEnemyConstructor.prototype.groundEnemyPathFinder = groundEnemyPathFinder;
DynamicEnemyConstructor.prototype.groundEnemyShot = groundEnemyShot;
DynamicEnemyConstructor.prototype.takeDamage = takeDamage;
export {
    DynamicEnemyConstructor
}