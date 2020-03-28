import { SideObject } from './gameSideObjectConstructor';
import { addPlayerLife, collectCoin } from '../engine/gameGrappleObjectsModule';

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
    constructor({...data}){
        super({...data})
        this.isGrapple = data.isGrapple;
        this.grapplePower = data.grapplePower;
    }
}


GrappleObject.prototype.addPlayerLife = addPlayerLife;
GrappleObject.prototype.collectCoin = collectCoin;
export {
    GrappleObject
}