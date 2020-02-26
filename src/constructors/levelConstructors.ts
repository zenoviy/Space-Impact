var {viewModules} = require('../view/displayModules');
var {gameMethods} = require('../engine/engineModules');
var {playerShipModule} = require('../engine/playerShipModule');
var {backgroundMapModule} = require('../engine/backgroundModule');

class GameBackground{
    x: number = 0;
    y: number = 0;
    backgroundTexture: string;
    backgroundSpeed: number;
    screenData: any;
    ctx: any;
    img: any;
    updateMap: any;
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
            this.img.src = location.origin + '/images/locations/' + this.backgroundTexture;

        }
        setContext(context){
            this.ctx = context;
        }
}
GameBackground.prototype.updateMap = backgroundMapModule.updateMap;

module.exports.levelConstructor = {
    GameBackground: GameBackground
}