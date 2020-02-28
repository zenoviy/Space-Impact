var { viewModules } = require('../view/displayModules');

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
function takeDamage(damage: number = 0){
    if( this.hasOwnProperty('bulletType') ){
        return this.objectPresent = false;
    }
    if(  this.hasOwnProperty('healthPoint') ){
        this.healthPoint -= damage;
        if(this.healthPoint <= 0){
            return this.objectPresent = false;
        }
    }else{
        return console.log('no Object')
    }
}
function hitDetection(object1, objectsArr){
    for(let object2 of objectsArr){
        let object1Position = object1.getObjectPosition();
        var xMin = Math.max( object1Position.x, object2.x );
        var yMin = Math.max( object1Position.y, object2.y );
        var xMax = Math.min( object1Position.x + object1Position.width, object2.x + object2.width );
        var yMax = Math.min( object1Position.y + object1.height, object2.y + object2.height);

        let resX = xMax - xMin;
        let resY = yMax - yMin;
        let collision = (Math.sign(resX) < 0 || Math.sign(resY) < 0)? false : "collision";

        if(collision == "collision"){
            object1.takeDamage((object2.damage)? object2.damage: 0);
            object2.takeDamage((object1.damage)? object1.damage: 0);
            break
        }
    }
}
module.exports.enemiesModel = {
    placeEnemyes: placeEnemyes,
    moveEnemyes: moveEnemyes,
    loadEnemyes: loadEnemyes,
    shoot: shoot,
    enemyAnimation: enemyAnimation,
    hitDetection: hitDetection,
    takeDamage: takeDamage
};