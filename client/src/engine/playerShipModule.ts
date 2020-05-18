

import * as constructors from '../constructors/';
import { shot, bulletsCreateModule } from '../enemies/enemiesModules';
import { inventoryColisionEvent, findIntInventory } from '../ui/shop/shopEvents/shopEventsModules';
import { replaceItemFromStorage } from '../ui/shop/gameInventoryModules';
import { enterToTheShopDialog, leaveShop } from '../ui/shop/gameShopModule';
import { show, hide } from '../appMenu/appMenu';
import { showGroundPlayerInventory, playerAnimation, groundPlayerShot } from '../engine/dynamicLevels/playerUnitModule';
import { backgroundMoveDuringMove, mapGravityInit } from '../engine/dynamicLevels/dynamicLevelModule';
import { interactWithObjects } from '../engine/dynamicLevels/dynamicDialog';
import { leadersFunctionality } from '../engine/dynamicLevels/dynamicLevelInteractiveElements';
import { createMapRenderField } from '../engine/dynamicLevels/minimap';
import { openJournal } from '../engine/dynamicLevels/journalModules';

function initPlayerShip(){
    if(this.ctx){
        this.img = new Image();
        this.img.onload = () => {
            if(this.placePlayerShip){
                this.placePlayerShip()
            }
            return this.img
        }
        this.playerShipTextureChange()
    }
}
function playerShipTextureChange(){
    this.img.src = __dirname + this.data.texture;
}







function userKeyAction({ mainGameObject, controlKeys, event}){
    let userShipData = mainGameObject.gameInitData.gameData.playerObject

    if(!mainGameObject.gameInitData.dynamicLevelsActive){
        if(controlKeys.inventory.some(obj => event.keyCode == obj) ) openInventory({ mainGameObject: mainGameObject})

        if(mainGameObject.gameInitData.gamePause) return false;
        if(controlKeys.down.some(obj => event.keyCode == obj) )  userShipData.moveShip({xPos: 0, yPos: userShipData.data.speed});
        if(controlKeys.left.some(obj => event.keyCode == obj) ) userShipData.moveShip({xPos: userShipData.data.speed * -1, yPos: 0});
        if(controlKeys.right.some(obj => event.keyCode == obj) ) userShipData.moveShip({xPos: userShipData.data.speed, yPos:0}) ;
        if(controlKeys.up.some(obj => event.keyCode == obj) )  userShipData.moveShip({xPos: 0, yPos: userShipData.data.speed * -1});
        if(controlKeys.rocket.some(obj => event.keyCode == obj) ) activeInventoryEffects({ userShipData: userShipData, mainGameObject: mainGameObject, name: 'rocket'});
        if(controlKeys.homingRocket.some(obj => event.keyCode == obj) ) activeInventoryEffects({ userShipData: userShipData, mainGameObject: mainGameObject, name: 'Homing Rocket'});
        if(controlKeys.destroyEnemy.some(obj => event.keyCode == obj) ) activeInventoryEffects({ userShipData: userShipData, mainGameObject: mainGameObject, name: 'Nuclear Blast'});
        if(controlKeys.shield.some(obj => event.keyCode == obj) ) activeInventoryEffects({ userShipData: userShipData, mainGameObject: mainGameObject, name: 'Defence Shield'});
        if(controlKeys.journal.some(obj => event.keyCode == obj) ) openJournal({ mainGameObject: mainGameObject, userShipData: userShipData });
    }else{
        if(controlKeys.inventory.some(obj => event.keyCode == obj) ) showGroundPlayerInventory({mainGameObject: mainGameObject});
        if(controlKeys.useKey.some(obj => event.keyCode == obj) ) interactWithObjects({mainGameObject: mainGameObject, constructors: constructors});
        if(controlKeys.miniMap.some(obj => event.keyCode == obj) ) createMapRenderField({ mainGameObject: mainGameObject });
        if(controlKeys.journal.some(obj => event.keyCode == obj) ) openJournal({ mainGameObject: mainGameObject, userShipData: userShipData });
    }
}


async function syncKeyControl({ mainGameObject: mainGameObject }){

    if(!mainGameObject.gameInitData || !mainGameObject.gameInitData.dynamicLevelsActive ) return false
    let mapKeyCode = mainGameObject.gameInitData.mapKeyCode;
    let controlKeys = mainGameObject.gameInitData.gameData.gameSetings.keyControls;

    if(!mapKeyCode ) return false
    for(let [key, value] of Object.entries(mapKeyCode)){
        if(!key || !value) return false
        if(controlKeys.down.some(obj => key == obj) ){
            moveUnit({xPos: 0, yPos: 0.5, mainGameObject: mainGameObject, playerDirection: "down"});
        }
        if(controlKeys.left.some(obj => key == obj) ){
            moveUnit({xPos: 2 * -1, yPos: 0, mainGameObject: mainGameObject, playerDirection: "left"});
        }
        if(controlKeys.right.some(obj => key == obj) ){
            moveUnit({xPos: 2, yPos:0, mainGameObject: mainGameObject, playerDirection: "right"});
        }
        if(controlKeys.up.some(obj => key == obj) ){
            moveUnit({xPos: 0, yPos: -60, mainGameObject: mainGameObject, playerDirection: "up"});
        }
    }
}






function shipControl(mainGameObject: any){
    let controlKeys = mainGameObject.gameInitData.gameData.gameSetings.keyControls;
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    document.addEventListener("keydown",(event: any)=>{
        mainGameObject.gameInitData.mapKeyCode[event.keyCode] = event.type == 'keydown';
        userKeyAction({ mainGameObject: mainGameObject, controlKeys: controlKeys, event: event})
    })
    document.addEventListener("keyup",(event: any)=>{
        delete mainGameObject.gameInitData.mapKeyCode[event.keyCode];
    })

    document.addEventListener("mousemove", (event: any) => {
        let userShipData = mainGameObject.gameInitData.gameData.playerObject
        if(mainGameObject.gameInitData.gamePause ) return false;
        if(event.target.tagName === "CANVAS"
        && !mainGameObject.gameInitData.gamePause
        && mainGameObject.gameInitData.gameStatus){
            let x = event.clientX - event.target.offsetLeft, y = event.clientY - event.target.offsetTop;
            userShipData.xFinal = ((x % userShipData.data.speed == 0)? x  : userShipData.data.speed* Math.floor(x/userShipData.data.speed)) - (userShipData.width/2);
            userShipData.yFinal = ((y % userShipData.data.speed == 0)? y : userShipData.data.speed* Math.floor(y/userShipData.data.speed)) - (userShipData.height/2);
        }
    })




    document.addEventListener("click", (event: any) => {
        let userShipData = mainGameObject.gameInitData.gameData.playerObject
        let data = mainGameObject.getLevelUserData();

        if(mainGameObject.gameInitData.dynamicLevelsActive || data.currentLevel === 0) return false

        if(mainGameObject.gameInitData.gamePause || !mainGameObject.gameInitData.gameStatus) return false;
        if(mainGameObject.gameInitData.shopActive) return
        shot.call(userShipData, constructors.BulletConstruct, mainGameObject, constructors.SoundCreator, "player", "allGameBullets")
    })





    document.addEventListener("mousemove", (event: any) => {
        if(mainGameObject.gameInitData.dynamicLevelsActive){
            let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
            groundPlayer.shotAngle = groundPlayerShot({ groundPlayer: groundPlayer, event: event});
        }
    })



    document.addEventListener("mousedown", (event: any) => {

        if(mainGameObject.gameInitData.dynamicLevelsActive){
            let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
            groundPlayer.shotState = true;
        }
    })
    document.addEventListener("mouseup", (event: any) => {
        if(mainGameObject.gameInitData.dynamicLevelsActive){
            let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
            groundPlayer.shotState = false;
        }
    })
}





function activeInventoryEffects({userShipData, mainGameObject, name}){
    let inventory = userShipData.data.inventory;
    let objectPresent = findIntInventory({inventory: inventory, searchObject: { name: name }});
    if(!objectPresent) return false
    playerGunsOperate({ userShipData: userShipData, mainGameObject: mainGameObject, rocketPresent: objectPresent })
}






function playerGunsOperate({ userShipData, mainGameObject, rocketPresent }){
    userShipData.data.inventory[rocketPresent.index].grapplePower.number -= 1;
    bulletsCreateModule.call(userShipData, {
        item: userShipData.data.inventory[rocketPresent.index].grapplePower.value,
        mainGameObject: mainGameObject,
        owner: 'player',
        BulletConstruct: constructors.BulletConstruct,
        SoundCreator: constructors.SoundCreator,
        bulletArray: "allGameBullets"
    })
    if(userShipData.data.inventory[rocketPresent.index].grapplePower.number <= 0){
        replaceItemFromStorage({index: rocketPresent.index, storage: userShipData.data.inventory, value: null})
    }
}





function openInventory({ mainGameObject }){
    if(!mainGameObject.gameInitData.gameStatus || mainGameObject.gameInitData.gameOver ||
        mainGameObject.gameInitData.gameWin ||
        mainGameObject.gameInitData.levelChange) return false


    if( !mainGameObject.gameInitData.inventoryActive && !mainGameObject.gameInitData.gamePause ){
        mainGameObject.gameInitData.inventoryActive = true;
        mainGameObject.gameInitData.gamePause = true;
        enterToTheShopDialog({ mainGameObject: mainGameObject, tradePropertyes: null })
        hide(mainGameObject.shopArea.shopArea)
    }else if(mainGameObject.gameInitData.inventoryActive){
        mainGameObject.gameInitData.inventoryActive = false;
        leaveShop({
            element: mainGameObject.shopArea,
            mainGameObject: mainGameObject,
            text: 'Return to game?'
        })
    }
}





function addVehicleSpeed({value, flag}){
    if(flag) this.data.minSpeed += value;
    if(!flag && this.data.minSpeed > this.defaultSpeed) this.data.minSpeed -= value;
}





function setContext(context){
    this.ctx = context;
}







function placeShip(){

    let xAdj = (this.xFinal - this.x)/this.data.speed;
    let yAdj = (this.yFinal - this.y)/this.data.speed;

    xAdj = (Math.sign(xAdj) > 0)? xAdj: xAdj * -1;
    yAdj = (Math.sign(yAdj) > 0)? yAdj: yAdj * -1;
    xAdj = (xAdj > this.data.minSpeed)? this.data.minSpeed : xAdj;
    yAdj = (yAdj > this.data.minSpeed)? this.data.minSpeed : yAdj;

    this.xAdj = (this.x > this.xFinal)? 0 : xAdj;
    this.x = (this.x > this.xFinal)? this.x - xAdj:
    (this.x < this.xFinal)? this.x + xAdj : this.xFinal;

    this.y = (this.y > this.yFinal)? this.y - yAdj:
    (this.y < this.yFinal)? this.y + yAdj : this.yFinal;
}







function moveShip({xPos=0, yPos=0}){
    this.x += xPos;
    this.y += yPos;
}








function moveUnit({xPos=0, yPos=0, mainGameObject, playerDirection}){
    if(mainGameObject.gameInitData.gamePause) return false
    let groundPlayer = mainGameObject.gameInitData.gameData.groundPlayerCharacter;
    let allEnemy = mainGameObject.gameInitData.dynamicLevelEnemy;
    let dynamicLevelMapBlocks = mainGameObject.gameInitData.dynamicLevelMapBlocks;

    //groundPlayer.playerDirectionHorizontal = playerDirection;
    switch (playerDirection){
        case "down":
            groundPlayer.playerDirectionVertical = playerDirection;
            break
        case "left":
            groundPlayer.playerDirectionHorizontal = playerDirection;
            groundPlayer.playerDirectionVertical = "stand";
            break
        case "right":
            groundPlayer.playerDirectionHorizontal = playerDirection;
            groundPlayer.playerDirectionVertical = "stand";
            break
        case "up":
            groundPlayer.playerDirectionVertical = playerDirection;
            break
    }
    groundPlayer.xPos =  (xPos)? xPos : groundPlayer.xPos;
    for(let block of dynamicLevelMapBlocks){
        if(groundPlayer.playerDirectionHorizontal === "left" && !groundPlayer.leftWallTouch ||
        groundPlayer.playerDirectionHorizontal === "right" && !groundPlayer.rightWallTouch){
            groundPlayer.isRun = true;
                mainGameObject.gameInitData.gameData.levelData.horizontalSpeed = xPos;
                block.x -= mainGameObject.gameInitData.gameData.levelData.horizontalSpeed;
        }
        if(!groundPlayer.ceilingTouch && yPos && groundPlayer.groundTouch && groundPlayer.playerDirectionVertical === "up" || 
        yPos  && groundPlayer.onElevator){
            if(Math.sign(mainGameObject.gameInitData.gameData.levelData.jumpImpuls) > 0 && groundPlayer.groundTouch){
                mainGameObject.gameInitData.gameData.levelData.jumpImpuls +=  2;
                mainGameObject.gameInitData.gameData.levelData.jumpImpuls *= -1;
                groundPlayer.groundTouch = false;
            }
            if(groundPlayer.onElevator && groundPlayer.playerDirectionVertical === "up"){
                mainGameObject.gameInitData.gameData.levelData.jumpImpuls = 6;
                mainGameObject.gameInitData.gameData.levelData.jumpImpuls *= -1;
                groundPlayer.groundTouch = false;
            }
            block.verticalSpeed = yPos;
        }
        if(groundPlayer.onLeader){
            groundPlayer.leaderClimb = true;
            if(groundPlayer.playerDirectionVertical === "up"){
                groundPlayer.groundTouch = false;
            }else if(groundPlayer.playerDirectionVertical === "down"){
                let downBlock = leadersFunctionality.call(groundPlayer)
                groundPlayer.groundTouch = (downBlock)? true : false;
            }
        }
    }
    if(playerDirection === "down" && !groundPlayer.onLeader){
        groundPlayer.isRun = false;
    }
    for(let enemy of allEnemy){
        if(groundPlayer.rightWallTouch || groundPlayer.leftWallTouch) continue
        enemy.x -= mainGameObject.gameInitData.gameData.levelData.horizontalSpeed;
    }
    mainGameObject.mapNearActiveElement = null;
    playerAnimation({ groundPlayer: groundPlayer, mainGameObject: mainGameObject })
    //groundPlayer.onLeader = false;
}

export {
    initPlayerShip,
    shipControl,
    moveShip,
    placeShip,
    setContext,
    playerShipTextureChange,
    addVehicleSpeed,
    syncKeyControl
}