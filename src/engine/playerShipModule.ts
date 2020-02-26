var {viewModules} = require('../view/displayModules');
var {levelConstructor} = require('../constructors/levelConstructors');
var {bulletModule} = require('../constructors/bulletConstructor');


function initPlayerShip(){
    if(this.ctx){
        let image = this.data.texture,
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
            viewModules.createImage(this.ctx, this.img, this.x-30, this.y-30);
        }
    }
}
function shipControl(mainGameObject: any){
    let controlKeys = mainGameObject.gameInitData.gameData.gameSetings.keyControls;
    document.addEventListener("keydown",(e: any)=>{
        if(controlKeys.down.some(o => e.keyCode == o) )  this.moveShip({xPos: 0, yPos: this.data.speed});
        if(controlKeys.left.some(o => e.keyCode == o) ) this.moveShip({xPos: this.data.speed * -1, yPos: 0}) ;
        if(controlKeys.right.some(o => e.keyCode == o) ) this.moveShip({xPos: this.data.speed, yPos:0}) ;
        if(controlKeys.up.some(o => e.keyCode == o) )  this.moveShip({xPos: 0, yPos: this.data.speed * -1}) ;
    })

    document.addEventListener("mousemove", (e: any) => {
        if(e.target.tagName === "CANVAS"){
            let x = e.clientX - e.target.offsetLeft, y = e.clientY - e.target.offsetTop;
            this.xFinal = (x % this.data.speed == 0)? x : this.data.speed* Math.floor(x/this.data.speed);
            this.yFinal = (y % this.data.speed == 0)? y : this.data.speed* Math.floor(y/this.data.speed);
        }
    })
    document.addEventListener("click", (e: any) => {
        let width = this.ctx.width, height = this.ctx.height;
        let guns = this.data.guns;      /// this.data.firespot
        for(let item of guns){
            let bullet = new bulletModule.BulletConstruct(
                this.xFinal,
                this.yFinal,
                item.name,
                item.color,
                "player",
                item.speed,
                item.width,
                item.height
                );
            mainGameObject.gameInitData.allGameBullets = mainGameObject.gameInitData.allGameBullets.concat(bullet)
        }
        //console.log(mainGameObject.gameInitData.allGameBullets)

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

    this.x = (this.x > this.xFinal)? this.x - xAdj:   //this.x - this.data.speed :
    (this.x < this.xFinal)? this.x + xAdj : this.xFinal;

    this.y = (this.y > this.yFinal)? this.y - yAdj:
    (this.y < this.yFinal)? this.y + yAdj : this.yFinal;
}
function moveShip({xPos=0, yPos=0}){
    this.x += xPos;
    this.y += yPos;
}



module.exports.playerShipModule = {
    displayPlayerShip: displayPlayerShip,
    initPlayerShip: initPlayerShip,
    shipControl: shipControl,
    moveShip: moveShip,
    placeShip: placeShip,
    setContext: setContext,
    showInformation: showInformation
}