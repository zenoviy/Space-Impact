import { timingSafeEqual } from "crypto";
import { loadExtraObject } from "../ai/regularEnemyAiModules";
import * as constructors from '../constructors/';
import { initSoundObject } from './soundModules';

function explosionFire(targetData, mainGameObject, hitObject, SideObject, explosion){
    let hitX = hitObject.x + hitObject.width/2, targetX = targetData.x + targetData.width/2;
    let adjust = Math.max(hitX, targetX) - Math.min(hitX, targetX);

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
        console.log("explosion sound", sideObject.sound)

        /**/let soundProps = {
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

            let yPosition = (levelObjectProps.spawnDetails.position == "bottom" && typeof levelObjectProps.spawnDetails.position === "string")? screenData.height - this.gameRandomizer(levelObjectProps.height)
            :(levelObjectProps.spawnDetails.position == "top" && typeof levelObjectProps.spawnDetails.position === "string")? this.gameRandomizer(levelObjectProps.height/3)
            :(levelObjectProps.spawnDetails.position == "scene" && typeof levelObjectProps.spawnDetails.position === "string")? this.gameRandomizer(levelObjectProps.height)
            :(typeof levelObjectProps.spawnDetails.position === "string")? this.gameRandomizer(screenData.height)
            : levelObjectProps.spawnDetails.position ;

            let extraObjects =  (levelObjectProps.extraObjects)? await loadExtraObject.call(this, levelObjectProps.extraObjects): false;
            let explosionData = {
                x: screenData.width,
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
                sound: levelObjectProps.sound
            }
            let sideObject = new SideObject({...explosionData});
            sideObject.img.src = sideObject.texture;
            sideObject.img.onload = () => {
                this.gameInitData.allGameSideObjects = this.gameInitData.allGameSideObjects.concat(sideObject);
            }
        }
    }
}

export {
    explosionFire,
    fireAnimationEnded,
    mapRanomObjectSpawn,
    mapObjectMove
}
