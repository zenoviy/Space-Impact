import { doorFunctionality } from './dynamicLevelInteractiveElements';



function useObject({ mainGameObject, player, item }){
    let currentActiveBlock;
        switch(item.details.type){
            case 'exit':
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            case 'terminal_object':
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            case 'spawner':
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            case 'door':
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            case 'npc_spawner':
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                npcDialog()
                break;
            default:
                return currentActiveBlock
        }
        return currentActiveBlock
}




function npcDialog(){

}




function displayText({ mainGameObject, player, item }){
    let contexts = mainGameObject.returnContext()
    mainGameObject.mapNearActiveElement = item;
    let details = item.details

    if(details.rules.requireText){
        renderText(contexts, details.rules.requireText, player.x, player.y + 70, 'red')
    }
    if(details.rules.successText && !details.rules.requireText && !details.rules.tips ||
        details.type === 'door' && details.rules.successText){
        renderText(contexts, details.rules.successText, player.x, player.y - 50, 'white')
    }
    if(details.rules.tips){
        renderText(contexts, details.rules.tips, player.x, player.y - 20, 'orange')
    }

    process.env.GROUND_ACTIVE_BLOCK_IN_RANGE = 'true';
    return item
}
function renderText( contexts, displayText, x, y, color){
        let textDivider = displayText.split('*');

        textDivider.forEach((text, index) => {
            contexts.gameDialogField.shadowColor = 'rgba(0, 0, 0, 1)';
            contexts.gameDialogField.shadowBlur = 4;

            contexts.gameDialogField.font = 'bold 14px Courier New';
            contexts.gameDialogField.textAlign = 'left';
            contexts.gameDialogField.fillStyle = color;
            contexts.gameDialogField.fillText(text, x, y + (index * 12) )
        })
    }


function interactWithObjects({ mainGameObject, constructors }){
    //
    //console.log(mainGameObject.mapNearActiveElement, mainGameObject.gameInitData.gameData.groundPlayerCharacter, process.env.GROUND_ACTIVE_BLOCK_IN_RANGE)
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    doorFunctionality.call(groundPlayer, {mainGameObject: mainGameObject})
    if(process.env.GROUND_ACTIVE_BLOCK_IN_RANGE === 'true'){
        let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
        let requireData;
        if(!mainGameObject.mapNearActiveElement) return false
            requireData = searchInPlayerInventory({
                data: groundPlayer.inventory,
                searchTarget: mainGameObject.mapNearActiveElement.details.rules.require
            })

            activateInteractObjectData({
                mainGameObject: mainGameObject,
                requireData: requireData,
                constructors: constructors,
                groundPlayer: groundPlayer
            })
    }
}


function activateInteractObjectData({mainGameObject, requireData, constructors, groundPlayer }){
    if( mainGameObject.mapNearActiveElement.details.rules.contain && !mainGameObject.mapNearActiveElement.details.rules.require ||
        mainGameObject.mapNearActiveElement.details.rules.require && requireData ){
        if( mainGameObject.mapNearActiveElement.details.rules.contain == 'exit' ){

            levelRestore({mainGameObject: mainGameObject, constructors: constructors})
        }

        console.log(mainGameObject.mapNearActiveElement.details)
        let objectDetails = mainGameObject.mapNearActiveElement.details;
        let previewPicture = (objectDetails.rules.objectPicture)? objectDetails.rules.objectPicture :  process.env.HOST + objectDetails.texture;

        if(mainGameObject.mapNearActiveElement.details.rules.contain){
            groundPlayer.inventory = groundPlayer.inventory.concat({
                innerData: mainGameObject.mapNearActiveElement.details.rules.contain,
                texture: previewPicture
            })
        }
        mainGameObject.mapNearActiveElement.details.rules.tips = null;
        mainGameObject.mapNearActiveElement.details.rules.contain = null;
        mainGameObject.mapNearActiveElement.details.rules.requireText = null;
        mainGameObject.mapNearActiveElement.details.rules.require = null;

        return
    }
}






function searchInPlayerInventory({ data, searchTarget }){
    if(data.length <= 0 || !data) return false
    let searchData = data.find( data => data.innerData === searchTarget );
    return searchData
}



function openInventory(){

}



async function levelRestore({mainGameObject, constructors}){
    let allGameBackgroundElements = await mainGameObject.gameInitData.mapBackgroundObjects;
    for(let background of allGameBackgroundElements){
        background.speed = background.defaultSpeed;
    }
    mainGameObject.gameInitData.dynamicLevelsActive = false;
    mainGameObject.gameInitData.levelChange = true;
    mainGameObject.warpEffect(constructors)
}


export {
    useObject,
    displayText,
    interactWithObjects,
    levelRestore,
    searchInPlayerInventory
}