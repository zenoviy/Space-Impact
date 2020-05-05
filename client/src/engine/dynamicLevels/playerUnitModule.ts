/*  Dynamic level

    - level constructor
       V - create level
       V - save level
       V - load level
       V - place characters
       V - player collect data
       V - player shoot
        - place enemy

    V - change Game mechanics using current level data
    V- fetch level array with all level blocks
      V  - display all blocks on screen
       V - place player at particular location ( level started )
   V - change background move and level timing
        - enemy moves waiting and attack player
           V - !maybe load parts of map!
       V - everything depends on player move
           V - Player on center Map move  right, up or down
           V - simulation of gravity
            V- Player Jump
            - player shoot using mouse direction
            - complicated player animation
    V - Level ends when player reach the dor or final object
    - one hit - one life

*/
import { getData } from '../../server/serverRequestModules';
import { show, hide} from '../../appMenu/appMenu';
import { angleFinder } from '../engineModules';


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
    //console.log(character[0], user)
    return user
}



function showGroundPlayerInventory({ mainGameObject }){
    console.log('Ground Inventory Show')
    let inventoryWrapper = document.querySelector('#backpack-wrapper');
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    if(process.env.GROUND_CHARACTERS_INVENTORY === 'false'){
        process.env.GROUND_CHARACTERS_INVENTORY = 'true';
        show(inventoryWrapper)
    }else{
        process.env.GROUND_CHARACTERS_INVENTORY = 'false';
        hide(inventoryWrapper)
    }
}


function loadPlayerCharacter({ mainGameObject }){

}

function playerAnimation({ groundPlayer, mainGameObject }){
    let extraSeconds = mainGameObject.gameInitData.gameExtraSeconds;
    //console.log(groundPlayer.playerDirectionHorizontal)
    //console.log(groundPlayer.playerDirectionVertical)
}




function changeAnimationParameters(){

    if(this.isRun && this.groundTouch){
        if(this.numberOfItems != this.animations.run.numberOfItems){
            renewAnimation.call(this)
        }
        this.img.src = __dirname + this.animations.run.innerTexture;
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.run })
    }
    else if(this.isRun === false && this.groundTouch){
        if(this.numberOfItems != this.animations.stand.numberOfItems){
            renewAnimation.call(this)
        }
        this.img.src = __dirname + this.animations.stand.innerTexture;
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.stand })
    }
    else if(!this.groundTouch && !this.onElevator){

        if(this.numberOfItems != this.animations.jump.numberOfItems){
            renewAnimation.call(this)
        }
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


//   знімати дані з блоків знаходити блок спавна
export {
    loadPlayerCharacter,
    initGroundPlayer,
    showGroundPlayerInventory,
    playerAnimation,
    changeAnimationParameters,
    changeVerticalAnimationPicture,
    backToTheMapAgain,
    groundPlayerShot
}