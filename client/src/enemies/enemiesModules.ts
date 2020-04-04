import * as costructors from '../constructors/index';
import { createImage } from '../view/displayModules';
import { explosionFire } from '../engine/gameSideObjectsModule';
import { loadGrabbleToSideObject } from '../engine/gameGrappleObjectsModule';
import { initSoundObject } from '../engine/soundModules';
import { levelTimer } from '../engine';
import { enterToTheShopDialog } from '../ui/gameShopModule';
import { angleFinder } from '../engine/engineModules';
import { horizontalVerticalSearch} from '../engine/gameModules/changeLevels';


function placeEnemyes(mainGameObject){
    mainGameObject.gameInitData.ctxActionField.save();
    mainGameObject.gameInitData.ctxActionField.translate(this.x, this.y);
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




function loadEnemyes(){         ///  need replace  and remove
    this.img = new Image();
    this.img.src = this.shipTexture;
}



function shot(BulletConstruct, mainGameObject, SoundCreator, owner){
    if(mainGameObject.gameInitData.gamePause || !this.isShot) return false;
    
    
    let guns = (this.guns)? this.guns : this.data.guns;
if(owner == 'collide'){
        console.log(guns)
    }
    for(let item of guns){
        if(!item || item.type ==='object') continue
        if( 1 > mainGameObject.gameRandomizer( item.fireRepead ) || owner == 'player' && item){


            let context = this;
            let bulletSettings = this.bulletSpeed({bulletSpeed: item.speed, angle: this.shotAngle});
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
                degree: (bulletSettings.angle)? bulletSettings.angle: 0
            });
            bullet.img.src = bullet.texture;
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
    let collision = null;
    let xMin = Math.max( object.x, target.x );
    let yMin = Math.max( object.y, target.y );
    let xMax = Math.min( object.x + object.width, target.x + target.width );
    let yMax = Math.min( object.y + object.height, target.y + target.height);

    let resX = xMax - xMin;
    let resY = yMax - yMin;
    collision = (Math.sign(resX) < 0 || Math.sign(resY) < 0)? false : "collision";
    return collision
}



function hitDetection(object1, objectsArr, mainGameObject, GrappleObject){
    let collision = null;
    for(let object2 of objectsArr){

        let object1Position = object1.getObjectPosition.call(object1);

        collision = objectIntersectionDetect({object: {
            x: object1Position.x,
            y: object1Position.y,
            width: object1.width || object1Position.width,
            height: object1.height || object1Position.height
        }, target: {
            x: object2.x,
            y: object2.y,
            width: object2.width,
            height: object2.height
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
    loadEnemyes,
    shot,
    enemyAnimation,
    objectIntersectionDetect,
    hitDetection,
    takeDamage,
    enemyDamageAnimation,
    spawnCoin,
    explosionFire
};