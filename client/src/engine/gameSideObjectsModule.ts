import { loadExtraObject } from "../ai/regularEnemyAiModules";
import * as constructors from '../constructors/';
import { initSoundObject } from './soundModules';
import { angleFinder } from './engineModules';

function explosionFire(targetData, mainGameObject, hitObject, SideObject, explosion){
    let hitX = hitObject.x + hitObject.width/2, targetX = targetData.x + targetData.width/2;
    //let adjust = Math.max(hitX, targetX) - Math.min(hitX, targetX);

    let explosionData = {
            x: targetData.x - targetData[explosion].width/2,
            y: (targetData.bulletType || targetData[explosion].central)? targetData.y - targetData[explosion].width/2: targetData.y,
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
            speed: hitObject.speed/2,
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
        sideObject.img.src = sideObject.texture;
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

async function mapRanomObjectSpawn(levelObjects: any[], SideObject: any, allGameSideObjects: any[]){
    this.getSecondMeasure( mapObjectSpawner, levelObjects, SideObject, allGameSideObjects)

    async function mapObjectSpawner (levelObjects, SideObject, allGameSideObjects){
        let gameData = this.showGameInfo().gameData;
        let levelData = gameData.levelData;
        let spawnProbability = this.gameRandomizer(levelData.objectProbability);
        let context = this;
        if(spawnProbability < levelData.objectMinTimeSpawn){
            let screenData  = this.getScreenSize();
            let levelObjectProps = levelObjects[this.gameRandomizer(levelObjects.length)];

            let yPosition = (levelObjectProps.spawnDetails.position == "bottom" && typeof levelObjectProps.spawnDetails.position === "string")? window.innerHeight - this.gameRandomizer(levelObjectProps.height)
            :(levelObjectProps.spawnDetails.position == "top" && typeof levelObjectProps.spawnDetails.position === "string")? this.gameRandomizer(levelObjectProps.height/3)
            :(levelObjectProps.spawnDetails.position == "scene" && typeof levelObjectProps.spawnDetails.position === "string")? this.gameRandomizer(levelObjectProps.height)
            :(typeof levelObjectProps.spawnDetails.position === "string")? this.gameRandomizer(window.innerHeight)
            : levelObjectProps.spawnDetails.position ;

            if(levelObjectProps.objectOwner == 'hangar' && this.gameInitData.tradepostInRange) return false
            if(levelObjectProps.objectOwner == 'hangar'){
                let probability = this.gameRandomizer(levelObjectProps.probability)
                if(probability > 1000) return false
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
                guns: (levelObjectProps.guns)? levelObjectProps.guns : null
            }
            let sideObject = new SideObject({...extraObjectObjectsData});

             sideObject.img.onload = () => {
                context.gameInitData.allGameSideObjects = context.gameInitData.allGameSideObjects.concat(sideObject);
            }
            sideObject.img.src = sideObject.texture;
            sideObject.img.onload = () => {
                this.gameInitData.allGameSideObjects = this.gameInitData.allGameSideObjects.concat(sideObject);
            }
        }
    }
}

function sideObjectShot(BulletConstruct, mainGameObject, SoundCreator, owner, allGameEnemies){
    if(allGameEnemies.length < 0) return false
    let closestUnit;
    let closestUnitXrange = Infinity;
    let closestUnitYrange = Infinity;
    for(let ship of allGameEnemies){
        let minx = Math.min(ship.x, this.x);
        let maxx = Math.max(ship.x, this.x);
        let miny = Math.min(ship.y, this.y);
        let maxy = Math.max(ship.y, this.y);
        let xRange = maxx - minx;
        let yRange = maxy - miny;
        if( xRange < closestUnitXrange && yRange < closestUnitYrange ){
            closestUnit = ship
        }
    }
    if(!closestUnit || closestUnit.x > window.innerWidth) return false
    let angle = angleFinder({object: this, target: closestUnit})

    this.shotAngle = angle;
    this.shot(BulletConstruct, mainGameObject, SoundCreator, owner)
}

export {
    explosionFire,
    fireAnimationEnded,
    mapRanomObjectSpawn,
    mapObjectMove,
    sideObjectShot
}
