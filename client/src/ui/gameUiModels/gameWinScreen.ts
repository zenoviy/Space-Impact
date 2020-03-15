import { init, getUIObjectPosition } from './uiModelMethods';
import * as constructors from '../../constructors';

function gameWinScreen(data: any,ctx: any, width: number, height: number, pictureDirrection: any, info: any){
    return data || [
        {
            name: "screen title",
            text: "YOU WIN ",
            description: "text for game over window",
            fontSize: " bold 120px Roboto",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 0,
                height: 90,
                x: width/2 - 250,
                y: height/2 - height/4,
                background: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: 45,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        },
        {
            name: "screen text",
            text: "Congratulation ",
            description: "text for game over window",
            fontSize: " bold 30px Roboto",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 0,
                height: 90,
                x: width/2 - 250,
                y: height/2 - 50,
                background: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: 45,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        },
        {
            name: "score",
            text: `You score is ${ info.points }`,
            description: "text for game over window",
            fontSize: " bold 30px Roboto",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 0,
                height: 90,
                x: width/2 - 250,
                y: height/2,
                background: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                radius: 45,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Button end game",
            text: "Save results",
            description: "back to start screen",
            fontSize: "25px Roboto",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 300,
                height: 50,
                x: width/2 + width/3,
                y: height/2 + 150,
                background: '#251536',
                borderColor: '#251536',
                textProperty: {
                    textColor: 'rgba(255, 255, 255, 1)',
                    topPadding: 7,
                    rightPadding: 100,
                    bottomPadding: 10,
                    leftPadding: 20,
                },
                radius: 15,
            },
            action(){

            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, {
            name: "top winners",
            text: "Top winners",
            description: "back to start screen",
            fontSize: "25px Roboto",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 300,
                height: 50,
                x: width/2 ,
                y: height/2 + 150,
                background: '#251536',
                borderColor: '#251536',
                textProperty: {
                    textColor: 'rgba(255, 255, 255, 1)',
                    topPadding: 7,
                    rightPadding: 120,
                    bottomPadding: 10,
                    leftPadding: 20,
                },
                radius: 15,
            },
            action(){

            },
            init: init,
            getObjectPosition: getUIObjectPosition
        },{
            name: "Button end game",
            text: "go to start",
            description: "back to start screen",
            fontSize: "25px Roboto",
            clicked: false,
            propertyes:{
                ctx: ctx,
                width: 200,
                height: 50,
                x: width/3,
                y: height/2 + 150,
                background: '#251536',
                borderColor: '#251536',
                textProperty: {
                    textColor: 'rgba(255, 255, 255, 1)',
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
        }
    ]
}

export {
    gameWinScreen
}