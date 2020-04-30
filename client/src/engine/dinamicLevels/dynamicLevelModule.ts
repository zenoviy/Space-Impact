import * as constructors from '../../constructors';
import { getData } from '../../server/serverRequestModules';

// process.env.DYNAMIC_LEVEL_BLOCKS
// process.env.HOST
async function loadLevelMap({ levelMapName, DynamicBlockConstructor }){
    let dynamicMap = process.env.HOST + process.env.DYNAMIC_LEVEL_BLOCKS + '/' + levelMapName;

    let resultData = await getData({
        url: dynamicMap,
        method: 'GET',
        data: null,
        headers: null
    })

    let levelBlocks = await resultData.allMapObjects.filter(block => {
        return block.details
    }).map(block => {
        return new DynamicBlockConstructor({...block })
    })
    console.log(resultData, levelBlocks, "<<<")
    return levelBlocks
}




export {
    loadLevelMap
}