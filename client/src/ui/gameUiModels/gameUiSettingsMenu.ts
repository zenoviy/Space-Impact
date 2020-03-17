
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
            shadowColor: 'rgba(255, 255, 255, 1)',
            propertyes:{
                ctx: ctx,
                width: width,
                height: height/2,
                x: 0,
                y: height/4,
                gradient: true,
                backGroundFinal: "#8C31A3",
                topX: 0,
                topY: 0,
                bottomX: width,
                bottomY: height/2,
                background: '#6628A7',
                isBorder: false,
                borderRadius: 2,
                borderColor: '#251536',
                shadowColor: 'rgba(0, 0, 0, 1)',
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
            shadowColor: 'rgba(255, 255, 255, 1)',
            propertyes:{
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
                    leftPadding: 20,
                },
                radius: 15,
            },
            action(){
                this.backToStartScreen.call(this, constructors.PlayerShip)
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        },  {
            name: "Button to exit",
            text: "exit",
            description: "Exit the game",
            fontSize: "25px Roboto",
            clicked: false,
            shadowColor: 'rgba(255, 255, 255, 1)',
            propertyes:{
                ctx: ctx,
                width: 200,
                height: 50,
                x: width/2 + width/3,
                y: height/2 + 50 ,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(255, 255, 255, 0)',
                textProperty: {
                    textColor: '#251536',
                    topPadding: 7,
                    rightPadding: 50,
                    bottomPadding: 10,
                    leftPadding: 20,
                },
                radius: 15,
            },
            action(gameObject){
                gameObject.exitTheGame()
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
            propertyes:{
                ctx: ctx,
                width: -45,
                height: 0,
                x: width/2 ,
                y: height/3,
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