import { SideObject } from './gameSideObjectConstructor';
import { addPlayerLife, collectCoin, collectObjectsToInventory } from '../engine/gameGrappleObjectsModule';
import { groundPlayerCollectable } from '../engine/dynamicLevels/playerUnitModule';

interface grappleOBject {
    name: string,
    description: string,
    value: number,
    methodName: string
}
class GrappleObject extends SideObject{
    isGrapple: boolean;
    grapplePower: grappleOBject;

    addPlayerLife: any;
    collectCoin: any;
    collectObjectsToInventory: any;
    groundPlayerCollectable: any;
    constructor({...data}){
        super({...data})
        this.isGrapple = data.isGrapple;
        this.grapplePower = data.grapplePower;
    }
}


GrappleObject.prototype.addPlayerLife = addPlayerLife;
GrappleObject.prototype.collectCoin = collectCoin;
GrappleObject.prototype.collectObjectsToInventory = collectObjectsToInventory;
GrappleObject.prototype.groundPlayerCollectable = groundPlayerCollectable;
export {
    GrappleObject
}