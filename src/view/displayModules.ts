var {ERROR_LIST} = require('../engine/appErrorListModule');
var { uiWindowModules } = require('./window/displayUiWindowModules');
var { weaponModules } = require('./weapons/weaponsDisplayModule');


function draw(context, element, ...property){
    context[element](...property);
}

function createLaserBullet(data){
    if(!data.ctx) return new Error("no context");
    if(data.objectOwner == "player" && data.type == 1) weaponModules.weapon1forward(data, draw);
    if(data.objectOwner == "enemy" && data.type == 1) weaponModules.weapon1backward(data, draw);
}

function createImage(ctx, pictureName, ...props){
    draw(ctx, 'drawImage', pictureName, ...props);
}


function clearField(ctx, width, height){
    draw(ctx, 'clearRect', 0, 0,  width, height);
}

module.exports.viewModules = {
        clearField: clearField,
        draw: draw,
        createLaserBullet: createLaserBullet,
        clear: clearField,
        createImage: createImage,
        createWindow: uiWindowModules.createWindow,
        createShapeRoundBorder: uiWindowModules.createShapeRoundBorder
}
