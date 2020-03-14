
import { uiText } from '../elements/uiElementModules';

function createWindow(ctx, propertyes){
    let {width, height} = this.getScreenSize();
    ctx.fillRect(propertyes.x, propertyes.y, propertyes.width, propertyes.height);;
}
interface Shapes{
    name: string,
    text: string,
    description: string,
    clicked: boolean,
    fontSize: string,
    propertyes:{
        ctx: any,
        width: number,
        height: number,
        x: number,
        y: number,
        background: string,
        borderColor: string,
        radius: number
    }
}

function createShapeRoundBorder(shapePropertyes: Shapes){
    let propertyes = shapePropertyes.propertyes;
    propertyes.ctx.fillStyle = propertyes.background;
   propertyes.ctx.beginPath();
    propertyes.ctx.moveTo(propertyes.x + propertyes.radius, propertyes.y);
    propertyes.ctx.lineTo(propertyes.x + propertyes.width - propertyes.radius,
        propertyes.y);
    propertyes.ctx.quadraticCurveTo(
            propertyes.x + propertyes.width,
            propertyes.y, propertyes.x + propertyes.width,
            propertyes.y + propertyes.radius);
    propertyes.ctx.lineTo(
            propertyes.x + propertyes.width,
            propertyes.y + propertyes.height - propertyes.radius);
    propertyes.ctx.quadraticCurveTo(
            propertyes.x + propertyes.width,
            propertyes.y + propertyes.height,
            propertyes.x + propertyes.width - propertyes.radius,
            propertyes.y + propertyes.height);
    propertyes.ctx.lineTo(
            propertyes.x + propertyes.radius,
            propertyes.y + propertyes.height);
    propertyes.ctx.quadraticCurveTo(
        propertyes.x,
        propertyes.y + propertyes.height,
        propertyes.x, propertyes.y + propertyes.height - propertyes.radius);
    propertyes.ctx.lineTo(
        propertyes.x, propertyes.y + propertyes.radius);
    propertyes.ctx.quadraticCurveTo(propertyes.x,
        propertyes.y,
        propertyes.x + propertyes.radius,
        propertyes.y); /**/
        //propertyes.ctx.fillRect(propertyes.x, propertyes.y, propertyes.width, propertyes.height);
    propertyes.ctx.closePath();
    propertyes.ctx.fill()
}

interface ButtonShape{
    name: string,
    text: string,
    description: string,
    clicked: boolean,
    fontSize: string,
    propertyes:{
        ctx: any,
        width: number,
        height: number,
        x: number,
        y: number,
        background: string,
        borderColor: string,
        textProperty: {
            textColor: string,
            topPadding: number,
            rightPadding: number,
            bottomPadding: number,
            leftPadding: number,
        },
        radius: number
    }
}

function createRoundButton(shapePropertyes: ButtonShape){
    let propertyes = shapePropertyes.propertyes;
    let textWidth = propertyes.ctx.measureText(shapePropertyes.text).width/3.2;

    let buttonWidth =  propertyes.textProperty.leftPadding + textWidth + propertyes.textProperty.rightPadding;
    propertyes.ctx.fillStyle = propertyes.background;
    propertyes.ctx.beginPath();
    propertyes.ctx.moveTo(propertyes.x + propertyes.radius, propertyes.y);
    propertyes.ctx.lineTo(propertyes.x + buttonWidth - propertyes.radius,
        propertyes.y);
    propertyes.ctx.quadraticCurveTo(
            propertyes.x + buttonWidth,
            propertyes.y, propertyes.x + buttonWidth,
            propertyes.y + propertyes.radius);
    propertyes.ctx.lineTo(
            propertyes.x + buttonWidth,
            propertyes.y + propertyes.height - propertyes.radius);
    propertyes.ctx.quadraticCurveTo(
            propertyes.x + buttonWidth,
            propertyes.y + propertyes.height,
            propertyes.x + buttonWidth - propertyes.radius,
            propertyes.y + propertyes.height);
    propertyes.ctx.lineTo(
            propertyes.x + propertyes.radius,
            propertyes.y + propertyes.height);
    propertyes.ctx.quadraticCurveTo(
        propertyes.x,
        propertyes.y + propertyes.height,
        propertyes.x, propertyes.y + propertyes.height - propertyes.radius);
    propertyes.ctx.lineTo(
        propertyes.x, propertyes.y + propertyes.radius);
    propertyes.ctx.quadraticCurveTo(propertyes.x,
        propertyes.y,
        propertyes.x + propertyes.radius,
        propertyes.y); /**/
        //propertyes.ctx.fillRect(propertyes.x, propertyes.y, propertyes.width, propertyes.height);
    propertyes.ctx.closePath();
    propertyes.ctx.fill()



    propertyes.ctx.font = shapePropertyes.fontSize ;
    propertyes.ctx.fillStyle = propertyes.textProperty.textColor;
    propertyes.ctx.fillText(
        shapePropertyes.text,
        propertyes.x + propertyes.textProperty.leftPadding,
        propertyes.y + propertyes.height/2+ propertyes.textProperty.topPadding);

}
export {
    createWindow,
    createShapeRoundBorder,
    createRoundButton
}