/*  Dynamic level

   V - level constructor
       V - create level
       V - save level
       V - load level
       V - place characters
       V - player collect data
       V - player shoot
       V - place enemy

    V - change Game mechanics using current level data
    V- fetch level array with all level blocks
      V  - display all blocks on screen
       V - place player at particular location ( level started )
   V - change background move and level timing
       V - enemy moves waiting and attack player
           V - enemy detect empty blocks and stop
           V - switch behavior
           V - !maybe load parts of map!
       V - everything depends on player move
           V - Player on center Map move  right, up or down
           V - simulation of gravity
            V- Player Jump
            V- player shoot using mouse direction
            V- complicated player animation
               V - change textures
                    - add leader animation
                    - shoot up down
    V - Level ends when player reach the dor or final object
        V- grapple coin
        V- grapple life
        - grapple card
        - add minimap
        V - add inventory elements
    V - one hit - one life

    - dialog
        - scientists
        - military
        - civil



    // ============== Editor ================= //



*/
import { getData } from '../../server/serverRequestModules';
import { show, hide} from '../../appMenu/appMenu';
import { angleFinder } from '../engineModules';
import { createElements } from '../../appMenu/pagesBuilder';
import { saveObjectToBackPack } from './dynamicDialog';


/// process.env.GROUND_CHARACTERS_URL
// process.env.HOST

async function initGroundPlayer({ DynamicUserConstructor }){
    let character = await getData({
        url: process.env.HOST + process.env.GROUND_CHARACTERS_URL,
        method: 'GET',
        data: null,
        headers: {
            'item-id': "main_character",
        }
    })
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

    if(playerInventory.length > 0){     // createElements
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
            <img class="back-pack-item-picture" src="${(item.objectPicture)? item.objectPicture : item.texture}"> <p>${item.innerData}</p>
        </div>
        `
    }
    return items
}



function playerAnimation({ groundPlayer, mainGameObject }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    //console.log(groundPlayer.playerDirectionHorizontal)
    //console.log(groundPlayer.playerDirectionVertical)
}




function changeAnimationParameters(){
    if(this.isRun && this.groundTouch){
        if(this.numberOfItems != this.animations.run.numberOfItems) renewAnimation.call(this)

        this.img.src = __dirname + this.animations.run.innerTexture;
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.run })
    }
    else if(this.isRun === false && this.groundTouch || this.onElevator){
        if(this.numberOfItems != this.animations.stand.numberOfItems) renewAnimation.call(this)

        this.img.src = __dirname + this.animations.stand.innerTexture;
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.stand })
    }
    else if( !this.groundTouch && !this.onElevator ){
        if(this.numberOfItems != this.animations.jump.numberOfItems) renewAnimation.call(this)
        this.img.src = __dirname + this.animations.jump.innerTexture;
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.jump })
    }
    this.sWidth = this.imageWidth/this.numberOfItems;
    function renewAnimation(){
        this.sx = 0;
        this.detectFrame = 0;
    }
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




function backToTheMapAgain({ mainGameObject, player }){
    let allEnemy = mainGameObject.gameInitData.dynamicLevelEnemy;
    let allBlocks = [].concat(mainGameObject.gameInitData.dynamicLevelMapBlocks, allEnemy);

    let maxDistance = 1000;
    let closestBloc = allBlocks.find(block => {
        if(Math.max(block.x, player.x) - Math.min(block.x, player.x) < maxDistance &&
        Math.max(block.y, player.y) - Math.min(block.y, player.y) < maxDistance) return block
    })

    if(!closestBloc){
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
    }
}


function groundPlayerShot({ groundPlayer, event }){
    let angle = angleFinder({
        object: groundPlayer,
        target: {x: event.clientX, y: event.clientY, width: 1, height: 1, speed: 1}
    })

    if(groundPlayer.playerDirectionHorizontal === "left" && angle > 90 && angle <= 270)return angle
    else if(groundPlayer.playerDirectionHorizontal === "right" && angle > 270 && angle <= 360 || groundPlayer.playerDirectionHorizontal === "right" && angle > 0 && angle <= 90) return angle
    else return false
}
function groundPlayerLifeSystem(){

}

function groundPlayerCollectable({allGameSideObjects, playerShipData, mainGameObject}){
    saveObjectToBackPack({
        groundPlayer: playerShipData,
        data: this.grapplePower.grappleItem,
        previewPicture: this.grapplePower.previewPicture})
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