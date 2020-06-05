import { doorFunctionality, teleportFunctionality } from './dynamicLevelInteractiveElements';
import { openInventory, hideInventory } from './playerUnitModule';
import { createSimpleElements } from '../../appMenu/pagesBuilder';
import { writeDataToJournal, completeJournalTask } from './journalModules';



function useObject({ mainGameObject, player, item }){
    let currentActiveBlock;
    if(item.objectOwner && !item.objectPresent) return false
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
                player.currentDialogCharacter = item;
                process.env.GROUND_NPC_DIALOG_ACTIVE = 'true';
                if( process.env.GROUND_NPC_DIALOG_ACTIVE === 'true' && process.env.GROUND_CHARACTERS_INVENTORY === 'true') break;
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            case 'teleport_door':
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            case 'read_terminal':
                player.currentDialogCharacter = item;
                process.env.GROUND_NPC_DIALOG_ACTIVE = 'true';
                if( process.env.GROUND_NPC_DIALOG_ACTIVE === 'true' && process.env.GROUND_CHARACTERS_INVENTORY === 'true') break;
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                break;
            default:
                player.currentDialogCharacter = null;
                if(process.env.GROUND_NPC_DIALOG_ACTIVE === 'true' && player.isRun){
                     process.env.GROUND_NPC_DIALOG_ACTIVE = 'false';
                     hideInventory()
                }
                return currentActiveBlock
        }
        return currentActiveBlock
}








function npcDialog({ currentDialogCharacter, data, searchTarget, mainGameObject, requireData, constructors,groundPlayer }){
        openInventory()
        displayDialog({
            currentDialogCharacter: currentDialogCharacter,
            currentDialog: 0,
            data: data,
            searchTarget: searchTarget,
            mainGameObject: mainGameObject,
            requireData: requireData,
            constructors: constructors,
            groundPlayer: groundPlayer })
        process.env.GROUND_CHARACTERS_INVENTORY = 'true';
}






function displayDialog({ currentDialogCharacter, currentDialog, data, searchTarget, mainGameObject, requireData, constructors,groundPlayer }){
    if(!currentDialogCharacter) return false
    let defaultNpcData = currentDialogCharacter.details.dialog.default;
    let dialogAnswersNpcData = currentDialogCharacter.details.dialog.dialogAnswers;
    let backpackBody = document.querySelector('#backpack-body');
    let localId = new Date().getTime();
    backpackBody.innerHTML = '';

    let dialogHeader = createSimpleElements({
        tagname: 'div',
        classList: 'dialog-header',
        innerText: `
        <h3>${defaultNpcData.name}</h3>
        <img class="dialog-picture" src="${(defaultNpcData.facePictureAbsolute)? defaultNpcData.facePictureAbsolute : process.env.HOST + defaultNpcData.facePicture}" alt="${defaultNpcData.name}">`,
        idName: null
    })


    backpackBody.appendChild(dialogHeader)
    if(!dialogAnswersNpcData) return false
    let selecteDialog = dialogAnswersNpcData.find(dialog => dialog.id == currentDialog)

    if(!selecteDialog || !selecteDialog.questions) return false
    let innerDialog = createSimpleElements({
        tagname: 'div',
        classList: 'dialog-body',
        innerText: `<p class="dialog-text-wrapper" id="main-dialog-arrea-${ localId }">${selecteDialog.text}</p>`,
        idName: null
    })

    for(let answerButtons of selecteDialog.questions){
        let questionsButton = createSimpleElements({
            tagname: 'button',
            classList: 'answer-dialog-button',
            innerText: `
            <p>${answerButtons.text}</p>
          `,
            idName: null
        })
        questionsButton.addEventListener('click', () => {

            let answerState = checkDialogTaskConditions({
                currentDialogCharacter: currentDialogCharacter,
                inventory: groundPlayer.inventory,
                targetDialog: answerButtons.id,
                dialogTextId: `main-dialog-arrea-${ localId }`,
                mainGameObject: mainGameObject
            })
            if(!answerState) return false
            displayDialog({
                currentDialogCharacter: currentDialogCharacter, currentDialog: parseInt(answerButtons.id),
                data: data,
                searchTarget: searchTarget,
                mainGameObject: mainGameObject,
                requireData: requireData,
                constructors: constructors,
                groundPlayer: groundPlayer
            })
            if(selecteDialog.action === "require_object"){

            }
            if(selecteDialog.action === "give_object"){
                requireData = searchInPlayerInventory({
                    data: groundPlayer.inventory,
                    searchTarget: mainGameObject.mapNearActiveElement.details.rules.require
                })

                activateInteractObjectData({
                    mainGameObject: mainGameObject,
                    requireData: requireData,
                    constructors: constructors,
                    groundPlayer: groundPlayer,
                    currentDialogCharacter: currentDialogCharacter
                })
            }
        })
        innerDialog.appendChild(questionsButton)
    }
    backpackBody.appendChild(innerDialog)
}









function checkDialogTaskConditions({ currentDialogCharacter, inventory, targetDialog, dialogTextId, mainGameObject }){
    let dialogTextArea = document.querySelector('#' + dialogTextId);
    let npcDetails = currentDialogCharacter.details;
    let requireObject = npcDetails.rules.require;
    let dialogArea = npcDetails.dialog.dialogAnswers[targetDialog];
    let requireData = searchInPlayerInventory({
            data: inventory,
            searchTarget: requireObject
        })
    let taskCompleate = true;
    if(dialogArea && requireObject ){
        if(dialogArea.numberOfRequireItems){
            writeDataToJournal({
                mainGameObject: mainGameObject,
                dialogArea: dialogArea,
                requireData: requireData,
                npcDetails: npcDetails,
                requireObject: requireObject
            })
            if(requireData){
                taskCompleate = (dialogArea.numberOfRequireItems &&
            requireData.numberOfItems >= parseInt(dialogArea.numberOfRequireItems))? true: false;
                if(!taskCompleate){
                    dialogTextArea.innerHTML = `I cant do that, first i need <span>${dialogArea.numberOfRequireItems}</span>
                    <span>${requireObject.split("_").join(" ")}</span> you got <span>${(requireData.numberOfItems)? requireData.numberOfItems : 0}</span>`;
                }
            }else if(dialogArea.numberOfRequireItems){
                dialogTextArea.innerHTML = `I cant do that, first i need <span>${dialogArea.numberOfRequireItems}</span>
                <span>${requireObject.split("_").join(" ")}</span>`;
                return false
            }
        }
    }else if(dialogArea && npcDetails.dialog.default.journalTask){
        if(dialogArea.action === "give_object" && npcDetails.rules.contain){
            console.log('give objects', dialogArea)
            writeDataToJournal({
                mainGameObject: mainGameObject,
                dialogArea: dialogArea,
                requireData: requireData,
                npcDetails: npcDetails,
                requireObject: requireObject
            })
        }
    }
    return  taskCompleate
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
    
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    doorFunctionality.call(groundPlayer, {mainGameObject: mainGameObject, constructors: constructors})
    teleportFunctionality.call(groundPlayer, {mainGameObject: mainGameObject})
    if(process.env.GROUND_ACTIVE_BLOCK_IN_RANGE === 'true'){
        let requireData;
        console.log(groundPlayer.currentDialogCharacter)
        if(!mainGameObject.mapNearActiveElement) return false
        if(groundPlayer.currentDialogCharacter){
            npcDialog({
                currentDialogCharacter: groundPlayer.currentDialogCharacter,
                data: groundPlayer.inventory,
                searchTarget: mainGameObject.mapNearActiveElement.details.rules.require,
                mainGameObject: mainGameObject,
                requireData: requireData,
                constructors: constructors,
                groundPlayer: groundPlayer
            })
            return false
        }

        requireData = searchInPlayerInventory({
            data: groundPlayer.inventory,
            searchTarget: mainGameObject.mapNearActiveElement.details.rules.require
        })

        activateInteractObjectData({
            mainGameObject: mainGameObject,
            requireData: requireData,
            constructors: constructors,
            groundPlayer: groundPlayer,
            currentDialogCharacter: null
        })
    }
}









function activateInteractObjectData({mainGameObject, requireData, constructors, groundPlayer, currentDialogCharacter }){
    if( mainGameObject.mapNearActiveElement.details.rules.contain && !mainGameObject.mapNearActiveElement.details.rules.require ||
        mainGameObject.mapNearActiveElement.details.rules.require && requireData ){
        if( mainGameObject.mapNearActiveElement.details.rules.contain == 'exit' ){

            levelRestore({mainGameObject: mainGameObject, constructors: constructors})
        }
        let objectDetails = mainGameObject.mapNearActiveElement.details;
        let previewPicture = (objectDetails.rules.objectPicture)? objectDetails.rules.objectPicture :  process.env.HOST + objectDetails.texture;

        if(mainGameObject.mapNearActiveElement.details.rules.contain){

            deleteInventoryObject({
                currentDialogCharacter: currentDialogCharacter,
                requireData: requireData,
                groundPlayer: groundPlayer,
                mainGameObject: mainGameObject
            })
            saveObjectToBackPack({
                groundPlayer: groundPlayer,
                data: mainGameObject.mapNearActiveElement.details.rules.contain,
                previewPicture: previewPicture,
                name: (mainGameObject.mapNearActiveElement.details.objectName)? mainGameObject.mapNearActiveElement.details.objectName: null
            })
        }
        mainGameObject.mapNearActiveElement.details.rules.tips = null;
        mainGameObject.mapNearActiveElement.details.rules.contain = null;
        mainGameObject.mapNearActiveElement.details.rules.requireText = null;
        mainGameObject.mapNearActiveElement.details.rules.require = null;
        return
    }
}




function deleteInventoryObject ({ currentDialogCharacter, requireData, groundPlayer, mainGameObject }){
    if(!currentDialogCharacter) return false
    let requireStatment = currentDialogCharacter.details.rules.require;
    if(!requireStatment) return false

    let inventory = groundPlayer.inventory;
    let searchDataName = requireData.innerData;
    let numberOfRequireElements = requireData.numberOfItems;
    let allRequireObjects = inventory.find(item =>item.innerData === searchDataName);

    completeJournalTask({mainGameObject: mainGameObject, allRequireObjects: allRequireObjects})

    groundPlayer.inventory.splice(inventory.indexOf(allRequireObjects), 1)

}





function saveObjectToBackPack({groundPlayer, data, previewPicture, name}){
    hideInventory()
    let inventoryStack = stackItemAtInventory({ data: data, inventory: groundPlayer.inventory })
    if(inventoryStack) return false
    groundPlayer.inventory = groundPlayer.inventory.concat({
        innerData: data,
        texture: previewPicture,
        numberOfItems: 1,
        name: name
    })
}




function searchInPlayerInventory({ data, searchTarget }){
    if(data.length <= 0 || !data) return false
    let searchData = data.find( data => data.innerData === searchTarget );
    return searchData
}



function stackItemAtInventory ({ data, inventory }){
    let findObjectAtInventory = searchInPlayerInventory({ data: inventory, searchTarget: data })
    if(findObjectAtInventory) findObjectAtInventory.numberOfItems += 1;
    return findObjectAtInventory
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
    searchInPlayerInventory,
    saveObjectToBackPack
}