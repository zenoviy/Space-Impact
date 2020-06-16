import * as constructors from '../constructors/index';
import { createImage } from '../view/displayModules';
import { explosionFire } from '../engine/gameSideObjectsModule';
import { loadGrabbleToSideObject } from '../engine/gameGrappleObjectsModule';
import { initSoundObject } from '../engine/soundModules';
import { levelTimer } from '../engine';
import { enterToTheShopDialog } from '../ui/shop/gameShopModule';
import { angleFinder, gameNpcUnitsCounting } from '../engine/engineModules';
import { horizontalVerticalSearch} from '../engine/gameModules/changeLevels';

/* display development box and cyrcle at active objects */
function drawCircle({ctx, x, y, width, height, color}){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, width/2, 0, 2 * Math.PI);
    ctx.fill();
}
function drawRectangle({ctx, x, y, width, height, color}){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.fill();
}
function drawFrame({ctx, width, height, x, y, color}){
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, width, height);
}



/*===============

Main object display function ( daisplay object with texture and angel, method of object) 

============== */

 function displayObjectAtScene(mainGameObject, secondTexture?){
     if(this.y > 0 - this.height && this.x > (0 - this.width) && this.y < window.innerHeight + this.height && this.x < window.innerWidth + this.width || this.objectNameFlag === "bullet"){
    //if(this.y > 100 && this.x > 100 && this.y < window.innerHeight - 300 && this.x < window.innerWidth - 300){
    mainGameObject.gameInitData.ctxActionField.save();

    let translateIndexAdjustX =  (this.degree < 180)? (this.width/180)*this.degree: (this.width/180)*(360 - this.degree);
    let translateIndexAdjustY =  (this.degree < 180)? (this.height/180)*this.degree: (this.height/180)*(360 - this.degree);
    translateIndexAdjustX = (translateIndexAdjustX && this.objectNameFlag === "bullet")? translateIndexAdjustX: 0;
    translateIndexAdjustY = (translateIndexAdjustY && this.objectNameFlag === "bullet")? translateIndexAdjustY: 0;


       // Development box
    /*mainGameObject.gameInitData.ctxActionField.fillStyle = 'rgba(41, 201, 7, .2)';
    mainGameObject.gameInitData.ctxActionField.fillRect(this.x, this.y, this.width, this.height)
    //if(this.objectNameFlag != "bullet"){
        drawCircle({
            ctx: mainGameObject.gameInitData.ctxActionField,
            x: this.x + this.width/2,
            y: this.y + this.height/2,
            width: this.height,
            height: this.height,
            color: 'rgba(201, 97, 28, .4)'
        })
    //}*/
    mainGameObject.gameInitData.ctxActionField.translate(this.x + translateIndexAdjustX, this.y + translateIndexAdjustY);
    mainGameObject.gameInitData.ctxActionField.rotate( ((this.degree)? this.degree: 0 ) * Math.PI / 180);

    let sWidth = (secondTexture && this.backgroundTexture)? this.backgroundTexture.sWidth : this.sWidth;
    let sHeight = (secondTexture && this.backgroundTexture)? this.backgroundTexture.sHeight : this.sHeight;

        imageRender({
            ctx: mainGameObject.gameInitData.ctxActionField,
            img: this.img,
            sx: this.sx,
            sy: this.sy,
            sWidth: sWidth,
            sHeight: sHeight,
            x: 0 + (this.blockRelativeXPos)? parseInt(this.blockRelativeXPos) : 0,
            y: 0 + (this.blockRelativeYPos)? parseInt(this.blockRelativeYPos) : 0,
            width: this.width,
            height: this.height
        })
    mainGameObject.gameInitData.ctxActionField.restore();
}else return false

     function imageRender({ ctx, img, sx, sy, sWidth, sHeight, x, y, width, height }){
        createImage(ctx, img, sx, sy, sWidth, sHeight, x, y, width, height)
    }
}



function solidColorFill({mainGameObject}){
    let ctx = mainGameObject.gameInitData.ctxActionField;
    drawRectangle({
        ctx: ctx,
        x: this.x,
        y: this.y,
        width: this.width + 1,
        height: this.height + 1,
        color: (this.details.mapColor)? this.details.mapColor: '#000000'
    })
}

function displayObjectLifeSign({mainGameObject, targetObject}){
    if(targetObject.healthPoint || targetObject.details.isDestroy){
        if(targetObject.healthPoint > 0 && targetObject.healthPoint < targetObject.defaultHealth ||
            targetObject.details.healthPoint < targetObject.defaultHealth){
            let ctx = mainGameObject.gameInitData.ctxActionField;
            let lifeSignWidth = targetObject.width;
            let lifeWidth = lifeSignWidth/targetObject.defaultHealth;
            drawFrame({
                ctx: ctx,
                x: targetObject.x,
                y: targetObject.y - 10,
                width: lifeSignWidth,
                height: 5,
                color: '#691500'
            })
            drawRectangle({
                ctx: ctx,
                x: targetObject.x,
                y: targetObject.y - 10,
                width: lifeWidth * ((targetObject.healthPoint)? targetObject.healthPoint: targetObject.details.healthPoint ),
                height: 5,
                color: targetObject.details.mapColor
            })
        }
    }
}

/*===============

Method for background picture to display it
Used only at GameBackground constructor

============== */


function placeBackground(){
    createImage(
        this.ctx,
        this.img,
        this.sx, this.sy,
        this.sWidth, this.sHeight,
        this.x, this.y,
        this.width,this.height)
}


/*===============

Method for move flying Enemy

============== */

function moveEnemyes(moveX: number, moveY: number = 0){
    this.x -= this.speed;
    this.y -= moveY;
}




/*===============

Main animation method move picture by time steps at sx coordinats
detectFrame - Object animation timer
animationSteps - key of animation time animation changing when detectFrame % animationSteps === 0
sx - picture current frame
sWidth - width of picture frame
picturesWidth - total width of all picture frames

============== */

async function spriteObjectsAnimation(state = true){
    if( this.x > window.innerWidth + this.width || this.x < this.width * -1 ||
            this.y > window.innerHeight + this.height || this.y < this.height * -1) return false
    if(this.backgroundTexture){

        this.backgroundTexture.detectFrame += 1;
        if(this.backgroundTexture.detectFrame % this.backgroundTexture.animationSteps == 0 && state){
            this.backgroundTexture.detectFrame = 0;
            let blockTexturePositionX = this.backgroundTexture.sWidth;
            this.backgroundSx += parseInt(blockTexturePositionX);//this.backgroundTexture.sx + this.backgroundTexture.sWidth ;
            if(Math.round(this.backgroundSx) >= this.backgroundTexture.picturesWidth){
                this.backgroundSx = 0;
            }
        }
    }
    this.detectFrame += 1;
    if(this.detectFrame % this.animationSteps == 0 && state){
        this.detectFrame = 0;
        this.sx += this.sWidth;
        if(Math.round(this.sx) >= this.picturesWidth){
            this.sx = 0;
        }
    }
}



/*===============

Change picture of flying units animation when it taken damage
move picture by number of vertical image

============== */


function enemyDamageAnimation(){
    if(this.numberOfVerticalItems > 1){
        let damageAnimationPoint = this.originalHealthPoint/this.numberOfVerticalItems;
        let damagePoint = new Array(this.numberOfVerticalItems).fill(null)
        damagePoint = damagePoint.map((item, index) => damageAnimationPoint * (index+1)).sort((a, b) => a - b).reverse();
        for(let i = 0; i < damagePoint.length; i++){
            if(this.healthPoint < damagePoint[i] && this.healthPoint > damagePoint[i+1] && damagePoint[i+1]){
                this.sy = this.sHeight * (i);
                break
            }else if(!damagePoint[i+1]){
                this.sy = this.sHeight * (this.numberOfVerticalItems - 1)
            }
        }
    }
}




/*===============

Main method to create a bullet and single shot
BulletConstruct - main bullet constructor
bulletArray - different array to store bullets objects
allGameBullets: []  - all bullets at flying mode
allGroundGameBullets: []    - all bullets at ground mode

============== */
function shot(BulletConstruct, mainGameObject, SoundCreator, owner, bulletArray){
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
                degree: (bulletSettings.angle)? bulletSettings.angle: 0, radius: (item.radius)? item.radius : null,
                originOwner: this
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




/*===============

Bullet colision for flying enemy
compare objects position and object owner if bullet intercept object colision detected

============== */

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









/*===============

Bullet colision for ground enemy
compare objects position and object owner if bullet intercept object colision detected
for groundNPC, groundEnemy, groundPlayer
and bullets player, groundEnemyBullet

============== */

function groundBulletCollision({hitObject, mainGameObject}){
    if(!hitObject.objectPresent && hitObject.objectOwner) return false
    if(this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "groundEnemyBullet" && hitObject.objectOwner == "groundPlayer"){
        // if(this.details.type == "hidden_enemy_spawner" && hitObject.objectOwner == "groundEnemy") return false
        return bulletExplosion.call(this)
    }

    if(!mainGameObject.gameInitData.dynamicLevelsActive || !hitObject.details && hitObject.objectOwner != "groundEnemy" || !hitObject.details && hitObject.objectOwner != "groundNPC" ||
    !hitObject.details && hitObject.objectOwner != "groundEnemyBullet" ) return true

        if(this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.details.collision ||
        this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "groundEnemy" ||
        this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "groundEnemyBullet" && hitObject.details.collision && hitObject.objectOwner != "groundEnemy" ||
        this.objectPresent && this.hasOwnProperty('bulletType') && this.objectOwner == "groundEnemyBullet" && hitObject.objectOwner == "groundNPC"
        ){ // groundNPC
                if(hitObject.details){
                    if(hitObject.details.type == "hidden_enemy_spawner" && hitObject.objectOwner == "groundEnemy"
                     && this.objectOwner == "groundEnemyBullet") return false
                //console.log(1, hitObject.details.type, hitObject.objectOwner, this.objectOwner)
                }
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
        if(hitObject.objectOwner == "groundEnemy" || hitObject.objectOwner == "groundNPC"){ 
            hitObject.currentBehavior = (hitObject.currentBehavior === "static")? "static":"destroy";
            //hitObject.playerInRange = true;
            let angleFinder = this.degree - 180;

            if(hitObject.details.role != "military" && hitObject.objectOwner != "groundEnemy"){
                hitObject.playerDirectionHorizontal = (angleFinder > 90 && angleFinder < 270)? 'left' : 'right';
                hitObject.currentBehavior = (hitObject.currentBehavior === "static")? "static":"patrol";
            }else {
                hitObject.currentBehavior = (hitObject.currentBehavior === "static")? "static": "destroy";
                hitObject.playerInRange = true;
                hitObject.playerDirectionHorizontal = (angleFinder > 90 && angleFinder < 270)? 'right' : 'leftt';
                hitObject.targetAngle = (Math.sign(angleFinder) < 0)? 360 + angleFinder: angleFinder;
            }
        };
        this.objectPresent = false;
        return true
    }
}







/*===============

Detect are the current block background or not

============== */
function groundLevelBackgroundBulletDetect({hitObject, mainGameObject, GrappleObject}){
    if(!mainGameObject.gameInitData.dynamicLevelsActive ){
        this.atBackground = false;
        return false
    }
    let allBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;
    let collision
    for(let background of allBlocks){

        if(Math.max(background.x, this.x) - Math.min(background.x, this.x) > 200 ||
        Math.max(background.y, this.y) - Math.min(background.y, this.y) > 200){
            if(!background.objectNameFlag && !this.objectNameFlag) continue
        }
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





/*===============

Method Bullet colision for ground enemy
using healthPoint and damage to make objects active or deactive

============== */

function groundUnitsDamage({hitObject, mainGameObject, constructors}){
    if(!mainGameObject.gameInitData.dynamicLevelsActive ) return false
    var levelData = mainGameObject.getLevelUserData()

    if(this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "groundPlayer" && hitObject.objectOwner == "groundEnemyBullet" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "groundPlayer" && hitObject.objectOwner == "groundEnemy" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "groundEnemy" && hitObject.objectOwner == "player" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "groundEnemy" && hitObject.objectOwner == "groundNPC" ||
    this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "groundNPC" && hitObject.objectOwner == "groundEnemyBullet" ||
    //this.objectPresent && this.hasOwnProperty('healthPoint') &&  this.objectOwner == "groundNPC" && hitObject.objectOwner == "player" ||
    !this.objectOwner && this.details && hitObject.objectOwner == "player" ||
    !this.objectOwner && this.details && hitObject.objectOwner == "groundNPC" ||
    !this.objectOwner && this.details && hitObject.objectOwner == "groundEnemyBullet"){  // groundNPC ground-destruct  

        if(this.details){if(
            this.details.type == "hidden_enemy_spawner" && hitObject.objectOwner == "groundEnemyBullet") return false
            if(this.details.isDestroy && this.details.healthPoint >= 0 && this.details.type){
                this.details.healthPoint -= hitObject.damage;
            }else if(this.healthPoint >= 0) this.healthPoint -= hitObject.damage;
        }else this.healthPoint -= hitObject.damage;
        damageProcedure.call(this)
    }
    function damageProcedure(){
        if(this.details){
            if(this.details.healthPoint && this.details.isDestroy && this.details.type === "ground-destruct"){
                if(this.details.healthPoint <= 0 && this.details.isDestroy && this.details.type){
                    let objectWithFire = Object.assign(this, {
                            explosion: this.explosionAnimation,
                            width: (this.width)? this.width: 100,
                            height: (this.height)? this.height: 100,
                        })
                    explosionFire({
                        targetData: objectWithFire,
                        mainGameObject: mainGameObject,
                        hitObject: hitObject,
                        SideObject: constructors.SideObject,
                        explosion: "explosion"
                    });
                    this.details.type = null;
                    this.details.collision = false;
                }
            }
        }

        if(this.objectOwner != "groundPlayer" && this.healthPoint <= 0){
            this.objectPresent = false;
            if(hitObject.bulletOriginOwner.objectOwner === "groundPlayer"){
                if(!mainGameObject.gameInitData.gameWin){
                    mainGameObject.collectPoints(this.pointsPerUnit);
                    gameNpcUnitsCounting({mainGameObject: mainGameObject, target: this});
                }
            }
            if(this.spawnCoin){
                this.spawnCoin(mainGameObject, constructors.GrappleObject);
            }
        }
        if(this.objectOwner == "groundPlayer" && this.healthPoint <= 0){
            let mainPlayerData = levelData.source.playerObject;
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






/*===============

Method detect when player collide with 'extra object'
'extra object' - spawn when other object is destroyed

============== */


function grappleObjectCollision({ hitObject, mainGameObject }){
    if(mainGameObject.gameInitData.dynamicLevelsActive && hitObject.objectOwner == "player") return false
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









function playerDamage({ mainGameObject, damage, hitObject}){
    if(mainGameObject.gameInitData.gameWin) return false
    if(this.collisionAllow && !mainGameObject.gameInitData.shopActive){
        unitDamage.call(this, {
            data: mainGameObject.getLevelUserData(),
            mainGameObject: mainGameObject,
            damage: damage,
            hitObject: hitObject
        })
    }
}











// complex enemy animation for damage
async function takeDamage(damage: number, hitObject, mainGameObject, GrappleObject){
    /*if( this.x > window.innerWidth + 100 || this.x < -100 ||
        this.y > window.innerHeight + 100 || this.y < -100) return false*/

    let gameSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    let groundBulletStop = groundBulletCollision.call(this, {hitObject: hitObject, mainGameObject: mainGameObject});
    let backgroundTextureDetect = await groundLevelBackgroundBulletDetect.call(this, {hitObject: hitObject, mainGameObject: mainGameObject});

    groundUnitsDamage.call(this, {hitObject: hitObject, mainGameObject: mainGameObject, constructors: constructors});
    grappleObjectCollision.call(this, { hitObject: hitObject, mainGameObject: mainGameObject });

    if(backgroundTextureDetect || this.atBackground || hitObject.atBackground) return false
    let bulletStop = bulletCollision.call(this, {hitObject: hitObject, mainGameObject: mainGameObject});


    if(!bulletStop && !groundBulletStop ) return false

    enterToTheShopHangar.call(this, { hitObject: hitObject, mainGameObject: mainGameObject });

    /* Hit detection collision */
    if(mainGameObject.gameInitData.dynamicLevelsActive && hitObject.objectOwner == "player") return false

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
            hitObject.x + hitObject.width/2 < this.x + (this.width) && !mainGameObject.gameInitData.shopActive){
                hitObject.x -= hitObject.speed;
            }else if( hitObject.x > this.x + (this.width) && !mainGameObject.gameInitData.shopActive){
                hitObject.x += hitObject.speed;
            }else{
                if(!mainGameObject.gameInitData.shopActive) hitObject.x -= hitObject.speed;
            }
        }
        unitDamage.call(this, {
            data: null,
            mainGameObject: mainGameObject,
            damage: damage,
            hitObject: hitObject
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
        if(mainGameObject.gameInitData.dynamicLevelsActive || mainGameObject.gameInitData.gameWin) return false
        if(hitObject.objectOwner === "collide" && gameSeconds % 1000 != 0 ||
        hitObject.hasOwnProperty('healthPoint') && hitObject.objectOwner === "enemy" && gameSeconds % 1000 != 0) return false

        playerDamage.call(this, { mainGameObject: mainGameObject, damage: damage, hitObject: hitObject})
        explosionFire({
            targetData: this,
            mainGameObject: mainGameObject,
            hitObject: hitObject,
            SideObject: constructors.SideObject,
            explosion: "collideExplosionAnimation"
        });
    }else return false
}










function unitDamage({data, mainGameObject, damage, hitObject}){
    //if(mainGameObject.gameInitData.gameWin) return false
    this.healthPoint -= damage;
    if(this.healthPoint <= 0){
        if(data && data.life > 0 && !mainGameObject.gameInitData.gameWin){
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
        if(hitObject.bulletOriginOwner){
            if(hitObject.bulletOriginOwner.objectOwner === 'player'){
                if(!mainGameObject.gameInitData.gameWin){
                    mainGameObject.collectPoints(this.pointsPerUnit)
                    gameNpcUnitsCounting({mainGameObject: mainGameObject, target: this});
                }
            }
        }
        return this.objectPresent = false;
    }
}






function bossEnemyDestruction({ mainGameObject }){
    mainGameObject.gameInitData.levelChange = true;
}

function spawnCoin(mainGameObject, GrappleObject){
    //console.log("coin",  this.extraObjects)
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
            damage: hitObject.damage,
            hitObject: hitObject
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

    let objectBlockRelativeXPos = (object.blockRelativeXPos)? object.blockRelativeXPos : 0;
    let objectBlockRelativeYPos = (object.blockRelativeYPos)? object.blockRelativeYPos : 0;

    let targetBlockRelativeXPos = (target.blockRelativeXPos)? target.blockRelativeXPos : 0;
    let targetBlockRelativeYPos = (target.blockRelativeYPos)? target.blockRelativeYPos : 0;


    let collision = null;

    let xMin = Math.max( object.x + objectBlockRelativeXPos, target.x + targetBlockRelativeXPos );
    let yMin = Math.max( object.y + objectBlockRelativeYPos, target.y + targetBlockRelativeYPos );
    let xMax = Math.min( object.x + objectBlockRelativeXPos + object.width, target.x + targetBlockRelativeXPos + target.width );
    let yMax = Math.min( object.y + objectBlockRelativeYPos + object.height, target.y + targetBlockRelativeYPos + target.height);


    let x2 = target.x + targetBlockRelativeXPos + ((target.hasOwnProperty('bulletType'))? target.width :target.width/2);
    let y2 = target.y + targetBlockRelativeYPos + target.height/2;
    let x1 = object.x + objectBlockRelativeXPos + ((object.hasOwnProperty('bulletType'))? object.width :object.width/2);
    let y1 = object.y + objectBlockRelativeYPos + object.height/2;
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
        if( object2.x > window.innerWidth + object2.width || object2.x < object2.width * -1 ||
            object2.y > window.innerHeight + object2.height || object2.y < object2.height * -1){
                if(!object2.objectNameFlag && !object1.objectNameFlag) continue
            }


        if(Math.max(object2.x, object1.x) - Math.min(object2.x, object1.x) > 200 ||
        Math.max(object2.y, object1.y) - Math.min(object2.y, object1.y) > 200){
            if(!object2.objectNameFlag && !object1.objectNameFlag) continue
        }
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
    displayObjectAtScene,
    placeBackground,
    moveEnemyes,
    shot,
    bulletsCreateModule,
    spriteObjectsAnimation,
    objectIntersectionDetect,
    hitDetection,
    takeDamage,
    enemyDamageAnimation,
    spawnCoin,
    explosionFire,
    unitDamage,
    explosionDamage,
    solidColorFill,
    drawRectangle,
    displayObjectLifeSign
};