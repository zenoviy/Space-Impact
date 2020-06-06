
function updateMap({ mainGameObject }){
    if( !mainGameObject.gameInitData.dynamicLevelsActive || this.alwaysMove ) this.moveEnemyes()

    if(Math.sign(this.speed) > 0 && this.x + window.innerWidth < 0){
        this.x = window.innerWidth;
    }else if(Math.sign(this.speed) < 0 && this.x > window.innerWidth){
        this.x = 0 - window.innerWidth;
    }

}
function changePartOfTexture(mainGameObject, backgroundArray){
    let levelData = mainGameObject.getLevelUserData();

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