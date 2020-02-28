var { viewModules } = require('../view/displayModules');
var { playerShipModule } = require('../engine/playerShipModule');
var { gameMethods } = require('../engine/engineModules');
var { enemiesModel } = require('../enemies/enemiesModules');


interface shipData{
    id: number
    name: string,
    texture: string,
    armor: number,
    speed: number,
    minSpeed: number,
    firespot: number,
    size:{
            width: number,
            height: number
    },
    guns: object[]
}
class PlayerShip{
    data: shipData;
    points: number;
    healthPoint: number;
    x: number; y: number;
    xFinal: number; yFinal: number;
    ctx: any;

    initPlayerShip: any;
    movePlayerShip: any;
    shipControl: any;
    showInformation: any;
    setContext: any;
    placeShip: any;
    moveShip: any;
    getObjectPosition: any;
    takeDamage: any;
    constructor(
        data: shipData,
        points: number,
        healthPoint: number,
        x: number = 100,
        y: number = 100
    ){
        this.data = data;
        this.points = points;
        this.healthPoint = healthPoint;
        this.x = x; this.y = y;
        this.xFinal = x; this.yFinal = y;
    }

}

PlayerShip.prototype.initPlayerShip = playerShipModule.initPlayerShip;
PlayerShip.prototype.movePlayerShip = playerShipModule.movePlayerShip;
PlayerShip.prototype.shipControl = playerShipModule.shipControl;
PlayerShip.prototype.moveShip = playerShipModule.moveShip;
PlayerShip.prototype.placeShip = playerShipModule.placeShip;
PlayerShip.prototype.setContext = playerShipModule.setContext;
PlayerShip.prototype.getObjectPosition = gameMethods.getObjectPosition;

PlayerShip.prototype.takeDamage = enemiesModel.takeDamage;

module.exports.playerModules = {
    PlayerShip: PlayerShip
};