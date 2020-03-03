var { viewModules } = require('../view/displayModules');
var { gameMethods } = require('../engine/engineModules');
var { playerShipModule } = require('../engine/playerShipModule');

function updateMap(){
    //this.img = this.img || new Image();
    let backgroundObject = this;

    this.x -= this.backgroundSpeed;
    if(this.x + this.screenData.width < 0){
        this.x = this.screenData.width;
    }
    //this.img.onload = function() {
       viewModules.createImage(backgroundObject.ctx,
            backgroundObject.img, backgroundObject.x, 0,
            backgroundObject.screenData.width+2,
            backgroundObject.screenData.height)
    //};

    //this.img.src = this.img.src || location.origin + '/images/' + this.backgroundTexture;
}

function warpEffect(mainGameObject){
    let random = mainGameObject.gameRandomizer(100)
    mainGameObject.getSecondMeasure(a, random)

    function a(data){
        console.log(data)
    }
}


module.exports.backgroundMapModule = {
    updateMap: updateMap,
    warpEffect: warpEffect
}