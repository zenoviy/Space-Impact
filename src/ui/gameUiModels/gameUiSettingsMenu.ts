var { uiModelsMethods } = require('./uiModelMethods');

function gameSettingsMenu(data: any,ctx: any, width: number, height: number){
    return data || [
        {
            name: "menu background",
            text: "",
            description: "back part of menu ",
            fontSize: "30px Arial",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: width,
                height: height/2,
                x: 0,
                y: height/4,
                background: 'rgba(38, 38, 86, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: 5,
            },
            init: uiModelsMethods.init,
            getObjectPosition: uiModelsMethods.getUIObjectPosition
        }, {
            name: "Button end game",
            text: "",
            description: "back to start screen",
            fontSize: "30px Arial",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 200,
                height: 50,
                x: width/2 - 150,
                y: height/2 + 50,
                background: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: 15,
            },
            action(){
                this.backToStartScreen.call(this)
            },
            init: uiModelsMethods.init,
            getObjectPosition: uiModelsMethods.getUIObjectPosition
        }, {
            name: "textin button",
            text: "go to start",
            description: "Text in the menu button",
            fontSize: "25px Roboto",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 45,
                height: 0,
                x: width/2 - 150,
                y: height/2 + 80,
                background: false,
                borderColor: '#007BD1',
                radius: null,
            },
            init: uiModelsMethods.init,
            getObjectPosition: uiModelsMethods.getUIObjectPosition
        }, {
            name: "Main game menu name",
            text: "Menu",
            description: "Text in main top",
            fontSize: "25px Roboto",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: -45,
                height: 0,
                x: width/2 ,
                y: height/3,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: null,
            },
            init: uiModelsMethods.init,
            getObjectPosition: uiModelsMethods.getUIObjectPosition
        }
    ]
}

module.exports.uiSettingsMenu = {
    gameSettingsMenu: gameSettingsMenu
}