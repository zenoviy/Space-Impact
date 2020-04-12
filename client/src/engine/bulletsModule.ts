


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
        this.x += this.bulletSpeed;
        this.y += this.verticalSpeed;

    }
    function beam(){
        let screenData = gameObject.getScreenSize();

        if(this.x > 0){
            this.width += this.bulletSpeed * -1;
        }else if(this.width > 0){
            this.x = 0;
            this.width -= this.bulletSpeed * -1;
        }
    }
}

function bulletAngleCompensation({sector, sectorIndex, sectorIndex2, bulletSpeed}){
    let x = 0, y = 0;
    switch (sector){
        case 0:
            x = sectorIndex2 * bulletSpeed;
            y = sectorIndex * bulletSpeed;
            //res = '++'
            break;
        case 1:
            y = sectorIndex2 * bulletSpeed;
            x = (sectorIndex * bulletSpeed) * -1;
            //res = '-+'
            break;
        case 2:
            x = (sectorIndex2 * bulletSpeed) * -1;
            y = (sectorIndex * bulletSpeed) * -1;
            //res = '--'
            break;
        case 3:
            y = (sectorIndex2 * bulletSpeed) * -1;
            x = sectorIndex * bulletSpeed;
            //res = '+-'
            break;
        default:
            x = sectorIndex2 * bulletSpeed;
            y = sectorIndex * bulletSpeed;
            //res = false
    }
    return {x: x, y: y}
}
function bulletSpeed({bulletSpeed, angle}) {
    angle = (Math.sign(angle) > 0)? angle : 360 + angle
    let sector = Math.floor(angle/(90+1))
    let sectorIndex: any = parseFloat(((angle/(90))-sector).toFixed(2));
    let sectorIndex2 = 1 - sectorIndex;
    let angleCompensation = bulletAngleCompensation({
        sector: sector,
        sectorIndex: sectorIndex,
        sectorIndex2: sectorIndex2,
        bulletSpeed: bulletSpeed
    })
    let x = angleCompensation.x, y = angleCompensation.y;
    return { angle: angle, verticalSpeed: y, horizontalSpeed: x }
}

export {
    moveBullets,
    bulletSpeed
}