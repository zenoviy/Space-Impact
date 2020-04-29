import '../sass/main.sass'

import { MainGameConstructor } from './constructors/renderConstructor';
import { BlockConstructor } from './constructors/blockConstructor';
import { initView, mapMoveControllers } from './ui/view';
import { initMainEngine } from './redactor/initStartObject';
import { loadMap, saveMap } from './redactor/sidePanelActions';


(async function(){

    let mainObject = await initMainEngine({ MainGameConstructor: MainGameConstructor, BlockConstructor: BlockConstructor })
    mainObject.initView()
    mainObject.renderItemsToSideList({ mainObject: mainObject })

    const engine = setInterval(function(){ redactorEngine() }, 20)

    console.log(mainObject)
    mapMoveControllers({ mainObject: mainObject })
    saveMap({ mainObject: mainObject })
    loadMap({ mainObject: mainObject })


    function redactorEngine(){
        mainObject.clearView()

        for(let block of mainObject.allRedactorBlock){
            block.renderBlockBox({ mainObject: mainObject })
        }
    }
})()