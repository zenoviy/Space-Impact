import { __HOST } from './globalVariables';


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

        innerText = `
        <h1>Block size</h1>
        <h3>Block width</h3>
            <p>Size of block width in pixels</p>
            <input type='number' min="1" max="200" id=${'width-property-'+ currentDescriptionId} value=${(target.width)? target.width : 0} />
            <button data-target='save-width-btn' class="main-btn">Save width</button>`
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'block-width-'+ currentDescriptionId
            })
            blockPreviewImage['width'] = target.width;
        fileContainer.appendChild(itemData);

        innerText = `
        <h3>Block height</h3>
            <p>Size of block height in pixels</p>
            <input type='number' min="1" max="200" id=${'height-property-'+ currentDescriptionId} value=${(target.height)? target.height : 0} />
            <button data-target='save-height-btn' class="main-btn">Save height</button>`
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'block-height-'+ currentDescriptionId
            })
            blockPreviewImage['height'] = target.height;
        fileContainer.appendChild(itemData);

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
            <p>A tips how to us this objects, it could be a part of some message</p>
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
            <p>Require message, display object needs for this block to everything work fine</p>
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
            innerText = `<h3>Contain Object</h3>
            <p>Object or data inside this object press 'E' button to collect \n exit  - special object to finish the level</p>
            <textarea type='text' id=${'contain-field-'+ currentDescriptionId} >${(blockDetails.rules.contain)? blockDetails.rules.contain : ''}</textarea>
            <img width="100" id=${'contain-picture-'+ currentDescriptionId}
            src="${__HOST + '/level-creator/assets/charactersObjects/inner-objects/' + localPicture}">
            <select id="preview-contain-object" data-target='select-preview-btn'>
                <option value="computer-data.png">Computer data</option>
                <option value="red-card.png">Red card</option>
                <option value="blue-card.png">Blue card</option>
                <option value="green-card.png">Green card</option>
                <option value="yellow-card.png">Yellow card</option>
                <option value="power-cell.png">Power Cell</option>
            </select>
            <button data-target='save-contain-btn' class="main-btn">Save</button> <hr>`;
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'description-requireText-'+ currentDescriptionId
            })
            fileContainer.appendChild(itemData);

    }
    if(blockDetails.innerObject){

    }
    if(blockDetails.type){

    }
    // change-size
    fileContainer.addEventListener('click', async function(event){
        //console.log('sdfd', event.target.dataset.target)
        let fieldName = '';
        let fieldResults: boolean;
        switch(event.target.dataset.target){
            case 'save-width-btn':
                fieldResults = await changeDataInBlock({
                    key: 'width',
                    fieldSelector: '#'+'width-property-'+ currentDescriptionId,
                    target: target
                })
                fieldName = (fieldResults)? 'width is set': ' save width field';
                blockPreviewImage['width'] = target.width;
                blockPreviewImage['height'] = target.height;
                break;
            case 'save-height-btn':
                fieldResults = await changeDataInBlock({
                        key: 'height',
                        fieldSelector: '#'+'height-property-'+ currentDescriptionId,
                        target: target
                })
                fieldName = (fieldResults)? 'width is set': ' save width field';
                blockPreviewImage['width'] = target.width;
                blockPreviewImage['height'] = target.height;
                break;
            case 'save-description-btn':
                fieldResults = await changeDataInBlock({
                    key: 'description',
                    fieldSelector: '#'+'description-field-'+ currentDescriptionId,
                    target: target.details
                })
                fieldName = (fieldResults)? 'description field': ' save description field';
                break;
            case 'save-tips-btn':
                fieldResults = await changeDataInBlock({
                    key: 'tips',
                    fieldSelector: '#'+'tips-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                fieldName = (fieldResults)? 'tips field': ' save tips field';
                break;
            case 'save-success-text-btn':
                fieldResults = await changeDataInBlock({
                    key: 'successText',
                    fieldSelector: '#'+'successText-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                fieldName = (fieldResults)? 'description field': ' save description field';
                break;
            case 'save-require-text-btn':
                fieldResults = await changeDataInBlock({
                    key: 'requireText',
                    fieldSelector: '#'+'requireText-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                fieldName = (fieldResults)? 'require text field': ' save require text field';
                break;
            case 'save-require-btn':
                fieldResults = await changeDataInBlock({
                    key: 'require',
                    fieldSelector: '#'+'require-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                fieldName = (fieldResults)? 'require field': ' save require field';
                break;
            case 'save-contain-btn':
                fieldResults = await changeDataInBlock({
                    key: 'contain',
                    fieldSelector: '#'+'contain-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                fieldName = (fieldResults)? 'contain object': ' save contain object';
                break;
            default:
                return false
        }
        blockAlertMessage.innerHTML = (fieldResults)? `<p class="side-panel-success" > Successfully saved '${fieldName}' </p>`: `<p class="side-panel-error" >There is a problem in '${fieldName}' i can't save</p>`;
    })
    fileContainer.addEventListener('change', async function(event){
        switch(event.target.dataset.target){
            case 'select-preview-btn':
                await changeDataInBlock({
                    key: 'objectPicture',
                    fieldSelector: '#preview-require-object',
                    target: target.details.rules
                })
                break;
            default:
                return false
        }
        let requiredPreviewPic = document.querySelector('#contain-picture-'+ currentDescriptionId);
        let pic = (target.details.rules.objectPicture)? target.details.rules.objectPicture : 'computer-data.png';
        let link = __HOST + '/level-creator/assets/charactersObjects/inner-objects/' + pic;
        console.log(pic, link)
        requiredPreviewPic['src'] = link; //computer-data.png
    })
}


async function changeDataInBlock({key, fieldSelector, target}){
    console.log(fieldSelector, 'selector',  target)
    let currentField = await document.querySelector(fieldSelector);

    target[key] = (currentField.value)? currentField.value : null;
    return (currentField.value && target[key] && key && fieldSelector)? true : false
}



function loadInnerData({fileContainer, target}){
    let blockDetails = target.details;
    let innerText = `<div class="block-description-wrapper">
    <img id="block-preview-image" width="200" src="${__HOST + blockDetails.texture}">
    <div id="block-alert-message"></div>
    <ul>
        <li>Name: ${ blockDetails.id }</li>
        <li>Index: ${ target.index }</li>
        <li>Type: ${ (blockDetails.type)? blockDetails.type : '' }</li>
        <li>width: ${ target.width }</li>
        <li>height: ${ target.height }</li>
        <li>X: ${ target.x }</li>
        <li>Y: ${ target.y }</li>
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