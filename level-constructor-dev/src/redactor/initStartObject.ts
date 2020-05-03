import * as globalVariable from './globalVariables';
import { createFrame, createBlockPicture } from '../ui/view';
import { getData } from '../server-requests/requestsModule';




async function initMainEngine({ MainGameConstructor,  BlockConstructor}){
    let blockSize = 50,
    defaultWidth = (window.innerWidth/blockSize).toFixed(),
    defaultHeight = (window.innerHeight/blockSize).toFixed(),
    maxHorizontalBlocks = 200,
    maxVerticalBlocks = 150


    setMapSizeToForm({ width: defaultWidth, height: defaultHeight})
    const redactorData = await {
        mapMoveSpeed: 20,
        mapWidth: defaultWidth,
        mapHeight: defaultHeight,
        mapDefaultWidth: defaultWidth,
        mapDefaultHeight: defaultHeight,
        maxHorizontalBlocks: maxHorizontalBlocks,
        maxVerticalBlocks: maxVerticalBlocks,
        blockSize: blockSize,
        allRedactorBlock: fillBlockMap( {
            BlockConstructor: BlockConstructor,
            horizontalBlocks: defaultWidth,
            verticalBlock: defaultHeight,
            blockSize: blockSize
        }),
        blockDatabase: await getData({ url: globalVariable.__HOST + globalVariable.__BLOC_CONSTRUCTOR_URL,
        method: 'GET', data: null, headers: null }),

        charactersDatabase: await getData({ url: globalVariable.__HOST + globalVariable.__CHARACTER_CONSTRUCTOR_URL,
        method: 'GET', data: null, headers: null })
    }
    return new MainGameConstructor({...redactorData})
}


function setMapSizeToForm({ width, height }){
    let form = document.forms['map-size']

    form['horizontalBlock'].value = width;
    form['verticalBlock'].value = height;
}


function fillBlockMap({ BlockConstructor, horizontalBlocks, verticalBlock, blockSize }){
    let blockArray = [];
    let horizontalEnds = 0;
    let verticalEnds = 0;
    let blockData = {
            x: 0,
            y: 0,
            width: blockSize,
            height: blockSize,
            index: 0
        }

    for(let i = 0; i < horizontalBlocks * verticalBlock; i++){

        blockData.y = verticalEnds;
        blockData.x = horizontalEnds;
        blockData.index = i;
        verticalEnds = (verticalEnds < ( (verticalBlock - 1) * blockSize ))? verticalEnds + blockSize : 0;

        horizontalEnds = (verticalEnds == 0)? horizontalEnds + blockSize : horizontalEnds;
        blockArray = blockArray.concat(new BlockConstructor({...blockData}));
    }
    return blockArray
}



function backToObject({data, constructor}){
    let res = Object.create(constructor)
    let finalObject = Object.assign( Object.create(res.prototype), data )
    return finalObject
}


function renderBlockBox({ mainObject }){

    if(this.yMove > 0 - 100 && this.xMove > 0 - 100 && this.yMove < window.innerHeight + 100 && this.xMove < window.innerWidth + 100){
        if(!this.details) createFrame.call(this, { mainObject: mainObject })
        else createBlockPicture.call(this, { mainObject: mainObject })
    }
}



export {
    initMainEngine,
    renderBlockBox,
    fillBlockMap,
    backToObject,
    setMapSizeToForm
}