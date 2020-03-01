var { viewModules } = require('../view/displayModules');

function createBullets(mainGameObject){
    viewModules.createLaserBullet({
        ctx: mainGameObject.gameInitData.ctxActionField,
        x: this.x,
        y: this.y,
        color: this.bulletTexture,
        width: this.width,
        height: this.height,
        radius: 5
    })
}
function placeBullets(){

}
function moveBullets(){
    if(this.objectOwner == "player"){
        this.x  += this.bulletSpeed;
    }else{
        this.x  -= this.bulletSpeed;
    }
}

module.exports.bulletsModule = {
    createBullets: createBullets,
    placeBullets: placeBullets,
    moveBullets: moveBullets
}