//  points   life, time to ends, level
import { init, getUIObjectPosition } from './uiModelMethods';

function gameInformationScreen(extra: any, ctx: any, width: number, height: number, pictureDirrection: any, info: any){
    return [
        {
            name: "lifePoint",
            text: "",
            number: info.life,
            step: [info.life].map(i => i*50),
            description: "Game logotype",
            clicked: false,
            properties:{
                ctx: ctx,
                width: 70,
                height: 70,
                sWidth: 500,
                sHeight: 500,
                x: 10,
                y: 20,
                background: new Image(),
                borderColor: false,
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: null,
            },
            loadPicture(){
                this.properties.background.src = pictureDirrection + 'misc/ruby.png';
            },
            init: function(callback, data?){
                data = (data)? data: this;

                let steps = Array(info.life).fill(0).map((o, i) => i*30);
                let marginLeft = 30;
                for(let i = 0; i < this.number; i++){
                    this.properties.x = (i == 0)? marginLeft : 0 + steps[i] + ((i != 0)? marginLeft : 0);
                    callback(data)
                }
            },
            getObjectPosition: getUIObjectPosition
        }, {
            name: "level",
            text: ` ${(info.currentLevel <= info.allLevels)? 'Current Level ' + info.currentLevel + '/' + info.allLevels : 'end of the game'} `,
            description: "Game part the name",
            clicked: false,
            fontSize: "bold 16px Roboto",
            properties:{
                ctx: ctx,
                width: 0,
                height: 0,
                x: 30,
                y: 70,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: null,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Time to end f level",
            text: (info.minutes || info.minutes === 0 || info.seconds || info.seconds === 0)? (`Time to level end ${(info.minutes - 10 >=0)? '': 0}${info.minutes}:${(info.seconds - 10 >= 0)? '': 0}${info.seconds}`): 'Boss level',
            description: "Game part the name",
            clicked: false,
            fontSize: "light 16px Roboto",
            properties:{
                ctx: ctx,
                width: 50,
                height: 0,
                x: width-300,
                y: 30,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: null,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Game points",
            text: `score: ${info.points}`,
            description: "Game part the name",
            clicked: false,
            fontSize: "light 18px Roboto",
            properties:{
                ctx: ctx,
                width: -50,
                height: 0,
                x: width/2,
                y: 70,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: null,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        },{
            name: "coins",
            text: "",
            number: info.source.gameCoins,///info.source.gameCoins,
            step: [info.life].map(i => i*50),
            description: "Game logotype",
            clicked: false,
            properties:{
                ctx: ctx,
                width: 100,
                height: 100,
                sWidth: 500,
                sHeight: 500,
                x: width/2 -50,
                y: 25,
                background: new Image(),
                borderColor: false,
                shadowColor: 'rgba(0, 0, 0, 0)',
                radius: null,
            },
            loadPicture(){
                this.properties.background.src = pictureDirrection + 'misc/grapple-objects/coin.png';
            },
            init: function(callback, data?){
                data = (data)? data: this;
                let cointIndex = Math.floor(this.number/5000),
                numberOfCoin = ( cointIndex > 0 && cointIndex < 10)? cointIndex :(cointIndex >= 10)? 10 : 1 ;

                let steps = Array(numberOfCoin).fill(0).map((o, i) => i*5);
                let marginLeft = this.properties.x;
                for(let i = 0; i < numberOfCoin; i++){
                    this.properties.x = (i == 0)? marginLeft : 0 + steps[i] + ((i != 0)? marginLeft : 0);
                    callback(data)
                }
            },
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Game coins",
            text: `X${info.source.gameCoins}`,
            description: "Game part the name",
            clicked: false,
            fontSize: "light 18px Roboto",
            properties:{
                ctx: ctx,
                width: -50,
                height: 0,
                x: width/2,
                y: 20,
                background: false,
                borderColor: 'rgba(255, 255, 255, 1)',
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: null,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        }
    ]
}

export {
    gameInformationScreen
}