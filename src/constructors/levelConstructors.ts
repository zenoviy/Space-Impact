var { viewModules } = require('../view/displayModules');
var { gameMethods } = require('../engine/engineModules');
var { playerShipModule } = require('../engine/playerShipModule');
var { backgroundMapModule } = require('../engine/backgroundModule');

class GameBackground{
    x: number = 0; y: number = 0;
    backgroundTexture: string; backgroundSpeed: number;
    screenData: any;
    ctx: any;
    img: any;

    updateMap: any;
    warpEffect: any;
    constructor(
        backgroundTexture: string,
        backgroundSpeed: number,
        screenData: any,
        ctx: any,
        partOfScreenStatus: boolean
        ){
            this.backgroundTexture = backgroundTexture;
            this.backgroundSpeed = backgroundSpeed;
            this.screenData = screenData;
            this.ctx = ctx;
            this.x = (partOfScreenStatus)? 0 : screenData.width;
            this.y = 0;
            this.img = new Image();
        }

}
GameBackground.prototype.updateMap = backgroundMapModule.updateMap;
GameBackground.prototype.warpEffect = backgroundMapModule.warpEffect;


module.exports.levelConstructor = {
    GameBackground: GameBackground
}