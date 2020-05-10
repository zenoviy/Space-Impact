import '../sass/main.sass'

import { MainGameConstructor } from './constructors/renderConstructor';
import { BlockConstructor } from './constructors/blockConstructor';
import { initView, mapMoveControllers } from './ui/view';
import { initMainEngine, blockAnimationRender } from './redactor/initStartObject';
import { loadMap, saveMap, setMapSize, createNewMap } from './redactor/sidePanelActions';

/*
V- create map net
    V- vertical direction of block
    - destroy some blocks
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


V- add stairs
- add leaders
V- add horizontal elevator
V- add background texture and display it
    V- destroy/ change textures separately
    V- add texture animations
- add NPC
    - dialog


*/
(async function(){

    let mainObject = await initMainEngine({ MainGameConstructor: MainGameConstructor, BlockConstructor: BlockConstructor })
    mainObject.initView()
    mainObject.renderItemsToSideList({ mainObject: mainObject, dataBase: mainObject.blockDatabase })

    const engine = setInterval(function(){
        redactorEngine()
    }, 60)

    //console.log(mainObject)
    mapMoveControllers({ mainObject: mainObject })
    saveMap({ mainObject: mainObject })
    loadMap({ mainObject: mainObject })
    setMapSize({ mainObject: mainObject, BlockConstructor: BlockConstructor })
    createNewMap()


    async function redactorEngine(){
        mainObject.clearView()

        for(let block of mainObject.allRedactorBlock){
           await block.elevatorMove()
           blockAnimationRender({ block: block })
           await block.renderBlockBox({ mainObject: mainObject })
        }
    }
})()