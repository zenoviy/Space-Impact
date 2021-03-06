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
                if(!info.life || info.life < 0) return false
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
            text: ` ${(info.currentLevel <= info.allLevels)? 'Current Level ' + info.currentLevel : 'end of the game'} `, // info.allLevels
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
            name: "Time to end level",
            text: (function(){
                    let mainGameObject = info.mainGameObject;
                    let dynamicLevelsActive = mainGameObject.gameInitData.dynamicLevelsActive;
                    let isBossLevel = (process.env.BOSS_LOAD_AT_LEVEL === 'true')? true: false;
                    let displayText = '';
                    if(info.minutes || info.minutes === 0 || info.seconds || info.seconds === 0){
                        let minutes = (info.minutes - 10 >=0)? '' : 0;
                        let seconds = (info.seconds - 10 >=0)? '' : 0;
                        displayText = `Time to level end ${minutes}${info.minutes}:${seconds}${info.seconds}`;
                    }
                    if(isBossLevel){
                        displayText = "Boss level";
                    }
                    if(dynamicLevelsActive){
                        displayText = `${info.source.levelData.description.name}`;
                    }
                    return displayText;
            })(),
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
        },
        {
            name: "object",
            text: "",
            info: info,
            step: [info.life].map(i => i*50),
            description: "Game logotype",
            clicked: false,
            properties:{
                ctx: ctx,
                width: 100,
                height: 100,
                sWidth: 500,
                sHeight: 500,
                x: width/2 - 50,
                y: window.innerHeight - 50,
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
                let inventory = data.info.playerObject.data.inventory.filter(( object ) => {
                    if(object){
                        return  object.status === "inventory static"
                    }
                });
                if(!inventory) return false
                let objectsWithProperties = inventory.map(( item, i ) => {
                    item.img =  new Image();
                    item.img.src = process.env.HOST + item.displayImage;
                    return {
                        data: item,
                        marginLeft: 50 * i,
                        activateButton: item.grapplePower.value.activateButton
                    }
                })
                let mainGameObject = info.mainGameObject;
                if(mainGameObject.gameInitData.dynamicLevelsActive) return false
                for(let i = 0; i < objectsWithProperties.length; i++){
                    if(!objectsWithProperties[i].data) continue
                    let cardObject = objectsWithProperties[i];
                    if(cardObject.data.status === "inventory static"){
                        this.properties.background = cardObject.data.img;
                        this.properties.x += 50;

                        callback(data)
                        ctx.fillText(cardObject.data.grapplePower.number, this.properties.x, window.innerHeight - 40 )
                        ctx.fillText(cardObject.activateButton, this.properties.x + 30, window.innerHeight - 10 )
                    }
                }

            },
            getObjectPosition: getUIObjectPosition
        }, {
            name: "Game controls part 1",
            text: (function(){
                let mainGameObject = info.mainGameObject;
                let dynamicLevelsActive = mainGameObject.gameInitData.dynamicLevelsActive;
                let levelChange = mainGameObject.gameInitData.levelChange;
                //levelChange
                let pause = mainGameObject.gameInitData.gamePause;
                let gameControls = (dynamicLevelsActive && !pause)?
                `esc - menu P - pause LMB(hold) - shot  W - jump  D - right  S - down  A - left` : (!pause)?
                `esc - menu P - pause  LMB - shot  I - inventory  J -journal` : (dynamicLevelsActive && pause)?
                `esc - back to game P - pause  W - jump  D - right  S - down  A - left  J - journal  M - map  I - inventory` :
                `esc - menu   P - pause  I - inventory  J - journal`;

                if(!levelChange && !pause) return ''
                return gameControls
            })(), // W - jump  D - right  A - left   LKM - shot  E - activate M - map I - inventory j - journal
            description: "Game controll button tips part 1",
            clicked: false,
            fontSize: "thin 12px Roboto",
            properties:{
                ctx: ctx,
                width: 50,
                height: 0,
                x: 0,
                y: height - 50,
                background: false,
                borderColor: 'rgba(196, 198, 201, 1)',
                shadowColor: 'rgba(0, 0, 0, 1)',
                radius: null,
            },
            init: init,
            getObjectPosition: getUIObjectPosition
        },
    ]
}

export {
    gameInformationScreen
}