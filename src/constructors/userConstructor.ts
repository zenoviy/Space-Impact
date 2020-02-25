var {viewModules} = require('../view/displayModules');
var {playerShipModule} = require('../engine/playerShipModule');

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
        x: number = 0,
        y: number = 0
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
        let xAdj = (this.xFinal - this.x)/this.data.speed;
        let yAdj = (this.yFinal - this.y)/this.data.speed;

        xAdj = (Math.sign(xAdj) > 0)? xAdj: xAdj * -1;
        yAdj = (Math.sign(yAdj) > 0)? yAdj: yAdj * -1;
        //console.log(xAdj, yAdj)
        this.x = (this.x > this.xFinal)? this.x - xAdj:   //this.x - this.data.speed :
        (this.x < this.xFinal)? this.x + xAdj : this.xFinal;

        this.y = (this.y > this.yFinal)? this.y - yAdj:
        (this.y < this.yFinal)? this.y + yAdj : this.yFinal;
    }
    moveShip({xPos=0, yPos=0}){
        this.x += xPos;
        this.y += yPos;
    }

}

PlayerShip.prototype.initPlayerShip = playerShipModule.initPlayerShip;
PlayerShip.prototype.displayPlayerShip = playerShipModule.displayPlayerShip;
PlayerShip.prototype.shipControl = playerShipModule.shipControl;

module.exports.playerModules = {
    PlayerShip: PlayerShip
};