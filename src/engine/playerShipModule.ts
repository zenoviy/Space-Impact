

import * as methods from '../engine';

import * as constructors from '../constructors/';
import * as view from '../view/';

function initPlayerShip(mainGameObject: any){
    if(this.ctx){
        let image = this.data.texture,
        imageLocation = mainGameObject.showGameInfo().imageDirrection;
        this.img = new Image();
        this.img.onload = () => {
            if(this.placePlayerShip){
                this.placePlayerShip()
            }
            return this.img
        }
        this.img.src = imageLocation + image;
    }
}
function movePlayerShip(){
    if(this.img){
        if(this.ctx && this.img){
            view.createImage(this.ctx, this.img, this.x-(this.width/2), this.y-(this.height/2), this.width, this.height);
        }
    }
}
function shipControl(mainGameObject: any){
    let controlKeys = mainGameObject.gameInitData.gameData.gameSetings.keyControls;
    document.addEventListener("keydown",(e: any)=>{
        if(mainGameObject.gameInitData.gamePause) return false;
        if(controlKeys.down.some(o => e.keyCode == o) )  this.moveShip({xPos: 0, yPos: this.data.speed});
        if(controlKeys.left.some(o => e.keyCode == o) ) this.moveShip({xPos: this.data.speed * -1, yPos: 0}) ;
        if(controlKeys.right.some(o => e.keyCode == o) ) this.moveShip({xPos: this.data.speed, yPos:0}) ;
        if(controlKeys.up.some(o => e.keyCode == o) )  this.moveShip({xPos: 0, yPos: this.data.speed * -1}) ;
    })

    document.addEventListener("mousemove", (e: any) => {
        if(mainGameObject.gameInitData.gamePause) return false;
        if(e.target.tagName === "CANVAS"
        && !mainGameObject.gameInitData.gamePause
        && mainGameObject.gameInitData.gameStatus){
            let x = e.clientX - e.target.offsetLeft, y = e.clientY - e.target.offsetTop;
            this.xFinal = (x % this.data.speed == 0)? x : this.data.speed* Math.floor(x/this.data.speed);
            this.yFinal = (y % this.data.speed == 0)? y : this.data.speed* Math.floor(y/this.data.speed);
        }
    })
    document.addEventListener("click", (e: any) => {
        if(mainGameObject.gameInitData.gamePause) return false;
        let guns = this.data.guns;
        for(let item of guns){
            let bullet = new constructors.BulletConstruct(
                this.x, this.y + item.firePosition,
                item.name, item.color,
                "player", item.speed + this.xAdj,
                item.width, item.height,
                item.damage, item.type, item.texture,
                item.sx, item.sy, item.sWidth, item.sHeight,
                item.explosionAnimation
                );
            bullet.img.src = bullet.texture;
            bullet.img.onload = () => {
                mainGameObject.gameInitData.allGameBullets = mainGameObject.gameInitData.allGameBullets.concat(bullet)
            }
        }
    })
}
function showInformation(){
    console.log(this)
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
    movePlayerShip,
    initPlayerShip,
    shipControl,
    moveShip,
   placeShip,
    setContext,
    showInformation
}