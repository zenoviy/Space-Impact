import { init, getUIObjectPosition } from './uiModelMethods';
import * as constructors from '../../constructors';
import { dialogWindow } from '../../appMenu/appMenu';
import { initResultScreen } from '../../appMenu/gameResultModule';

function gameWinScreen(data: any,ctx: any, width: number, height: number, pictureDirrection: any, info: any){
    return data || [
        {
            name: "screen title",
            text: "YOU WIN ",
            description: "text for game over window",
            fontSize: " bold 120px Roboto",
            clicked: false,
            shadowColor: 'rgba(255, 255, 255, 1)',
            properties:{
                ctx: ctx,
                width: 0,
                height: 90,
                x: width/2 - 250,
                y: height/2 - height/4,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(37, 21, 54, 1)',
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
            shadowColor: 'rgba(255, 255, 255, 1)',
            properties:{
                ctx: ctx,
                width: 0,
                height: 90,
                x: width/2 - 250,
                y: height/2 - 50,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(37, 21, 54, 1)',
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
            shadowColor: 'rgba(255, 255, 255, 1)',
            properties:{
                ctx: ctx,
                width: 0,
                height: 90,
                x: width/2 - 250,
                y: height/2,
                background: 'rgba(255, 255, 255, 1)',
                isBorder: false,
                borderRadius: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(37, 21, 54, 1)',
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
            properties:{
                ctx: ctx,
                width: 300,
                height: 50,
                x: width/2 + width/3,
                y: height/2 + 150,
                background: '#251536',
                isBorder: false,
                borderRadius: 2,
                borderColor: '#251536',
                shadowColor: 'rgba(37, 21, 54, 1)',
                textProperty: {
                    textColor: 'rgba(255, 255, 255, 1)',
                    shadowColor: 'rgba(255, 255, 255, 0)',
                    topPadding: 7,
                    rightPadding: 100,
                    bottomPadding: 10,
                    leftPadding: 20,
                },
                radius: 15,
            },
            action(){
                initResultScreen(this)
                this.gameUiMenu(this.gameInitData.gameUiPause)
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Button end game",
            text: "to start",
            description: "back to start screen",
            fontSize: "25px Roboto",
            clicked: false,
            properties:{
                ctx: ctx,
                width: 200,
                height: 50,
                x: 20,
                y: height/2 + 150,
                background: '#251536',
                isBorder: false,
                borderRadius: 2,
                borderColor: '#251536',
                shadowColor: 'rgba(37, 21, 54, 1)',
                textProperty: {
                    textColor: 'rgba(255, 255, 255, 1)',
                    shadowColor: 'rgba(255, 255, 255, 0)',
                    topPadding: 7,
                    rightPadding: 100,
                    bottomPadding: 10,
                    leftPadding: 20,
                },
                radius: 15,
            },
            action(){
                dialogWindow({textData: 'restart the game?', rejectText: 'cancel', acceptText: 'restart'}, this.backToStartScreen, null, this, constructors)
                this.gameUiMenu(this.gameInitData.gameUiPause)
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }
    ]
}

export {
    gameWinScreen
}