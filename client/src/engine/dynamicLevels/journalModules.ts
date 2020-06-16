import { openInventory, hideInventory } from './playerUnitModule';


function openJournal ({ mainGameObject, userShipData }){
    let gameInfo = mainGameObject.showGameInfo();
    let userShipJournal = userShipData.journal;
    let backpackBody = document.querySelector('#backpack-body');
    backpackBody.innerHTML = '';
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
    let journalData = Object.assign([], userShipJournal.levelTasks).reverse();
    for(let task of journalData){
        if(!task) continue

        journalLevelElement += `<h3 class="side-panel-name">Journal</h3>
        <div class="game-ranked-data">
            <h4>Enemy log</h4>
            <p>enemy ships: ${userShipJournal.defaultData.numberFlyOfEnemy}</p>
            <p>enemy units: ${userShipJournal.defaultData.numberOfGroundEnemy}</p>
        </div>
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
            let localTask = (detailTask.numberOfItems)? `${detailTask.dialogOwner} require: ${detailTask.numberOfItems} ${detailTask.requireObject}`:
            (detailTask.requireObject)? detailTask.requireObject: null;

            if(!localTask) continue
            innerTasks += `<li class="${(detailTask.taskActive || gameInfo.gameData.levelData.level != task.level)? 'complete-task' : 'active-task'}">
            <p>${localTask}</p></li>`
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
        console.log(userShipJournal.levelTasks, 'write data to journal')
    }

    if(userShipJournal.levelTasks[gameInfo.gameData.levelData.level]){
        let checkTask = userShipJournal.levelTasks[gameInfo.gameData.levelData.level].levelTasks.find(task => task.id === requireObject);
        if(checkTask) return false

        let journalDetail: any;

        if(dialogArea && npcDialog.default.journalTask){
            if(dialogArea.action === "give_object" && npcDetails.rules.contain){
                journalDetail = {
                    id: requireObject,
                    requireObject: npcDialog.default.journalTask,
                    numberOfItems: null,
                    dialogOwner: npcDialog.default.name,
                    taskActive: false
                }
            }
        }else{
            journalDetail = {
                id: requireObject,
                requireObject: requireObject.split('_').join(' '),
                numberOfItems: parseInt(dialogArea.numberOfRequireItems),
                dialogOwner: npcDialog.default.name,
                taskActive: false
            }
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