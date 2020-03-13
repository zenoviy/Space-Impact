import { createImage } from '../view/displayModules';
import { explosionFire } from '../engine/gameSideObjectsModule';
import * as costructors from '../constructors';

function placeEnemyes(mainGameObject){
    createImage(
        mainGameObject.gameInitData.ctxActionField,
        this.img,
        this.sx, this.sy,
        this.sWidth, this.sHeight,
        this.x, this.y,
        this.width,this.height)
}
function moveEnemyes(moveX: number, moveY: number = 0){
    this.x -= this.enemySpeed;
    this.y -= moveY;
}
function loadEnemyes(){         ///  need replace  and remove
    this.img = new Image();
    this.img.src = this.shipTexture;
}
function shoot(bulletConstructor, mainGameObject){
    if(mainGameObject.gameInitData.gamePause) return false;

    let randomShoot = mainGameObject.gameRandomizer( Math.pow(this.rapidFire, 2) );
    let shootProbability = mainGameObject.gameRandomizer( this.rapidFire );
    if(randomShoot < shootProbability){
       let guns = this.guns;
       for(let item of guns){
           let bullet = new bulletConstructor(
               this.x, this.y + item.firePosition,
               item.name, item.color,
               "enemy", item.speed + this.enemySpeed,
               item.width, item.height,
               item.damage, item.type, item.texture,
               item.sx, item.sy, item.sWidth, item.sHeight,
               item.explosionAnimation
               );
               bullet.img.src = bullet.texture;
               bullet.img.onload = () => {
                   mainGameObject.gameInitData.allGameBullets = mainGameObject.gameInitData.allGameBullets.concat(bullet)
               }
       }
    }
}
function enemyAnimation(state = true){
    this.detectFrame += 1;
    if(this.detectFrame % this.animationSteps == 0 && state){
        this.detectFrame = 0;
        this.sx += this.sWidth;
        if(this.sx >= this.picturesWidth){
            this.sx = 0;
        }
    }
}

function enemyDamageAnimation(){
    if(this.numberOfVerticalItems > 1){
        let damageAnimationPoint = this.originalHealthPoint/this.numberOfVerticalItems;
        let damagePoint = new Array(this.numberOfVerticalItems).fill(null)
        damagePoint = damagePoint.map((item, index) =>damageAnimationPoint*(index+1)).sort((a, b) => a - b).reverse();
        for(let i = 0; i < damagePoint.length; i++){
            if(this.healthPoint < damagePoint[i] && this.healthPoint > damagePoint[i+1] && damagePoint[i+1]){
                this.sy = this.sHeight*(i);
                break
            }else if(!damagePoint[i+1]){
                this.sy = this.sHeight * (this.numberOfVerticalItems - 1)
            }
        }
    }
}
// complex enemy animation for damage
function takeDamage(damage: number, hitObject, mainGameObject){
    if( this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
        this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "enemy"||
        this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "environment"
    ){
        explosionFire(this, mainGameObject, hitObject, costructors.SideObject)
        return this.objectPresent = false;
    }

    if( this.hasOwnProperty('healthPoint') &&  this.objectOwner == "enemy" && hitObject.objectOwner == "player"||
    this.hasOwnProperty('healthPoint') &&  this.objectOwner == "environment" && hitObject.objectOwner == "player"){
        unitDamage.call(this, null, mainGameObject);
        this.enemyDamageAnimation()
        if(this.healthPoint <= 0) {
            this.objectPresent = false; 
            explosionFire(this, mainGameObject, hitObject, costructors.SideObject);
        }
    }else if(this.hasOwnProperty('healthPoint') &&  this.objectOwner == "player" && hitObject.objectOwner == "enemy"){
        if(this.collisionAllow){
            unitDamage.call(this, mainGameObject.getLevelUserData(), mainGameObject)
        }
    }else return false

    function unitDamage(data, mainGameObject){

        this.healthPoint -= damage;
        if(this.healthPoint <= 0){
            if(data && data.life > 0){
                data.sourse.playerObject.numberOflife -= 1;
                if(data.sourse.playerObject.numberOflife <= 0){
                    mainGameObject.gameOverWindow()
                    mainGameObject.gameInitData.gameOver = true;
                    setTimeout(function(){
                        mainGameObject.backToStartScreen(costructors.PlayerShip)
                    }, 3000)
                }
                this.healthPoint = data.sourse.playerObject.maxHealth;
                return false
            }
            mainGameObject.collectPoints(this.pointsPerUnit)
            return this.objectPresent = false;
        }
    }
}
function hitDetection(object1, objectsArr, mainGameObject){
    let collision = null;
    for(let object2 of objectsArr){

        let object1Position = object1.getObjectPosition.call(object1);

        let xMin = Math.max( object1Position.x, object2.x );
        let yMin = Math.max( object1Position.y, object2.y );
        let xMax = Math.min( object1Position.x + (object1.width || object1Position.width), object2.x + object2.width );
        let yMax = Math.min( object1Position.y + (object1.height || object1Position.height), object2.y + object2.height);

        let resX = xMax - xMin;
        let resY = yMax - yMin;
        collision = (Math.sign(resX) < 0 || Math.sign(resY) < 0)? false : "collision";

        if(collision == "collision"){
            if(object1.takeDamage && object2.takeDamage){
                object1.takeDamage((object2.damage)? object2.damage: 0, object2, mainGameObject);
                object2.takeDamage((object1.damage)? object1.damage: 0, object1, mainGameObject);
            }
            break
        }
    }
    return (collision == "collision")? object1: false;
}

export  {
    placeEnemyes,
    moveEnemyes,
    loadEnemyes,
    shoot,
    enemyAnimation,
    hitDetection,
    takeDamage,
    enemyDamageAnimation
};