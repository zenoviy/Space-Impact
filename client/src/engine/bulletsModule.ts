import { explosionFire } from "./gameSideObjectsModule";
import { findAngleToShip, findCloseObject } from './gameSideObjectsModule';
import { objectIntersectionDetect } from '../enemies/enemiesModules';
import * as constructors from '../constructors/';




function createRocketSmock({ mainGameObject }){
    if(Math.floor(this.x) % 3 === 0){
        explosionFire({
            targetData: this,
            mainGameObject: mainGameObject,
            hitObject: this,
            SideObject: constructors.SideObject,
            explosion: "smoke"
        })
    }
}

function moveBullets( playerShipData, mainGameObject ){
    switch (this.type){
        case "blaster":
            move.call(this)
            break
        case "beam":
            beam.call(this);
            move.call(this);
            break
        case "rocket":
            createRocketSmock.call(this, { mainGameObject: mainGameObject })
            move.call(this);
            break
        case "homing_rocket":
            this.lastSpeed = (!this.lastSpeed)? this.bulletSpeed : this.lastSpeed;
            createRocketSmock.call(this, { mainGameObject: mainGameObject })
            move.call(this);
            let allGameEnemies = mainGameObject.gameInitData.allGameEnemies;
            if(allGameEnemies.length < 0) return false
            let closestUnit = findCloseObject.call(this, {allGameEnemies: allGameEnemies})

            if(!closestUnit) return false
            let angle = findAngleToShip.call(this, { closestUnit: closestUnit })
            this.degree = (angle)? angle : this.degree;
            let rocketSpeed = bulletSpeed({bulletSpeed: this.lastSpeed, angle: angle});
            this.verticalSpeed = rocketSpeed.verticalSpeed;
            this.bulletSpeed = rocketSpeed.horizontalSpeed;

            break
        case "nuclear_blast":
            nuclearBlastExpended.call(this)
            blastDestroyBullets.call(this, { mainGameObject: mainGameObject })
            break
        case "defence_shield":
            shieldActivity.call(this, { mainGameObject: mainGameObject })
            blastDestroyBullets.call(this, { mainGameObject: mainGameObject })
            break
        default:
            move.call(this)
    }
    function shieldActivity({ mainGameObject }){
        let playerObject = mainGameObject.gameInitData.gameData.playerObject;
        this.x = playerObject.x - 30;
        this.y = playerObject.y - 30;
        this.width = playerObject.width + 60;
        this.height = playerObject.height + 60;


        this.shieldTiming = (!this.shieldTiming)? 1 : this.shieldTiming + 1;
        if( this.shieldTiming % 1000 == 0) this.objectPresent = false;
    }

    function nuclearBlastExpended(){
        this.x -= this.bulletSpeed/2;
        this.y -= this.bulletSpeed/2;
        this.width += this.bulletSpeed;
        this.height += this.bulletSpeed;/**/
    }
    function blastDestroyBullets({ mainGameObject }){
        let bulletsArr = mainGameObject.gameInitData.allGameBullets;
        if(!bulletsArr) return false
        for(let bullet of bulletsArr){
           let collision = objectIntersectionDetect({ object: this, target: bullet})

           if(collision && bullet.type != "nuclear_blast" &&
            collision && bullet.type != "defence_shield" &&
            collision && bullet.type != "homing_rocket" &&
            collision && bullet.type != "rocket" &&
            collision && bullet.objectOwner != "player" && bullet.type != "defence_shield")  bullet.objectPresent = false;
        }
    }

    function move(){
        this.x += this.bulletSpeed;
        this.y += this.verticalSpeed;

    }
    function beam(){
        if(this.x > -500){
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