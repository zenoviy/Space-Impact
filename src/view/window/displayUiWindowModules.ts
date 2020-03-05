//import { viewModules } from '../displayModules';

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


export {
    createWindow,
    createShapeRoundBorder
}