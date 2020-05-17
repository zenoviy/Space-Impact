import { openInventory, hideInventory } from './playerUnitModule';


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
        createMapContext({ mainGameObject: mainGameObject, allBlocks: allBlocks, mapProps: mapProps, groundPlayer: groundPlayer})
    }else {
        hideInventory()
    }
}


function createMapContext({ mainGameObject, allBlocks, mapProps, groundPlayer }){
    let objectToRender = document.querySelector("#backpack-body");
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    objectToRender.innerHTML = '';

    let canvas = document.createElement('canvas');
    //let blockIndex = (objectToRender['offsetWidth']/mapProps.width); ////Math.max(mapProps.width , mapProps.height);
    let blockIndex = (objectToRender['offsetWidth']/(mapProps.width * mapProps.blockSize));
    canvas.width = mapProps.width * (objectToRender['offsetWidth']/mapProps.width);   //mapProps.width * blockIndex;
    canvas.height = mapProps.height * (objectToRender['offsetWidth']/mapProps.width); //mapProps.height * blockIndex;

    var mapEngine = setInterval(function(){ // process.env.GROUND_CHARACTERS_INVENTORY = 'true';
        if(process.env.GROUND_CHARACTERS_INVENTORY === 'false' || process.env.GROUND_NPC_DIALOG_ACTIVE === 'true') clearInterval(mapEngine)
        let playerPositionX = groundPlayer.currentGroundBlock.defaultMapX;
        let playerPositionY = groundPlayer.currentGroundBlock.defaultMapY - mapProps.blockSize;

        let mapPixelIndex = objectToRender['offsetWidth']/mapProps.width;

        let ctx = canvas.getContext('2d');

        objectToRender.appendChild(canvas)
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        mapProps.inventoryMap.forEach(item => {
            if(item.details){
                if(item.details.collision){
                    ctx.save();
                    ctx.fillStyle = (item.details.mapColor)? item.details.mapColor: "rgba(225, 169, 0, 1)";//item.details.mapColor//"rgba(225, 169, 0, 1)";
                    let xPos = (item.defaultMapX)? item.defaultMapX : item.x;
                    let yPos = (item.defaultMapY)? item.defaultMapY : item.y;
                    //defaultMapX
                    //ctx.fillRect( item.x/(Math.pow(blockIndex, 2)),  item.y/(Math.pow(blockIndex, 2)),  blockIndex, blockIndex)
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