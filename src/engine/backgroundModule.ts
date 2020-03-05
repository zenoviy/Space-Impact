import { createImage } from '../view/displayModules';

function updateMap(){
    let backgroundObject = this;
    this.x -= this.backgroundSpeed;
    if(this.x + this.screenData.width < 0){
        this.x = this.screenData.width;
    }
       createImage(backgroundObject.ctx,
            backgroundObject.img, backgroundObject.x, 0,
            backgroundObject.screenData.width+2,
            backgroundObject.screenData.height)
}


export {
    updateMap
}