import { doorFunctionality } from './dynamicLevelInteractiveElements';
import { openInventory, hideInventory } from './playerUnitModule';
import { createSimpleElements } from '../../appMenu/pagesBuilder';



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
                player.currentDialogCharacter = item;
                process.env.GROUND_NPC_DIALOG_ACTIVE = 'true';
                currentActiveBlock = displayText({ mainGameObject: mainGameObject, player: player, item: item })
                //npcDialog()
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
    backpackBody.innerHTML = '';

    let dialogHeader = createSimpleElements({
        tagname: 'div',
        classList: 'dialog-header',
        innerText: `
        <h3>${defaultNpcData.name}</h3>
        <img src="${(defaultNpcData.facePictureAbsolute)? defaultNpcData.facePictureAbsolute : process.env.HOST + defaultNpcData.facePicture}" alt="${defaultNpcData.name}">`,
        idName: null
    })


    backpackBody.appendChild(dialogHeader)
    if(!dialogAnswersNpcData) return false
    let selecteDialog = dialogAnswersNpcData.find(dialog => dialog.id == currentDialog)
    //console.log(selecteDialog, currentDialog, '|||')
    if(!selecteDialog || !selecteDialog.questions) return false

    let innerDialog = createSimpleElements({
        tagname: 'div',
        classList: 'dialog-body',
        innerText: `<p>${selecteDialog.text}</p>`,
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
            console.log(answerButtons, answerButtons.text, selecteDialog, "()")
            displayDialog({
                currentDialogCharacter: currentDialogCharacter, currentDialog: parseInt(answerButtons.id),
                data: data,
                searchTarget: searchTarget,
                mainGameObject: mainGameObject,
                requireData: requireData,
                constructors: constructors,
                groundPlayer: groundPlayer
            })

        })
        innerDialog.appendChild(questionsButton)
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
                    groundPlayer: groundPlayer
                })
            }
    backpackBody.appendChild(innerDialog)
}

/*
"dialog": {
    "default": {
        "name": "Doctor D.R. i have blue card",
        "facePicture": "/level-creator/assets/enemyObject/avatar/face-1.png",
        "facePictureAbsolute": null
       
    },
    "dialogAnswers": [
        {
            "id": 2,
            "text": "i give you a card",
            "action": "give_object",
            "questions": [
                {
                    "id": 3,
                    "text": "what is happened?"
                }
            ]
        },
        {
            "id": 3,
            "text": "Enemy attack from unknown",
            "action": "none",
            "questions": [
                {
                    "id": 2,
                    "text": "i need card"
                }
            ]
        }
    ]
}
*/




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
    doorFunctionality.call(groundPlayer, {mainGameObject: mainGameObject})
    if(process.env.GROUND_ACTIVE_BLOCK_IN_RANGE === 'true'){
        let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
        let requireData;
        if(!mainGameObject.mapNearActiveElement) return false

            if(groundPlayer.currentDialogCharacter){  //.details.type === 'npc_spawner'
            //console.log(groundPlayer.currentDialogCharacter)
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

        let objectDetails = mainGameObject.mapNearActiveElement.details;
        let previewPicture = (objectDetails.rules.objectPicture)? objectDetails.rules.objectPicture :  process.env.HOST + objectDetails.texture;

        if(mainGameObject.mapNearActiveElement.details.rules.contain){

            saveObjectToBackPack({
                groundPlayer: groundPlayer,
                data: mainGameObject.mapNearActiveElement.details.rules.contain,
                previewPicture: previewPicture
            })
        }
        mainGameObject.mapNearActiveElement.details.rules.tips = null;
        mainGameObject.mapNearActiveElement.details.rules.contain = null;
        mainGameObject.mapNearActiveElement.details.rules.requireText = null;
        mainGameObject.mapNearActiveElement.details.rules.require = null;

        return
    }
}



function saveObjectToBackPack({groundPlayer, data, previewPicture}){
    hideInventory()
    groundPlayer.inventory = groundPlayer.inventory.concat({
        innerData: data,
        texture: previewPicture
    })
}



function searchInPlayerInventory({ data, searchTarget }){
    if(data.length <= 0 || !data) return false
    let searchData = data.find( data => data.innerData === searchTarget );
    return searchData
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