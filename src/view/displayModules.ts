var {ERROR_LIST} = require('../engine/appErrorListModule')


function draw(context, element, ...property){
    context[element](...property);
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
        clear: clearField,
        createImage: createImage
}
