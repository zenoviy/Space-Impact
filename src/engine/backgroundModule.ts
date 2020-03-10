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
function changePartOfTexture(mainGameObject, backgroundArray){
    let levelData = mainGameObject.getLevelUserData();
    let screenData = mainGameObject.getScreenSize();
    //console.log(levelData.minutes, levelData.seconds, this.timeToExtraMapMinutes, this.timeToExtraMapSeconds)
    if(levelData.minutes <= this.timeToExtraMapMinutes
    && levelData.seconds <= this.timeToExtraMapSeconds
    && this.extraMap && this.x >= screenData.width - 200){
        //alert(1)
        let info = mainGameObject.showGameInfo();
        this.img.src = info.imageDirrection + this.extraMap;
    }
}


export {
    updateMap,
    changePartOfTexture
}