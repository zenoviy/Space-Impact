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
        sx: this.sx, sy: this.sy, sWidth: this.sWidth, sHeight: this.sHeight,
        imageWidth: this.imageWidth, imageHeight: this.imageHeight, animationSteps: this.animationSteps,
        numberOfItems: this.numberOfItems, numberOfVerticalItems: this.numberOfVerticalItems
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
        //console.log(this.bulletSpeed, this.verticalSpeed,'bs')
        this.x += this.bulletSpeed;
        this.y += this.verticalSpeed;
        /*if(this.objectOwner == "hangar"){
            this.x += this.bulletSpeed;
            this.x -= this.verticalSpeed;
        }
        if(this.objectOwner == "player") this.x  += this.bulletSpeed;
        else this.x  -= this.bulletSpeed;*/
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

function bulletSpeed({bulletSpeed, angle}) {
    //console.log(angle, '||')
    angle = (Math.sign(angle) > 0)? angle : 360 + angle
    let sector = Math.floor(angle/(90+1))
    let sectorIndex: any = parseFloat(((angle/(90))-sector).toFixed(2));
    let sectorIndex2 = 1 - sectorIndex;
       // console.log(angle, '<<')
    let x, y;
    let res;
    let transformAngle
    switch (sector){
        case 0:
            x = sectorIndex2 * bulletSpeed;
            y = sectorIndex * bulletSpeed;
            //angle = (Math.sign(angle) > 0)? angle: angle * -1;
            res = '++'
            break;
        case 1:
            y = sectorIndex2 * bulletSpeed;
            x = (sectorIndex * bulletSpeed) * -1;
            //angle = ((Math.sign(angle) > 0)? angle: angle * -1) + 90;
            res = '-+'
            break;
        case 2:
            x = (sectorIndex2 * bulletSpeed) * -1;
            y = (sectorIndex * bulletSpeed) * -1;
           // angle = ((Math.sign(angle) > 0)? angle: angle * -1) + 180;
            res = '--'
            break;
        case 3:
            y = (sectorIndex2 * bulletSpeed) * -1;
            x = sectorIndex * bulletSpeed;
            //angle = ((Math.sign(angle) > 0)? angle: angle * -1) + 270;
            res = '+-'
            break;
        default:
            res = false
    }
//console.log(res, x, y, angle, sectorIndex2, sectorIndex, bulletSpeed,  '<<')
    return { angle: angle, verticalSpeed: y, horizontalSpeed: x }
}

export {
    createBullets,
    initBullets,
    moveBullets,
    bulletSpeed
}