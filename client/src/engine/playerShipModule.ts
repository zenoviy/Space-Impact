

import * as constructors from '../constructors/';
import { shot, bulletsCreateModule } from '../enemies/enemiesModules';
import { inventoryColisionEvent, findIntInventory } from '../ui/shop/shopEvents/shopEventsModules';
import { replaceItemFromStorage } from '../ui/shop/gameInventoryModules';

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

function userKeyAction({ mainGameObject, controlKeys, event }){
    let userShipData = mainGameObject.gameInitData.gameData.playerObject
        if(mainGameObject.gameInitData.gamePause) return false;
        if(controlKeys.down.some(o => event.keyCode == o) )  userShipData.moveShip({xPos: 0, yPos: userShipData.data.speed}) ;
        if(controlKeys.left.some(o => event.keyCode == o) ) userShipData.moveShip({xPos: userShipData.data.speed * -1, yPos: 0}) ;
        if(controlKeys.right.some(o => event.keyCode == o) ) userShipData.moveShip({xPos: userShipData.data.speed, yPos:0}) ;
        if(controlKeys.up.some(o => event.keyCode == o) )  userShipData.moveShip({xPos: 0, yPos: userShipData.data.speed * -1}) ;
        if(controlKeys.rocket.some(o => event.keyCode == o) ) rocketGun({ userShipData: userShipData, mainGameObject: mainGameObject});
        if(controlKeys.homingRocket.some(o => event.keyCode == o) ) homingRocket({ userShipData: userShipData, mainGameObject: mainGameObject});
        if(controlKeys.destroyEnemy.some(o => event.keyCode == o) ) nuclearBlast({ userShipData: userShipData, mainGameObject: mainGameObject})
        if(controlKeys.inventory.some(o => event.keyCode == o) ) console.log("Inventory")
}

function shipControl(mainGameObject: any){
    let controlKeys = mainGameObject.gameInitData.gameData.gameSetings.keyControls;
    document.addEventListener("keydown",(event: any)=>{
        userKeyAction({ mainGameObject: mainGameObject, controlKeys: controlKeys, event: event })
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

    document.addEventListener("click", (e: any) => {
        let userShipData = mainGameObject.gameInitData.gameData.playerObject
        if(mainGameObject.gameInitData.gamePause || !mainGameObject.gameInitData.gameStatus) return false;
        if(mainGameObject.gameInitData.shopActive) return
        shot.call(userShipData, constructors.BulletConstruct, mainGameObject, constructors.SoundCreator, "player")
    })

    document.addEventListener("mousedown", (e: any) => {
        //console.log('mousedown')
    })
    document.addEventListener("mouseup", (e: any) => {
        //console.log('mouseup')
    })
}

function nuclearBlast({userShipData, mainGameObject}){
    let inventory = userShipData.data.inventory;
    let rocketPresent = findIntInventory({inventory: inventory, searchObject: { name: 'Nuclear Blast wave' }});
    if(!rocketPresent) return false
    playerGunsOperate({ userShipData: userShipData, mainGameObject: mainGameObject, rocketPresent: rocketPresent })
}
function homingRocket({userShipData, mainGameObject}){
    let inventory = userShipData.data.inventory;
    let rocketPresent = findIntInventory({inventory: inventory, searchObject: { name: 'Homing Rocket' }});
    if(!rocketPresent) return false

    playerGunsOperate({ userShipData: userShipData, mainGameObject: mainGameObject, rocketPresent: rocketPresent })
}
function rocketGun({ userShipData, mainGameObject }){
    let inventory = userShipData.data.inventory;
    let rocketPresent = findIntInventory({inventory: inventory, searchObject: { name: 'rocket' }});
    if(!rocketPresent) return false

    playerGunsOperate({ userShipData: userShipData, mainGameObject: mainGameObject, rocketPresent: rocketPresent })
}

function playerGunsOperate({ userShipData, mainGameObject, rocketPresent }){
    userShipData.data.inventory[rocketPresent.index].grapplePower.number -= 1;
    bulletsCreateModule.call(userShipData, {
        item: userShipData.data.inventory[rocketPresent.index].grapplePower.value,
        mainGameObject: mainGameObject,
        owner: 'player',
        BulletConstruct: constructors.BulletConstruct,
        SoundCreator: constructors.SoundCreator
    })
    if(userShipData.data.inventory[rocketPresent.index].grapplePower.number <= 0){
        replaceItemFromStorage({index: rocketPresent.index, storage: userShipData.data.inventory, value: null})
    }
}

function addVehicleSpeed({value, flag}){
    if(flag) this.data.minSpeed += value;
    if(!flag) this.data.minSpeed -= value;
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

export {
    initPlayerShip,
    shipControl,
    moveShip,
    placeShip,
    setContext,
    playerShipTextureChange,
    addVehicleSpeed
}