import * as costructors from '../constructors/index';
import { createImage } from '../view/displayModules';
import { explosionFire } from '../engine/gameSideObjectsModule';
import { loadGrabbleToSideObject } from '../engine/gameGrappleObjectsModule';
import { initSoundObject } from '../engine/soundModules';
import { levelTimer } from '../engine';
import { enterToTheShopDialog } from '../ui/shop/gameShopModule';
import { angleFinder } from '../engine/engineModules';
import { horizontalVerticalSearch} from '../engine/gameModules/changeLevels';

function drawcircle({ctx, x, y, width, height, color}){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, width/2, 0, 2 * Math.PI);

    ctx.fill();
}

async function placeEnemyes(mainGameObject){

    mainGameObject.gameInitData.ctxActionField.save();



    // (targetData.objectOwner === 'player')?

    let translateIndexAdjustX = await (this.degree < 180)? (this.width/180)*this.degree: (this.width/180)*(360 - this.degree);
    let translateIndexAdjustY = await (this.degree < 180)? (this.height/180)*this.degree: (this.height/180)*(360 - this.degree);
    translateIndexAdjustX = (translateIndexAdjustX && this.objectNameFlag === "bullet")? translateIndexAdjustX: 0;
    translateIndexAdjustY = (translateIndexAdjustY && this.objectNameFlag === "bullet")? translateIndexAdjustY: 0;
    
    
    /*   // Development assets
    mainGameObject.gameInitData.ctxActionField.fillStyle = 'rgba(41, 201, 7, .2)';
    mainGameObject.gameInitData.ctxActionField.fillRect(this.x, this.y, this.width, this.height)
    if(this.objectNameFlag != "bullet"){
        drawcircle({
            ctx: mainGameObject.gameInitData.ctxActionField,
            x: this.x + this.width/2,
            y: this.y + this.height/2,
            width: this.height,
            height: this.height,
            color: 'rgba(201, 97, 28, .4)'
        })
    }*/


    mainGameObject.gameInitData.ctxActionField.translate(this.x + translateIndexAdjustX, this.y + translateIndexAdjustY);
    mainGameObject.gameInitData.ctxActionField.rotate( ((this.degree)? this.degree: 0 ) * Math.PI / 180);

    createImage(
        mainGameObject.gameInitData.ctxActionField,
        this.img,
        this.sx, this.sy,
        this.sWidth, this.sHeight,
        0, 0,
        this.width,this.height)
    mainGameObject.gameInitData.ctxActionField.restore();
}
function placeBackground(){
    createImage(
        this.ctx,
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







function shot(BulletConstruct, mainGameObject, SoundCreator, owner){
    if(mainGameObject.gameInitData.gamePause || !this.isShot) return false;

    let guns = (this.guns)? this.guns : this.data.guns;
 
    for(let item of guns){
        if(!item || item.type ==='object') continue
        if( 1 > mainGameObject.gameRandomizer( item.fireRepead ) || owner == 'player' && item){


            let angle = (item.defaultAngle)?
            (item.defaultAngle.isRandom)?
            mainGameObject.gameRandomizer(item.defaultAngle.max - item.defaultAngle.min, item.defaultAngle.min): item.defaultAngle.angle
            : this.shotAngle;


            //console.log(angle, item.defaultAngle)
            let context = this;
            let bulletSettings = this.bulletSpeed({bulletSpeed: item.speed,
                angle: angle});
            let totalSpeed = (Math.sign(bulletSettings.horizontalSpeed) > 0)? this.speed : this.speed * -1;
            let firePositionX = (item.firePositionX)? item.firePositionX: 0

            let yFirePosition = null;
            let bullet = new BulletConstruct({
                x: context.x + firePositionX, y: context.y + ((item.firePosition)? item.firePosition : mainGameObject.gameRandomizer(context.height)),
                bulletType: item.name, bulletTexture: item.color,
                objectOwner: owner, bulletSpeed: (owner === 'enemy' || owner === 'hangar')? bulletSettings.horizontalSpeed + totalSpeed : (owner == 'player')? bulletSettings.horizontalSpeed + context.xAdj : bulletSettings.horizontalSpeed,
                width: item.width, height: item.height,
                damage: item.damage, type: item.type, texture: item.texture,
                sx: item.sx, sy: item.sy, sWidth: item.sWidth, sHeight: item.sHeight,
                explosion: item.explosionAnimation, imageWidth: item.imageWidth, imageHeight: item.imageHeight,
                animationSteps: item.animationSteps, numberOfItems: item.numberOfItems, numberOfVerticalItems: item.numberOfVerticalItems,
                sound: item.sound, verticalSpeed: (bulletSettings.verticalSpeed)? bulletSettings.verticalSpeed: 0,
                degree: (bulletSettings.angle)? bulletSettings.angle: 0, hitBox: (bulletSettings.hitBox)? bulletSettings.hitBox : null
            });
            let soundProps = {
                soundUrl: bullet.sound.levelSound,
                soundLoop: bullet.sound.soundLoop,
            }
            bullet.loadTexture()
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
        if(Math.round(this.sx) >= this.picturesWidth){
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
    this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "hangar" ||
    this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "hangar" && hitObject.objectOwner == "enemy" ||
    this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "hangarbullet" ||
    this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "hangarbullet" && hitObject.objectOwner == "enemy" ||
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

    if(this.objectPresent && this.objectOwner == "hangar" &&
    hitObject.objectOwner == "player" &&
    !hitObject.hasOwnProperty('bulletType') && !mainGameObject.gameInitData.shopActive &&
    mainGameObject.gameInitData.tradeShipTimeToUndock <= 0 ){
        mainGameObject.gameInitData.tradeShipTimeToUndock = 10;
        enterToTheShopDialog({mainGameObject: mainGameObject, tradePropertyes: this.tradePropertyes})
    }


    /* Hit det dection collision */
    if(this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') && this.objectOwner == "enemy" && hitObject.objectOwner == "hangarbullet" ||
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
        if(this.collisionAllow && !mainGameObject.gameInitData.shopActive){
            unitDamage.call(this, mainGameObject.getLevelUserData(), mainGameObject)
        }
    }else return false

    function unitDamage(data, mainGameObject){

        this.healthPoint -= damage;
        if(this.healthPoint <= 0){
            if(data && data.life > 0){
                data.source.playerObject.numberOflife -= 1;
                if(data.source.playerObject.numberOflife <= 0){
                    mainGameObject.gameOverWindow()
                    mainGameObject.gameInitData.gameOver = true;
                    mainGameObject.mapSoundChanger({soundStatus:'game_over_screen'})
                    setTimeout(function(){
                        mainGameObject.backToStartScreen(costructors.PlayerShip)
                    }, 3000)
                }
                this.healthPoint = data.source.playerObject.maxHealth;
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


function objectIntersectionDetect({object, target}){

    let objectX = (object.hitBox)? object.x + object.hitBox.offsetLeft : object.x;
    let objectY = (object.hitBox)? object.y + object.hitBox.offsetTop : object.y;
    let objectWidth = (object.hitBox)? objectX + object.hitBox.width : object.x + object.width;
    let objectHeight = (object.hitBox)? objectY +object.hitBox.height : object.y + object.height;

 
    let targetX = (target.hitBox)? target.x + target.hitBox.offsetLeft : target.x;
    let targetY = (target.hitBox)? target.y + target.hitBox.offsetTop : target.y;
    let targetWidth = (target.hitBox)? targetX + target.hitBox.width : target.x + target.width;
    let targetHeight = (target.hitBox)? targetY +target.hitBox.height : target.y + target.height;

    let collision = null;
    /*let xMin = Math.max( object.x, target.x );
    let yMin = Math.max( object.y, target.y );
    let xMax = Math.min( object.x + object.width, target.x + target.width );
    let yMax = Math.min( object.y + object.height, target.y + target.height);*/

    let xMin = Math.max( objectX, targetX );
    let yMin = Math.max( objectY, targetY );
    let xMax = Math.min( objectWidth, targetWidth );
    let yMax = Math.min( objectHeight, targetHeight);

        let x2 = target.x + target.width/2;//object2.width/2;
        let y2 = target.y + target.height/2;//object2.height/2;
        let x1 = object.x + object.width/2;
        let y1 = object.y + object.height/2;
        var x = x2 - x1;
        var y = y2 - y1;
        var distance = Math.sqrt(x*x + y*y)-(object.height/2 + target.height/2);
        //if(target && object){ if(this.objectNameFlag != "bullet"){
            if(target.originObject){
                if( target.originObject.objectOwner != "bullet" && distance <= 0) {
                    //console.log('true', target, object)
                    return "collision"
                }
            }

    if(!target.originObject || target.originObject.objectOwner != "player" || target.originObject.objectOwner != "player"){
        let resY = yMax - yMin;
        let resX = xMax - xMin;
        collision = (Math.sign(resX) < 0 || Math.sign(resY) < 0)? false : "collision";
        return collision
    }
}







function hitDetection(object1, objectsArr, mainGameObject, GrappleObject){
    let collision = null;
    for(let object2 of objectsArr){

        let object1Position = object1.getObjectPosition.call(object1);

        collision = objectIntersectionDetect({object: {
            x: object1Position.x,
            y: object1Position.y,
            width: object1.width || object1Position.width,
            height: object1.height || object1Position.height,
            originObject: object1
        }, target: {
            x: object2.x,
            y: object2.y,
            width: object2.width,
            height: object2.height,
            originObject: object1
        }})
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
    placeBackground,
    moveEnemyes,
    shot,
    enemyAnimation,
    objectIntersectionDetect,
    hitDetection,
    takeDamage,
    enemyDamageAnimation,
    spawnCoin,
    explosionFire
};