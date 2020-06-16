
import { init, getUIObjectPosition } from './uiModelMethods';
import * as constructors from '../../constructors';
import { dialogWindow } from '../../appMenu/appMenu';

function gameSettingsMenu(data: any,ctx: any, width: number, height: number){
    return data || [
        {
            name: "menu background",
            text: "",
            description: "back part of menu ",
            fontSize: "30px Arial",
            clicked: false,
            shadowColor: 'rgba(255, 255, 255, 1)',
            properties:{
                ctx: ctx,
                width: width,
                height: 450,
                x: 0,
                y: 100,
                gradient: true,
                backGroundFinal: "rgba(56, 2, 64, .1)",
                topX: 0,
                topY: 0,
                bottomX: width,
                bottomY: 100,
                background: "rgba(47, 34, 49, .7)",
                isBorder: false,
                borderRadius: 2,
                borderColor: "#251536",
                shadowColor: "rgba(0, 0, 0, 1)",
                radius: 5,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Button end game",
            text: "Restart the game",
            description: "back to start screen",
            fontSize: "20px Roboto",
            clicked: false,
            shadowColor: 'rgba(255, 255, 255, 1)',
            properties:{
                ctx: ctx,
                width: 200,
                height: 50,
                x: width/2 - 150,
                y: height/2 + 50,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, 0)',
                textProperty: {
                    textColor: '#251536',
                    topPadding: 7,
                    rightPadding: 50,
                    bottomPadding: 10,
                    leftPadding: 40,
                },
                radius: 15,
            },
            action(){
                dialogWindow({textData: 'restart the game?', rejectText: 'cancel', acceptText: 'restart'}, this.backToStartScreen, null, this, constructors)
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Main game menu name",
            text: "Menu",
            description: "Text in main top",
            fontSize: "25px Roboto",
            clicked: false,
            shadowColor: 'rgba(255, 255, 255, 0)',
            properties:{
                ctx: ctx,
                width: -45,
                height: 0,
                x: width/2 ,
                y: 150,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(255, 255, 255, 0)',
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