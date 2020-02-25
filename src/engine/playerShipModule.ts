var {viewModules} = require('../view/displayModules');
var {levelConstructor} = require('../constructors/levelConstructors');

function initPlayerShip(){
    if(this.ctx){
        let width = this.ctx.width,
        height = this.ctx.height,
        image = this.data.texture,
        imageLocation = this.parrent.serverLocation.picturesDirection;

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
function displayPlayerShip(){
    if(this.img){
        if(this.ctx && this.img){
            let width = this.ctx.width,
            height = this.ctx.height;

            viewModules.createImage(this.ctx, this.img, this.x, this.y);
        }
    }
}
function shipControl(){
    let controlKeys = this.parrent.gameInitData.gameData.gameSetings.keyControls;
    document.addEventListener("keydown"||"keyup",(e)=>{
        console.log(e.key)
        if(controlKeys.down.some(o => e.keyCode == o) )  this.moveShip({xPos: 0, yPos: this.data.speed});
        if(controlKeys.left.some(o => e.keyCode == o) ) this.moveShip({xPos: this.data.speed * -1, yPos: 0}) ;
        if(controlKeys.right.some(o => e.keyCode == o) ) this.moveShip({xPos: this.data.speed, yPos:0}) ;
        if(controlKeys.up.some(o => e.keyCode == o) )  this.moveShip({xPos: 0, yPos: this.data.speed * -1}) ;
    })
    console.log(this)
    document.addEventListener("mousemove", (e: any) => {
        if(e.target.tagName === "CANVAS"){
            let x = e.clientX - e.target.offsetLeft, y = e.clientY - e.target.offsetTop;

            this.xFinal = (x % this.data.speed == 0)? x : this.data.speed* Math.floor(x/this.data.speed);
            this.yFinal = (y % this.data.speed == 0)? y : this.data.speed* Math.floor(y/this.data.speed);
        }
    })
}

module.exports.playerShip = {
    displayPlayerShip: displayPlayerShip,
    initPlayerShip: initPlayerShip,
    shipControl: shipControl
}