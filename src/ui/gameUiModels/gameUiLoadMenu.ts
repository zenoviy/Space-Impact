var { uiModelsMethods } = require('./uiModelMethods');
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
                x: width/2 - 200,
                y: height/2 + 50,
                background: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: 45,
            },
            action(){
                this.gameStart()
            },
            init: uiModelsMethods.init,
            getObjectPosition: uiModelsMethods.getUIObjectPosition
        }, {
            name: "Logotype",
            text: "",
            description: "Game logotype",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 100,
                height: 140,
                sWidth: 503,
                sHeight: 669,
                x: width/2 - 80,
                y: 50,
                background: new Image(),
                borderColor: false,
                radius: null,
            },
            loadPicture(){
                this.propertyes.background.src = pictureDirrection + 'misc/logo-half-white_1.png';
            },
            init: uiModelsMethods.init,
            getObjectPosition: uiModelsMethods.getUIObjectPosition
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
                y: 300,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: null,
            },
            init: uiModelsMethods.init,
            getObjectPosition: uiModelsMethods.getUIObjectPosition
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
                y: 300,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: null,
            },
            init: uiModelsMethods.init,
            getObjectPosition: uiModelsMethods.getUIObjectPosition
        }, {
            name: "Start button",
            text: "Press Start to begin",
            description: "Text in main button",
            fontSize: "30px Roboto",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: -130,
                height: 105,
                x: width/2 ,
                y: height/2,
                background: false,
                borderColor: '#007BD1',
                radius: null,
            },
            init: uiModelsMethods.init,
            getObjectPosition: uiModelsMethods.getUIObjectPosition
        },

    ]
}


module.exports.uiStateModules = {
    gameLoadMenu: gameLoadMenu
}