import { __HOST } from './globalVariables';
import { createOtherDialog, dialogAnswerButton, createDialogForm } from './dialogFormModule';

async function generateInput({fileContainer, target}){
    let blockDetails = target.details;
    let innerText, itemData;
    let currentDescriptionId = new Date().getTime();
    let blockAlertMessage = document.querySelector('#block-alert-message');
    let blockPreviewImage = document.querySelector('#block-preview-image');

/*
"collision": true,
        "texture": "/level-creator/assets/block/block-3.png",
        "isDestroy": false
*/


    /*  ==============================    Blocks settings & Parameters  ===================== */
    if(blockDetails.renderType){
        innerText = `
        <h1>Block size</h1>
        <h3>Block width</h3>
            <p>Size of block width in pixels</p>
            <input type='number' min="1" id=${'width-property-'+ currentDescriptionId} value=${(target.width)? target.width : 0} />
            <button data-target='save-width-btn' class="main-btn">Save width</button>

            <h3>Block height</h3>
            <p>Size of block height in pixels</p>
            <input type='number' min="1" id=${'height-property-'+ currentDescriptionId} value=${(target.height)? target.height : 0} />
            <button data-target='save-height-btn' class="main-btn">Save height</button>
            `
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'block-width-'+ currentDescriptionId
            })
            blockPreviewImage['width'] = target.width;
        fileContainer.appendChild(itemData);




        innerText = `
            <h1>Block Position</h1>
            <h3>Block X</h3>
            <p>X position of block</p>
            <input type='number' min="-50" max="50" id=${'x-pos-property-'+ currentDescriptionId} value=${(target.blockRelativeXPos)? target.blockRelativeXPos : 0} />
            <button data-target='save-x-pos-btn' class="main-btn">Save X Position</button>

            <h3>Block Y</h3>
            <p>Y position of block</p>
            <input type='number' min="-50" max="50" id=${'y-pos-property-'+ currentDescriptionId} value=${(target.blockRelativeYPos)? target.blockRelativeYPos : 0} />
            <button data-target='save-y-pos-btn' class="main-btn">Save Y Position</button>
            `
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'block-x-pos-'+ currentDescriptionId
            })
            blockPreviewImage['height'] = target.height;
        fileContainer.appendChild(itemData);

        console.log(blockDetails)
    }else{
        innerText = `
        <h1>Block size</h1>
        <h3>Block width</h3>
            <p>Size of block width in pixels</p>
            <input type='number' min="1" max="200" id=${'width-property-'+ currentDescriptionId} value=${(target.width)? target.width : 0} />
            <button data-target='save-width-btn' class="main-btn">Save width</button>

            <h3>Block height</h3>
            <p>Size of block height in pixels</p>
            <input type='number' min="1" max="200" id=${'height-property-'+ currentDescriptionId} value=${(target.height)? target.height : 0} />
            <button data-target='save-height-btn' class="main-btn">Save height</button>
            `
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'block-width-'+ currentDescriptionId
            })
            blockPreviewImage['width'] = target.width;
        fileContainer.appendChild(itemData);




        innerText = `
            <h1>Block Position</h1>
            <h3>Block X</h3>
            <p>X position of block</p>
            <input type='number' min="-50" max="50" id=${'x-pos-property-'+ currentDescriptionId} value=${(target.blockRelativeXPos)? target.blockRelativeXPos : 0} />
            <button data-target='save-x-pos-btn' class="main-btn">Save X Position</button>

            <h3>Block Y</h3>
            <p>Y position of block</p>
            <input type='number' min="-50" max="50" id=${'y-pos-property-'+ currentDescriptionId} value=${(target.blockRelativeYPos)? target.blockRelativeYPos : 0} />
            <button data-target='save-y-pos-btn' class="main-btn">Save Y Position</button>
            `
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'block-x-pos-'+ currentDescriptionId
            })
            blockPreviewImage['height'] = target.height;
        fileContainer.appendChild(itemData);

        console.log(blockDetails)
    }
        
    if(blockDetails.type === 'elevator'){
        innerText = `
        <h1>Elevator range</h1>
        <input id="elevator-range-${currentDescriptionId}" type="number" min="100" value=${blockDetails.valueOfMove}>
        <button data-target='save-elevator-range-btn' class="main-btn">Save Elevator Range</button>`
        itemData = elementCreator({
            tagname: "div",
            classList: 'single-block-description',
            innerText: innerText,
            idName: ''
        })
        fileContainer.appendChild(itemData);
    }

    /*  ==============================    Description  ===================== */
    if(blockDetails.description){
        innerText = `<h3>Description</h3>
        <textarea type='text' id=${'description-field-'+ currentDescriptionId} >${blockDetails.description}</textarea>
        <button data-target='save-description-btn' class="main-btn">Save Description</button> <hr>`
        itemData = elementCreator({
            tagname: "div",
            classList: 'single-block-description',
            innerText: innerText,
            idName: 'description-'+ currentDescriptionId
        })
        fileContainer.appendChild(itemData);
    }

    /*  ==============================    rulers & tips  ===================== */
    if(blockDetails.rules){
            // tips
            innerText = `<h3>Tips</h3>
            <p>A tips how to us this objects, it could be a part of some message, "Use *  to start new line"</p>
            <textarea type='text' id=${'tips-field-'+ currentDescriptionId} >${(blockDetails.rules.tips)? blockDetails.rules.tips : ''}</textarea>
            <button data-target='save-tips-btn' class="main-btn">Save Tips</button> <hr>`
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'description-tips-'+ currentDescriptionId
            })
            fileContainer.appendChild(itemData);
            // successText
            innerText = `<h3>Success Text</h3>
            <p>Display a message when you do everything write: collect date/key, bring data/key </p>
            <textarea type='text' id=${'successText-field-'+ currentDescriptionId} >${(blockDetails.rules.successText)? blockDetails.rules.successText : ''}</textarea>
            <button data-target='save-success-text-btn' class="main-btn">Save Text</button> <hr>`
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'description-successText-'+ currentDescriptionId
            })
            fileContainer.appendChild(itemData);

            // requireText
            innerText = `<h3>Require Text</h3>
            <p>Display a message describe some Requirement for this object to work</p>
            <textarea type='text' id=${'requireText-field-'+ currentDescriptionId} >${(blockDetails.rules.requireText)? blockDetails.rules.requireText : ''}</textarea>
            <button data-target='save-require-text-btn' class="main-btn">Save Require Text</button> <hr>`
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'description-requireText-'+ currentDescriptionId
            })
            fileContainer.appendChild(itemData);
            // require
            innerText = `<h3>Require Object</h3>
            <p>Require message, display object needs for this block to everything work fine
            <span>computer_data</span>
            <span>blue_card</span>
            <span>green_card</span>
            <span>yellow_card</span>
            <span>red_card</span>
            <span>power_cell</span>
            <span>enemy_helmet</span>
            <span>enemy_details</span>
            <span>med_kit</span>
            <span>laptop_with_data</span>
            <span>tools_case</span>
            <span>access_card</span>
            <span>enemy_gun</span>
            <span>plane_key</span>
            <span>special_access</span>
            <span>data_card</span>
            <span>blue_crystal</span>
            <span>red_crystal</span>
            <span>green_crystal</span>
            <span>yellow_crystal</span>
            <span>electric_details</span>
            <span>power_cube</span>
            <span>power_cube</span>
            <span>access_badge</span>
            <span>ammunition</span>
            <span>server_data</span>
            </p>
            <textarea type='text' id=${'require-field-'+ currentDescriptionId} >${(blockDetails.rules.require)? blockDetails.rules.require : ''}</textarea>
            <button data-target='save-require-btn' class="main-btn">Save Require Object</button> <hr>`;
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'description-requireText-'+ currentDescriptionId
            })
            fileContainer.appendChild(itemData);
    /**/
            // innerObject

            // contain
            let localPicture = (blockDetails.rules.objectPicture)? blockDetails.rules.objectPicture : 'computer-data.png';
            let mainPicture = (blockDetails.rules.objectPicture)? blockDetails.rules.objectPicture: __HOST + '/level-creator/assets/charactersObjects/inner-objects/' + localPicture;
            innerText = `<h3>Contain Object</h3>
            <p>Object or data inside this object press 'E' button to collect \n exit  - special object to finish the level
            <span>computer_data</span>
            <span>blue_card</span>
            <span>green_card</span>
            <span>yellow_card</span>
            <span>red_card</span>
            <span>exit</span>  exit  - end the level
            <span>power_cell</span>
            <span>enemy_helmet</span>
            <span>enemy_details</span>
            <span>med_kit</span>
            <span>laptop_with_data</span>
            <span>tools_case</span>
            <span>access_card</span>
            <span>enemy_gun</span>
            <span>plane_key</span>
            <span>special_access</span>
            <span>data_card</span>
            <span>blue_crystal</span>
            <span>red_crystal</span>
            <span>green_crystal</span>
            <span>yellow_crystal</span>
            <span>electric_details</span>
            <span>power_cube</span>
            <span>power_cube</span>
            <span>access_badge</span>
            <span>ammunition</span>
            <span>server_data</span>
            </p>

            <textarea type='text' id=${'contain-field-'+ currentDescriptionId} >${(blockDetails.rules.contain)? blockDetails.rules.contain : ''}</textarea>
            <img width="100" id=${'contain-picture-'+ currentDescriptionId}
            src="${mainPicture}">
            <select id="preview-contain-object" data-target='select-preview-btn'>
                <option value="computer-data.png">Computer data</option>
                <option value="red-card.png">Red card</option>
                <option value="blue-card.png">Blue card</option>
                <option value="green-card.png">Green card</option>
                <option value="yellow-card.png">Yellow card</option>
                <option value="power-cell.png">Power Cell</option>
                <option value="med-kit.png">Med kit</option>
                <option value="laptop.png">Laptop case</option>
                <option value="tools-case.png">Tools case</option>
                <option value="Enemy-head.png">Enemy helmet A</option>
                <option value="enemy-details.png">Enemy detail 1</option>
                <option value="Access-card.png">Acess card</option>
                <option value="enemy-guns.png">Enemy gun</option>
                <option value="plane-key.png">Plane key</option>
                <option value="importent-data.png">Importent data</option>
                <option value="cube.png">space box 1</option>
                <option value="black-box-1.png">box 2</option>
                <option value="black-box-2.png">box 3</option>
                <option value="access-2.png">access card 2</option>
                <option value="blue-crystal.png">blue crystal</option>
                <option value="red-crystal.png">red crystal</option>
                <option value="green-crystal.png">green crystal</option>
                <option value="yellow-crystal.png">yellow crystal</option>
                <option value="block_details.png">Details</option>
            </select>
            <button data-target='save-contain-btn' class="main-btn">Save</button> <hr>`;
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'description-requireText-'+ currentDescriptionId
            })
            fileContainer.appendChild(itemData);


           if(blockDetails.rules.targetId){
            innerText = `<h3>Teleport settings</h3>
            <p>Set teleport target and id</p>
            <lable>
                <p>Id of this door side</p>
                <input id="teleport-set-id-${currentDescriptionId}" type="number" min="1" value=${blockDetails.rules.doorId}>
            </lable>
            <lable>
                <p>Id of target door side</p>
                <input id="teleport-target-set-id-${currentDescriptionId}" type="number" min="1" value=${blockDetails.rules.targetId}>
            </lable>
            <button data-target='save-door-settings-btn' class="main-btn">Save teleport door data</button> <hr>`
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'teleport-settings-'+ currentDescriptionId
            })
            fileContainer.appendChild(itemData);
           }
    }
    if(blockDetails.type === "npc_spawner" || blockDetails.type === "enemy_spawner"){
        innerText = `<h3>NPC default behavior</h3>
        <p>Set Scenario name</p>
        <span>destroy</span>
        <span>find</span>
        <span>stand</span>
        <span>static</span>
        <lable>
            <textarea id="npc-behavior-id-${currentDescriptionId}"  min="3">${(target.details.behavior)? target.details.behavior: ''}</textarea>
        </lable>

        <button data-target='save-npc-behavior-btn' class="main-btn">Save behavior</button> <hr>`
        itemData = elementCreator({
            tagname: "div",
            classList: 'single-block-description',
            innerText: innerText,
            idName: 'behavior-settings-'+ currentDescriptionId
        })
        fileContainer.appendChild(itemData);
    }
    if(blockDetails.dialog){
        innerText = `<h3>Task to Jornal</h3>
        <p>Enter default task text that have been added to ship journal</p>
        <lable>
            <textarea id="npc-journal-task-id-${currentDescriptionId}"  min="3">${(target.details.dialog.default.journalTask)? target.details.dialog.default.journalTask: ''}</textarea>
        </lable>
        <lable>
            <p>Default dialog when require object is set and add to journal</p>
            <input id="default-request-dialog-id-${currentDescriptionId}" type="number" value="${(target.details.defaultRequestDialogId)? target.details.defaultRequestDialogId : 0}">
        </lable>
        <lable>
            <p>Default dialog when task was completed</p>
            <input id="default-success-dialog-id-${currentDescriptionId}" type="number" value="${(target.details.defaultSuccessDialogId)? target.details.defaultSuccessDialogId : 0}">
        </lable>

        <button data-target='save-npc-journal-task-btn' class="main-btn">Save journal task</button> <hr>`
        itemData = elementCreator({
            tagname: "div",
            classList: 'single-block-description',
            innerText: innerText,
            idName: 'journal-task-'+ currentDescriptionId
        })
        fileContainer.appendChild(itemData);
        await createDialogForm({blockDetails: blockDetails, currentDescriptionId: currentDescriptionId, fileContainer: fileContainer})
    }
    if(blockDetails.innerObject){
        //console.log('inner object')
    }
    if(blockDetails.type === "scenario_object"){
        innerText = `<h3>Scenario object name</h3>
            <p>Set Scenario name</p>
            <lable>
                <p>Name</p>
                <textarea id="scenario-object-name-id-${currentDescriptionId}"  min="3">${blockDetails.objectName}</textarea>
            </lable>

            <button data-target='save-scenario-object-name-btn' class="main-btn">Save object name</button> <hr>`;
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'object-name-'+ currentDescriptionId
            })
            fileContainer.appendChild(itemData);
    }
    if(blockDetails.spawnSeconds){
        innerText = `<h3>Scenario object name</h3>
            <p>Set Scenario name</p>
            <lable>
                <p>Spawn Seconds</p>
                <input type="number" id="spawn-seconds-id-${currentDescriptionId}"  min="1" value=${(blockDetails.spawnSeconds)? blockDetails.spawnSeconds : 0} >
            </lable>
            <lable>
                <p>Max Number Of Items</p>
                <input type="number" id="next-number-of-items-id-${currentDescriptionId}"  min="1" value=${(blockDetails.maxNumberOfItem)? blockDetails.maxNumberOfItem : 0} >
            </lable>
            <button data-target='save-object-spawn-data-btn' class="main-btn">Save spawn data</button> <hr>`;

            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'object-spawn-'+ currentDescriptionId
            })
            fileContainer.appendChild(itemData);
    }

    if(blockDetails.spawnerHiddenId){
        innerText = `<h3>Set target spawner id</h3>
        <lable>
            <p>id of hidden spawner</p>
            <input type="number" id="hidden-spawner-id-${currentDescriptionId}"  min="1" value=${(blockDetails.spawnerHiddenId)? blockDetails.spawnerHiddenId : 1} >
        </lable>
        <button data-target='save-hidden-spawn-id-btn' class="main-btn">Save spawn hidden id</button> <hr>`;
        itemData = elementCreator({
            tagname: "div",
            classList: 'single-block-description',
            innerText: innerText,
            idName: 'object-spawn-'+ currentDescriptionId
        })
        fileContainer.appendChild(itemData);
    }
    if(blockDetails.targetSpawnerId){
        innerText = `<h3>Set spawn hidden id</h3>
        <p>1, 2, 3 ....</p>
        <lable>
            <p>array of all target hidden spawner id</p>
            <input type="text" id="target-hidden-spawner-id-${currentDescriptionId}"  min="1" value=${(blockDetails.targetSpawnerId)? blockDetails.targetSpawnerId : '1, 2'} >
        </lable>
        <button data-target='save-target-hidden-spawn-id-btn' class="main-btn">Save hidden spawner data</button> <hr>`;
        itemData = elementCreator({
            tagname: "div",
            classList: 'single-block-description',
            innerText: innerText,
            idName: 'object-spawn-'+ currentDescriptionId
        })
        fileContainer.appendChild(itemData);
    }

    fileContainer.addEventListener('click', async function(event){

        let fieldName = '';
        let fieldResults: boolean;
        switch(event.target.dataset.target){ // save-elevator-range-btn
            case 'save-elevator-range-btn':
                fieldResults = await changeDataInBlock({
                    key: 'valueOfMove',
                    fieldSelector: '#elevator-range-'+ currentDescriptionId,
                    target: target.details
                })
                fieldName = (fieldResults)? 'width is set': ' save width field';
                blockPreviewImage['width'] = target.width;
                blockPreviewImage['height'] = target.height;
                break;
            case 'save-width-btn':
                fieldResults = await changeDataInBlock({
                    key: 'width',
                    fieldSelector: '#width-property-'+ currentDescriptionId,
                    target: target
                })
                fieldName = (fieldResults)? 'width is set': ' save width field';
                blockPreviewImage['width'] = target.width;
                blockPreviewImage['height'] = target.height;
                break;
            case 'save-height-btn':
                fieldResults = await changeDataInBlock({
                        key: 'height',
                        fieldSelector: '#height-property-'+ currentDescriptionId,
                        target: target
                })
                fieldName = (fieldResults)? 'width is set': ' save width field';
                blockPreviewImage['width'] = target.width;
                blockPreviewImage['height'] = target.height;
                break;

            case 'save-x-pos-btn':
                fieldResults = await changeDataInBlock({
                    key: 'blockRelativeXPos',
                    fieldSelector: '#x-pos-property-'+ currentDescriptionId,
                    target: target
                })
                fieldName = (fieldResults)? 'width is set': ' save width field';
                console.log(target)
                break;

            case 'save-y-pos-btn':
                    fieldResults = await changeDataInBlock({
                        key: 'blockRelativeYPos',
                        fieldSelector: '#y-pos-property-'+ currentDescriptionId,
                        target: target
                    })
                    fieldName = (fieldResults)? 'width is set': ' save width field';
                    console.log(target)
                    break;
            case 'save-description-btn':
                fieldResults = await changeDataInBlock({
                    key: 'description',
                    fieldSelector: '#description-field-'+ currentDescriptionId,
                    target: target.details
                })
                fieldName = (fieldResults)? 'description field': ' save description field';
                break;
            case 'save-tips-btn':
                fieldResults = await changeDataInBlock({
                    key: 'tips',
                    fieldSelector: '#tips-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                fieldName = (fieldResults)? 'tips field': ' save tips field';
                break;
            case 'save-success-text-btn':
                fieldResults = await changeDataInBlock({
                    key: 'successText',
                    fieldSelector: '#successText-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                fieldName = (fieldResults)? 'description field': ' save description field';
                break;
            case 'save-require-text-btn':
                fieldResults = await changeDataInBlock({
                    key: 'requireText',
                    fieldSelector: '#requireText-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                fieldName = (fieldResults)? 'require text field': ' save require text field';
                break;
            case 'save-require-btn':
                fieldResults = await changeDataInBlock({
                    key: 'require',
                    fieldSelector: '#require-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                fieldName = (fieldResults)? 'require field': ' save require field';
                break;
            case 'save-contain-btn':
                fieldResults = await changeDataInBlock({
                    key: 'contain',
                    fieldSelector: '#contain-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                fieldName = (fieldResults)? 'contain object': ' save contain object';
                break;
            case 'save-npc-behavior-btn':
                fieldResults = await changeDataInBlock({
                    key: 'behavior',
                    fieldSelector: '#npc-behavior-id-'+ currentDescriptionId,
                    target: target.details
                })
                fieldName = (fieldResults)? 'contain object': ' save contain object';
                break;
            case 'save-npc-journal-task-btn':
                fieldResults = await changeDataInBlock({
                    key: 'journalTask',
                    fieldSelector: '#npc-journal-task-id-'+ currentDescriptionId,
                    target: target.details.dialog.default
                })
                // default-request-dialog-id-

                fieldResults = await changeDataInBlock({
                    key: 'defaultRequestDialogId',
                    fieldSelector: '#default-request-dialog-id-'+ currentDescriptionId,
                    target: target.details
                })
                fieldResults = await changeDataInBlock({
                    key: 'defaultSuccessDialogId',
                    fieldSelector: '#default-success-dialog-id-'+ currentDescriptionId,
                    target: target.details
                })
                fieldName = (fieldResults)? 'contain object': ' save contain object';
                break;
            case 'save-dialog-btn':
                fieldResults = await changeDataInBlock({
                    key: 'contain',
                    fieldSelector: '#contain-field-'+ currentDescriptionId,
                    target: target.details.dialog.default
                })
                fieldResults = await changeDataInBlock({
                    key: 'name',
                    fieldSelector: '#npc-name',
                    target: target.details.dialog.default
                })

                fieldName = (fieldResults)? 'contain object': ' save contain object';
                break;
            case 'save-door-settings-btn':
                fieldResults = await changeDataInBlock({
                    key: 'doorId',
                    fieldSelector: '#teleport-set-id-'+ currentDescriptionId,
                    target: target.details.rules
                })
                fieldResults = await changeDataInBlock({
                    key: 'targetId',
                    fieldSelector: '#teleport-target-set-id-'+ currentDescriptionId,
                    target: target.details.rules
                })
                break;
            case 'save-scenario-object-name-btn':
                fieldResults = await changeDataInBlock({
                    key: 'objectName',
                    fieldSelector: '#scenario-object-name-id-'+ currentDescriptionId,
                    target: target.details
                })
                break;
            case 'save-object-spawn-data-btn':
                fieldResults = await changeDataInBlock({
                    key: 'spawnSeconds',
                    fieldSelector: '#spawn-seconds-id-'+ currentDescriptionId,
                    target: target.details
                })
                fieldResults = await changeDataInBlock({
                    key: 'maxNumberOfItem',
                    fieldSelector: '#next-number-of-items-id-'+ currentDescriptionId,
                    target: target.details
                })
                break;
            case 'save-hidden-spawn-id-btn':
                fieldResults = await changeDataInBlock({
                    key: 'spawnerHiddenId',
                    fieldSelector: '#hidden-spawner-id-' + currentDescriptionId,
                    target: target.details
                })
                break;
            case 'save-target-hidden-spawn-id-btn':
                fieldResults = await changeDataInBlock({
                    key: 'targetSpawnerId',
                    fieldSelector: '#target-hidden-spawner-id-' + currentDescriptionId,
                    target: target.details
                })
                break;
            default:
                return false
        }
        blockAlertMessage.innerHTML = (fieldResults)? `<p class="side-panel-success" > Successfully saved '${fieldName}' </p>`: `<p class="side-panel-error" >There is a problem in '${fieldName}' i can't save</p>`;
    })
    fileContainer.addEventListener('click', async function(event){
        switch(event.target.dataset.target){
            case 'select-preview-btn':
                await changeDataInBlock({
                    key: 'objectPicture',
                    fieldSelector: '#preview-require-object',
                    target: target.details.rules
                })

                let dataCheck = document.querySelector('#preview-contain-object')['value']
                let requiredPreviewPic = document.querySelector('#contain-picture-'+ currentDescriptionId);
                let pic = (target.details.rules.objectPicture)? target.details.rules.objectPicture : 'computer-data.png';
                let link = __HOST + '/level-creator/assets/charactersObjects/inner-objects/' + dataCheck;

                //target.details.rules.objectPicture = link;
                target.details.rules.objectPicture = await createBase64EncodingPicture({pictureLink: link, targetObject: target.details.rules.objectPicture})
                requiredPreviewPic['src'] = target.details.rules.objectPicture;// link; //computer-data.png
                break;
            case 'preview-dialog-face':

                let dataFace = document.querySelector('#preview-dialog-face')['value'];
                let faceLink = __HOST + '/level-creator/assets/enemyObject/avatar/' + dataFace;
                
                blockDetails.dialog.default.facePictureAbsolute = await createBase64EncodingPicture({pictureLink: faceLink, targetObject: blockDetails.dialog.default.facePictureAbsolute})

                let picture = document.querySelector('#dialog-face-picture-'+ currentDescriptionId);
                picture['src'] = blockDetails.dialog.default.facePictureAbsolute;
                break;
            default:
                return false
        }
        let dataCheck = document.querySelector('#preview-contain-object')['value']
        let requiredPreviewPic = document.querySelector('#contain-picture-'+ currentDescriptionId);
        let pic = (target.details.rules.objectPicture)? target.details.rules.objectPicture : 'computer-data.png';
        let link = __HOST + '/level-creator/assets/charactersObjects/inner-objects/' + dataCheck;

        target.details.rules.objectPicture = await createBase64EncodingPicture({pictureLink: link, targetObject: target.details.rules.objectPicture});
        //console.log(target)
        requiredPreviewPic['src'] = target.details.rules.objectPicture; //computer-data.png
    })

}



async function createBase64EncodingPicture({pictureLink, targetObject}){
    if(!pictureLink) return false

    return new Promise(function(response, reject){
        let canvas = document.createElement('canvas');
        canvas.width = 59;
        canvas.height = 58;
        let ctx = canvas.getContext('2d');
        let img = new Image();
        img.src = pictureLink;

        img.onload = async() =>{
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
            var dataURL = await canvas.toDataURL();

            let getPictureBase = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
            let pictureBaseUrl = 'data:image/png;base64,' + getPictureBase;
                //console.log(pictureBaseUrl)
            targetObject = pictureBaseUrl;
            return response(targetObject)
        }

    }).then(response => {
        //console.log(response)
        return response
    }, reject => {
        console.error('Cant rebase')
    })
    
}






async function changeDataInBlock({key, fieldSelector, target}){
    let blockAlertMessage = document.querySelector('#block-alert-message');
    //console.log(fieldSelector, 'selector',  target)
    let currentField = await document.querySelector(fieldSelector);
    if(!currentField) return false
    if(!currentField.validity.valid){
        blockAlertMessage.innerHTML = `Invalid Value of ${key}`;
        return false
    }
    target[key] = (currentField.value)? currentField.value : null;
    return (currentField.value && target[key] && key && fieldSelector)? true : false
}












function loadInnerData({fileContainer, target}){
    let blockDetails = target.details;
    let itemBackgroundImage = (blockDetails['previewTexture'])? blockDetails['previewTexture']: blockDetails['texture'];  // previewTexture
    itemBackgroundImage = (target.backgroundTexture && blockDetails['previewTexture'])? target.backgroundTexture['previewTexture'] :
    (target.backgroundTexture)? target.backgroundTexture.texture : blockDetails['texture'];

    let itemImage = (blockDetails['previewTexture'])? blockDetails['previewTexture']: blockDetails['texture'];



    console.log(target.backgroundTexture, blockDetails['previewTexture'], blockDetails['texture'], itemBackgroundImage)



    let backgroundImage = (target.backgroundTexture)? `<img width="50" src="${__HOST + itemBackgroundImage}" alt="${target.backgroundTexture.id}">`:"";
    let innerText = `<div class="block-description-wrapper">
    <div class="material-preview-wrapper">
        <img id="block-preview-image" width="200" src="${__HOST + itemImage}">
    </div>

    <ul><div id="block-alert-message"></div>
        <li>Name: ${ blockDetails.id }</li>
        <li>Index: ${ target.index }</li>
        <li>Type: ${ (blockDetails.type)? blockDetails.type : '' }</li>
        <li>width: ${ target.width }</li>
        <li>height: ${ target.height }</li>
        <li>X: ${ target.x }</li>
        <li>Y: ${ target.y }</li>

    <p>${(target.backgroundTexture)? "Background texture" : ""}</p>
    ${backgroundImage}
    </ul></div><hr>`;
    let itemData = elementCreator({
        tagname: "div",
        classList: 'single-block-description',
        innerText: innerText,
        idName: null
    })
    fileContainer.appendChild(itemData)
}




function elementCreator({tagname, classList, innerText, idName}){
    let newDocument = document.createElement(tagname);
    newDocument.className = (classList)? classList: false;
    newDocument.innerHTML = innerText;
    if(idName) newDocument.setAttribute("id", idName)

    return newDocument
}
export{
    elementCreator,
    generateInput,
    loadInnerData
}