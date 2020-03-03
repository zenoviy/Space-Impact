var { viewModules } = require('../displayModules');

function weapon1forward(data, draw){
    data.ctx.fillStyle = "rgba(255, 255, 255)";
    data.ctx.save();

   
    draw(data.ctx, 'beginPath');
    draw(data.ctx, 'moveTo', data.x , data.y + data.height/2);
    draw(data.ctx, 'lineTo', data.x + data.width - data.radius, data.y -0);

    //draw(data.ctx, 'lineTo', data.x + data.width - data.radius, data.y);
    draw(data.ctx, 'quadraticCurveTo', data.x + data.width, data.y, data.x + data.width, data.y + data.radius);

    draw(data.ctx, 'lineTo', data.x + data.width, data.y + data.height + 0 - data.radius);
    draw(data.ctx, 'quadraticCurveTo', data.x + data.width, data.y + data.height + 0, data.x + data.width - data.radius, data.y +0 + data.height);

    draw(data.ctx, 'lineTo', data.x , data.y + data.height/2);
    draw(data.ctx, 'closePath');



    draw(data.ctx, 'fill');
    data.ctx.lineWidth = 2;
    data.ctx.strokeStyle = data.color;
    data.ctx.shadowColor = data.color;
     data.ctx.shadowBlur = 6;
    
    draw(data.ctx, 'stroke');
    data.ctx.restore();
}
function weapon1backward(data, draw){
    data.ctx.fillStyle = "rgba(255, 255, 255)";
    data.ctx.save();
    
    draw(data.ctx, 'beginPath');
    draw(data.ctx, 'moveTo', data.x + data.width, data.y + (data.height/2));
    draw(data.ctx, 'lineTo', data.x + data.radius, data.y - 0);

    draw(data.ctx, 'quadraticCurveTo', data.x, data.y -0, data.x, data.y -0 + data.radius);
    draw(data.ctx, 'lineTo', data.x, data.y + (data.height - data.radius) + 0);

    draw(data.ctx, 'quadraticCurveTo', data.x, data.y + (data.height) + 0, data.x + data.radius, data.y + (data.height) + 0 );
    draw(data.ctx, 'lineTo', data.x + data.width, data.y + data.height/2);

    draw(data.ctx, 'closePath');

    draw(data.ctx, 'fill');
    data.ctx.lineWidth = 2;
    data.ctx.shadowColor = data.color;
    data.ctx.shadowBlur = 6;
    data.ctx.strokeStyle = data.color;
    draw(data.ctx, 'stroke');
    data.ctx.restore();
}

module.exports.weaponModules = {
    weapon1forward: weapon1forward,
    weapon1backward: weapon1backward
}