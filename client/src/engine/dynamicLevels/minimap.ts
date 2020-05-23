import { openInventory, hideInventory } from './playerUnitModule';
import { createSimpleElements } from '../../appMenu/pagesBuilder';


function detectObjectsAsMap({ mainGameObject, objectIntersectionDetect }){  // find nearest object
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;

    this.mapFinder = allBlocks;
    if(extraSeconds % 10 === 0){
        for(let block of allBlocks){

        }
    }
}

function createMapRenderField ({ mainGameObject }){
    if(process.env.GROUND_CHARACTERS_INVENTORY === 'false'){
        let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
        let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
        let mapProps = {
            width: parseInt(allBlocks[0].mapSizeHorizontal),
            height: parseInt(allBlocks[0].mapSizeVertical),
            blockSize: allBlocks[0].width,
            inventoryMap: groundPlayer.mapFinder
        }

        openInventory()
        createMapContext({
            mainGameObject: mainGameObject,
            allBlocks: allBlocks,
            mapProps: mapProps,
            groundPlayer: groundPlayer
        })
    }else {
        hideInventory()
    }
}


function createMapContext({ mainGameObject, allBlocks, mapProps, groundPlayer }){
    let objectToRender = document.querySelector("#backpack-body");
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    objectToRender.innerHTML = '';

    let mapName = createSimpleElements({
        tagname: 'h3',
        classList: "side-panel-name",
        innerText: 'Level Map',
        idName: null
    })
    let canvas = document.createElement('canvas');

    let blockIndex = (objectToRender['offsetWidth']/(mapProps.width * mapProps.blockSize));
    canvas.width = mapProps.width * (objectToRender['offsetWidth']/mapProps.width);
    canvas.height = mapProps.height * (objectToRender['offsetWidth']/mapProps.width);

    var mapEngine = setInterval(function(){
        if(process.env.GROUND_CHARACTERS_INVENTORY === 'false' || process.env.GROUND_NPC_DIALOG_ACTIVE === 'true') clearInterval(mapEngine)
        let playerPositionX = groundPlayer.currentGroundBlock.defaultMapX;
        let playerPositionY = groundPlayer.currentGroundBlock.defaultMapY - mapProps.blockSize;

        let mapPixelIndex = objectToRender['offsetWidth']/mapProps.width;

        let ctx = canvas.getContext('2d');

        objectToRender.appendChild(canvas);
        objectToRender.prepend(mapName);
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        mapProps.inventoryMap.forEach(item => {
            if(item.details){
                if(item.details.collision){
                    ctx.save();
                    ctx.fillStyle = (item.details.mapColor)? item.details.mapColor: "rgba(225, 169, 0, 1)";
                    let xPos = (item.defaultMapX)? item.defaultMapX : item.x;
                    let yPos = (item.defaultMapY)? item.defaultMapY : item.y;

                    ctx.fillRect( xPos*blockIndex,  yPos*blockIndex,  mapPixelIndex, mapPixelIndex)
                    ctx.restore()
                }
            }
        });
            ctx.fillStyle = "rgba(225, 196, 0, 1)";
            ctx.fillRect( playerPositionX*blockIndex ,  playerPositionY*blockIndex,  mapPixelIndex, mapPixelIndex)
    }, 200)
}



export {
    detectObjectsAsMap,
    createMapRenderField
}