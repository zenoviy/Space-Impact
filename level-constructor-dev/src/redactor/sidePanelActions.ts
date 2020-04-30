import * as globalVariable  from './globalVariables';
import { getData, postData } from '../server-requests/requestsModule';
import { hideElement, showElement } from '../ui/preview';
import { backToObject } from './initStartObject';
import { BlockConstructor } from  "../constructors/blockConstructor";


function setMapSize(){

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
    mainObject.allRedactorBlock = convertToObject;
}

function replaceMap({ mainObject, data}){
    if(!data) return false

    mainObject.allRedactorBlock = data
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
            resultForm['allMapObjects'] = mainObject.allRedactorBlock;
            let mapFile = await postData({ url: globalVariable.__HOST + globalVariable.__BLOC_CONSTRUCTOR_URL,
                method: 'POST',
                data: resultForm,
                headers: null})

            if(mapFile){
                messageField.innerHTML = `<a href=${ mapFile.url     } target="_blank">download</a>`
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