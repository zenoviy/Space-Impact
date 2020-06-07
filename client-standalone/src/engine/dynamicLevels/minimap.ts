import { openInventory, hideInventory } from './playerUnitModule';
import { createSimpleElements } from '../../appMenu/pagesBuilder';


function detectObjectsAsMap({ mainGameObject }){
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    if(extraSeconds % 5 === 0){
        for(let block of allBlocks){
            if(block.x > 0 && block.x < window.innerWidth && block.y > 0 && block.y < window.innerHeight){
                let compareBlock = this.mapFinder.find(object => object.index === block.index)
                if(!compareBlock){
                    this.mapFinder = this.mapFinder.concat(block)
                }
            }
        }
    }
    return this.mapFinder
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
    var counting = 0;
    var playerShow = true;
    objectToRender.innerHTML = '';

    let mapName = createSimpleElements({
        tagname: 'h3',
        classList: "side-panel-name",
        innerText: 'Level Map',
        idName: null
    })
    var canvas = document.createElement('canvas');

    var blockIndex = (objectToRender['offsetWidth']/(mapProps.width * 50));
    canvas.width = mapProps.width * (objectToRender['offsetWidth']/mapProps.width);
    canvas.height = mapProps.height * (objectToRender['offsetWidth']/mapProps.width);
    var mapPixelIndex = objectToRender['offsetWidth']/mapProps.width;

        var ctx = canvas.getContext('2d');

        objectToRender.appendChild(canvas);
        objectToRender.prepend(mapName);

    var solidBlock = mapProps.inventoryMap.filter(block => {
        if(block.details){
            if(block.details.collision){
                return block
            }
        }
    })
    var mapEngine = setInterval(function(){
        let mapBlock = groundPlayer.detectObjectsAsMap({
            mainGameObject: mainGameObject
        }).filter(block => {
            if(block.details){
                if(block.details.collision){
                    return block
                }
            }
        })
        if(process.env.GROUND_CHARACTERS_INVENTORY === 'false' || process.env.GROUND_NPC_DIALOG_ACTIVE === 'true'){
            clearInterval(mapEngine)
        }


        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for(let mapItem of mapBlock){
            ctx.save();
            ctx.fillStyle = (mapItem.details.mapColor)? mapItem.details.mapColor: "rgba(225, 208, 0, 1)";
            let xPos = (mapItem.defaultMapX)? mapItem.defaultMapX : mapItem.x;
            let yPos = (mapItem.defaultMapY)? mapItem.defaultMapY : mapItem.y;

            ctx.fillRect( xPos * blockIndex,  (yPos * blockIndex)+50,  mapPixelIndex, mapPixelIndex);
            ctx.restore();

        }/**/

            counting += 1;

            if(playerShow){
                let playerPositionX = groundPlayer.currentGroundBlock.defaultMapX;
                let playerPositionY = groundPlayer.currentGroundBlock.defaultMapY - mapProps.blockSize;
                //ctx.save();
                ctx.fillStyle = "rgba(225, 8, 0, 1)";
                ctx.fillRect( playerPositionX * blockIndex ,  (playerPositionY * blockIndex) + 60, mapPixelIndex*2, mapPixelIndex*2);
                //ctx.restore();
                if(counting >= 1){
                    playerShow = false;
                    counting = 0;
                }
            }else {
                if(counting >= 1){
                    playerShow = true;
                    counting = 0;
                }
            }
    }, 200)
}



export {
    detectObjectsAsMap,
    createMapRenderField
}