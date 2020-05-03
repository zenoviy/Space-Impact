import * as globalVariable  from './globalVariables';
import { getData, postData } from '../server-requests/requestsModule';
import { hideElement, showElement } from '../ui/preview';
import { backToObject } from './initStartObject';
import { BlockConstructor } from  "../constructors/blockConstructor";
import { changeBlockArraySize } from './blockDataRedactorModule';


 function setMapSize({ mainObject, BlockConstructor }){
    let form = document.forms['map-size'];
    let errorField = document.querySelector('#map-size-error');

    let button = document.querySelector('#set-map-size');

    button.addEventListener('click', async function(){
        let formData = {};

        for(let field of form){
            if(field.name && field.value ){
                formData[field.name] = field.value;
            }if(field.name && !field.value)  return false
        }
        if(parseInt(formData['horizontalBlock']) < parseInt(mainObject.mapDefaultWidth) || parseInt(formData['verticalBlock']) < parseInt(mainObject.mapDefaultHeight)){
            errorField.innerHTML = `<p class='side-panel-error'>Map min size is ${mainObject.mapDefaultWidth} x ${mainObject.mapDefaultHeight}</p>`
            return false
        }else if(parseInt(formData['horizontalBlock']) > parseInt(mainObject.maxHorizontalBlocks) || parseInt(formData['verticalBlock']) > parseInt(mainObject.maxVerticalBlocks)){
            errorField.innerHTML = `<p class='side-panel-error'>Map max size is ${mainObject.maxHorizontalBlocks} x ${mainObject.maxVerticalBlocks}</p>`
            return false
        } else {
            errorField.innerHTML = await `<p class='side-panel-error'>Please wait map is build...</p>`;
            await changeBlockArraySize({ mainObject: mainObject, formData: formData, BlockConstructor: BlockConstructor })
            errorField.innerHTML = `<p class="side-panel-success">map size set ${formData['horizontalBlock']} x ${formData['verticalBlock']} blocks</p>`;
        }

    })

}


async function getMapData({ url, mainObject }){
    let res = await getData({
        url: url,
        method: 'GET',
        data: null,
        headers: null
    })

    let convertToObject = await res.allMapObjects.map(block => {
        return backToObject({ data: block, constructor: BlockConstructor})
    })

    mainObject.mapWidth = res.mapSize.width;
    mainObject.mapHeight = res.mapSize.height;

    let sizeForm = document.forms['map-size'];
    sizeForm.horizontalBlock.value = mainObject.mapWidth;
    sizeForm.verticalBlock.value = mainObject.mapHeight;

    console.log(sizeForm)
    mainObject.allRedactorBlock = convertToObject;
}






async function loadMap({ mainObject }){
    let openButton = document.querySelector("#openMap");
    let selectFiles = document.querySelector("#select-files");
    let fileContainer = document.querySelector("#inner-content");
    let closeDialog = document.querySelector("#closeDialog");

    openButton.addEventListener('click', async (event) => {
        showElement({ element: selectFiles })
        let mapFile = await getData({ url: globalVariable.__HOST + globalVariable.__MAP_DATA_URL,
            method: 'GET',
            data:  null,
            headers: null
        })
        generateContent({displayElement: fileContainer, data: mapFile, mainObject: mainObject, selectFiles: selectFiles})
    })
    closeDialog.addEventListener('click', () => {
        hideElement({ element: selectFiles })
    })
}








function generateContent({ displayElement, data, mainObject, selectFiles }){
    if(!data || !displayElement) return false

    displayElement.innerHTML = '';
    for(let file of data){
        let innerFile = blockCreator({ tag: 'div',
        styleClass: 'single-item-wrapper',
        innerContent: `<h2>${file.name}</h2>`
    });
        innerFile.addEventListener('click', function(){
            getMapData({
                url: file.link + '/' + file.name,
                mainObject: mainObject
            })
            hideElement({ element: selectFiles })
        })
        displayElement.appendChild(innerFile)
    }
}



function blockCreator({ tag, styleClass, innerContent}){
    let newBlock = document.createElement(tag);
    newBlock.className = styleClass;
    newBlock.innerHTML = innerContent;
    return newBlock
}




async function saveMap({ mainObject }){
    let form = document.forms['new-map'];
    let button = document.querySelector('#save-map-button');
    let messageField = document.querySelector('#save-map-error');
    messageField.innerHTML = '';

    button.addEventListener('click', async function(event){

        event.preventDefault()
        let resultForm = getFormData({ form: form });

        if(resultForm){
            resultForm['mapSize'] = {
                width: mainObject.mapWidth,
                height: mainObject.mapHeight
            }

            resultForm['creatingTime'] = new Date().getTime();
            resultForm['allMapObjects'] = mainObject.allRedactorBlock;

            console.log(resultForm, 'save', mainObject)
            let mapFile = await postData({ url: globalVariable.__HOST + globalVariable.__BLOC_CONSTRUCTOR_URL,
                method: 'POST',
                data: resultForm,
                headers: null})

            if(mapFile){
                messageField.innerHTML = `<a href=${ mapFile.url } onclick="(function(){ window.open('${ mapFile.url }')})()" target="_blank">Open in new window</a>`
            }
        }
    })

}


function getFormData({ form }){
    if(!form) return false
    let object = {};
    for(let formItems of form){
        if(formItems.name && formItems.value){
            object[formItems.name] = formItems.value;
        }else if(formItems.name && !formItems.value){
            return { message: "Incorrect Data", status: "reject"}
        }
    }
    return object
}

export{
    setMapSize,
    loadMap,
    saveMap,
    blockCreator
}