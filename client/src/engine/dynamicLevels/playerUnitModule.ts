/*  Dynamic level

    - level constructor
       V - create level
       V - save level
       V - load level
       V - place characters
       V - player collect data
        - player shoot
        - place enemy

    V - change Game mechanics using current level data
    V- fetch level array with all level blocks
      V  - display all blocks on screen
       V - place player at particular location ( level started )
   V - change background move and level timing
        - enemy moves waiting and attack player
            - !maybe load parts of map!
        - everything depends on player move
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
    console.log(character[0], user)
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
    if(this.isRun){
        if(this.numberOfItems != this.animations.run.numberOfItems){
            console.log('ChangeAnimation')
            renewAnimation.call(this)
        }
        this.img.src = __dirname + this.animations.run.innerTexture;
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.run })
    }
    else if(this.isRun === false){
        if(this.numberOfItems != this.animations.stand.numberOfItems){
            console.log('ChangeAnimation stand')
            renewAnimation.call(this)
        }
        this.img.src = __dirname + this.animations.stand.innerTexture;
        replacerOfValue({ originalObject: this, dataToReplace: this.animations.stand })
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
        //console.log(key, value)
    }
}

function changeVerticalAnimationPicture(){
//console.log(this.isRun, this)
    this.changeAnimationParameters()
    if(this.playerDirectionHorizontal === 'right') this.sy = 0;
    if(this.playerDirectionHorizontal === 'left') this.sy = this.sHeight;

    
}
//   знімати дані з блоків знаходити блок спавна
export {
    loadPlayerCharacter,
    initGroundPlayer,
    showGroundPlayerInventory,
    playerAnimation,
    changeAnimationParameters,
    changeVerticalAnimationPicture
}