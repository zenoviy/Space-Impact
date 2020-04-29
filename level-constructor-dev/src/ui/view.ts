import { collisionDetector, moveAllScene, changeObjectModel } from '../redactor/blockInteractModule';
import { hideElement, showElement, previewOfBlock } from './preview';
import * as globalVariable from '../redactor/globalVariables';


function initView(){
    const canvas: any = document.querySelector('#redactor-field');

    this.contextWidth = window.innerWidth;
    this.contextHeight = window.innerHeight;
    canvas.width = this.contextWidth;
    canvas.height = this.contextHeight;

    this.ctx = canvas.getContext('2d');
}
function mapMoveControllers({ mainObject }){
    document.addEventListener('keydown', function(event){
        let xMoveValue = 0, yMoveValue = 0;
        switch (event.keyCode){
            case 87:
                yMoveValue = mainObject.mapMoveSpeed;
                break
            case 68:
                xMoveValue = mainObject.mapMoveSpeed * -1;
                break
            case 83:
                yMoveValue = mainObject.mapMoveSpeed * -1;
                break
            case 65:
                xMoveValue = mainObject.mapMoveSpeed;
                break
            default:
                return false
        }

        moveAllScene({ mainObject: mainObject,  xMoveValue: xMoveValue, yMoveValue: yMoveValue})
    })
    document.addEventListener('click', function(event){
        event.preventDefault()
        let result = null;
        for( let block of mainObject.allRedactorBlock ){

            if(event.target['nodeName'] != 'CANVAS') continue
            result = collisionDetector({ object: block, target: {
                x: event.clientX - event.target['offsetLeft'],
                y: event.clientY - event.target['offsetTop'],
                width: 5,
                height: 5
            } })
            if(result){
                changeObjectModel({ result: result, mainObject: mainObject})
                break
            }
        }
    })
    document.addEventListener('mousemove', (event) => {
        previewOfBlock({ selectedBlockPanelItem:  mainObject.selectedBlockPanelItem, event: event })
    })
}


function renderItemsToSideList({ mainObject }){
    var target: any = document.querySelector('#side-instrumental-panel');
    for(let blockItem of this.blockDatabase){
        let obj = document.createElement('li');
        obj.className = 'single-block-item';
        obj.innerHTML = `<img width="100%" src='${ globalVariable.__HOST + blockItem['texture'] }'>`

        obj.addEventListener('click', (event) => {
            if(mainObject.selectedBlockPanelItem){
                mainObject.selectedBlockPanelItem = (blockItem.id != mainObject.selectedBlockPanelItem.id)? blockItem : null;
            }else mainObject.selectedBlockPanelItem = blockItem;

            previewOfBlock({ selectedBlockPanelItem:  mainObject.selectedBlockPanelItem, event: event })
        })
        target.appendChild(obj)
    }
}


function clearView(){
    if(!this.ctx) return false
    this.ctx.clearRect(0, 0, this.contextWidth, this.contextHeight)
}


function createBlockPicture({ mainObject }){
    if(!this.details) return false

    let img = new Image();
    img.src = globalVariable.__HOST + this.details.texture;

    //img.onload = () => {
         mainObject.ctx.drawImage(img, 0, 0, this.width, this.height, this.xMove, this.yMove, this.width, this.height)
    //}
}


function createFrame({ mainObject }){
    if(!mainObject.ctx) return false
    mainObject.ctx.strokeStyle = 'rgba(0,153,255,0.4)';

    mainObject.ctx.beginPath()
    mainObject.ctx.rect(this.xMove, this.yMove, this.width, this.height)
    mainObject.ctx.stroke()
    mainObject.ctx.stroke()
}




export {
    initView,
    mapMoveControllers,
    clearView,
    createFrame,
    renderItemsToSideList,
    createBlockPicture
}