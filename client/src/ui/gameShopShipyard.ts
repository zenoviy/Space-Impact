
import { renewPlayerShip } from '../engine/gameModules/changeLevels';
import { newPlayerShipConstruct } from '../engine/gameModules/satartGame';
import { assignGunsPosition } from './gameInventoryModules';
import * as constructors from '../constructors';


function replaceShipData({mainGameObject, buyShipData}){
    let playerObject = mainGameObject.gameInitData.gameData.playerObject

    mainGameObject.gameInitData.gameData.gameCoins = parseInt(buyShipData.money);

    let dataNotToReplace = {
        inventory: playerObject.data.inventory,
        firespot: playerObject.data.firespot,
        guns: playerObject.data.guns
    }

    let beforeData = playerObject.data;
    let newShip = newPlayerShipConstruct({ PlayerShip: constructors.PlayerShip, userData: buyShipData.data, shipLife: 5})
    renewPlayerShip({ originData: playerObject.data, newData: newShip.data})
    renewPlayerShip({ originData: playerObject, newData: newShip})

    playerObject.playerShipTextureChange()


    for(let i = 0; i < dataNotToReplace.inventory.length; i++){
        playerObject.data.inventory[i] = dataNotToReplace.inventory[i];
        dataNotToReplace.guns[i] = assignGunsPosition({ gun: dataNotToReplace.guns[i], firespot:  playerObject.data.firespot[i]})
        playerObject.data.guns[i] = dataNotToReplace.guns[i];
    }
}






export {
    replaceShipData
}