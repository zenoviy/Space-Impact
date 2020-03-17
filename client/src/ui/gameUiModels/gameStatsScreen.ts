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
            propertyes:{
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
                this.propertyes.background.src = pictureDirrection + 'misc/ruby.png';
            },
            init: function(callback, data?){
                data = (data)? data: this;
                let steps = Array(info.life).fill(0).map((o, i) => i*30);
                let marginLeft = 30;
                for(let i = 0; i < this.number; i++){
                    this.propertyes.x = (i == 0)? marginLeft : 0 + steps[i] + ((i != 0)? marginLeft : 0);
                    callback(data)
                }
            },
            getObjectPosition: getUIObjectPosition
        }, {
            name: "level",
            text: `Current Level ${info.currentLevel}/${info.allLevels} `,
            description: "Game part the name",
            clicked: false,
            fontSize: "bold 16px Roboto",
            propertyes:{
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
            text: (info.minutes || info.seconds)? `Time to level end ${(info.minutes - 10 >=0)? '': 0}${info.minutes}:${(info.seconds - 10 >=0)? '': 0}${info.seconds}`: 'Boss level',
            description: "Game part the name",
            clicked: false,
            fontSize: "light 16px Roboto",
            propertyes:{
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
            text: info.points,
            description: "Game part the name",
            clicked: false,
            fontSize: "light 18px Roboto",
            propertyes:{
                ctx: ctx,
                width: -50,
                height: 0,
                x: width/2,
                y: 50,
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