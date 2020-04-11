
import { uiText } from '../elements/uiElementModules';

function createWindow(ctx, properties){
    let {width, height} = this.getScreenSize();
    ctx.fillRect(properties.x, properties.y, properties.width, properties.height);;
}
interface Shapes{
    name: string,
    text: string,
    description: string,
    clicked: boolean,
    fontSize: string,
    properties:{
        ctx: any,
        width: number,
        height: number,
        x: number,
        y: number,
        gradient ? : boolean,
        background: string,
        isBorder ? : boolean,
        borderRadius ? : number,
        backGroundFinal ? : string,
        topX ? : number,
        topY ? : number,
        bottomX ? : number,
        bottomY ? : number,
        borderColor: string,
        shadowColor: string,
        radius: number
    }
}

function createShapeRoundBorder(shapePropertyes: Shapes){
    let properties = shapePropertyes.properties;
    properties.ctx.fillStyle = properties.background;
    if(properties.gradient){
        var gradient = properties.ctx.createLinearGradient(properties.topX, properties.topY, properties.bottomX, properties.bottomY);
        gradient.addColorStop(0, properties.background);
        gradient.addColorStop(1, properties.backGroundFinal);
        properties.ctx.fillStyle = gradient;
    }

    properties.ctx.shadowColor = properties.shadowColor;
    properties.ctx.shadowBlur = 8;

    properties.ctx.beginPath();
    properties.ctx.moveTo(properties.x + properties.radius, properties.y);
    properties.ctx.lineTo(properties.x + properties.width - properties.radius,
        properties.y);
    properties.ctx.quadraticCurveTo(
            properties.x + properties.width,
            properties.y, properties.x + properties.width,
            properties.y + properties.radius);
    properties.ctx.lineTo(
            properties.x + properties.width,
            properties.y + properties.height - properties.radius);
    properties.ctx.quadraticCurveTo(
            properties.x + properties.width,
            properties.y + properties.height,
            properties.x + properties.width - properties.radius,
            properties.y + properties.height);
    properties.ctx.lineTo(
            properties.x + properties.radius,
            properties.y + properties.height);
    properties.ctx.quadraticCurveTo(
        properties.x,
        properties.y + properties.height,
        properties.x, properties.y + properties.height - properties.radius);
    properties.ctx.lineTo(
        properties.x, properties.y + properties.radius);
    properties.ctx.quadraticCurveTo(properties.x,
        properties.y,
        properties.x + properties.radius,
        properties.y); /**/

    if(properties.isBorder){
        properties.ctx.strokeStyle = properties.borderColor;
        properties.ctx.stroke();
    }
    properties.ctx.closePath();
    properties.ctx.fill()


}






interface ButtonShape{
    name: string,
    text: string,
    description: string,
    clicked: boolean,
    fontSize: string,
    properties:{
        ctx: any,
        width: number,
        height: number,
        x: number,
        y: number,
        background: string,
        isBorder ?: boolean,
        borderRadius ?: number,
        borderColor: string,
        shadowColor: string,
        textProperty: {
            textColor: string,
            topPadding: number,
            rightPadding: number,
            bottomPadding: number,
            shadowColor ?: string,
            leftPadding: number,
        },
        radius: number
    }
}

function createRoundButton(shapePropertyes: ButtonShape){
    let properties = shapePropertyes.properties;
    let textWidth = properties.ctx.measureText(shapePropertyes.text).width/3.2;

    let buttonWidth =  properties.textProperty.leftPadding + textWidth + properties.textProperty.rightPadding;
    properties.ctx.shadowColor = properties.shadowColor;
    properties.ctx.shadowBlur = 8;
   
    properties.ctx.fillStyle = properties.background;
    properties.ctx.beginPath();
    properties.ctx.moveTo(properties.x + properties.radius, properties.y);
    properties.ctx.lineTo(properties.x + buttonWidth - properties.radius,
        properties.y);
    properties.ctx.quadraticCurveTo(
            properties.x + buttonWidth,
            properties.y, properties.x + buttonWidth,
            properties.y + properties.radius);
    properties.ctx.lineTo(
            properties.x + buttonWidth,
            properties.y + properties.height - properties.radius);
    properties.ctx.quadraticCurveTo(
            properties.x + buttonWidth,
            properties.y + properties.height,
            properties.x + buttonWidth - properties.radius,
            properties.y + properties.height);
    properties.ctx.lineTo(
            properties.x + properties.radius,
            properties.y + properties.height);
    properties.ctx.quadraticCurveTo(
        properties.x,
        properties.y + properties.height,
        properties.x, properties.y + properties.height - properties.radius);
    properties.ctx.lineTo(
        properties.x, properties.y + properties.radius);
    properties.ctx.quadraticCurveTo(properties.x,
        properties.y,
        properties.x + properties.radius,
        properties.y); /**/
        //properties.ctx.fillRect(properties.x, properties.y, properties.width, properties.height);
    properties.ctx.closePath();
    properties.ctx.fill()

    if(properties.isBorder){
        properties.ctx.strokeStyle = properties.borderColor;
        properties.ctx.lineWidth = properties.borderRadius;
        properties.ctx.stroke();
    }

    properties.ctx.font = shapePropertyes.fontSize ;
    properties.ctx.fillStyle = properties.textProperty.textColor;
    properties.ctx.shadowColor = properties.textProperty.shadowColor;
    properties.ctx.shadowBlur = 8;
    properties.ctx.fillText(
        shapePropertyes.text,
        properties.x + properties.textProperty.leftPadding,
        properties.y + properties.height/2+ properties.textProperty.topPadding);
}
export {
    createWindow,
    createShapeRoundBorder,
    createRoundButton
}