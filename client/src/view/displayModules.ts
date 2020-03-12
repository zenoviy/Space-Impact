import { createWindow, createShapeRoundBorder, createRoundButton } from './window/displayUiWindowModules';
import { weapon1 } from './weapons/weaponsDisplayModule';




function draw(context, element, ...property){
    context[element](...property);
}

function createLaserBullet(data){
    if(!data.ctx) return new Error("no context");
    if(data.objectOwner == "player" && data.type == 1) weapon1(data, draw);
    if(data.objectOwner == "enemy" && data.type == 1) weapon1(data, draw);
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
        createLaserBullet,
        createImage,
        createWindow,
        createShapeRoundBorder,
        createRoundButton
}
