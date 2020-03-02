var {ERROR_LIST} = require('../engine/appErrorListModule');
var { uiWindowModules } = require('./window/displayUiWindowModules');


function draw(context, element, ...property){
    context[element](...property);
}

function createLaserBullet(data){
    if(!data.ctx) return new Error("no context");
    data.ctx.fillStyle = "rgba(255, 255, 255)";
    draw(data.ctx, 'beginPath');
    draw(data.ctx, 'moveTo', data.x + data.radius, data.y + data.height/2);
    draw(data.ctx, 'lineTo', data.x + data.radius, data.y);

    draw(data.ctx, 'lineTo', data.x + data.width - data.radius, data.y);
    draw(data.ctx, 'quadraticCurveTo', data.x + data.width, data.y, data.x + data.width, data.y + data.radius);

    draw(data.ctx, 'lineTo', data.x + data.width, data.y + data.height - data.radius);
    draw(data.ctx, 'quadraticCurveTo', data.x + data.width, data.y + data.height, data.x + data.width - data.radius, data.y + data.height);

    draw(data.ctx, 'closePath');

    draw(data.ctx, 'fill');
    data.ctx.lineWidth = 2;
    data.ctx.strokeStyle = data.color;
    draw(data.ctx, 'stroke');
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
