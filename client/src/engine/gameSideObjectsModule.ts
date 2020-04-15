import { loadExtraObject } from "../ai/regularEnemyAiModules";
import * as constructors from '../constructors/';
import { initSoundObject } from './soundModules';
import { angleFinder, searchExplosionObject } from './engineModules';
import { explosionDamage } from '../enemies/enemiesModules';

function explosionFire({targetData, mainGameObject, hitObject, SideObject, explosion}){
    let allExplosionObject = searchExplosionObject({ mainGameObject: mainGameObject })
    if(allExplosionObject.length > process.env.MAX_NUMBER_OF_EXPLOSION) return false
    if(hitObject.type === "rocket" &&  targetData.type != "rocket" && targetData.type != "player" && targetData.type != "enemy" ||
    hitObject.type === "homing_rocket" &&  targetData.type != "homing_rocket" && targetData.type != "player" && targetData.type != "enemy"){
        explosionDamage({
            hitObject: hitObject,
            mainGameObject: mainGameObject
        })
    }
    let explosionData = {
        x: (targetData.objectOwner === 'player')? targetData.x + targetData.width/2  - targetData[explosion].width : targetData.x - targetData[explosion].width,
        y: (targetData.objectOwner === 'player')? targetData.y - targetData[explosion].width/2 :
        (targetData.objectOwner === 'collide' || targetData.objectOwner === 'environment')? targetData.y :
        (targetData.objectOwner === 'enemy')?  targetData.y - targetData[explosion].width/2:  targetData.y - targetData[explosion].width,
        sx: 0,
        sy: 0,
        objectOwner: "explosion",
        sWidth: targetData[explosion].imageWidth/targetData[explosion].numberOfItems,
        sHeight: targetData[explosion].imageHeight,
        width: targetData[explosion].width*2,
        height: targetData[explosion].width*2,
        animationSteps: targetData[explosion].animationSteps,
        target: hitObject.objectOwner,
        numberOfItems: targetData[explosion].imageWidth/targetData[explosion].numberOfItems,
        texture: targetData[explosion].texture,
        speed: (hitObject.objectOwner === 'player')? targetData.speed: hitObject.speed/2,
        picturesWidth: targetData[explosion].imageWidth,
        sound: targetData[explosion].sound
    }
    let sideObject = new SideObject({...explosionData});
    let soundProps = {
        soundUrl: sideObject.sound.levelSound,
        soundLoop: sideObject.sound.soundLoop,
    }
    sideObject.sound.soundObject = initSoundObject({SoundCreator: constructors.SoundCreator, mainGameObject: mainGameObject, soundProps: soundProps})
    sideObject.img.onload = () => {
        mainGameObject.gameInitData.allGameSideObjects = mainGameObject.gameInitData.allGameSideObjects.concat(sideObject);
    }
    sideObject.loadTexture();
}



function fireAnimationEnded( allGameSideObjects ){
    this.detectFrame += 1;
    if(this.detectFrame % this.animationSteps == 0){
        this.detectFrame = 0;
        this.sx += this.sWidth;
        if(this.sx >= this.picturesWidth){
            this.objectPresent = false;
            this.sx = 0;
        }
    }
    if(this.sx >= this.picturesWidth){
        this.animationState = false;
    }
}
function mapObjectMove(){
    this.x -= (this.speed)? this.speed: 3;
}

async function mapRandomObjectSpawn(levelObjects: any[], SideObject: any, allGameSideObjects: any[]){
    this.getSecondMeasure( mapObjectSpawner, levelObjects, SideObject, allGameSideObjects)

    async function mapObjectSpawner (levelObjects, SideObject, allGameSideObjects){
        let gameData = this.showGameInfo().gameData;
        let data = this.getLevelUserData();
        let levelData = gameData.levelData;
        let spawnProbability = this.gameRandomizer(levelData.objectProbability);
        let context = this;
        if(spawnProbability < levelData.objectMinTimeSpawn){
            let screenData  = this.getScreenSize();
            let levelObjectProps = levelObjects[this.gameRandomizer(levelObjects.length)];
            if(!levelObjectProps) return false
            let yPosition = (levelObjectProps.spawnDetails.position == "bottom" && typeof levelObjectProps.spawnDetails.position === "string")? window.innerHeight - this.gameRandomizer(levelObjectProps.height/2, levelObjectProps.height/2)
                :(levelObjectProps.spawnDetails.position == "top" && typeof levelObjectProps.spawnDetails.position === "string")? this.gameRandomizer(levelObjectProps.height/3)
                :(levelObjectProps.spawnDetails.position == "scene" && typeof levelObjectProps.spawnDetails.position === "string")? this.gameRandomizer(levelObjectProps.height)
                :(typeof levelObjectProps.spawnDetails.position === "string")? this.gameRandomizer(window.innerHeight)
                : levelObjectProps.spawnDetails.position ;


            if(levelObjectProps.objectOwner == 'hangar' && this.gameInitData.tradepostInRange) return false
            if(levelObjectProps.objectOwner == 'hangar'){
                let probability = this.gameRandomizer(levelObjectProps.probability)
                if( probability > 50 && data.minutes > 0 || probability > 500 && data.minutes === 0 ) return false // 1000
                this.gameInitData.tradepostInRange = true;
            }

            

            let extraObjects =  (levelObjectProps.extraObjects)? await loadExtraObject.call(this, levelObjectProps.extraObjects): false;
            let extraObjectObjectsData = {
                x: window.innerWidth,
                y: yPosition,
                sx: 0,
                sy: 0,
                objectOwner: levelObjectProps.objectOwner,
                sWidth: levelObjectProps.imageWidth/levelObjectProps.numberOfItems,
                sHeight: levelObjectProps.imageHeight,
                width: levelObjectProps.width,
                height: levelObjectProps.height,
                animationSteps: levelObjectProps.animationSteps,
                target: null,
                numberOfItems: levelObjectProps.numberOfItems,
                texture: levelObjectProps.skinName,
                speed: levelObjectProps.speed,
                picturesWidth: levelObjectProps.imageWidth,
                healthPoint: levelObjectProps.healthPoint,
                damage: levelObjectProps.damage,
                isBackground: levelObjectProps.isBackground,
                explosion: levelObjectProps.explosionAnimation,
                pointsPerUnit: levelObjectProps.pointsPerUnit,
                extraObjects: extraObjects,
                collideExplosionAnimation: (levelObjectProps.collideExplosionAnimation)? levelObjectProps.collideExplosionAnimation: null,
                sound: levelObjectProps.sound,
                side: (levelObjectProps.side)? levelObjectProps.side : null,
                rapidFire: (levelObjectProps.rapidFire)? levelObjectProps.rapidFire : null,
                isShot: (levelObjectProps.isShot)? levelObjectProps.isShot : false,
                guns: (levelObjectProps.guns)? levelObjectProps.guns : null,
                tradePropertyes: (levelObjectProps.tradePropertyes)? levelObjectProps.tradePropertyes : null,
                defaultAngle: (levelObjectProps.defaultAngle)? levelObjectProps.defaultAngle : null
            }
            let sideObject = new SideObject({...extraObjectObjectsData});

             sideObject.img.onload = () => {
                context.gameInitData.allGameSideObjects = context.gameInitData.allGameSideObjects.concat(sideObject);
            }
            sideObject.img.onload = () => {
                this.gameInitData.allGameSideObjects = this.gameInitData.allGameSideObjects.concat(sideObject);
            }
            sideObject.loadTexture();
        }
    }
}

function loadTexture(){
    this.img.src = this.texture;
}


function findCloseObject({allGameEnemies}){
    if(allGameEnemies.length < 0) return false
    let closestUnit;
    let closestUnitXrange = Infinity;
    let closestUnitYrange = Infinity;

    for(let ship of allGameEnemies){
        if(!ship) continue
        let distanceX = (ship.x > this.x)? ship.x - this.x : this.x - ship.x;
        let distanceY = (ship.y > this.y)? ship.y - this.y : this.y - ship.y;

        let minx = Math.min(ship.x + (distanceX / ship.speed), this.x);
        let maxx = Math.max(ship.x + (distanceX / ship.speed), this.x);
        let miny = Math.min(ship.y, this.y);
        let maxy = Math.max(ship.y, this.y);
        let xRange = maxx - minx;
        let yRange = maxy - miny;

        if( xRange < closestUnitXrange && yRange < closestUnitYrange ){
            closestUnit = ship
        }
    }
    return closestUnit
}

function findAngleToShip({ closestUnit }){
    let angle = angleFinder({object: this, target: closestUnit})

    if(this.defaultAngle){
        switch (true){
            case angle > this.defaultAngle.min || angle <  this.defaultAngle.max:
                angle = 0;
                break
            case angle < this.defaultAngle.min || angle >  this.defaultAngle.max:
                break
            default:
                angle = 0;
        }
    }
    return angle
}

function sideObjectShot(BulletConstruct, mainGameObject, SoundCreator, owner, allGameEnemies){
    //this.shotAngle = findCloseObjectAngle.call(this, BulletConstruct, mainGameObject, SoundCreator, owner, allGameEnemies);
    if(allGameEnemies.length < 0) return false
    let closestUnit = findCloseObject.call(this, {allGameEnemies: allGameEnemies})
    if(!closestUnit || closestUnit.x > window.innerWidth) return false
    let angle = findAngleToShip.call(this, { closestUnit: closestUnit })

    this.shotAngle = angle;
    this.shot(BulletConstruct, mainGameObject, SoundCreator, owner)
}

export {
    explosionFire,
    fireAnimationEnded,
    mapRandomObjectSpawn,
    mapObjectMove,
    findAngleToShip,
    findCloseObject,
    loadTexture,
    sideObjectShot
}
