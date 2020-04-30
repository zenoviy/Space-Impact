
function updateMap({ mainGameObject }){   ///dynamicLevelsActive


    if( !mainGameObject.gameInitData.dynamicLevelsActive ) this.moveEnemyes()


    if(Math.sign(this.speed) > 0 && this.x + window.innerWidth < 0){
        this.x = window.innerWidth;
    }else if(Math.sign(this.speed) < 0 && this.x > window.innerWidth){
        this.x = 0 - window.innerWidth;
    }
}
function changePartOfTexture(mainGameObject, backgroundArray){
    let levelData = mainGameObject.getLevelUserData();
    let screenData = mainGameObject.getScreenSize();

    if(levelData.minutes <= this.timeToExtraMapMinutes
    && levelData.seconds <= this.timeToExtraMapSeconds
    && this.extraMap && this.x + 200 >= window.innerWidth){
        this.texture = __dirname + this.extraMap
        this.loadTexture();
    }
}


export {
    updateMap,
    changePartOfTexture
}