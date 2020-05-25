
import { getData } from '../../server/serverRequestModules';
import { loadGroundPlayer } from '../../server/gameDataRequestsServicesModule';
import { show, hide} from '../../appMenu/appMenu';
import { angleFinder } from '../engineModules';
import { createElements } from '../../appMenu/pagesBuilder';
import { saveObjectToBackPack } from './dynamicDialog';
//import * as constructors from '../../constructors/index';


async function initGroundPlayer({ DynamicUserConstructor }){
    let character = await loadGroundPlayer();
    if(!character) return false
    let user = new DynamicUserConstructor({...character[0]});
    return user
}



function showGroundPlayerInventory({ mainGameObject }){
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    if(process.env.GROUND_CHARACTERS_INVENTORY === 'false'){
        if(mainGameObject.gameInitData.gameOver || !mainGameObject.gameInitData.dynamicLevelsActive ||
            mainGameObject.gameInitData.gamePause || !mainGameObject.gameInitData.gameStatus) return false
        openInventory()
        loadItemsToGroundInventory({groundPlayer : groundPlayer})
    }else{
        hideInventory()
    }
}


function openInventory(){
    let inventoryWrapper = document.querySelector('#backpack-wrapper');
    show(inventoryWrapper)
    process.env.GROUND_CHARACTERS_INVENTORY = 'true';
}

function hideInventory(){
    let inventoryWrapper = document.querySelector('#backpack-wrapper');
    hide(inventoryWrapper)
    process.env.GROUND_CHARACTERS_INVENTORY = 'false';
}



function loadItemsToGroundInventory({groundPlayer}){
    let playerInventory = groundPlayer.inventory;
    let objectToRender = document.querySelector("#backpack-body");
    objectToRender['width'] = "auto";

    if(playerInventory.length > 0){
        let allInnerObject = loadPlayerCharacter({ playerInventory: playerInventory })
        objectToRender.innerHTML = allInnerObject;
    }else {
        objectToRender.innerHTML = "<p>No items in this inventory</p>";
    }
}




function loadPlayerCharacter({ playerInventory }){
    let items = '';

    for(let item of playerInventory){
        items += `<div class="backpack-item-wrapper">
        <span class="number-of-items">${item.numberOfItems}</span>
            <img class="back-pack-item-picture" src="${(item.objectPicture)? item.objectPicture : item.texture}">

            <p>${item.innerData.split("_").join(" ")}</p>
        </div>`
    }
    return items
}



function playerAnimation({ groundPlayer, mainGameObject }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
}





/* ==========================

Method to change unit animations, based on json data

 ========================== */

function runAnimation({renewAnimation, layerDefaultSize, shotAngleAnimation}){
    if(this.numberOfItems != this.animations.run.numberOfItems) renewAnimation.call(this)

    layerDefaultSize.call(this)
    this.playerDirectionVertical = 'stand';

    this.onLeader = false;
    this.img.src = __dirname + this.animations.run.innerTexture;
    replacerOfValue({ originalObject: this, dataToReplace: this.animations.run })
    if(this.objectOwner === "groundPlayer" && this.isShot){
        shotAngleAnimation.call(this, 'runAndShotTop', 'runAndShotBottom', 'runAndShotForward')
    }
}

function sitingAnimation({renewAnimation, shotAngleAnimation}){
    if(this.numberOfItems != this.animations.sit.numberOfItems) renewAnimation.call(this);

        this.height = this.animations.sit.height;
        this.sHeight = this.animations.sit.imageHeight/2;
        this.img.src = __dirname + this.animations.sit.innerTexture;
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.sit })
        if(this.objectOwner === "groundPlayer" && this.isShot){
            shotAngleAnimation.call(this, 'sitShotTop', 'sitShotBottom', 'sit')
        }
}

function leaderAnimation({renewAnimation, shotAngleAnimation}){
    if(this.numberOfItems != this.animations.leader.numberOfItems) renewAnimation.call(this);
        this.height = this.animations.leader.height;
        this.sWidth = this.animations.leader.imageWidth/this.animations.leader.numberOfItems;
        this.sHeight = this.animations.leader.imageHeight/2;
        this.img.src = __dirname + this.animations.leader.innerTexture;
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.leader })

        if(this.objectOwner === "groundPlayer" && this.isShot){
            shotAngleAnimation.call(this, 'leaderShotTop', 'leaderShotBottom', 'leaderShotSide')
       }
}
function standingAnimation({renewAnimation, shotAngleAnimation, layerDefaultSize}){
    if(this.numberOfItems != this.animations.stand.numberOfItems) renewAnimation.call(this)
        layerDefaultSize.call(this)
        this.playerDirectionVertical = 'stand';
        this.onLeader = false;
        this.img.src = __dirname + this.animations.stand.innerTexture;
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.stand })
        if(this.objectOwner === "groundPlayer"){
            shotAngleAnimation.call(this, 'standAndShotTop', 'standAndShotBottom', null)
        }
}
function jumpAnimation({renewAnimation, layerDefaultSize, shotAngleAnimation}){
    if(this.numberOfItems != this.animations.jump.numberOfItems) renewAnimation.call(this)
        layerDefaultSize.call(this)
        this.playerDirectionVertical = 'stand';
        this.onLeader = false;
        this.img.src = __dirname + this.animations.jump.innerTexture;
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.jump })
        if(this.objectOwner === "groundPlayer"){
            shotAngleAnimation.call(this, 'jump', 'jumpShotBottom', 'jumpShotCenter')   // standAndShotTop  standAndShotBottom
        }
}



function changeAnimationParameters(){

    if( !this.objectPresent ){
        if(this.numberOfItems != this.animations.death.numberOfItems) renewAnimation.call(this)

        this.img.src = __dirname + this.animations.death.innerTexture;
        this.width = (this.animations.death.width)? this.animations.death.width : this.width
        this.height = (this.animations.death.height)? this.animations.death.height : this.height
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.death })
    }else if(this.objectOwner === "groundPlayer" && this.onLeader && this.playerDirectionVertical === "up" ||
    this.objectOwner === "groundPlayer" && this.onLeader && this.playerDirectionVertical === "down" ){
        leaderAnimation.call(this, {
           renewAnimation: renewAnimation,
           shotAngleAnimation: shotAngleAnimation
        })
    }
    else if(this.playerDirectionVertical === "down" && !this.onLeader && this.objectOwner === "groundPlayer"){
        sitingAnimation.call(this, {
            renewAnimation: renewAnimation,
            shotAngleAnimation: shotAngleAnimation
        })
    }
    else if(this.isRun && this.groundTouch && this.objectOwner){
        runAnimation.call(this, {
            renewAnimation: renewAnimation,
            layerDefaultSize: layerDefaultSize,
            shotAngleAnimation: shotAngleAnimation
        })
    }
    else if(this.isRun === false && this.groundTouch && this.objectOwner || this.onElevator && this.objectOwner){
        standingAnimation.call(this, {
            renewAnimation: renewAnimation,
            shotAngleAnimation: shotAngleAnimation,
            layerDefaultSize: layerDefaultSize
        })
    }
    else if( !this.groundTouch && !this.onElevator && this.objectOwner){
        jumpAnimation.call(this, {
            renewAnimation: renewAnimation,
            layerDefaultSize: layerDefaultSize,
            shotAngleAnimation: shotAngleAnimation
        })
    }
    this.sWidth = this.imageWidth/this.numberOfItems;
    
        this.onLeader = false;
        this.leaderClimb = false;
    function layerDefaultSize(){
        if(this.objectOwner === "groundPlayer"){
            this.width = this.defaultWidth;
            this.height = this.defaultHeight;
            this.sHeight = this.imageHeightDefault/2;
            this.sWidth = this.imageWidthDefault/this.numberOfItems;
        }
    }

    function shotAngleAnimation(animationNameTop, animationNameBottom, animationNameStand){
        if(this.shotAngle < 335 && this.shotAngle > 200){

            this.img.src = __dirname + this.animations[animationNameTop].innerTexture;
            replacerOfValue({ originalObject: this, dataToReplace: this.animations[animationNameTop] })

        }else if(this.shotAngle > 30 && this.shotAngle < 160){

            this.img.src = __dirname + this.animations[animationNameBottom].innerTexture;
            replacerOfValue({ originalObject: this, dataToReplace: this.animations[animationNameBottom] })

        }else if(this.shotState && animationNameStand && this.shotAngle > 0 && this.shotAngle < 30 ||

            this.shotState && animationNameStand && this.shotAngle < 360 && this.shotAngle > 200 ||
            this.shotState && animationNameStand && this.shotAngle > 160 && this.shotAngle < 200){
                this.img.src = __dirname + this.animations[animationNameStand].innerTexture;
            if(this.numberOfItems != this.animations[animationNameStand].numberOfItems) renewAnimation.call(this)
            replacerOfValue({ originalObject: this, dataToReplace: this.animations[animationNameStand] })
        }
    }
}

function renewAnimation(){
    this.sx = 0;
    this.detectFrame = 0;
}

function replacerOfValue({ originalObject, dataToReplace }){
    for(let [key, value] of Object.entries(dataToReplace)){
        if(originalObject[key]){
            originalObject[key] = value
        }
    }
}



function changeVerticalAnimationPicture(){
    this.changeAnimationParameters()
    if(this.playerDirectionHorizontal === 'right') this.sy = 0;
    if(this.playerDirectionHorizontal === 'left') this.sy = this.sHeight;
}


function groundPlayerMinusLife({mainGameObject, constructors}){
    var levelData = mainGameObject.getLevelUserData();

    let mainPlayerData = levelData.source.playerObject;
    mainPlayerData.numberOflife -= 1;
    //if(mainPlayerData.numberOflife > 0) this.healthPoint = this.defaultHealth

            if(mainPlayerData.numberOflife <= 0){
                mainGameObject.gameOverWindow()
                mainGameObject.gameInitData.gameOver = true;
                mainGameObject.mapSoundChanger({soundStatus:'game_over_screen'})
                setTimeout(function(){
                     mainGameObject.backToStartScreen(constructors)
                }, 3000)
                return
            }
}


function backToTheMapAgain({ mainGameObject, player, constructors }){
    let allEnemy = mainGameObject.gameInitData.dynamicLevelEnemy;
    let allBlocks = [].concat(mainGameObject.gameInitData.dynamicLevelMapBlocks, allEnemy);

    let maxDistance = 1000;
    let closestBlock = allBlocks.find(block => {
        if(Math.max(block.x, player.x) - Math.min(block.x, player.x) < maxDistance &&
        Math.max(block.y, player.y) - Math.min(block.y, player.y) < maxDistance) return block
    })

    if(!closestBlock){
        if(!mainGameObject.gameInitData.levelChange) groundPlayerMinusLife({mainGameObject: mainGameObject, constructors: constructors})
        let allGameBackgroundElements = mainGameObject.gameInitData.mapBackgroundObjects;
        let allGamesObject = [].concat(allGameBackgroundElements)
        let spawnPoint = allBlocks.find(obj => {
            if(obj.details) return obj.details.type === "spawner";
        })
        if(!spawnPoint) return false
        let xRangeCompensation = window.innerWidth/2 - (spawnPoint.x + spawnPoint.width/2);
        let yRangeCompensation = window.innerHeight/2 - spawnPoint.y;

        for(let block of allBlocks){
            block.x += xRangeCompensation;
            block.y += yRangeCompensation;
        }
        for(let map of allGamesObject ){
            map.y = map.defaultY;
        }
        for(let enemy of allEnemy){
            allEnemy.isRun = false;
            allEnemy.groundTouch = true;
        }
    }
}


function groundPlayerShot({ groundPlayer, event }){
    let angle = angleFinder({
        object: groundPlayer,
        target: {x: event.clientX, y: event.clientY, width: 1, height: 1, speed: 1}
    })
    if(groundPlayer.onLeader && groundPlayer.leaderClimb){
        groundPlayer.playerDirectionHorizontal = (angle > 90 && angle <= 270)?  groundPlayer.playerDirectionHorizontal = "left"
        : groundPlayer.playerDirectionHorizontal = "right";
        return false
    }
    if(groundPlayer.playerDirectionHorizontal === "left" && angle > 90 && angle <= 270)return angle
    else if(groundPlayer.playerDirectionHorizontal === "right" && angle > 270 && angle <= 360 || groundPlayer.playerDirectionHorizontal === "right" && angle > 0 && angle <= 90) return angle
    else return false
}


function groundPlayerCollectable({allGameSideObjects, playerShipData, mainGameObject}){
    saveObjectToBackPack({
        groundPlayer: playerShipData,
        data: this.grapplePower.grappleItem,
        previewPicture: this.grapplePower.previewPicture
    })
}


export {
    loadPlayerCharacter,
    initGroundPlayer,
    showGroundPlayerInventory,
    playerAnimation,
    changeAnimationParameters,
    changeVerticalAnimationPicture,
    backToTheMapAgain,
    groundPlayerShot,
    groundPlayerCollectable,
    hideInventory,
    openInventory
}