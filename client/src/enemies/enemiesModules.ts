import * as costructors from '../constructors/index';
import { createImage } from '../view/displayModules';
import { explosionFire } from '../engine/gameSideObjectsModule';
import { loadGrabbleToSideObject } from '../engine/gameGrappleObjectsModule';
import { initSoundObject } from '../engine/soundModules';


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
    this.x -= this.speed;
    this.y -= moveY;
}




function loadEnemyes(){         ///  need replace  and remove
    this.img = new Image();
    this.img.src = this.shipTexture;
}



function shot(BulletConstruct, mainGameObject, SoundCreator){
    if(mainGameObject.gameInitData.gamePause || !this.isShot) return false;
    let guns = this.guns;
    for(let item of guns){
        if( 1 > mainGameObject.gameRandomizer( item.fireRepead )){
            let context = this;
            let bullet = new BulletConstruct({
                x: context.x, y: context.y + ((item.firePosition)? item.firePosition : mainGameObject.gameRandomizer(context.height)),
                bulletType: item.name, bulletTexture: item.color,
                objectOwner: "enemy", bulletSpeed: item.speed + this.speed,
                width: item.width, height: item.height,
                damage: item.damage, type: item.type, texture: item.texture,
                sx: item.sx, sy: item.sy, sWidth: item.sWidth, sHeight: item.sHeight,
                explosion: item.explosionAnimation, imageWidth: item.imageWidth, imageHeight: item.imageHeight,
                animationSteps: item.animationSteps, numberOfItems: item.numberOfItems, numberOfVerticalItems: item.numberOfVerticalItems,
                sound: item.sound
            });
            bullet.img.src = bullet.texture;
            //console.log("enemy shoot")

            let soundProps = {
                soundUrl: bullet.sound.levelSound,
                soundLoop: bullet.sound.soundLoop,
            }
            bullet.sound.soundObject = initSoundObject({SoundCreator: SoundCreator, mainGameObject: mainGameObject, soundProps: soundProps})
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
function takeDamage(damage: number, hitObject, mainGameObject, GrappleObject){
    /* Bullet hit detection */
    if(this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
    this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "enemy"||
    this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "environment" && hitObject.hasOwnProperty('healthPoint')||
    this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "environment" && hitObject.hasOwnProperty('healthPoint')||
    this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "collide" && hitObject.hasOwnProperty('healthPoint')||
    this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "collide" && hitObject.hasOwnProperty('healthPoint')
    ){
        explosionFire(this, mainGameObject, hitObject, costructors.SideObject, "explosion")
        this.objectPresent = false; return
    }

    /* Game grapple object hit detection */
    if(this.objectPresent && this.objectOwner == "grappleObject" &&
    hitObject.objectOwner == "player" &&
    !hitObject.hasOwnProperty('bulletType')){
        this.objectPresent = false;
        mainGameObject.gameInitData.grappleObjectOnScreen = false;
        explosionFire(this, mainGameObject, hitObject, costructors.SideObject, "explosion");
        this[this.grapplePower.methodName]({allGameSideObjects: mainGameObject, playerShipData: hitObject, mainGameObject: mainGameObject})
    }

    /* Hit det dection collision */
    if(this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "collide" && hitObject.objectOwner == "player" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "collide" && hitObject.objectOwner == "enemy" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "enemy" && hitObject.objectOwner == "collide" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "environment" && hitObject.objectOwner == "player" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "environment" && hitObject.objectOwner == "enemy"
     ){
        unitDamage.call(this, null, mainGameObject);
        this.enemyDamageAnimation()
        if(this.healthPoint <= 0) {

            this.objectPresent = false;
            //collideExplosionAnimation
            explosionFire(this, mainGameObject, hitObject, costructors.SideObject, "collideExplosionAnimation");
            explosionFire(this, mainGameObject, hitObject, costructors.SideObject, "explosion");

            /// load coins
            if(this.spawnCoin) this.spawnCoin(mainGameObject, costructors.GrappleObject);
            if(this.isBoss) bossEnemyDestruction()
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

    function bossEnemyDestruction(){
        mainGameObject.gameInitData.levelChange = true;
    }
}


function spawnCoin(mainGameObject, GrappleObject){
    if(this.hasOwnProperty('extraObjects')){
        for(let coin of this.extraObjects){
            coin.x = this.x;
            coin.y = this.y;
            loadGrabbleToSideObject.call(this, mainGameObject, coin, GrappleObject)
        }
    }
}


function hitDetection(object1, objectsArr, mainGameObject, GrappleObject){
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
                object1.takeDamage((object2.damage)? object2.damage: 0, object2, mainGameObject, GrappleObject);
                object2.takeDamage((object1.damage)? object1.damage: 0, object1, mainGameObject, GrappleObject);
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
    shot,
    enemyAnimation,
    hitDetection,
    takeDamage,
    enemyDamageAnimation,
    spawnCoin
};