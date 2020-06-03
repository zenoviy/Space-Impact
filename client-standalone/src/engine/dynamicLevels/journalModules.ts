import { openInventory, hideInventory } from './playerUnitModule';


function openJournal ({ mainGameObject, userShipData }){
    let gameInfo = mainGameObject.showGameInfo();
    let userShipJournal = userShipData.journal;
    let backpackBody = document.querySelector('#backpack-body');
    backpackBody.innerHTML = '';
    console.log(userShipJournal, '||')
    if(process.env.GROUND_CHARACTERS_INVENTORY === 'false'){
        fillJournalDefaultData({mainGameObject: mainGameObject})
        displayJournalData({userShipJournal: userShipJournal, backpackBody: backpackBody, mainGameObject: mainGameObject})
        openInventory()
    }else{
        hideInventory()
    }
}


function fillJournalDefaultData ({mainGameObject}){
    let gameInfo = mainGameObject.showGameInfo();
    let userShipData = mainGameObject.gameInitData.gameData.playerObject;
    let userShipJournal = userShipData.journal;
    console.log(gameInfo.gameData.levelData.level)
    if(userShipJournal.levelTasks && !userShipJournal.levelTasks[gameInfo.gameData.levelData.level] && gameInfo.gameData.levelData.level){
        let levelDataDescription = gameInfo.gameData.levelData.description;
        let cureentLevalTasks = {
            levelName: gameInfo.gameData.levelData.description.name,
            levelDescription: (levelDataDescription.levelMainTask)? levelDataDescription.levelMainTask: levelDataDescription.description,   /// levelMainTask
            level: gameInfo.gameData.levelData.level,
            taskActive: false,
            levelTasks: []
        }
        userShipJournal.levelTasks[gameInfo.gameData.levelData.level] = cureentLevalTasks;
    }
}




function displayJournalData({userShipJournal, backpackBody, mainGameObject}){
    let gameInfo = mainGameObject.showGameInfo();
    let journalLevelElement = '';
    let journalData = userShipJournal.levelTasks.reverse();
    for(let task of journalData){
        if(!task) continue

        journalLevelElement += `<h3 class="side-panel-name">Journal</h3>
        <ul class="journal-list-container">
            <h4 class="${(gameInfo.gameData.levelData.level != task.level)? 'complete-task' : ''}">Level ${task.level} ${task.levelName}</h4>
            <li class="${(task.taskActive || gameInfo.gameData.levelData.level != task.level)? 'complete-task' : 'active-task'}">
                ${(task.levelMainTask)? task.levelMainTask : task.levelDescription}
            </li>
            <ul class="journal-level-inner-data">${journalDetails(task.levelTasks, task)}</ul>
        </ul>`
    }
    backpackBody.innerHTML = journalLevelElement;

    function journalDetails(levelTasks, task){
        let innerTasks = '';
        if(!levelTasks) return innerTasks
        for(let detailTask of levelTasks){
            //console.log(gameInfo.gameData.levelData.level, task.level)
            innerTasks += `<li class="${(detailTask.taskActive || gameInfo.gameData.levelData.level != task.level)? 'complete-task' : 'active-task'}">
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
        fillJournalDefaultData({mainGameObject: mainGameObject});
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
}


export {
    openJournal,
    writeDataToJournal,
    completeJournalTask,
    fillJournalDefaultData
}