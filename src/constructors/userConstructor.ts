var {viewModules} = require('../view/displayModules');
var {gameMethods} = require('../engine/engineModules');
class PlayerShip{
    data: any;
    points: number;
    lifePoints: number;
    x: number;
    y: number;
    xFinal: number;
    yFinal: number;
    ctx: any;
    initPlayerShip: any;
    displayPlayerShip: any;
    shipControl: any;
    constructor(
        data: any,
        points: number,
        lifePoints: number,
        x: number,
        y: number
    ){
        this.data = data;
        this.points = points;
        this.lifePoints = lifePoints;
        this.x = x;
        this.y = y;
    }
    showInformation(){
        console.log(this)
    }
    setContext(context){
        this.ctx = context;
    }
    placeShip(){
        this.x = (this.x > this.xFinal)? this.x - this.data.speed :
        (this.x < this.xFinal)? this.x + this.data.speed : this.xFinal;

        this.y = (this.y > this.yFinal)? this.y - this.data.speed :
        (this.y < this.yFinal)? this.y + this.data.speed : this.yFinal;
    }
    moveShip({xPos=0, yPos=0}){
        this.x += xPos;
        this.y += yPos;
    }

}

PlayerShip.prototype.initPlayerShip = gameMethods.initPlayerShip;
PlayerShip.prototype.displayPlayerShip = gameMethods.displayPlayerShip;
PlayerShip.prototype.shipControl = gameMethods.shipControl;

module.exports.playerModules = {
    PlayerShip: PlayerShip
};