import { SideObject } from './gameSideObjectConstructor';
import { addPlayerLife } from '../engine/gameGrappleObjectsModule';
class GrappleObject extends SideObject{
    isGrapple: boolean;
    grapplePower: string;

    addPlayerLife: any;
    super({...data}){
        this.isGrapple = data.isGrapple;
        this.grapplePower = data.grapplePower;
    }
}


GrappleObject.prototype.addPlayerLife = addPlayerLife;
export {
    GrappleObject
}