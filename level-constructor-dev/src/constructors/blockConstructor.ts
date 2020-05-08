import { renderBlockBox, } from '../redactor/initStartObject';
import { moveSingleBlock } from '../redactor/blockInteractModule';
import { elevatorMove, stairsMove } from '../redactor/blocksFunctionality';
import { clearView } from '../ui/view';

class BlockConstructor{
    x: number;
    y: number;
    xMove: number;
    yMove: number;
    width: number;
    height: number;
    index: number;
    blockRelativeXPos: number;
    blockRelativeYPos: number;
    details: any;
    imageWidth: number;
    imageHeight: number;
    backgroundTexture: any;


    renderBlockBox: any;
    moveSingleBlock: any;
    elevatorMove: any;
    stairsMove: any;
    constructor({...data}){
        this.x = data.x;
        this.y = data.y;
        this.xMove = data.x;
        this.yMove = data.y;
        this.blockRelativeXPos = 0;
        this.blockRelativeYPos = 0;
        this.width = data.width;
        this.height = data.height;
        this.index = data.index;
        this.details = (data.details)? data.details : null;
        this.imageWidth = (data.imageWidth)? data.imageWidth: data.width;
        this.imageHeight = (data.imageHeight)? data.imageHeight: data.width;
        this.backgroundTexture = null;
    }
}

BlockConstructor.prototype.renderBlockBox = renderBlockBox;
BlockConstructor.prototype.moveSingleBlock = moveSingleBlock;
BlockConstructor.prototype.elevatorMove = elevatorMove;
export {
    BlockConstructor
}