import { createWindow, createShapeRoundBorder, createRoundButton } from './window/displayUiWindowModules';


function draw(context, element, ...property){
    context[element](...property);
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
