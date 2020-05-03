import { renderBlockBox } from '../redactor/initStartObject';
import { moveSingleBlock } from '../redactor/blockInteractModule';
import { elevatorMove } from '../redactor/blocksFunctionality';
import { clearView } from '../ui/view';

class BlockConstructor{
    x: number;
    y: number;
    xMove: number;
    yMove: number;
    width: number;
    height: number;
    index: number;
    details: any;

    renderBlockBox: any;
    moveSingleBlock: any;
    elevatorMove: any;
    constructor({...data}){
        this.x = data.x;
        this.y = data.y;
        this.xMove = data.x;
        this.yMove = data.y;
        this.width = data.width;
        this.height = data.height;
        this.index = data.index;
        this.details = (data.details)? data.details : null;
    }
}

BlockConstructor.prototype.renderBlockBox = renderBlockBox;
BlockConstructor.prototype.moveSingleBlock = moveSingleBlock;
BlockConstructor.prototype.elevatorMove = elevatorMove;
export {
    BlockConstructor
}