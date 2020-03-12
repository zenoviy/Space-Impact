
import { init, getUIObjectPosition } from './uiModelMethods';
import * as constructors from '../../constructors';

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
        }, {
            name: "Button end game",
            text: "go to start",
            description: "back to start screen",
            fontSize: "25px Roboto",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 200,
                height: 50,
                x: width/2 - 150,
                y: height/2 + 50,
                background: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                textProperty: {
                    textColor: '#007BD1',
                    topPadding: 7,
                    rightPadding: 50,
                    bottomPadding: 10,
                    leftPadding: 20,
                },
                radius: 15,
            },
            action(){
                this.backToStartScreen.call(this, constructors.PlayerShip)
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, /*{
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
            init: init,
            getObjectPosition: getUIObjectPosition
        },*/ {
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
            init: init,
            getObjectPosition: getUIObjectPosition
        }
    ]
}

export {
    gameSettingsMenu
}