

function placeEnemyes(){

}
function moveEnemyes(moveX: number, moveY: number){
    this.x += moveX;
    this.y += moveX;
}
function loadEnemyes(){
    
}
function shoot(){

}
module.exports.enemiesModel = {
    placeEnemyes: placeEnemyes,
    moveEnemyes: moveEnemyes,
    loadEnemyes: loadEnemyes,
    shoot: shoot
};