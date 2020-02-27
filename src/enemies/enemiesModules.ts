
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
        this.width,
        this.height)
}
function moveEnemyes(moveX: number, moveY: number){
    this.x -= this.enemySpeed;
    //this.y += moveX;
}
function loadEnemyes(){
    this.img = new Image();
    this.img.src = this.shipTexture;
}
function shoot(){

}
function enemyAnimation(){
    
}
module.exports.enemiesModel = {
    placeEnemyes: placeEnemyes,
    moveEnemyes: moveEnemyes,
    loadEnemyes: loadEnemyes,
    shoot: shoot
};