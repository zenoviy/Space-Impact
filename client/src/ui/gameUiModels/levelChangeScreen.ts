import { init, getUIObjectPosition } from './uiModelMethods';

function levelChangeScreen(data: any,ctx: any, width: number, height: number, pictureDirrection: any, info: any){
    let levelData = info.source.levelData;
    return data || [
        {
            name: "Screen name",
            text: `Warp to the next level`,
            description: "text for game over window",
            fontSize: "30px Roboto",
            clicked: false,
            properties:{
                ctx: ctx,
                width: 0,
                height: 50,
                x: width/2 - 250,
                y: height/3 - 50,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, .4)',
                radius: 45,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        },
        {
            name: "wrap head",
            text: `${(levelData.description)? levelData.description.name: ''}`,
            description: "text for game over window",
            fontSize: "100px Roboto",
            clicked: false,
            properties:{
                ctx: ctx,
                width: 0,
                height: 50,
                x: width/2 - 250,
                y: height/2 - 50,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, .4)',
                radius: 45,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        },{
            name: "rwarp description",
            text: `${(levelData.description)? levelData.description.description: ''}`,
            description: "text for game over window",
            fontSize: "20px Roboto",
            clicked: false,
            properties:{
                ctx: ctx,
                width: 0,
                height: 90,
                x: width/2 - 250,
                y: height/2 ,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, .4)',
                radius: 45,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }
    ]
}

export {
    levelChangeScreen
}