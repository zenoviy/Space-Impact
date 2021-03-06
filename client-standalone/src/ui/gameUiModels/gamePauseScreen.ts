import { init, getUIObjectPosition } from './uiModelMethods';

function gamePause(data: any,ctx: any, width: number, height: number, pictureDirrection: any){
    return data || [
        {
            name: "Pause text",
            text: "Pause",
            description: "part of pause window",
            fontSize: "60px Arial",
            clicked: false,
            properties:{
                ctx: ctx,
                width: 400,
                height: 90,
                x: width/2 - 150,
                y: 100,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(37, 21, 54, 1)',
                radius: 45,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }
    ]
}

export {
    gamePause
}