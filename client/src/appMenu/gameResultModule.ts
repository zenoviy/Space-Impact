import { show, hide, toggler, addClassList, removeClassList } from './appMenu';
import { createElements, pageBuilder } from './pagesBuilder';
import { getData, postData } from '../server/serverRequestModules';

async function showResultScreen(){
    let windowElement = document.querySelector('#show-result-area');
    windowElement.innerHTML = "";

    let gameData = await getData({
        url: process.env.HOST + 'api/game-result',
        method: 'GET',
        data: null,
        headers: null})

    if(gameData.hasOwnProperty('message')){
        windowElement.innerHTML = `<div class="result-message-wrapper"><p>${gameData.message}</p></div>`;
        return false}
    let index = 0;
    //gameData = gameData.sort((a, b) => {return  a.gamePoints - b.gamePoints}).reverse();
    for(let item of gameData){
        index += 1;
        let time = new Date(item.time), year = time.getFullYear(),month = time.getUTCMonth() + 1, day = time.getDate()
        let newElement = createElements({
            tagName: "li",
            styleClass: "winner-list",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: null,
            innerContent: `<p class="single-item"><span class="rate-number">&nbsp; ${index}</span>
            name: &nbsp;<span class="item-name"> ${item.userName}</span>
            coin: &nbsp;<span class="item-coin"> ${item.gameCoins}</span>
            score: &nbsp;<span class="item-points"> ${item.gamePoints}</span>
            <span class="item-date"> ${year}/${month}/${day}</span></p>`,
            attributeName: 'data-button-id',
            attribute: item.id,
            attributeName1: null,
            attribute1: null
        })
        setTimeout(()=>{
            windowElement.appendChild(newElement)
        }, index * 100)
    }
}
function initResultScreen(mainGameObject){
    let windowElement = document.querySelector('#save-result-box');
    let formLoadArea = document.querySelector('#form-load-area');

    formLoadArea.innerHTML = "";
    show(windowElement)

    let dialogData = [
        createElements({
                tagName: "form",
                styleClass: "accept-btn btn-main",
                inlineStyle: null,
                pictureUrl: null,
                linkUrl: null,
                text: "save result",
                innerContent: `
                <p>Please fill newt fields to save your result</p>
                <label for="name">
                    <p>Please enter you name</p>
                    <input id="name" maxlength="30" minlength="3" name="userName" type="text" require placeholder="Enter you name">
                </label>
                <label for="mail">
                    <p>Please enter you email</p>
                    <input id="mail" name="userEmail" type="email" require placeholder="Enter you email address">
                </label>
                <div id="alert-message" class="alert-message"></div>
                <div id="dialog-bottom-area" class="dialog-btn-area">
                    <button type="submit" data-button-id="save-result" class="accept-btn btn-main">save</button>
                    <button data-button-id="cancel" class="reject-btn btn-main">cancel</button>
                </div>`,
                attributeName: 'name',
                attribute: "save-result-form",
                attributeName1: null,
                attribute1: null}),
        ]
        for(let item of dialogData){
            formLoadArea.appendChild(item)
        }

        let form = document.forms['save-result-form'];

        document.querySelector('#dialog-bottom-area').addEventListener('click', dialogButtonEvent)
        form.addEventListener('submit', formAction)
    function dialogButtonEvent(event){
            switch (event.target.dataset.buttonId){
                case 'save-result':
                    break;
                case 'cancel':
                    formLoadArea.innerHTML = "";
                    if(windowElement) hide(windowElement)
                    break;
                default:
                    false
            }
    }
    async function formAction(event){
        event.preventDefault()
        let formResult = transferDataToObject(form, mainGameObject)

        if(formResult){
            let res = await getData({
            url: process.env.HOST + 'api/game-result',
            method: 'POST',
            data: formResult,
            headers: null})
            errorFormMessage({message: res.message, status: res.status})
            return
        }else{
            errorFormMessage({message: "I cant send this, please check form again", status: "reject"})
        }
    }
    function errorFormMessage({message, status}){
        const element = document.querySelector("#alert-message");
        let alertText: string = "";
        switch(status){
            case "reject":
                alertText = `<p class="reject-text">${message}</p>`
                break
            case "warning":
                alertText = `<p class="warning-text">${message}</p>`
                break
            case "success":
                alertText = `<p class="success-text">${message}</p>`
                form.reset()
                break
            default:
                alertText = "";
        }
        element.innerHTML = alertText
    }
}


interface resultData {
    userName: string,
    userEmail: string,
    gamePoints: number,
    gameCoins: number
}
function transferDataToObject(data: any, mainGameObject: any){
    if(!data) throw Error("No data to transform")
    var obj: resultData = {userName: null, userEmail: null, gamePoints: null, gameCoins: null};

    for(let item of data){
        if(item.name && item.value){
            obj[item.name] = item.value;
        }else if(item.name && !item.value){
            return false
        }
    }
    let gameData = mainGameObject.getLevelUserData();

    obj.gamePoints = gameData.points;
    obj.gameCoins = gameData.gameCoins;
    return obj
}

export {
    initResultScreen,
    showResultScreen
}