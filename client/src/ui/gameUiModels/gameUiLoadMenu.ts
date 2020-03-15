import { init, getUIObjectPosition } from './uiModelMethods';

function gameLoadMenu(data: any,ctx: any, width: number, height: number, pictureDirrection: any){
    return data || [
        {
            name: "Start button",
            text: "Press Start to begin",
            description: "Main start game button in the main load screen",
            fontSize: "30px Arial",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 400,
                height: 90,
                x: width/2 - 165,
                y: height/2 + 150,
                background: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                textProperty: {
                    textColor: '#251536',
                    topPadding: 10,
                    rightPadding: 40,
                    bottomPadding: 10,
                    leftPadding: 40,
                },
                radius: 45,
            },
            action(){
                this.gameStart()
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Logotype",
            text: "",
            description: "Game logotype",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 150,
                height: 150,
                sWidth: 1024,
                sHeight: 1024,
                x: width/2 - 75,
                y: 90,
                background: new Image(),
                borderColor: false,
                radius: null,
            },
            loadPicture(){
                this.propertyes.background.src = pictureDirrection + 'misc/logo-1024x1024.png';
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Game name",
            text: "Space",
            description: "Game part the name",
            clicked: false,
            fontSize: "bold 100px Roboto",
            propertyes:{
                ctx: ctx,
                width: -290,
                height: 0,
                x: width/2,
                y: 370,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: null,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Game name",
            text: "Attack",
            description: "Game part the name",
            clicked: false,
            fontSize: "lighter 100px Roboto",
            propertyes:{
                ctx: ctx,
                width: 0,
                height: 0,
                x: width/2,
                y: 370,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: null,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }
    ]
}


export {
    gameLoadMenu
}