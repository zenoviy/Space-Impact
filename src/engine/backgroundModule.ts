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

/*function warpEffect(mainGameObject){
    let screenSiz = mainGameObject.getScreenSize();
    let gameWarpObjects = mainGameObject.gameInitData.warpObjects;
    mainGameObject.getSecondMeasure(a, {background: this, ctx: this.ctx, screenSize: mainGameObject.getScreenSize()})

    mainGameObject.gameInitData.warpObjects = (gameWarpObjects.length < 350)? mainGameObject.gameInitData.warpObjects.concat({
        x: screenSiz.width,
        y: mainGameObject.gameRandomizer(screenSiz.height),
        height: mainGameObject.gameRandomizer(20, 10),
        width: 10,
        speed: mainGameObject.gameRandomizer(10, 5),
        background:  mainGameObject.getRandomColor(),
    }) : mainGameObject.gameInitData.warpObjects;

    if(gameWarpObjects.length > 0){
        for(let warper of gameWarpObjects){
            warper.x -= (warper.x > 0)? warper.speed: 0;
            warper.width = (gameWarpObjects.length < 150)?  warper.width - warper.speed
            :(gameWarpObjects.length > 150 && gameWarpObjects.length < 350)? warper.width + warper.speed: warper.width - warper.speed;

            this.ctx.fillStyle = warper.background;
            viewModules.draw(this.ctx, 'fillRect', warper.x, warper.y, warper.width, warper.height);
            this.ctx.fill();
        }
    }
    function a(data){
        if(data.background.timeToEressLevel >=0 ) data.background.timeToEressLevel -=1;
    }
}*/


module.exports.backgroundMapModule = {
    updateMap: updateMap,
    //warpEffect: warpEffect
}