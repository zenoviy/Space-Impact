import { collisionDetector, moveAllScene, changeObjectModel } from '../redactor/blockInteractModule';
import { hideElement, showElement, previewOfBlock } from './preview';
import { blockCreator } from '../redactor/sidePanelActions';
import { openRedactorWindow } from '../redactor/blockDataRedactorModule';
import { miniMapper } from '../redactor/blockDataRedactorModule';
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


        if( mainObject.activeDescriptionFields ) return false
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
            case 77:
                miniMapper({ mainObject: mainObject })
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
                //console.log( block.index, " < Block index")
                openRedactorWindow({ blockData: block, mainObject: mainObject })
                changeObjectModel({ result: result, mainObject: mainObject})
                break
            }
        }
    })
    document.addEventListener('mousemove', (event) => {
        previewOfBlock({ selectedBlockPanelItem:  mainObject.selectedBlockPanelItem, event: event })
    })

    document.addEventListener('click', (event) => {

        let buttonId = event.target['dataset'].buttonId

        switch(buttonId){
            case 'redactorBlocks':
                renderItemsToSideList( { mainObject: mainObject, dataBase: mainObject.blockDatabase })
                break;
            case 'redactorDecoration':
                break;
            case 'redactorCharacters':
                renderItemsToSideList( { mainObject: mainObject, dataBase: mainObject.charactersDatabase })
                break;
            case 'redactorEnemy':
                break;
            default:
                return false
        }
    })
}







function renderItemsToSideList({ mainObject, dataBase }){
    var target: any = document.querySelector('#side-instrumental-panel');
    target.innerHTML = '';
    for(let blockItem of dataBase){
        let obj = blockCreator({
            tag: 'div',
            styleClass: 'single-block-item',
            innerContent: `<img width="100%" src='${ globalVariable.__HOST + blockItem['texture'] }'>`
        });

        obj.addEventListener('click', (event) => {
            sidePanelItemsSelectProcess({ mainObject: mainObject, blockItem: blockItem})
        })
        target.appendChild(obj)
    }
    target.prepend(createDestroyBlock({ mainObject: mainObject }))
}






function sidePanelItemsSelectProcess({ mainObject, blockItem }){
    if(mainObject.selectedBlockPanelItem){
        mainObject.selectedBlockPanelItem = (blockItem.id != mainObject.selectedBlockPanelItem.id)? blockItem : null;
    }else mainObject.selectedBlockPanelItem = blockItem;

    previewOfBlock({ selectedBlockPanelItem:  mainObject.selectedBlockPanelItem, event: event })
}







function createDestroyBlock({ mainObject }){
    let obj = document.createElement('div');
    obj.className = 'single-block-item';
    obj.innerHTML = `<img width="100%" src='${ globalVariable.__HOST + '/level-creator/assets/block/destroy.png' }'>`;
    obj.addEventListener('click', (event) => {
        sidePanelItemsSelectProcess({ mainObject: mainObject, blockItem: {
            id: 'destroyer',
            destroyer: true,
            texture: '/level-creator/assets/block/destroy.png'
        } })
    })
    return obj
}







function clearView(){
    if(!this.ctx) return false
    this.ctx.clearRect(0, 0, this.contextWidth, this.contextHeight)
}





function createBlockPicture({ mainObject }){
    if(!this.details) return false

    let img = new Image();
    img.src = globalVariable.__HOST + this.details.texture;
    mainObject.ctx.drawImage(img, 0, 0, this.width, this.height, this.xMove, this.yMove, this.width, this.height)
}


function createFrame({ mainObject }){
    if(!mainObject.ctx) return false
    mainObject.ctx.fillStyle = "rgba(225, 255, 255, .3)";
    mainObject.ctx.fillText(this.index, this.xMove + 5, this.yMove + 15)


    mainObject.ctx.strokeStyle = 'rgba(0,153,255,0.4)';

    mainObject.ctx.beginPath()
    mainObject.ctx.rect(this.xMove, this.yMove, this.width, this.height)
    mainObject.ctx.stroke()
    //mainObject.ctx.stroke()
}




export {
    initView,
    mapMoveControllers,
    clearView,
    createFrame,
    renderItemsToSideList,
    createBlockPicture
}