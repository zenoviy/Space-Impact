import '../sass/main.sass'

import { MainGameConstructor } from './constructors/renderConstructor';
import { BlockConstructor } from './constructors/blockConstructor';
import { initView, mapMoveControllers } from './ui/view';
import { initMainEngine } from './redactor/initStartObject';
import { loadMap, saveMap, setMapSize } from './redactor/sidePanelActions';

/*
- add stears
- add leaders
- add horizontal elevator
- add background array and texture and display it
*/
(async function(){

    let mainObject = await initMainEngine({ MainGameConstructor: MainGameConstructor, BlockConstructor: BlockConstructor })
    mainObject.initView()
    mainObject.renderItemsToSideList({ mainObject: mainObject, dataBase: mainObject.blockDatabase })

    const engine = setInterval(function(){ redactorEngine() }, 60)

    console.log(mainObject)
    mapMoveControllers({ mainObject: mainObject })
    saveMap({ mainObject: mainObject })
    loadMap({ mainObject: mainObject })
    setMapSize({ mainObject: mainObject, BlockConstructor: BlockConstructor })


    function redactorEngine(){
        mainObject.clearView()

        for(let block of mainObject.allRedactorBlock){
            block.elevatorMove()
            block.renderBlockBox({ mainObject: mainObject })
        }
    }
})()