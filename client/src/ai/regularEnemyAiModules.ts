import { EnemyObject } from '../constructors/enemyConstructor';


function enemyShipLogicVertical(target, mainGameObject){
    let maxPositionX = Math.max(target.x, this.x);
    let minPositionX = Math.min(target.x, this.x);

    let maxPositionY = Math.max(target.y, this.y)
    let minPositionY = Math.min(target.y, this.y)

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
            default:
                strafe.call(this)
        }
    }
    function strafe(){
        if(this.spotDistance > distanceToTargetX || this.spotDistance > distanceToTargetY){
            this.yFinal = target.y;
            this.enemyVerticalMoveCalculation(distanceToTargetY)
            return true
        }
    }
    function attack(distanceToTargetY, distanceToTargetX, target){
        this.yFinal = target.y;
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

function spawnEnemyLogic(mainGameObject: any, EnemyObject: any){
    let gameData = this.gameInitData.gameData,
    levelData = gameData.levelData,
    enemyData = gameData.enemyData;
    if(!this.gameInitData.gameData.levelChange){
        let checkSpawnType = this.gameRandomizer(levelData.enemyProbability);
        if(checkSpawnType <= levelData.enemyRandomizerIndex){
            let numberEnemyPerSpawn = this.gameRandomizer(levelData.enemyMaxNumber);
            for(let i = numberEnemyPerSpawn; i< levelData.enemyMaxNumber; i++){
                let enemyShip = enemyData[ this.gameRandomizer(enemyData.length) ];
                let enemyShipObject = this.createNewEnemy(enemyShip, EnemyObject);
                enemyShipObject.loadEnemyes();
                this.gameInitData.allGameEnemies = this.gameInitData.allGameEnemies.concat(enemyShipObject);
            }
        }
    }
}
function createNewEnemy(enemyData, EnemyObject){
    let x = this.gameInitData.screen.width + 300,
    y = this.gameRandomizer(this.gameInitData.screen.height - 200, 100)
    if(enemyData.details){
       let shipDetails = enemyData.details;
       let behavior = (shipDetails.behavior)?shipDetails.behavior[this.gameRandomizer(shipDetails.behavior.length)] : null;
        return new EnemyObject(
        {
            x: x, y: y,
            sx: shipDetails.sx, sy: shipDetails.sy,
            sWidth: shipDetails.imageWidth/shipDetails.numberOfItems, sHeight: shipDetails.imageHeight,
            picturesWidth: shipDetails.imageWidth, numberOfItems: shipDetails.numberOfItems,
            width: shipDetails.width, height: shipDetails.height,
            shipTexture: shipDetails.skinName,
            speed: shipDetails.speed,
            status: shipDetails.status, name: shipDetails.name,
            bulletTypeNumber: shipDetails.bulletType, rapidFire: shipDetails.rapidFire, pointsPerUnit: shipDetails.pointsPerUnit,
            healthPoint: shipDetails.healthPoint, animationSteps: shipDetails.animationSteps, damage: shipDetails.damage,
            objectOwner: shipDetails.objectOwner, guns: (shipDetails.guns)? shipDetails.guns : [], explosion: shipDetails.explosionAnimation,
            numberOfVerticalItems: shipDetails.numberOfVerticalItems, isMove: shipDetails.isMove, isShoot: shipDetails.isShoot,
            spotDistance: shipDetails.spotDistance, behavior: behavior, verticalSpeed: (shipDetails.verticalSpeed)? shipDetails.verticalSpeed: null
        });
    }
}

function gameRandomizer(maxNumber: number, minNumber: number = 0){
    return Math.floor(Math.random() * maxNumber + minNumber);
}


export {
    enemyShipLogicVertical,
    enemyVerticalMoveCalculation,
    spawnEnemyLogic,
    createNewEnemy,
    gameRandomizer
}