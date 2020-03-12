
interface ImageShapes{
    name: string,
    text: string,
    description: string,
    clicked: boolean,
    fontSize: string,
    propertyes:{
        ctx: any,
        width: number,
        height: number,
        sWidth?: number,
        sHeight?: number,
        x: number,
        y: number,
        background: string,
        borderColor: string,
        radius: number
    }
}
function uiImage(shapePropertyes: ImageShapes){
    let propertyes = shapePropertyes.propertyes;
    propertyes.ctx.drawImage(
        propertyes.background, 0, 0,
        propertyes.sWidth, propertyes.sHeight,
        propertyes.x, propertyes.y,
        propertyes.width, propertyes.height
        );
}
function uiText(shapePropertyes: ImageShapes){
    let propertyes = shapePropertyes.propertyes;
    let textWidth = propertyes.ctx.measureText(shapePropertyes.text).width/3.2;
    propertyes.ctx.font = shapePropertyes.fontSize ;
    propertyes.ctx.fillStyle = propertyes.borderColor;
    propertyes.ctx.fillText(
        shapePropertyes.text,
        propertyes.x + propertyes.width,
        propertyes.y + propertyes.height);
}
function uiRepeatImage(shapePropertyes: ImageShapes){
    let propertyes = shapePropertyes.propertyes;
    let pat = propertyes.ctx.createPattern(propertyes.background, 'repeat-x');
    //propertyes.ctx.rect(propertyes.x, propertyes.x, propertyes.width, propertyes.height);
    propertyes.ctx.rect(propertyes.x, propertyes.y, propertyes.width, propertyes.height);
    propertyes.ctx.fillStyle = pat;
    propertyes.ctx.fill();
}

export {
    uiImage,
    uiText,
    uiRepeatImage
}