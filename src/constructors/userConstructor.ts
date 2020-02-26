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
    showInformation: any;
    setContext: any;
    placeShip: any;
    moveShip: any;
    constructor(
        data: any,
        points: number,
        lifePoints: number,
        x: number = 100,
        y: number = 100
    ){
        this.data = data;
        this.points = points;
        this.lifePoints = lifePoints;
        this.x = x;
        this.y = y;
        this.xFinal = x;
        this.yFinal = y;
    }

}

PlayerShip.prototype.initPlayerShip = playerShipModule.initPlayerShip;
PlayerShip.prototype.displayPlayerShip = playerShipModule.displayPlayerShip;
PlayerShip.prototype.shipControl = playerShipModule.shipControl;
PlayerShip.prototype.moveShip = playerShipModule.moveShip;
PlayerShip.prototype.placeShip = playerShipModule.placeShip;
PlayerShip.prototype.setContext = playerShipModule.setContext;


module.exports.playerModules = {
    PlayerShip: PlayerShip
};