var { viewModules } = require('../view/displayModules');
var { gameMethods } = require('../engine/engineModules');
var { playerShipModule } = require('../engine/playerShipModule');

function updateMap(){
    let backgroundObject = this;
    this.x -= this.backgroundSpeed;
    if(this.x + this.screenData.width < 0){
        this.x = this.screenData.width;
    }
       viewModules.createImage(backgroundObject.ctx,
            backgroundObject.img, backgroundObject.x, 0,
            backgroundObject.screenData.width+2,
            backgroundObject.screenData.height)
}


module.exports.backgroundMapModule = {
    updateMap: updateMap
}