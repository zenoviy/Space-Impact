
interface ImageShapes{
    name: string,
    text: string,
    description: string,
    clicked: boolean,
    fontSize: string,
    properties:{
        ctx: any,
        width: number,
        height: number,
        sWidth?: number,
        sHeight?: number,
        x: number,
        y: number,
        background: string,
        borderColor: string,
        shadowColor: string,
        radius: number
    }
}
function uiImage(shapePropertyes: ImageShapes){
    let properties = shapePropertyes.properties;

    properties.ctx.shadowColor = properties.shadowColor;
    properties.ctx.shadowBlur = 8;

    properties.ctx.drawImage(
        properties.background, 0, 0,
        properties.sWidth, properties.sHeight,
        properties.x, properties.y,
        properties.width, properties.height
        );
}
function uiText(shapePropertyes: ImageShapes){
    let properties = shapePropertyes.properties;
//properties.ctx.save();

    let textWidth = properties.ctx.measureText(shapePropertyes.text).width/3.2;
    properties.ctx.shadowColor = properties.shadowColor;
    properties.ctx.shadowBlur = 8;


    properties.ctx.font = shapePropertyes.fontSize ;
    properties.ctx.fillStyle = properties.borderColor;
    properties.ctx.fillText(
        shapePropertyes.text,
        properties.x + properties.width,
        properties.y + properties.height);
    //properties.ctx.save();
    //properties.ctx.translate(0,0);
    // properties.ctx.restore();
}
function uiRepeatImage(shapePropertyes: ImageShapes){
    let properties = shapePropertyes.properties;
    let pat = properties.ctx.createPattern(properties.background, 'repeat-x');

    properties.ctx.shadowColor = properties.shadowColor;
    properties.ctx.shadowBlur = 8;
    //properties.ctx.rect(properties.x, properties.x, properties.width, properties.height);
    properties.ctx.rect(properties.x, properties.y, properties.width, properties.height);
    properties.ctx.fillStyle = pat;
    properties.ctx.fill();
}

export {
    uiImage,
    uiText,
    uiRepeatImage
}