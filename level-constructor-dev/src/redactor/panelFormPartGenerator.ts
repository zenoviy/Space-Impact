import { __HOST } from './globalVariables';


async function generateInput({fileContainer, target}){
    let blockDetails = target.details;
    let innerText, itemData;
    let currentDescriptionId = new Date().getTime();

/*
"collision": true,
        "texture": "/level-creator/assets/block/block-3.png",
        "isDestroy": false
*/
    if(blockDetails.description){
        innerText = `<h3>Description</h3>
        <textarea type='text' id=${'description-field-'+ currentDescriptionId} >${blockDetails.description}</textarea>
        <button data-target='save-description-btn'>Save</button> <hr>`
        itemData = elementCreator({
            tagname: "div",
            classList: 'single-block-description',
            innerText: innerText,
            idName: 'description-'+ currentDescriptionId
        })
        fileContainer.appendChild(itemData);
    }
    if(blockDetails.rules){
            // tips
            innerText = `<h3>Tips</h3>
            <p>A tips how to us this objects, it could be a part of some message</p>
            <textarea type='text' id=${'tips-field-'+ currentDescriptionId} >${(blockDetails.rules.tips)? blockDetails.rules.tips : ''}</textarea>
            <button data-target='save-tips-btn'>Save</button> <hr>`
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
            <button data-target='save-success-text-btn'>Save</button> <hr>`
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
            <button data-target='save-require-text-btn'>Save</button> <hr>`
            itemData = elementCreator({
                tagname: "div",
                classList: 'single-block-description',
                innerText: innerText,
                idName: 'description-requireText-'+ currentDescriptionId
            })
            fileContainer.appendChild(itemData);
            // require
            innerText = `<h3>Require</h3>
            <p>Require message, display object needs for this block to everything work fine</p>
            <textarea type='text' id=${'require-field-'+ currentDescriptionId} >${(blockDetails.rules.require)? blockDetails.rules.require : ''}</textarea>
            <button data-target='save-require-btn'>Save</button> <hr>`;
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
            innerText = `<h3>Contain</h3>
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
            <button data-target='save-contain-btn'>Save</button> <hr>`;
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
        switch(event.target.dataset.target){
            case 'save-description-btn':
                await changeDataInBlock({
                    key: 'description',
                    fieldSelector: '#'+'description-field-'+ currentDescriptionId,
                    target: target.details
                })
                break;
            case 'save-tips-btn':
                await changeDataInBlock({
                    key: 'tips',
                    fieldSelector: '#'+'tips-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                break;
            case 'save-success-text-btn':
                await changeDataInBlock({
                    key: 'successText',
                    fieldSelector: '#'+'successText-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                break;
            case 'save-require-text-btn':
                await changeDataInBlock({
                    key: 'requireText',
                    fieldSelector: '#'+'requireText-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                break;
            case 'save-require-btn':
                await changeDataInBlock({
                    key: 'require',
                    fieldSelector: '#'+'require-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                break;
            case 'save-contain-btn':
                await changeDataInBlock({
                    key: 'contain',
                    fieldSelector: '#'+'contain-field-'+ currentDescriptionId,
                    target: target.details.rules
                })
                break;
            default:
                return false
        }
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
}



function loadInnerData({fileContainer, target}){
    let blockDetails = target.details;
    let innerText = `<div class="block-description-wrapper">
    <img width="200" src="${__HOST + blockDetails.texture}">
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