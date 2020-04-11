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
    let index = 0, displayData = gameData.slice(0, 100);
    for(let item of displayData){
        index += 1;
        let time = new Date(item.time), year = time.getFullYear(),month = time.getUTCMonth() + 1, day = time.getDate()
        let newElement = createElements({
            tagName: "li",
            styleClass: "winner-list",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: null,
            innerContent: `<p class="single-item"><span class="rate-number">${index}</span>
            <span>name:</span> <span class="item-name"> ${item.userName}</span>
            <span>coin:</span> <span class="item-coin"> ${item.gameCoins}</span>
            <span>score:</span> <span class="item-points"> ${item.gamePoints}</span>
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
    let formBtnSwitcherArea = document.querySelector("#form-btn-switcher-area");
    let formLoadArea = document.querySelector('#form-load-area');

    formLoadArea.innerHTML = "";
    formBtnSwitcherArea.innerHTML = "";

    show(windowElement)
    let buttonSwitcher = [
        createElements({
            tagName: "button",
            styleClass: "accept-btn btn-main",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: "update player",
            innerContent: ``,
            attributeName: "data-btn-id",
            attribute: "update-player",
            attributeName1: null,
            attribute1: null}),
        createElements({
            tagName: "button",
            styleClass: "accept-btn btn-main selected-form",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: "new player",
            innerContent: ``,
            attributeName: "data-btn-id",
            attribute: "new-player",
            attributeName1: null,
            attribute1: null})
    ];
    for(let item of buttonSwitcher){
        formBtnSwitcherArea.appendChild(item)
    }

    let dialogData = [
        createElements({
                tagName: "form",
                styleClass: "",
                inlineStyle: null,
                pictureUrl: null,
                linkUrl: null,
                text: "save result",
                innerContent: `
                <h1>Create new player</h1>
                <p>Please fill the fields to save your result</p>
                <label for="name">
                    <p>Please enter you name</p>
                    <input id="name" maxlength="30" minlength="3" name="userName" type="text" required placeholder="Enter you name">
                </label>
                <label for="mail">
                    <p>Please enter you email</p>
                    <input id="mail" name="userEmail" type="email" required placeholder="Enter you email address">
                </label>
                <label for="password">
                    <p>Create password</p>
                    <input id="password" name="userPassword" maxlength="20" minlength="4" type="password" required placeholder="Enter you email address">
                </label>
                <div id="alert-message" class="alert-message"></div>
                <div id="dialog-bottom-area" class="dialog-bottom-area">
                    <button type="submit" data-button-id="save-result" class="accept-btn btn-main">save</button>
                    <button data-button-id="cancel" class="reject-btn btn-main btn-orange-reject">cancel</button>
                </div>`,
                attributeName: 'name',
                attribute: "save-result-form",
                attributeName1: null,
                attribute1: null}),
                createElements({
                    tagName: "form",
                    styleClass: "",
                    inlineStyle: "display: none;",
                    pictureUrl: null,
                    linkUrl: null,
                    text: "save result",
                    innerContent: `
                    <h1>Update player</h1>
                    <p>Enter email and password</p>
                    <label for="mail">
                        <p>Please enter you email</p>
                        <input id="mail" name="userEmail" type="email" required placeholder="Enter you email address">
                    </label>
                    <label for="password">
                        <p>Create password</p>
                        <input id="password" name="userPassword" maxlength="20" minlength="4" type="password" required placeholder="Enter you email address">
                    </label>
                    <div id="alert-message" class="alert-message"></div>
                    <div id="dialog-bottom-area" class="dialog-bottom-area">
                        <button type="submit" data-button-id="save-result" class="accept-btn btn-main">save</button>
                        <button data-button-id="cancel" class="reject-btn btn-main btn-orange-reject">cancel</button>
                    </div>`,
                    attributeName: 'name',
                    attribute: "rewrite-result-form",
                    attributeName1: null,
                    attribute1: null})
        ]
        for(let item of dialogData){
            formLoadArea.appendChild(item)
        }

        let form = document.forms['save-result-form'];
        let rewriteForm = document.forms['rewrite-result-form'];
        let formBtnArea = document.querySelectorAll('.dialog-bottom-area')

        formBtnSwitcherArea.addEventListener('click', formSwitcher)
        Array.prototype.forEach.call(formBtnArea, (button) => {
            button.addEventListener('click', dialogButtonEvent)
        })

        form.addEventListener('submit', formActionWrite)
        rewriteForm.addEventListener('submit', formActionUpdate)

    function formSwitcher(event){
        switch(event.target.dataset.btnId){
            case "new-player":

                hide(rewriteForm)
                show(form)
                addClassList(event.target, "selected-form")
                break
            case "update-player":

                hide(form)
                show(rewriteForm)
                addClassList(event.target, "selected-form")
                break
            default:
                false
        }
    }
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
    async function formActionWrite(event){
        event.preventDefault()
        let formResult = transferDataToObject(this, mainGameObject)

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

    async function formActionUpdate(event){
        event.preventDefault()
        let formResult = transferDataToObject(this, mainGameObject)

        if(formResult){
            let res = await getData({
            url: process.env.HOST + 'api/game-result',
            method: 'PUT',
            data: formResult,
            headers: null})
            errorFormMessage({message: res.message, status: res.status})
            return
        }else{
            errorFormMessage({message: "I cant send this, please check form again", status: "reject"})
        }
    }
    function errorFormMessage({message, status}){
        const elements = document.querySelectorAll(".alert-message");
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
                rewriteForm.reset()
                break
            default:
                alertText = "";
        }
        Array.prototype.forEach.call(elements, (el) => {
            el.innerHTML = alertText
        })
    }
}





interface resultData {
    userName: string,
    userEmail: string,
    gamePoints: number,
    gameCoins: number,
    userPassword: string
}
function transferDataToObject(data: any, mainGameObject: any){
    if(!data) throw Error("No data to transform")
    var obj: resultData = {userName: null, userEmail: null, gamePoints: null, gameCoins: null, userPassword: null};

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