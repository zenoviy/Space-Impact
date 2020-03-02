var { viewModules } = require('../view/displayModules');
var { bulletModule } = require('../constructors/bulletConstructor');

function placeEnemyes(mainGameObject){
    viewModules.createImage(
        mainGameObject.gameInitData.ctxActionField,
        this.img,
        this.sx,
        this.sy,
        this.sWidth,
        this.sHeight,
        this.x,
        this.y,
        this.width,
        this.height)
}
function moveEnemyes(moveX: number, moveY: number = 0){
    this.x -= this.enemySpeed;
    this.y -= moveY;
}
function loadEnemyes(){
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
               this.x, this.y,
               item.name, item.color,
               "enemy", item.speed,
               item.width, item.height,
               item.damage
               );
           mainGameObject.gameInitData.allGameBullets = mainGameObject.gameInitData.allGameBullets.concat(bullet)
       }

    }
}
function enemyAnimation(){
    this.detectFrame += 1;
    if(this.detectFrame % this.animationSteps == 0){
        this.detectFrame = 0;
        this.sx += this.sWidth;
        if(this.sx >= this.picturesWidth){
            this.sx = 0;
        }
    }
}
// complex enemy animation for damage
async function takeDamage(damage: number, hitObject, mainGameObject){
    if( this.hasOwnProperty('bulletType') && this.objectOwner == "enemy" && hitObject.objectOwner == "player" ||
    this.hasOwnProperty('bulletType') && this.objectOwner == "player" && hitObject.objectOwner == "enemy"
    ){
        return this.objectPresent = false;
    }

    if( this.hasOwnProperty('healthPoint') &&  this.objectOwner == "enemy" && hitObject.objectOwner == "player"){
        this.healthPoint -= damage;
        //  launch animation for damage (for other units)
        if(this.healthPoint <= 0){
            mainGameObject.collectPoints(this.pointsPerUnit)
            return this.objectPresent = false;
        }
    }else if(this.hasOwnProperty('healthPoint') &&  this.objectOwner == "player" && hitObject.objectOwner == "enemy"){
        //console.log(this, hitObject.objectOwner)
        //alert("hit player")
        if(this.collisionAllow){
            this.healthPoint -= damage;
            if(this.healthPoint <= 0){
                return this.objectPresent = false;
            }
        }
    }else{
        return false
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
            //console.log(xMin, yMin, xMax, yMax, object1, object2)
            if(object1.takeDamage && object2.takeDamage){
                object1.takeDamage((object2.damage)? object2.damage: 0, object2, mainGameObject);
                object2.takeDamage((object1.damage)? object1.damage: 0, object1, mainGameObject);
            }
            break
        }
    }
    return (collision == "collision")? object1: false;
}

module.exports.enemiesModel = {
    placeEnemyes: placeEnemyes,
    moveEnemyes: moveEnemyes,
    loadEnemyes: loadEnemyes,
    shoot: shoot,
    enemyAnimation: enemyAnimation,
    hitDetection: hitDetection,
    takeDamage: takeDamage
};