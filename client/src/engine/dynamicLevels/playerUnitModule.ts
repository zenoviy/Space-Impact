/*  Dynamic level

    - level constructor
       V - create level
       V - save level
       V - load level
        - place characters
        - place enemy

    - change Game mechanics using current level data
    - fetch level array with all level blocks
        - display all blocks on screen
        - place player at particular location ( level started )
    - change background move and level timing
        - enemy moves waiting and attack player
            - !maybe load parts of map!
        - everything depends on player move
            - Player on center Map move  right, up or down
            - simulation of gravity
            - Player Jump
            - player shoot using mouse direction
            - complicated player animation
    - Level ends when player reach the dor or final object
    - one hit - one life

*/
import { getData } from '../../server/serverRequestModules';

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


function loadPlayerCharacter({ mainGameObject }){

}
//   знімати дані з блоків знаходити блок спавна
export {
    loadPlayerCharacter,
    initGroundPlayer
}