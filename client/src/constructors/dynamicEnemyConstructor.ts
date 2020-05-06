import { DynamicUserConstructor } from './dynamicUserConstructor';
import { groundEnemyMove } from '../engine/dynamicLevels/dynamicLevelEnemyModules';
import { detectPlayer } from '../engine/dynamicLevels/dynamicLevelEnemyModules';
import { findAngleToShip } from '../engine/gameSideObjectsModule';


class DynamicEnemyConstructor extends DynamicUserConstructor {
    objectOwner: string;
    targetXLastLocation: number;
    targetYLastLocation: number;
    nextPointOfMoveX: number;
    nextPointOfMoveY: number;
    playerInRange: boolean;
    healthPoint: number;


    targetAngle: number;
    behavior: any[];
    currentBehavior: string;
    detectRange: number;

    groundEnemyMove: any;
    detectPlayer: any;
    findAngleToShip: any;
    constructor({ ...data}){
        super({...data})
        this.objectOwner = "groundEnemy";
        this.detectRange = data.detectRange;


    }
}

DynamicEnemyConstructor.prototype.groundEnemyMove = groundEnemyMove;
DynamicEnemyConstructor.prototype.detectPlayer = detectPlayer;
DynamicEnemyConstructor.prototype.findAngleToShip = findAngleToShip;
export {
    DynamicEnemyConstructor
}