var { uiModelsMethods } = require('./uiModelMethods');

function gamePause(data: any,ctx: any, width: number, height: number, pictureDirrection: any){
    return data || [
        {
            name: "Pause text",
            text: "Pause",
            description: "part of pause window",
            fontSize: "60px Arial",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 400,
                height: 90,
                x: width/2 - 150,
                y: height/2 + 50,
                background: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: 45,
            },
            init: uiModelsMethods.init,
            getObjectPosition: uiModelsMethods.getUIObjectPosition
        }
    ]
}

module.exports.gamePauseModule = {
    gamePause: gamePause
}