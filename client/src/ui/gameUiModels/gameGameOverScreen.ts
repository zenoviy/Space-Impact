import { init, getUIObjectPosition } from './uiModelMethods';

function gameOverScreen(data: any,ctx: any, width: number, height: number, pictureDirrection: any){
    return data || [
        {
            name: "Pause text",
            text: "Game Over",
            description: "text for game over window",
            fontSize: "110px Arial",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 0,
                height: 90,
                x: width/2 - 250,
                y: height/2 - 50,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(255, 255, 255, 1)',
                radius: 45,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }
    ]
}

export {
    gameOverScreen
}