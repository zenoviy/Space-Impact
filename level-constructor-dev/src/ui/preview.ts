import * as globalVariable from '../redactor/globalVariables';

function previewOfBlock({ selectedBlockPanelItem, event }){

    let previewElement = document.querySelector('#selected-item');
    if(!selectedBlockPanelItem) hideElement({ element: previewElement })

    else {
        let itemImage = (selectedBlockPanelItem['previewTexture'])? selectedBlockPanelItem['previewTexture']: selectedBlockPanelItem['texture'];
        showElement({ element: previewElement })
        previewElement['style'] = `margin-top: ${ event.clientY + 10 }px; margin-left: ${ event.clientX + 10 }px;`;
        previewElement.innerHTML = `<img src=${ globalVariable.__HOST +  itemImage } >`
    }


}

function hideElement({ element }){
    if(!element) return false
    element.style = 'display: none';
}

function showElement({ element }){
    if(!element) return false
    element.style = 'display: block';
}


export {
    previewOfBlock,
    hideElement,
    showElement
}