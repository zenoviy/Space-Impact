import { getData } from '../server/serverRequestModules';
import { isBuffer } from 'util';


function enemyShipLogicVertical(target, mainGameObject){
    let maxPositionX = Math.max(target.x, this.x);
    let minPositionX = Math.min(target.x, this.x);

    let maxPositionY = Math.max(target.y - this.height/2, this.y)
    let minPositionY = Math.min(target.y - this.height/2, this.y)

    let distanceToTargetX = maxPositionX - minPositionX;
    let distanceToTargetY = maxPositionY - minPositionY;
    if(this.isMove && this.behavior){
        switch ( this.behavior) {
            case 'patrool':
                if(!this.direction){
                    let dirrectionRandom = mainGameObject.gameRandomizer(2, 1);
                    this.direction = (dirrectionRandom == 1)? "up" : "down";
                }
                patrool.call(this, mainGameObject)
                break;
            case 'find':
                strafe.call(this)
                break;
            case 'attack':
                attack.call(this, distanceToTargetY, distanceToTargetX, target)
                break;
            case 'comeEndFind':
                strafe.call(this);
                unitStop.call(this);
                goBackAnForward.call(this, mainGameObject);
                break;
            default:
                strafe.call(this)
        }
    }
    function goBackAnForward(mainGameObject){
        if(this.changeXposition && this.direction != 'backwards'){
            this.direction = 'backwards';

            let screenData = mainGameObject.getScreenSize();
            let randomPoint = mainGameObject.gameRandomizer(this.width * 2)
            let range = screenData.width - randomPoint;
            this.xFinal = range;
            cahngeDirrection.call(this)
        }else if(this.changeXposition && this.x > this.xFinal && this.direction != 'forward'){
            this.direction = 'forward'
            this.changeXposition = false;
            cahngeDirrection.call(this)
        }

        function cahngeDirrection(){
            this.speed =  this.speed * -1;
        }
    }
    function unitStop(){
        let screenData = mainGameObject.getScreenSize();
        if(this.x < screenData.width - this.width * 2 && !this.changeXposition){
            if(!this.changeSpeed) changeStrafeSpeed.call(this, 3)
            this.changeSpeed = true;
            this.changeXposition = true
        }
    }
    function changeStrafeSpeed(coeficient){
         this.speed = this.speed/coeficient;
    }
    function strafe(){
        if(this.spotDistance > distanceToTargetX || this.spotDistance > distanceToTargetY){
            this.yFinal = target.y - this.height/2;
            this.enemyVerticalMoveCalculation(distanceToTargetY)
            return true
        }
    }
    function attack(distanceToTargetY, distanceToTargetX, target){
        this.yFinal = target.y - this.height/2;
        if(distanceToTargetX < 100) this.enemyVerticalMoveCalculation(distanceToTargetY)
    }
    function patrool(mainGameObject){
        let screenData = mainGameObject.getScreenSize();
        let distanceToTargetY = Math.max(this.y, this.yFinal) - Math.min(this.y, this.yFinal);
        switch (this.direction){
            case "up":
                this.yFinal = 0;
                if(this.y - this.height < this.yFinal){
                    this.direction = "down";
                }
                break;
            case "down":
                this.yFinal = screenData.height;
                if(this.y + this.height > this.yFinal){
                    this.direction = "up";
                }
                break;
            default:
                this.yFinal = screenData.height/2;
        }
        this.enemyVerticalMoveCalculation(distanceToTargetY)
    }
}
function enemyVerticalMoveCalculation(distanceToTargetY){
    let yAdj = distanceToTargetY/this.verticalSpeed;

    yAdj = (Math.sign(yAdj) > 0)? yAdj: yAdj * -1;
    yAdj = (yAdj > this.verticalSpeed)? this.verticalSpeed : yAdj;

    this.y = (this.y > this.yFinal)? this.y - yAdj:
    (this.y < this.yFinal)? this.y + yAdj : this.yFinal;
}

async function spawnEnemyLogic( EnemyObject: any){
    if(this.gameInitData.shopActive) return
    let gameData = this.gameInitData.gameData,
    levelData = gameData.levelData,
    enemyData = gameData.enemyData,
    levelUserData = this.getLevelUserData(),
    bossPresent = (levelUserData.source.levelData.bossPresent)? levelUserData.source.levelData.bossPresent: null;

    if(!this.gameInitData.gameData.levelChange && !bossPresent){
        enemySpawn.call(this, {levelStatus: "reguler-level"})
    }else{
        let enemyShipObject = await this.createNewEnemy(enemyData[0], EnemyObject);
        
        if(!this.gameInitData.levelChange){
            enemySpawn.call(this, {levelStatus: "boss-level"})
            //console.log(enemyShipObject, enemyData)
            //enemyShipObject.loadEnemyes();
            //this.gameInitData.allGameEnemies = this.gameInitData.allGameEnemies.concat(enemyShipObject);
            
        }
    }

    async function enemySpawn(){
        let checkSpawnType = this.gameRandomizer(levelData.enemyProbability);
        if(checkSpawnType <= levelData.enemyRandomizerIndex){
            let numberEnemyPerSpawn = this.gameRandomizer(levelData.enemyMaxNumber);
            for(let i = numberEnemyPerSpawn; i < levelData.enemyMaxNumber; i++){
                let enemyShip = enemyData[ this.gameRandomizer(enemyData.length) ];
                console.log(enemyShip)
                if(process.env.BOSS_LOAD_AT_LEVEL === 'true' && enemyShip.details.isBoss) return false
                if(enemyShip.details.isBoss) process.env.BOSS_LOAD_AT_LEVEL = "true";
                let enemyShipObject = await this.createNewEnemy(enemyShip, EnemyObject);
                enemyShipObject.loadEnemyes();
                this.gameInitData.allGameEnemies = this.gameInitData.allGameEnemies.concat(enemyShipObject);
            }
        }
    }
}
async function createNewEnemy(enemyData, EnemyObject){
    let x = this.gameInitData.screen.width + 300,
    y = this.gameRandomizer(this.gameInitData.screen.height - 200, 100)
    if(enemyData.details){
        let shipDetails = enemyData.details;
        let behavior = (shipDetails.behavior)?shipDetails.behavior[this.gameRandomizer(shipDetails.behavior.length)] : null;
        let extraObjects =  (shipDetails.extraObjects)? await loadExtraObject.call(this, shipDetails.extraObjects): false;

        let context = this;
       return new EnemyObject(
        {
            x: x, y: y,
            sx: shipDetails.sx, sy: shipDetails.sy,
            sWidth: shipDetails.imageWidth/shipDetails.numberOfItems, sHeight: shipDetails.imageHeight,
            picturesWidth: shipDetails.imageWidth, numberOfItems: shipDetails.numberOfItems,
            width: shipDetails.width, height: shipDetails.height,
            shipTexture: shipDetails.skinName,
            speed: shipDetails.speed, isShot: shipDetails.isShot,
            status: shipDetails.status, name: shipDetails.name,
            bulletTypeNumber: shipDetails.bulletType, rapidFire: shipDetails.rapidFire, pointsPerUnit: shipDetails.pointsPerUnit,
            healthPoint: shipDetails.healthPoint, animationSteps: shipDetails.animationSteps, damage: shipDetails.damage,
            objectOwner: shipDetails.objectOwner, guns: (shipDetails.guns)? shipDetails.guns : [], explosion: shipDetails.explosionAnimation,
            numberOfVerticalItems: shipDetails.numberOfVerticalItems, isMove: shipDetails.isMove, isShoot: shipDetails.isShoot,
            spotDistance: shipDetails.spotDistance, behavior: behavior, verticalSpeed: (shipDetails.verticalSpeed)? shipDetails.verticalSpeed: null,
            isBoss: (shipDetails.isBoss)? shipDetails.isBoss : false, extraObjects: extraObjects, collideExplosionAnimation: shipDetails.collideExplosionAnimation  // load coin element from server 
        });
    }
}
async function loadExtraObject(extraObjects){
        let randomObject = extraObjects[this.gameRandomizer(extraObjects.length)],
        loadProbability = this.gameRandomizer(randomObject.randomizer),
        numberOfElement = this.gameRandomizer(randomObject.maxNumber + 1);
        let result = [];
        let callObject = await getData({url: process.env.HOST + "api/grapple-objects", method: "GET", data: null, headers: { 'grappleObject': randomObject.object}})
        for(let i = 0; i < numberOfElement; i++){
            result = result.concat(callObject)
        }
        return result
    }

function gameRandomizer(maxNumber: number, minNumber: number = 0){
    return Math.floor(Math.random() * maxNumber + minNumber);
}


export {
    enemyShipLogicVertical,
    enemyVerticalMoveCalculation,
    spawnEnemyLogic,
    createNewEnemy,
    gameRandomizer,
    loadExtraObject
}