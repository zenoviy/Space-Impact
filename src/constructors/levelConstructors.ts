var {viewModules} = require('../view/displayModules');
var {gameMethods} = require('../engine/engineModules');
var {playerShipModule} = require('../engine/playerShipModule');

class GameBackground{
    x: number = 0;
    y: number = 0;
    backgroundTexture: string;
    backgroundSpeed: number;
    screenData: any;
    ctx: any;
    img: any;
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
    updateMap(){
        this.img = this.img || new Image();
        let backgroundObject = this;

        this.x -= this.backgroundSpeed;
        if(this.x + this.screenData.width < 0){
            this.x = this.screenData.width;
        }

        this.img.onload = function() {
           //viewModules.clearField(backgroundObject.ctx, backgroundObject.screenData.width, backgroundObject.screenData.height);
            //console.log(backgroundObject.ctx, backgroundObject.img)
           viewModules.createImage(backgroundObject.ctx,
                backgroundObject.img, backgroundObject.x, 0,
                backgroundObject.screenData.width+2,
                backgroundObject.screenData.height)
        };
         this.img.src = this.img.src || location.origin + '/images/locations/' + this.backgroundTexture;
    }
}


module.exports.levelConstructor = {
    GameBackground: GameBackground
}