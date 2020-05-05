import { DynamicUserConstructor } from './dynamicUserConstructor';
import { groundEnemyMove } from '../engine/dynamicLevels/dynamicLevelEnemyModules';


class DynamicEnemyConstructor extends DynamicUserConstructor {
    objectOwner: string;

    groundEnemyMove: any;
    constructor({ ...data}){
        super({...data})
        this.objectOwner = "groundEnemy";
    }
}


DynamicEnemyConstructor.prototype.groundEnemyMove = groundEnemyMove;
export {
    DynamicEnemyConstructor
}