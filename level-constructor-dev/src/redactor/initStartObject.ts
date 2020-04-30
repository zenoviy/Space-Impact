import * as globalVariable from './globalVariables';
import { createFrame, createBlockPicture } from '../ui/view';
import { getData } from '../server-requests/requestsModule';




async function initMainEngine({ MainGameConstructor,  BlockConstructor}){
    let blockSize = 50, defaultWidth = (window.innerWidth/blockSize).toFixed(),
    defaultHeight = (window.innerHeight/blockSize).toFixed()

    console.log(defaultHeight)
    const redactorData = await {
        mapMoveSpeed: 10,
        mapWidth: defaultWidth,
        mapHeight: defaultHeight,
        allRedactorBlock: fillBlockMap( { BlockConstructor: BlockConstructor,
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
    console.log(horizontalBlocks, verticalBlock)
    for(let i = 0; i <= horizontalBlocks * verticalBlock; i++){

        blockData.y = verticalEnds;
        blockData.x = horizontalEnds;
        blockData.index = i;
        verticalEnds = (verticalEnds < ( verticalBlock * blockSize ))? verticalEnds + blockSize : 0;

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
    if(!this.details) createFrame.call(this, { mainObject: mainObject })
    else createBlockPicture.call(this, { mainObject: mainObject })
}

export {
    initMainEngine,
    renderBlockBox,
    fillBlockMap,
    backToObject
}