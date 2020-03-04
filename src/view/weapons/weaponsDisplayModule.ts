var { viewModules } = require('../displayModules');
function weapon1(data, draw){
    draw(data.ctx, 'drawImage', data.img, data.sx, data.sy, data.sWidth, data.sHeight, data.x, data.y,data.width + 10, data.height + 10);
}
function weapon1backward(data, draw){
    draw(data.ctx, 'drawImage', data.img, 0, 0, data.width, data.height, data.x, data.y, data.width+10, data.height + 10);
}

module.exports.weaponModules = {
    weapon1: weapon1,
    weapon1backward: weapon1backward
}