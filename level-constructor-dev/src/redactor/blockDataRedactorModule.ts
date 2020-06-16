import { fillBlockMap } from './initStartObject';
import { hideElement, showElement } from '../ui/preview';
import { generateInput, loadInnerData, elementCreator } from './panelFormPartGenerator';

async function openRedactorWindow({ blockData, mainObject }){

    if(mainObject.selectedBlockPanelItem || !blockData.details || mainObject.miniMapActive) return false

    let selectFiles = document.querySelector("#select-files");
    let fileContainer = document.querySelector("#inner-content");
    let closeDialog = document.querySelector("#closeDialog");

    let generatedArea = elementCreator({
        tagname: 'div',
        classList: 'inner-description-fields-wrapper',
        innerText: '',
        idName: 'inner-description-area'
    })


    let allBlocks = mainObject.allRedactorBlock;
    mainObject.activeDescriptionFields = true;
    fileContainer.innerHTML = '';
    showElement({ element: selectFiles })

    await fileContainer.appendChild(generatedArea);
    let innerDescriptionArea = await document.querySelector("#inner-description-area");



    loadInnerData({ fileContainer: innerDescriptionArea, target: blockData })
    generateInput({ fileContainer: innerDescriptionArea, target: blockData })
    closeDialog.addEventListener('click', () => {
        mainObject.activeDescriptionFields = false;
        hideElement({ element: selectFiles })
    })
}


function positionReducer({ allBlocks  }){
    let oldXRange = allBlocks[0].xMove;
    let oldYRange = allBlocks[0].yMove;
    for(let block of allBlocks){
        block.xMove = block.x;
        block.yMove = block.y;
    }
}


function changeBlockArraySize({ mainObject, formData, BlockConstructor }){
    let errorField = document.querySelector('#map-size-error');
    let widthSet = formData.horizontalBlock;
    let heightSet = formData.verticalBlock;
    let currentWidth = mainObject.mapWidth;
    let currentHeight = mainObject.mapHeight;
    let allBlocks = mainObject.allRedactorBlock;


    let verticalRange = heightSet - currentHeight;
    let verticalCompensation = verticalRange;

    let newRebuildBlockMap = [];

    let oldXRange = allBlocks[0].xMove;
    let oldYRange = allBlocks[0].yMove;
    //errorField.innerHTML = `<p class='side-panel-error'>Please wait map is build...</p>`;

    positionReducer({ allBlocks: allBlocks })
    for(let col = 0; col < widthSet; col++){
        for(let item = 0; item < heightSet; item++){
            let rowIndex = ( col == 0)? item : (col * currentHeight) + item;
            let newBlocksArrayIndex = ( col == 0)? item : (col * heightSet) + item;
            let oldBlocksArrayIndex = (item < currentHeight)? allBlocks[rowIndex] : null;

            if(oldBlocksArrayIndex){
                oldBlocksArrayIndex.index = newBlocksArrayIndex;
                newRebuildBlockMap = newRebuildBlockMap.concat(oldBlocksArrayIndex)
            }else{
                newRebuildBlockMap = newRebuildBlockMap.concat(createSingleMapBlock({
                    mainObject: mainObject,
                    BlockConstructor: BlockConstructor,
                    index: newBlocksArrayIndex,
                    x: col * mainObject.blockSize, //+ oldXRange,
                    y: item * mainObject.blockSize // + oldYRange
                }))
                //console.log(col)
            }

        }
        verticalCompensation += verticalRange
    }
    mainObject.mapWidth = widthSet
    mainObject.mapHeight = heightSet
    mainObject.allRedactorBlock = newRebuildBlockMap;
let show = mainObject.allRedactorBlock.find( o => o.index == 1011)
            console.log(show, "show resize")
    console.log(mainObject.allRedactorBlock[0])
}


function createSingleMapBlock({ mainObject, BlockConstructor, index, x, y }){
    let blockData = {
        x: x,
        y: y,
        width: mainObject.blockSize,
        height: mainObject.blockSize,
        index: index
    }
    return new BlockConstructor({...blockData})
}



function miniMapper({ mainObject }){
    let selectFiles = document.querySelector("#select-files");
    let fileContainer = document.querySelector("#inner-content");
    let closeDialog = document.querySelector("#closeDialog");
    let allBlocks = mainObject.allRedactorBlock;
    let cameraPositionX = allBlocks[0].xMove;
    let cameraPositionY = allBlocks[0].yMove;
    mainObject.miniMapActive = true;

    let mapSize = 50 / 3;

    fileContainer.innerHTML = '';

    let newMap = document.createElement('canvas');
    let mapSizeWidth = mainObject.mapWidth * 3;
    let mapSizeHeight = mainObject.mapHeight * 3;
    newMap['width'] = mapSizeWidth;
    newMap['height'] = mapSizeHeight;
    let miniMapCtx = newMap.getContext('2d');



    fileContainer.appendChild(newMap);
    mapObjectDraw({
        ctx: miniMapCtx,
        allBlocks: allBlocks,
        cameraPositionX: cameraPositionX,
        cameraPositionY: cameraPositionY,
        mapSize: mapSize,
        mapSizeWidth: mapSizeWidth,
        mapSizeHeight: mapSizeHeight
    })

    showElement({ element: selectFiles })
    fileContainer.addEventListener('click', function(event){
        let allBlocks = mainObject.allRedactorBlock;
        let cameraPositionX = allBlocks[0].xMove;
        let cameraPositionY = allBlocks[0].yMove;
        if(event.target['nodeName'] === 'CANVAS'){

            let posX = event['clientX'] - event.target['offsetLeft'];
            let posY = event['clientY'] - event.target['offsetTop'];

            setMapAsClick({ mainObject: mainObject, x: posX * mapSize, y: posY * mapSize })

            mapObjectDraw({
                ctx: miniMapCtx,
                allBlocks: allBlocks,
                cameraPositionX: cameraPositionX,
                cameraPositionY: cameraPositionY,
                mapSize: mapSize,
                mapSizeWidth: mapSizeWidth,
                mapSizeHeight: mapSizeHeight,
            })
        }
    })

    closeDialog.addEventListener('click', () => {
        mainObject.miniMapActive = false;
        hideElement({ element: selectFiles })
    })
}


function mapObjectDraw({ ctx, allBlocks, cameraPositionY, cameraPositionX, mapSize, mapSizeWidth, mapSizeHeight}){
    ctx.clearRect(0, 0, mapSizeWidth, mapSizeHeight)
    console.log(allBlocks)
    allBlocks.forEach( item => {
        if(item.details){
            ctx.save();
            ctx.fillStyle = (item.details.mapColor)? item.details.mapColor: "rgba(225, 169, 0, 1)";//item.details.mapColor//"rgba(225, 169, 0, 1)";
            ctx.fillRect((item.x)? item.x / mapSize : 0,  (item.yMove)? item.y / mapSize : 0,  50/mapSize,50/mapSize)
            ctx.restore()
        }
    })
    //ctx.save();
    ctx.strokeStyle = "rgba(225, 255, 255, 1)";
    ctx.beginPath()
    ctx.rect((cameraPositionX/mapSize) * -1, (cameraPositionY/mapSize) * -1, window.innerWidth/mapSize, window.innerHeight/mapSize)
    ctx.stroke()
    //ctx.restore()
}


function setMapAsClick({ mainObject, x, y }){
    let allBlocks = mainObject.allRedactorBlock;

    let cameraPositionX = x + allBlocks[0].xMove; //Math.max(allBlocks[0].xMove, x) - Math.min(allBlocks[0].xMove, x);
    let cameraPositionY = y + allBlocks[0].yMove; //Math.max(allBlocks[0].yMove, y) - Math.min(allBlocks[0].yMove, y);
    for(let block of allBlocks){
        block.xMove -= Math.floor(cameraPositionX);
        block.yMove -= Math.floor(cameraPositionY);
    }
}

export {
    openRedactorWindow,
    changeBlockArraySize,
    miniMapper,
    positionReducer
}