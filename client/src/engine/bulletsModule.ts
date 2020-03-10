import { createLaserBullet } from '../view/displayModules';

function createBullets(mainGameObject){
    createLaserBullet({
        source: this,
        objectOwner: this.objectOwner,
        ctx: mainGameObject.gameInitData.ctxActionField,
        x: this.x,
        y: this.y,
        color: this.bulletTexture,
        width: this.width,
        height: this.height,
        radius: 5,
        type: this.type,
        img: this.img,
        sx: this.sx, sy: this.sy, sWidth: this.sWidth, sHeight: this.sHeight
    })
}
function initBullets(){

}
function moveBullets(){
    if(this.objectOwner == "player") this.x  += this.bulletSpeed;
    else this.x  -= this.bulletSpeed;
}

export {
    createBullets,
    initBullets,
    moveBullets
}