import { createImage } from '../view/displayModules';

function updateMap(){
    let backgroundObject = this;
    this.x -= this.backgroundSpeed;
    if(Math.sign(this.backgroundSpeed) > 0 && this.x + this.screenData.width < 0){
        this.x = this.screenData.width;
    }else if(Math.sign(this.backgroundSpeed) < 0 && this.x > this.screenData.width){
        this.x = 0 - this.screenData.width;
    }
       createImage(backgroundObject.ctx,
            backgroundObject.img, backgroundObject.x, 0,
            backgroundObject.screenData.width + 2,
            backgroundObject.screenData.height)
}
function changePartOfTexture(mainGameObject, backgroundArray){
    let levelData = mainGameObject.getLevelUserData();
    let screenData = mainGameObject.getScreenSize();

    if(levelData.minutes <= this.timeToExtraMapMinutes
    && levelData.seconds <= this.timeToExtraMapSeconds
    && this.extraMap && this.x >= screenData.width - 200){
        let info = mainGameObject.showGameInfo();
        this.img.src = __dirname + this.extraMap;
    }
}


export {
    updateMap,
    changePartOfTexture
}