var {ERROR_LIST} = require('../engine/appErrorListModule')


function draw(context, element, ...property){
    context[element](...property);
}

function createLaserBullet(data){
    if(!data.ctx) return new Error("no context");
    data.ctx.fillStyle = "rgba(255, 255, 255)";
    draw(data.ctx, 'beginPath');
    draw(data.ctx, 'moveTo', data.x + data.radius, data.y + data.height/2);
    //draw(data.ctx, 'lineTo', data.x + data.width, data.y);
    //draw(data.ctx, 'quadraticCurveTo', data.x + data.width, 6, 6, data.y);
    //draw(data.ctx, 'lineTo', data.x + data.width, data.y + data.height);
    //draw(data.ctx, 'lineTo', data.x, data.y + data.height);
    //draw(data.ctx, 'lineTo', data.x, data.y);
    draw(data.ctx, 'lineTo', data.x + data.radius, data.y);

    draw(data.ctx, 'lineTo', data.x + data.width - data.radius, data.y);
    draw(data.ctx, 'quadraticCurveTo', data.x + data.width, data.y, data.x + data.width, data.y + data.radius);

    draw(data.ctx, 'lineTo', data.x + data.width, data.y + data.height - data.radius);
    draw(data.ctx, 'quadraticCurveTo', data.x + data.width, data.y + data.height, data.x + data.width - data.radius, data.y + data.height);

    draw(data.ctx, 'closePath');

    /*
    ctx.moveTo(x + radius, y);
 ctx.lineTo(x + width - radius, y);
ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
ctx.closePath();*/

    draw(data.ctx, 'fill');
    data.ctx.lineWidth = 2;
    data.ctx.strokeStyle = data.color;
    draw(data.ctx, 'stroke');

    //draw(data.ctx, 'fillRect', data.x, data.y, data.width, data.height);
}

function createImage(ctx, pictureName, ...props){
    draw(ctx, 'drawImage', pictureName, ...props);
}


function clearField(ctx, width, height){
    draw(ctx, 'clearRect', 0, 0,  width, height)
}

module.exports.viewModules = {
        clearField: clearField,
        draw: draw,
        createLaserBullet: createLaserBullet,
        clear: clearField,
        createImage: createImage
}
