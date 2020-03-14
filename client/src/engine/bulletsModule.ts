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
function moveBullets( playerShipData, gameObject ){
    switch (this.type){
        case "blaster":
            move.call(this)
            break
        case "beam":
            beam.call(this);
            move.call(this);
            break
        default:
            move.call(this)
    }

    function move(){
        if(this.objectOwner == "player") this.x  += this.bulletSpeed;
        else this.x  -= this.bulletSpeed;
    }
    function beam(){
        let screenData = gameObject.getScreenSize();

        if(this.x > 0){
            this.width += this.bulletSpeed
        }else if(this.width > 0){
            this.x = 0;
            this.width -= this.bulletSpeed
        }

    }
}

export {
    createBullets,
    initBullets,
    moveBullets
}