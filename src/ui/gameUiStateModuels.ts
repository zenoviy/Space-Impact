function init(callback, data?){
    data = (data)? data: this;
    callback(data)
}
function getUIObjectPosition(){
    let context = this;
    //console.log(context)
    return {
        x: context.propertyes.x,
        y: context.propertyes.y,
        width: context.propertyes.width,
        height: context.propertyes.height,
    }
}
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
                x: width/2 - 150,
                y: height/2 + 50,
                background: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
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
                width: 100,
                height: 140,
                sWidth: 503,
                sHeight: 669,
                x: width/2 - 50,
                y: 50,
                background: new Image(),
                borderColor: false,
                radius: null,
            },
            loadPicture(){
                this.propertyes.background.src = pictureDirrection + 'misc/logo-half-white_1.png';
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
                width: -240,
                height: 0,
                x: width/2,
                y: 300,
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
                width: 50,
                height: 0,
                x: width/2,
                y: 300,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: null,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Start button",
            text: "Press Start to begin",
            description: "Text in main button",
            fontSize: "30px Roboto",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: -90,
                height: 105,
                x: width/2 ,
                y: height/2,
                background: false,
                borderColor: '#007BD1',
                radius: null,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        },

    ]
}
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
            init: init,
            getObjectPosition: getUIObjectPosition
        },{
            name: "Main game menu",
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
            init: init,
            getObjectPosition: getUIObjectPosition
        }
    ]
}

module.exports.uiStateModules = {
    gameLoadMenu: gameLoadMenu,
    gameSettingsMenu: gameSettingsMenu
}