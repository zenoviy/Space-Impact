import { createWindow, createShapeRoundBorder, createRoundButton } from './window/displayUiWindowModules';


function draw(context, element, ...property){
    context.save();
    context[element](...property);
    context.restore();
}

function createImage(ctx, pictureName, ...props){
    draw(ctx, 'drawImage', pictureName, ...props);
}


function clearField(ctx, width, height){
    draw(ctx, 'clearRect', 0, 0,  width, height);
}

export {
        clearField,
        draw,
        createImage,
        createWindow,
        createShapeRoundBorder,
        createRoundButton
}
