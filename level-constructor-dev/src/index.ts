import '../sass/main.sass'

import { MainGameConstructor } from './constructors/renderConstructor';
import { BlockConstructor } from './constructors/blockConstructor';
import { initView, mapMoveControllers } from './ui/view';
import { initMainEngine, blockAnimationRender } from './redactor/initStartObject';
import { loadMap, saveMap, setMapSize, createNewMap } from './redactor/sidePanelActions';

/*
V- create map net
    V- vertical direction of block
    V- destroy some blocks
    V- block information
        V - delete block
        V- preview
        V- information
        V- change data
            V- width
            V- height
            V- x
            V- y
            V- description
            V- rulers
            - elevator speed
            - direction
V- side panel
    V- new map
        V- map name
        V- save map in json
        V- change map size
        V- overwrite map
    V- load map
    V- minimap
    V- different sections of objects
        V- block
        V- characters
        V- enemy
        V- background
        V- dynamic spawn


V- add stairs
V- add leaders
V- doors
   V - doors access card
V- add horizontal elevator
V- add background texture and display it
    V- destroy/ change textures separately
    V- add texture animations
V- add NPC
   V - dialog
        - 7 - 8 levels
            - start base base
                - find ship
            - command center
                - get importend data
                - urn on defence system
            - desert archeological excavations
                - find ancient artifact
            - sky city
                - talk with commander and scientist
                - get importend data
            - moon base
                - fixed transportation gate center
                - rescue facility personal
            - venus
                - save platform
                - repare station
                - activete defence system
                - recharge you ship
            - mars
                - activate tracking system
                - trace of enemy
                - activate transpotrt system

            - Jupiter ?
                - 0G
                - spaceStation Io


*/
(async function(){

    let mainObject = await initMainEngine({ MainGameConstructor: MainGameConstructor, BlockConstructor: BlockConstructor })
    mainObject.initView()
    mainObject.renderItemsToSideList({ mainObject: mainObject, dataBase: mainObject.blockDatabase })

    const engine = setInterval(function(){
        redactorEngine()
    }, 50)

    //console.log(mainObject)
    mapMoveControllers({ mainObject: mainObject })
    saveMap({ mainObject: mainObject })
    loadMap({ mainObject: mainObject })
    setMapSize({ mainObject: mainObject, BlockConstructor: BlockConstructor })
    createNewMap()


     async function redactorEngine(){
        mainObject.clearView()
        //console.log(mainObject.allRedactorBlock)
        for(let block of mainObject.allRedactorBlock){
            if(block.xMove > 0 && block.xMove < window.innerWidth ||  block.yMove > 0 && block.yMove < window.innerHeight){
                await block.renderBlockBox({ mainObject: mainObject })
               await block.elevatorMove()
               await blockAnimationRender({ block: block })
            }else continue
        }
    }
})()