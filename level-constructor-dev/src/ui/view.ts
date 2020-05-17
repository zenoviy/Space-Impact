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
        //let copyOfblock = Object.assign({}, block)
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
                renderItemsToSideList( { mainObject: mainObject, dataBase: mainObject.blockDatabase, selectItem: null })
                break;
            case 'redactorDecoration':
                renderItemsToSideList( { mainObject: mainObject, dataBase: mainObject.backgroundDatabase, selectItem: buttonId })
                break;
            case 'redactorCharacters':
                renderItemsToSideList( { mainObject: mainObject, dataBase: mainObject.charactersDatabase, selectItem: null })
                break;
            case 'redactorEnemy':
                renderItemsToSideList( { mainObject: mainObject, dataBase: mainObject.enemyDatabase, selectItem: null })
               // console.log('enemy')  enemyDatabase
                break;
            default:
                return false
        }
    })
}







function renderItemsToSideList({ mainObject, dataBase, selectItem }){
    var target: any = document.querySelector('#side-instrumental-panel');
    target.innerHTML = '';

    console.log(dataBase)
    for(let blockItem of dataBase){
        //console.log(blockItem)
        let copyOfBlockData = Object.assign({}, blockItem)
        let itemImage = (copyOfBlockData['previewTexture'])? copyOfBlockData['previewTexture']: copyOfBlockData['texture'];
        let obj = blockCreator({
            tag: 'div',
            styleClass: 'single-block-item',
            innerContent: `<img width="100%" title="${(copyOfBlockData.details)? copyOfBlockData.details.description : copyOfBlockData.description}" src='${ globalVariable.__HOST + itemImage }'>`
        });

        obj.addEventListener('click', (event) => {
            sidePanelItemsSelectProcess({ mainObject: mainObject, blockItem: copyOfBlockData})
        })
        target.appendChild(obj)
    }
    target.prepend(createDestroyBlock({ mainObject: mainObject, selectItem: selectItem }))
}






function sidePanelItemsSelectProcess({ mainObject, blockItem }){
    //console.log(blockItem)
    let copyOfblockItem = Object.assign({}, blockItem)
    if(mainObject.selectedBlockPanelItem){
        mainObject.selectedBlockPanelItem = (copyOfblockItem.id != mainObject.selectedBlockPanelItem.id)? copyOfblockItem : null;
    }else mainObject.selectedBlockPanelItem = copyOfblockItem;

    previewOfBlock({ selectedBlockPanelItem:  mainObject.selectedBlockPanelItem, event: event })
}







function createDestroyBlock({ mainObject, selectItem }){
    let obj = document.createElement('div');
    obj.className = 'single-block-item';
    obj.innerHTML = `<img title="${(selectItem === "redactorDecoration")? 'Delete only background': 'Delete block item'}" width="100%" src='${ globalVariable.__HOST + '/level-creator/assets/block/destroy.png' }'>`;
    obj.addEventListener('click', (event) => {
        sidePanelItemsSelectProcess({ mainObject: mainObject, blockItem: {
            id: 'destroyer',
            destroyer: (selectItem)? selectItem :'destroyer',
            texture: '/level-creator/assets/block/destroy.png'
        } })
    })
    return obj
}







function clearView(){
    if(!this.ctx) return false
    this.ctx.clearRect(0, 0, this.contextWidth, this.contextHeight)
}




async function backgroundRender({ mainObject }){
    if(!this.details) return false

    if(this.backgroundTexture){
        let imgBackground = new Image();
        imgBackground.src = globalVariable.__HOST + this.backgroundTexture.texture;

        let sx = (this.backgroundTexture.sx)? this.backgroundTexture.sx: 0;
        let sy = (this.backgroundTexture.sy)? this.backgroundTexture.sy: 0;
        await mainObject.ctx.drawImage(imgBackground, sx, sy,
            this.backgroundTexture.sWidth,
            this.backgroundTexture.sHeight,
            this.xMove,
            this.yMove,
            this.backgroundTexture.width,
            this.backgroundTexture.height)
        //console.log(this.backgroundTexture)
    }
}

async function createBlockPicture({ mainObject }){
    if(!this.details) return false
    //mainObject.ctx.save(); // sWidth
    let img = new Image();
    img.src = globalVariable.__HOST + this.details.texture;

    let sWidth = (this.details.sWidth)? this.details.sWidth: this.details.imageWidth;
    let sHeight = (this.details.sHeight)? this.details.sHeight: this.details.imageHeight;

    let sx = (this.details.sx)? this.details.sx: 0;
    let sy = (this.details.sy)? this.details.sy: 0;
    //.details.sx
    await mainObject.ctx.drawImage(img, sx, sy,
        sWidth,
        sHeight,
        this.xMove + parseInt(this.blockRelativeXPos),
        this.yMove + parseInt(this.blockRelativeYPos),
        this.width,
        this.height)
   // mainObject.ctx.restore()


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
    createBlockPicture,
    backgroundRender,
}