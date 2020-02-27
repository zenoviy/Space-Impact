var {viewModules} = require('../view/displayModules');

function placeEnemyes(mainGameObject){

    viewModules.createImage(
        mainGameObject.gameInitData.ctxActionField,
        this.img,
        this.sx,
        this.sy,
        this.sWidth,
        this.sHeight,
        this.x,
        this.y,
        this.shipWidth,
        this.shipHeight)
}
function moveEnemyes(moveX: number, moveY: number = 0){
    this.x -= this.enemySpeed;
    this.y -= moveY;
}
function loadEnemyes(){
    this.img = new Image();
    this.img.src = this.shipTexture;
}
function shoot(){

}
function enemyAnimation(){
    this.detectFrame += 1;
    if(this.detectFrame % this.animationSteps == 0){
        this.detectFrame = 0;
        this.sx += this.sWidth;
        if(this.sx >= this.picturesWidth){
            this.sx = 0;
        }
    }
}
function hitDetection(){
    
}
module.exports.enemiesModel = {
    placeEnemyes: placeEnemyes,
    moveEnemyes: moveEnemyes,
    loadEnemyes: loadEnemyes,
    shoot: shoot,
    enemyAnimation: enemyAnimation
};