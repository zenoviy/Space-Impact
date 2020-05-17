import { elementCreator } from './panelFormPartGenerator';
import { __HOST } from './globalVariables';



// =============  Dialog  ============//

function createDialogFields(){
    let dialog = document.createElement('form')
}
async function createOtherDialog({allDialogs}){
    if(!allDialogs) return false
    let dialogForm = document.createElement('form');
    let finalDialogBlocks = "";
    let allInnerButtonObjects = [];

    let id = 0;     // answer
    for(let dialog of allDialogs){
        let questionItems = loadQuestionsSection({questionBase: dialog.questions, currentId: id});
        finalDialogBlocks += `<div id="dialog-block-wrapper-${id}" class="dialog-block-wrapper">
            <h4>Dialog ID: ${dialog.id}
            <input id="dialog-id-field-${id}" type="number" value="${dialog.id}">
            <button id="remove-dialog-${id}" >
                    <span class="button-reject">delete dialog</span>
                </button>
            </h4>
            <div class="requirement-item-wrapper">
                <lable>
                    <p>Dialog actions <span>"none"</span>  <span>"give_object"</span> <span>"require_object"</span></p>
                    <input id="dialog-action-${id}" type="text" placeholder="dialog actions" value="${dialog.action}">
                </lable>
                <lable>
                    <p>Number of require objects to activate dialog</p>
                    <input id="number-of-elements-${id}" type="number" placeholder="number of require elements" value="${(dialog.numberOfRequireItems)? dialog.numberOfRequireItems : ""}">
                </lable>
            </div>

            <p>Dialog main text</p>
            <textarea id="dialog-block-${id}" name="">${dialog.text}</textarea>
                <div id="">${(questionItems)? questionItems.questions : '' }</div>
                <button id="add-new-question-${id}">
                    <span>+ Add question</span>
                </button>
            <hr>
        </div>`;
        let blockData = Object.assign({}, {
            id: id,
            dialogBlockWrapper: "dialog-block-wrapper-" + id,
            textAreaSelector: "dialog-block-" + id,
            dialogIdField: "dialog-id-field-" + id,
            addDialog: null,
            addNewQuestion: "add-new-question-" + id,
            removeDialog: "remove-dialog-" + id,
            dialogActionField: "dialog-action-" + id,
            numberOfElements: "number-of-elements-" + id,
            test: "test",
            lastBlockId: allDialogs.length - 1,
            questionsData: (questionItems)? questionItems.allInnerQuestionsButtonObjects : null
        });
        allInnerButtonObjects = allInnerButtonObjects.concat(blockData);
        id += 1;
    }
    finalDialogBlocks += `<button id="add-dialog-${id}" >
        <span> + New dialog</span>
    </button>`;
    let blockData = Object.assign({}, {
        id: id,
        dialogBlockWrapper: "dialog-block-wrapper-" + id,
        textAreaSelector: "dialog-block-" + id,
        dialogIdField: "dialog-id-field-" + id,
        addDialog: "add-dialog-" + id,
        addNewQuestion: null,
        removeDialog: null,
        lastBlockId: allDialogs.length - 1,
        questionsData: null
    });
    allInnerButtonObjects = allInnerButtonObjects.concat(blockData);
    dialogForm.innerHTML = finalDialogBlocks;
    return await {dialogForm: dialogForm, allInnerButtonObjects: allInnerButtonObjects}
}











function loadQuestionsSection({questionBase, currentId}){
    if(!questionBase) return false
    let allQuestionsBlock = '';
    let allInnerQuestionsButtonObjects = [];
    let questionsId = 0;
    for(let question of questionBase){
        allQuestionsBlock += `<div class="question-wrapper" id="single-questionBase-block-${currentId}-${questionsId}">
        <p>Related Id dialog</p>
            <input id="related-question-id-${currentId}-${questionsId}" type="number" value="${question.id}" class="related-id-field">
            <textarea id='question-text-${currentId}-${questionsId}'>${question.text}</textarea>
            <button id="remove-question-${currentId}-${questionsId}" class="right-side-button">
                <span class="button-reject">- remove-question</span>
            </button>
        </div>`
        let blockData = Object.assign({}, {
            dialogId: currentId,
            questionId: questionsId,
            relatedQuestionId: `related-question-id-${currentId}-${questionsId}`,
            questionWrapper: `single-questionBase-block-${currentId}-${questionsId}`,
            textAreaSelector: `question-text-${currentId}-${questionsId}`,
            removeQuestion: `remove-question-${currentId}-${questionsId}`
        });
        allInnerQuestionsButtonObjects = allInnerQuestionsButtonObjects.concat(blockData);
        questionsId += 1;
    }
    return {questions: allQuestionsBlock, allInnerQuestionsButtonObjects: allInnerQuestionsButtonObjects}
}









//  add new elements
async function dialogAnswerButton({allInnerButtonObjects, allOthersDialogs, blockDetails, currentDescriptionId, fileContainer, itemData}){
    if(!allInnerButtonObjects) return false
    for(let button of allInnerButtonObjects){
        let addNewQuestion = (button.addNewQuestion)? document.querySelector('#' + button.addNewQuestion) : null;
        let removeDialog = (button.removeDialog)? document.querySelector('#' + button.removeDialog) : null;
        let addDialog = (button.addDialog)? document.querySelector('#' + button.addDialog) : null;
        let dialogActionField = (button.dialogActionField)? document.querySelector('#' + button.dialogActionField) : null;
        let dialogIdField = (button.dialogIdField)? document.querySelector('#' + button.dialogIdField) : null;
        let numberOfElements = (button.numberOfElements)? document.querySelector('#' + button.numberOfElements) : null;

        let textAreaSelector = (button.textAreaSelector)? document.querySelector('#' + button.textAreaSelector) : null;

        

        if(addNewQuestion){
            addNewQuestion.addEventListener('click', function() {
                let newDialogBlock = {
                    id: button.lastBlockId + 1,
                    text: "New dialog"
                }
                blockDetails.dialog.dialogAnswers[button.id].questions = blockDetails.dialog.dialogAnswers[button.id].questions.concat(newDialogBlock);
                itemData.parentNode.removeChild(itemData)
                //dialog.questions
                createDialogForm({
                    blockDetails: blockDetails,
                    currentDescriptionId: currentDescriptionId,
                    fileContainer: fileContainer
                })
            })
        }

        if(removeDialog){
            removeDialog.addEventListener('click', function() {
                blockDetails.dialog.dialogAnswers.splice(button.id, 1)
                itemData.parentNode.removeChild(itemData);
                createDialogForm({
                    blockDetails: blockDetails,
                    currentDescriptionId: currentDescriptionId,
                    fileContainer: fileContainer
                })
            })
        }

        if(addDialog){
            addDialog.addEventListener('click', function() {
                let newDialogBlock = {
                    id: button.lastBlockId + 1,
                    text: "New field",
                    action: "none",
                    questions: []
                }
                blockDetails.dialog.dialogAnswers = blockDetails.dialog.dialogAnswers.concat(newDialogBlock);
                itemData.parentNode.removeChild(itemData)

                createDialogForm({
                    blockDetails: blockDetails,
                    currentDescriptionId: currentDescriptionId,
                    fileContainer: fileContainer
                })
            })
        }

        if(textAreaSelector){
            textAreaSelector.addEventListener('change', function(){
                blockDetails.dialog.dialogAnswers[button.id].text = this.value;
            })
        }
        if(dialogActionField){
            dialogActionField.addEventListener('change', function(){
                blockDetails.dialog.dialogAnswers[button.id].action = this.value;
            })
        }
        if(dialogIdField){
            dialogIdField.addEventListener('change', function(){
                blockDetails.dialog.dialogAnswers[button.id].id = this.value;
            })
        }
        if(button.numberOfElements){
             console.log(button)
        }
        if(numberOfElements){
           
            numberOfElements.addEventListener('change', function(){
                
                blockDetails.dialog.dialogAnswers[button.id].numberOfRequireItems = this.value;
            })
        }

        /// save text
        //console.log(button.questionsData)
        if(button.questionsData){
            removeQuestions({
                questionsData: button.questionsData,
                allInnerButtonObjects: allInnerButtonObjects,
                allOthersDialogs: allOthersDialogs,
                blockDetails: blockDetails,
                currentDescriptionId: currentDescriptionId,
                fileContainer: fileContainer,
                itemData: itemData
            })
        }
    }
}












function removeQuestions({
    questionsData,
    allInnerButtonObjects,
    allOthersDialogs,
    blockDetails,
    currentDescriptionId,
    fileContainer,
    itemData
}){
    for(let answer of questionsData){  // removeQuestion
        let removeButton = document.querySelector("#" + answer.removeQuestion);
        let textAreaSelector = document.querySelector("#" + answer.textAreaSelector);
        let relatedQuestionId = document.querySelector("#" + answer.relatedQuestionId);

        
        removeButton.addEventListener('click', function(){
            blockDetails.dialog.dialogAnswers[answer.dialogId].questions.splice(answer.questionId, 1)
            itemData.parentNode.removeChild(itemData)
            createDialogForm({
                blockDetails: blockDetails,
                currentDescriptionId: currentDescriptionId,
                fileContainer: fileContainer
            })
        })


        if(textAreaSelector){
            textAreaSelector.addEventListener('change', function(){
                blockDetails.dialog.dialogAnswers[answer.dialogId].questions[answer.questionId].text = this.value;
            })
        }
        if(relatedQuestionId){
            
            relatedQuestionId.addEventListener('change', function(){
console.log(blockDetails.dialog.dialogAnswers[answer.dialogId].questions[answer.questionId].id, '|||')
                //console.log(blockDetails.dialog.dialogAnswers[answer.dialogId].questions[answer.questionId].id, this.value)
                blockDetails.dialog.dialogAnswers[answer.dialogId].questions[answer.questionId].id = this.value;
            })
        }
    }
}









async function createDialogForm ({blockDetails, currentDescriptionId, fileContainer}){
    let facePicture = (blockDetails.dialog.default.facePictureAbsolute)? blockDetails.dialog.default.facePictureAbsolute : __HOST +  blockDetails.dialog.default.facePicture;
      let  innerText = `<div id="main-dialog-wrapper">
            <h3>Dialog</h3>
            <p>Create Person dialog</p>
            <div>${(blockDetails.dialog.default.facePictureAbsolute)?'Picture is set' : 'You must save the picture first'}</div>
            <img width="100" id=${'dialog-face-picture-'+ currentDescriptionId}
            src="${facePicture}">

            <select id="preview-dialog-face" data-target='preview-dialog-face'>
                <option value="face-1.png" selected="selected">professor</option>
                <option value="face-3.png">old man</option>
                <option value="face-4.png">man 1</option>
                <option value="face-7.png">man 2</option>
                <option value="face-8.png">Officer</option>
                <option value="face-2.png">Soldier</option>
                <option value="face-5.png">Robot red</option>
                <option value="face-6.png">Yellow red</option>
            </select>

            <input id="npc-name" type="text" value="${
                (blockDetails.dialog.default.name)?
                blockDetails.dialog.default.name:
                'NPC name'
            }" placeholder="${(blockDetails.dialog.default.name)? blockDetails.dialog.default.name: 'NPC name'}">
            <button data-target='save-dialog-btn' class="main-btn">Save name and picture</button> <hr></div>
            <div class="all-others-dialogs" id="all-others-dialogs"></div>
            `;
            let itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'description-requireText-'+ currentDescriptionId
            })

            fileContainer.appendChild(itemData);


            let allOthersDialogs = document.querySelector("#all-others-dialogs");
            let mainDialogWrapper = document.querySelector("#main-dialog-wrapper");
            let otherDialogs = await createOtherDialog({ allDialogs: blockDetails.dialog.dialogAnswers});
            if(otherDialogs){
                await allOthersDialogs.appendChild(otherDialogs.dialogForm);
                await dialogAnswerButton({
                    allInnerButtonObjects: otherDialogs.allInnerButtonObjects,
                    allOthersDialogs: allOthersDialogs,
                    blockDetails: blockDetails,
                    currentDescriptionId: currentDescriptionId,
                    fileContainer: fileContainer,
                    itemData: itemData
                })
            }
}

export {
    createOtherDialog,
    dialogAnswerButton,
    createDialogForm
}