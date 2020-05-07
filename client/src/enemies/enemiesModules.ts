import * as constructors from '../constructors/index';
import { createImage } from '../view/displayModules';
import { explosionFire } from '../engine/gameSideObjectsModule';
import { loadGrabbleToSideObject } from '../engine/gameGrappleObjectsModule';
import { initSoundObject } from '../engine/soundModules';
import { levelTimer } from '../engine';
import { enterToTheShopDialog } from '../ui/shop/gameShopModule';
import { angleFinder } from '../engine/engineModules';
import { horizontalVerticalSearch} from '../engine/gameModules/changeLevels';

function drawCircle({ctx, x, y, width, height, color}){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, width/2, 0, 2 * Math.PI);

    ctx.fill();
}

async function placeEnemyes(mainGameObject){

    if(this.y < 0 - this.height && this.x < 0 - this.width &&
        this.y < window.innerHeight + this.height && this.x > window.innerWidth + this.width) return false

    mainGameObject.gameInitData.ctxActionField.save();


    let translateIndexAdjustX = await (this.degree < 180)? (this.width/180)*this.degree: (this.width/180)*(360 - this.degree);
    let translateIndexAdjustY = await (this.degree < 180)? (this.height/180)*this.degree: (this.height/180)*(360 - this.degree);
    translateIndexAdjustX = (translateIndexAdjustX && this.objectNameFlag === "bullet")? translateIndexAdjustX: 0;
    translateIndexAdjustY = (translateIndexAdjustY && this.objectNameFlag === "bullet")? translateIndexAdjustY: 0;


    /*   // Development box
    mainGameObject.gameInitData.ctxActionField.fillStyle = 'rgba(41, 201, 7, .2)';
    mainGameObject.gameInitData.ctxActionField.fillRect(this.x, this.y, this.width, this.height)
    if(this.objectNameFlag != "bullet"){
        drawCircle({
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








function shot(BulletConstruct, mainGameObject, SoundCreator, owner, bulletArray){
    //console.log(1, this, this.isShot )
    if(mainGameObject.gameInitData.gamePause || !this.isShot) return false;

    let guns = (this.guns)? this.guns : this.data.guns;
    for(let item of guns){
        if(!item || item.type === 'object') continue

        let shotRandomizer = mainGameObject.gameRandomizer( item.fireRepead )
        if( 1 > shotRandomizer || owner == 'player' && item){

            bulletsCreateModule.call(this, {
                item: item,
                mainGameObject: mainGameObject,
                owner: owner,
                BulletConstruct: BulletConstruct,
                SoundCreator: SoundCreator,
                bulletArray: bulletArray
            })
        }
    }
}

function bulletsCreateModule({item, mainGameObject, owner, BulletConstruct, SoundCreator, bulletArray}){
        let angle = (item.defaultAngle)?
            (item.defaultAngle.isRandom)?
            mainGameObject.gameRandomizer(item.defaultAngle.max - item.defaultAngle.min, item.defaultAngle.min): item.defaultAngle.angle
            : this.shotAngle;

            let context = this;
            let bulletSettings = this.bulletSpeed({bulletSpeed: item.speed,
                angle: angle });
            let totalSpeed = (Math.sign(bulletSettings.horizontalSpeed) > 0)? this.speed : this.speed * -1;
            let firePositionX = (item.firePositionX)? item.firePositionX: 0

            let bullet = new BulletConstruct({
                x: context.x + firePositionX, y: context.y + ((item.firePosition)? item.firePosition : mainGameObject.gameRandomizer(context.height)),
                bulletType: item.name, bulletTexture: item.color,
                objectOwner: owner, bulletSpeed: (owner === 'enemy' || owner === 'hangar')? bulletSettings.horizontalSpeed + totalSpeed : (owner == 'player')? bulletSettings.horizontalSpeed + context.xAdj : bulletSettings.horizontalSpeed,
                width: item.width, height: item.height,
                damage: item.damage, type: item.type, texture: item.texture,
                sx: ( item.sx )? item.sx : 0 , sy: ( item.sy )? item.sy : 0, sWidth: item.sWidth, sHeight: item.sHeight,
                explosion: item.explosionAnimation, smoke: ( item.smoke )? item.smoke: null,  imageWidth: item.imageWidth, imageHeight: item.imageHeight,
                animationSteps: item.animationSteps, numberOfItems: item.numberOfItems, numberOfVerticalItems: item.numberOfVerticalItems,
                sound: (item.sound)? item.sound : null, verticalSpeed: (bulletSettings.verticalSpeed)? bulletSettings.verticalSpeed: 0,
                degree: (bulletSettings.angle)? bulletSettings.angle: 0, radius: (item.radius)? item.radius : null
            });
            let soundProps = {
                soundUrl: bullet.sound.levelSound,
                soundLoop: bullet.sound.soundLoop,
            }

            bullet.loadTexture()
            bullet.sound.soundObject = (bullet.sound)? initSoundObject({SoundCreator: SoundCreator, mainGameObject: mainGameObject, soundProps: soundProps}) : null;
            bullet.img.onload = () => {
                mainGameObject.gameInitData[bulletArray] = mainGameObject.gameInitData[bulletArray].concat(bullet)
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



function bulletCollision({hitObject, mainGameObject}){
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
        explosionFire({
            targetData: this,
            mainGameObject: mainGameObject,
            hitObject: hitObject,
            SideObject: constructors.SideObject,
            explosion: "explosion"
        })
        if( this.type === "nuclear_blast" || this.type === "defence_shield" ){
            return false
        };

        this.objectPresent = false;
        return true
    }
    return true
}











function groundBulletCollision({hitObject, mainGameObject}){
    if(this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "groundEnemyBullet" && hitObject.objectOwner == "groundPlayer"){
        return bulletExplosion.call(this)
    }

    if(!mainGameObject.gameInitData.dynamicLevelsActive || !hitObject.details && hitObject.objectOwner != "groundEnemy" ||
    !hitObject.details && hitObject.objectOwner != "groundEnemyBullet") return true

        if(this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.details.collision ||
        this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "groundEnemy" ||
        this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "groundEnemyBullet" && hitObject.details.collision && hitObject.objectOwner != "groundEnemy" ){
            return bulletExplosion.call(this)
        }
    return true

    function bulletExplosion(){
        explosionFire({
            targetData: this,
            mainGameObject: mainGameObject,
            hitObject: hitObject,
            SideObject: constructors.SideObject,
            explosion: "explosion"
        })

        this.objectPresent = false;
        return true
    }
}








function groundLevelBackgroundBulletDetect({hitObject, mainGameObject, GrappleObject}){
    if(!mainGameObject.gameInitData.dynamicLevelsActive) return false
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    let collision
    for(let background of allBlocks){
        collision = objectIntersectionDetect({
            object: {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            },
            target: {
                x: background.x,
                y: background.y,
                width: background.width,
                height: background.height
            }
        })
        if(collision) break
    }
    this.atBackground = (collision)? true :false ;
    hitObject.atBackground = (collision)? true :false;
    return (collision)? true : false
}







function groundUnitsDamage({hitObject, mainGameObject}){
    if(!mainGameObject.gameInitData.dynamicLevelsActive) return false
    var levelData = mainGameObject.getLevelUserData()

    if(this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "groundPlayer" && hitObject.objectOwner == "groundEnemyBullet"){
        //console.log('bullet hit to player')
        this.healthPoint -= hitObject.damage;
        damageProcedure.call(this)
    }
    if(this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "groundPlayer" && hitObject.objectOwner == "groundEnemy"){
        //console.log('Enemy hit to player')
        this.healthPoint -= hitObject.damage;
        damageProcedure.call(this)
    }
    if(this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "groundEnemy" && hitObject.objectOwner == "player"){
        //console.log('Player bullet hit the enemy')
        this.healthPoint -= hitObject.damage;
        damageProcedure.call(this)
    }

    function damageProcedure(){
        if(this.objectOwner != "groundPlayer" && this.healthPoint <= 0){
            this.objectPresent = false;
        }
        if(this.objectOwner == "groundPlayer" && this.healthPoint <= 0){

            console.log(levelData.source.playerObject)
            let mainPlayerData = levelData.source.playerObject;
            // gameData.currentPoint
            // gameData.playerObject.numberOflife
            mainPlayerData.numberOflife -= 1;

            if(mainPlayerData.numberOflife > 0) this.healthPoint = this.defaultHealth

            if(levelData.source.playerObject.numberOflife <= 0){
                mainGameObject.gameOverWindow()
                mainGameObject.gameInitData.gameOver = true;
                mainGameObject.mapSoundChanger({soundStatus:'game_over_screen'})
                setTimeout(function(){
                     mainGameObject.backToStartScreen(constructors)
                }, 3000)
                return
            }

        }
    }
}









function grappleObjectCollision({ hitObject, mainGameObject }){

    if(this.objectPresent && this.objectOwner == "grappleObject" &&
    hitObject.objectOwner == "player" && !hitObject.hasOwnProperty('bulletType') ||
    this.objectPresent && this.objectOwner == "grappleObject" &&
    hitObject.objectOwner == "groundPlayer" && !hitObject.hasOwnProperty('bulletType')){

        if( this.type === "nuclear_blast" || this.type === "defence_shield" ) return false
        this.objectPresent = false;
        mainGameObject.gameInitData.grappleObjectOnScreen = false;
        explosionFire({
            targetData: this,
            mainGameObject: mainGameObject,
            hitObject: hitObject,
            SideObject: constructors.SideObject,
            explosion: "explosion"
        });
        this[this.grapplePower.methodName]({allGameSideObjects: mainGameObject, playerShipData: hitObject, mainGameObject: mainGameObject})
    }
}





function enterToTheShopHangar({ hitObject, mainGameObject }){
    if(this.objectPresent && this.objectOwner == "hangar" &&
    hitObject.objectOwner == "player" &&
    !hitObject.hasOwnProperty('bulletType') && !mainGameObject.gameInitData.shopActive &&
    mainGameObject.gameInitData.tradeShipTimeToUndock <= 0 ){
        mainGameObject.gameInitData.tradeShipTimeToUndock = 10;
        enterToTheShopDialog({mainGameObject: mainGameObject, tradePropertyes: this.tradePropertyes})
    }
}









function playerDamage({ mainGameObject, damage}){
    if(mainGameObject.gameInitData.gameWin) return false
    if(this.collisionAllow && !mainGameObject.gameInitData.shopActive){
        unitDamage.call(this, {
            data: mainGameObject.getLevelUserData(),
            mainGameObject: mainGameObject,
            damage: damage
        })
    }
}











// complex enemy animation for damage
async function takeDamage(damage: number, hitObject, mainGameObject, GrappleObject){
    let gameSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    let groundBulletStop = groundBulletCollision.call(this, {hitObject: hitObject, mainGameObject: mainGameObject});
    let backgroundTextureDetect = await groundLevelBackgroundBulletDetect.call(this, {hitObject: hitObject, mainGameObject: mainGameObject})

    groundUnitsDamage.call(this, {hitObject: hitObject, mainGameObject: mainGameObject, GrappleObject: GrappleObject})
    grappleObjectCollision.call(this, { hitObject: hitObject, mainGameObject: mainGameObject })
    if(backgroundTextureDetect || this.atBackground || hitObject.atBackground) return false
    let bulletStop = bulletCollision.call(this, {hitObject: hitObject, mainGameObject: mainGameObject});


    if(!bulletStop && !groundBulletStop ) return false


    grappleObjectCollision.call(this, { hitObject: hitObject, mainGameObject: mainGameObject })
    enterToTheShopHangar.call(this, { hitObject: hitObject, mainGameObject: mainGameObject })

    /* Hit detection collision */
    if(this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "enemy" && hitObject.objectOwner == "hangarbullet" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "collide" && hitObject.objectOwner == "player" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "collide" && hitObject.objectOwner == "enemy" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "enemy" && hitObject.objectOwner == "collide" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "environment" && hitObject.objectOwner == "player" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "environment" && hitObject.objectOwner == "enemy"
     ){
        if(hitObject.objectOwner === "player" && hitObject.type != "nuclear_blast" &&
        hitObject.objectOwner === "player" && hitObject.type != "defence_shield" && hitObject.objectNameFlag != "bullet"){
            if(this.x < hitObject.x + (hitObject.width/2) &&
            hitObject.x + hitObject.width/2 < this.x + (this.width)){
                hitObject.x -= hitObject.speed;
            }else if(
             hitObject.x > this.x + (this.width)){
                hitObject.x += hitObject.speed;
            }else{
                hitObject.x -= hitObject.speed;
            }
        }
        unitDamage.call(this, {
            data: null,
            mainGameObject: mainGameObject,
            damage: damage
        });
        this.enemyDamageAnimation()
        if(this.healthPoint <= 0) {
            this.objectPresent = false;
            explosionFire({
                targetData: this,
                mainGameObject: mainGameObject,
                hitObject: hitObject,
                SideObject: constructors.SideObject,
                explosion: "collideExplosionAnimation"
            });
            explosionFire({
                targetData: this,
                mainGameObject: mainGameObject,
                hitObject: hitObject,
                SideObject: constructors.SideObject,
                explosion: "explosion"
            });
            /// load coins
            if(this.spawnCoin) this.spawnCoin(mainGameObject, constructors.GrappleObject);
            if(this.isBoss) bossEnemyDestruction({mainGameObject: mainGameObject})
        }
    }else if(this.hasOwnProperty('healthPoint') &&  this.objectOwner === "player" && (hitObject.objectOwner === "enemy" || hitObject.objectOwner == "collide")){
        if(hitObject.objectOwner === "collide" && gameSeconds % 1000 != 0 ||
        hitObject.hasOwnProperty('healthPoint') && hitObject.objectOwner === "enemy" && gameSeconds % 1000 != 0) return false
        playerDamage.call(this, { mainGameObject: mainGameObject, damage: damage})
        explosionFire({
            targetData: this,
            mainGameObject: mainGameObject,
            hitObject: hitObject,
            SideObject: constructors.SideObject,
            explosion: "collideExplosionAnimation"
        });
    }else return false
}










function unitDamage({data, mainGameObject, damage}){
    this.healthPoint -= damage;
    if(this.healthPoint <= 0){
        if(data && data.life > 0){
            data.source.playerObject.numberOflife -= 1;
            if(data.source.playerObject.numberOflife <= 0){
                mainGameObject.gameOverWindow()
                mainGameObject.gameInitData.gameOver = true;
                mainGameObject.mapSoundChanger({soundStatus:'game_over_screen'})
                setTimeout(function(){
                     mainGameObject.backToStartScreen(constructors)
                }, 3000)
            }
            this.healthPoint = data.source.playerObject.maxHealth;
            return false
        }
        mainGameObject.collectPoints(this.pointsPerUnit)
        return this.objectPresent = false;
    }
}






function bossEnemyDestruction({ mainGameObject }){
    mainGameObject.gameInitData.levelChange = true;
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






async function explosionDamage({ hitObject, mainGameObject }){
   let enemyClosestList = mainGameObject.gameInitData.allGameEnemies.filter(( object ) => {
        let distanceXmax = Math.max(object.x, hitObject.x);
        let distanceXmin = Math.min(object.x, hitObject.x);

        let distanceYmax = Math.max(object.y, hitObject.y);
        let distanceYmin = Math.min(object.y, hitObject.y);

        let xRange = distanceXmax - distanceXmin;
        let yRange = distanceYmax - distanceYmin;

        if( xRange <= hitObject.radius &&  yRange <= hitObject.radius ){
            return object
        }
     });
    if(!enemyClosestList) return false;

    for(let enemy of enemyClosestList){
        await unitDamage.call(enemy, {
            data: enemy,
            mainGameObject: mainGameObject,
            damage: hitObject.damage
        })
       if(enemy.healthPoint <= 0){
            explosionFire({
                targetData: enemy,
                mainGameObject: mainGameObject,
                hitObject: enemy,
                SideObject: constructors.SideObject,
                explosion: "explosion"
            })
            enemy.objectPresent = false;
        }
    }
}







function objectIntersectionDetect({object, target}){
    let collision = null;

    let xMin = Math.max( object.x, target.x );
    let yMin = Math.max( object.y, target.y );
    let xMax = Math.min( object.x + object.width, target.x + target.width );
    let yMax = Math.min( object.y + object.height, target.y + target.height);


    let x2 = target.x + ((target.hasOwnProperty('bulletType'))? target.width :target.width/2);
    let y2 = target.y + target.height/2;
    let x1 = object.x + ((object.hasOwnProperty('bulletType'))? object.width :object.width/2);
    let y1 = object.y + object.height/2;
    var x = x2 - x1;
    var y = y2 - y1;

    var distance = Math.sqrt(x*x + y*y)-(object.height/2 + target.height/2);


    if(target.originObject){
        if( target.originObject.objectOwner != "bullet"  && distance <= 0) {
          return "collision"
        }
    }

    if(!target.originObject || target.originObject.objectOwner != "player" ){
        let resY = yMax - yMin;
        let resX = xMax - xMin;

        collision = (Math.sign(resX) < 0 || Math.sign(resY) < 0)? false : "collision";

        return collision
    }
}







function hitDetection({object1, objectsArr, mainGameObject, GrappleObject}){
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
    bulletsCreateModule,
    enemyAnimation,
    objectIntersectionDetect,
    hitDetection,
    takeDamage,
    enemyDamageAnimation,
    spawnCoin,
    explosionFire,
    unitDamage,
    explosionDamage
};