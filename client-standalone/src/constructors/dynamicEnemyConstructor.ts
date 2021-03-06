import { DynamicUserConstructor } from './dynamicUserConstructor';
import { displayObjectAtScene, takeDamage, spawnCoin } from '../enemies/animationHitBoxModules';
import { groundEnemyMove } from '../engine/dynamicLevels/dynamicLevelEnemyModules';
import { detectPlayer,
    groundEnemyDecided,
    groundEnemyPathFinder,
    groundEnemyShot,
    groundPlayerJump,
    enemyDetectNpc,
    jumpDown } from '../engine/dynamicLevels/dynamicLevelEnemyModules';
import { findAngleToShip } from '../engine/gameSideObjectsModule';



class DynamicEnemyConstructor extends DynamicUserConstructor {
    objectOwner: string;
    targetXLastLocation: number;
    targetYLastLocation: number;
    nextPointOfMoveX: number;
    nextPointOfMoveY: number;
    playerInRange: boolean;
    healthPoint: number;
    extraObjects: any[];
    defaultSpeed: number;
    isStop: boolean;
    isJump: boolean;
    isJumpDown: boolean;
    unitRandomize: number;

    targetAngle: number;
    behavior: any;
    currentBehavior: string;
    detectRange: number;
    currentGroundBlock: any;
    currentWallBlock: any;
    nextGroundBlock: any
    nextWallBlock: any
    nextBottomBlock: any;
    backBlock: any;
    jumpBlock: any;
    jumpSpeed: number;
    jumpImpuls: number;
    details: any;
    shotProbability: number;
    objectPresent: boolean;
    changeModeRandomizer: number;
    damage: number;
    explosionAnimation: any;
    pointsPerUnit: number;
    idStartDialog: number;

    groundEnemyMove: any;
    detectPlayer: any;
    findAngleToShip: any;
    groundEnemyDecided: any;
    groundEnemyPathFinder: any;
    groundEnemyShot: any;
    takeDamage: any;
    groundPlayerJump: any;
    spawnCoin: any;
    enemyDetectNpc: any;
    jumpDown: any;
    constructor({ ...data}){
        super({...data})
        this.objectOwner = (data.details.type === "enemy_spawner" || data.details.type === "hidden_enemy_spawner")?  "groundEnemy" : "groundNPC";
        this.detectRange = data.detectRange;
        this.behavior = (data.details.behavior)? data.details.behavior : data.behavior[Math.floor(Math.random() * data.behavior.length)];
        this.currentBehavior = this.behavior;
        this.defaultSpeed = data.speed;
        this.unitRandomize = Math.floor(Math.random()*50 + 10);
        this.changeModeRandomizer = 10;
        this.jumpSpeed = data.jumpSpeed;
        this.details = data.details;
        this.shotProbability = data.shotProbability;
        this.objectPresent = true;
        this.isJump = false;
        this.isJumpDown = false;
        this.extraObjects = (data.extraObjects)? data.extraObjects : null;
        this.damage = (data.damage)? data.damage : 0;
        this.explosionAnimation = (data.explosionAnimation)? data.explosionAnimation : null;
        this.pointsPerUnit = (data.pointsPerUnit)? data.pointsPerUnit : null;
        this.idStartDialog = 0;
    }
}

DynamicEnemyConstructor.prototype.groundEnemyMove = groundEnemyMove;
DynamicEnemyConstructor.prototype.detectPlayer = detectPlayer;
DynamicEnemyConstructor.prototype.findAngleToShip = findAngleToShip;
DynamicEnemyConstructor.prototype.groundEnemyDecided = groundEnemyDecided;
DynamicEnemyConstructor.prototype.groundEnemyPathFinder = groundEnemyPathFinder;
DynamicEnemyConstructor.prototype.groundEnemyShot = groundEnemyShot;
DynamicEnemyConstructor.prototype.takeDamage = takeDamage;
DynamicEnemyConstructor.prototype.groundPlayerJump = groundPlayerJump;
DynamicEnemyConstructor.prototype.spawnCoin = spawnCoin;
DynamicEnemyConstructor.prototype.enemyDetectNpc = enemyDetectNpc;
DynamicEnemyConstructor.prototype.jumpDown = jumpDown;
export {
    DynamicEnemyConstructor
}