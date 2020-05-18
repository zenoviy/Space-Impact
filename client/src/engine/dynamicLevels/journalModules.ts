import { openInventory, hideInventory } from './playerUnitModule';


function openJournal ({ mainGameObject, userShipData }){
    let gameInfo = mainGameObject.showGameInfo();
    let userShipJournal = userShipData.journal;
    let backpackBody = document.querySelector('#backpack-body');
    backpackBody.innerHTML = '';
    console.log(userShipJournal)
    if(process.env.GROUND_CHARACTERS_INVENTORY === 'false'){
        fillDefaultData({userShipJournal, gameInfo})
        displayJournalData({userShipJournal: userShipJournal, backpackBody: backpackBody})
        openInventory()
    }else{
        hideInventory()
    }
}

function fillDefaultData ({userShipJournal, gameInfo}){
    if(userShipJournal.levelTasks && !userShipJournal.levelTasks[gameInfo.gameData.levelData.level]){

        let cureentLevalTasks = {
            levelName: gameInfo.gameData.levelData.description.name,
            levelDescription: gameInfo.gameData.levelData.description.description,
            level: gameInfo.gameData.levelData.level,
            taskActive: false,
            levelTasks: []
        }
        userShipJournal.levelTasks[gameInfo.gameData.levelData.level] = cureentLevalTasks;
    }
}




function displayJournalData({userShipJournal, backpackBody}){
    console.log(userShipJournal)
    let journalLevelElement = '';
    for(let task of userShipJournal.levelTasks){
        if(!task) continue

        journalLevelElement += `<h3 class="side-panel-name">Journal</h3>
        <ul class="journal-list-container">
            <h4>Level ${task.level} ${task.levelName}</h4>
            <li class="${(task.taskActive)? 'complete-task' : 'active-task'}">${task.levelDescription}</li>
            <ul class="journal-level-inner-data">${journalDetails(task.levelTasks)}</ul>
        </ul>`
    }
    backpackBody.innerHTML = journalLevelElement;

    function journalDetails(levelTasks){
        let innerTasks = '';
        if(!levelTasks) return innerTasks
        for(let detailTask of levelTasks){
            innerTasks += `<li class="${(detailTask.taskActive)? 'complete-task' : 'active-task'}">
            <p>${detailTask.dialogOwner} require: ${detailTask.numberOfItems} ${detailTask.requireObject}</p></li>`
        }

        return innerTasks
    }
}




function writeDataToJournal({ mainGameObject, dialogArea, requireData, npcDetails, requireObject }){
    let gameInfo = mainGameObject.showGameInfo();
    let userShipData = mainGameObject.gameInitData.gameData.playerObject;
    let userShipJournal = userShipData.journal;
    let npcDialog = npcDetails.dialog;

    if(userShipJournal.levelTasks && !userShipJournal.levelTasks[gameInfo.gameData.levelData.level]){
        fillDefaultData({userShipJournal: userShipJournal, gameInfo: gameInfo});
    }
    if(userShipJournal.levelTasks[gameInfo.gameData.levelData.level]){
        let checkTask = userShipJournal.levelTasks[gameInfo.gameData.levelData.level].levelTasks.find(task => task.id === requireObject);
        if(checkTask) return false

        let journalDetail = {
            id: requireObject,
            requireObject: requireObject.split('_').join(' '),
            numberOfItems: parseInt(dialogArea.numberOfRequireItems),
            dialogOwner: npcDialog.default.name,
            taskActive: false
        }
        userShipJournal.levelTasks[gameInfo.gameData.levelData.level].levelTasks.push(journalDetail);
    }
}



function completeJournalTask ({mainGameObject, allRequireObjects}){
    let gameInfo = mainGameObject.showGameInfo();
    let leve = gameInfo.gameData.levelData.level;
    let userShipData = mainGameObject.gameInitData.gameData.playerObject;
    let userShipJournal = userShipData.journal;

    if(!allRequireObjects) return false

    let currentTask = userShipJournal.levelTasks[leve].levelTasks.find(task => task.id === allRequireObjects.innerData)

    currentTask.taskActive = true;
    console.log(allRequireObjects, 'Complete')
}


export {
    openJournal,
    writeDataToJournal,
    completeJournalTask
}