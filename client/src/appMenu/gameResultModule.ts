import { show, hide, toggler, addClassList, removeClassList } from './appMenu';
import { createElements, pageBuilder } from './pagesBuilder';
import { getData, postData } from '../server/serverRequestModules';
import { getGameResultData } from '../server/gameDataRequestsServicesModule';
import { avatarButton, convertPictureToData } from './userAvatarModules';

async function showResultScreen(){
    let windowElement = document.querySelector('#show-result-area');
    windowElement.innerHTML = "";

    let gameData = await getGameResultData({ method: 'GET', data: null });/*await getData({
        url: process.env.HOST + 'api/game-result',
        method: 'GET',
        data: null,
        headers: null})*/

    if(gameData.hasOwnProperty('message')){
        windowElement.innerHTML = `<div class="result-message-wrapper"><p>${gameData.message}</p></div>`;
        return false}
    let index = 0, displayData = gameData.slice(0, 100);
    for(let item of displayData){
        let time = new Date(item.time), year = time.getFullYear(),month = time.getUTCMonth() + 1, day = time.getDate()

        let avatarImage = (item.userAvatar)? item.userAvatar :  ( __dirname + '/public/images/misc/avatars/picture_icon.png');
        let img = new Image();
        img.src = await avatarImage;
        index +=  1;
            let newElement = await createElements({
                tagName: "li",
                styleClass: "winner-list",
                inlineStyle: null,
                pictureUrl: null,
                linkUrl: null,
                text: null,
                innerContent: `<p class="single-item"><span class="rate-number">${index}</span>
                <span>${  "<img class='small-avatar' src=" + img.src + " width='30' alt='avatar'>" }</span>
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

/*

    V- add button with avatar chose
    V- render all avatars from remote file/or array with pictures
    V- display pictures as choose
    V- select pictures from computer or url!

    V- save avatar picture as base_64 encoding
    V- display this picture as small avatar in "Game Results"
    V- display picture while update current user

*/
    const formState = {
        avatarSectionShowState: false,
        avatarPicture: null
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
                <label for="avatar-picture">
                    <p>You profile picture</p>

                    <button id="avatar-button" class="avatar-button">
                        <img id="avatar-picture" class="avatar-inner-picture">
                    </button>

                    <section id="avatar-box" class="avatar-box">
                        <button id="avatar-close" class="avatar-close" >x</button>
                        <h2>Select you pictures</h2>
                        <input type="file" id="player-avatar" accept="image/png, image/jpeg">

                        <div id="avatar-inner-box" class="avatar-inner-box"></div>
                    </section>
                </label>

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
                    <label for="avatar-picture">
                    <p>You profile picture</p>

                    <button id="avatar-button-update" class="avatar-button">
                        <img id="avatar-picture-update" class="avatar-inner-picture">
                    </button>

                    <section id="avatar-box-update" class="avatar-box">
                        <button id="avatar-close-update" class="avatar-close" >x</button>
                        <h2>Select you pictures</h2>
                        <input type="file" id="player-avatar-update" accept="image/png, image/jpeg">

                        <div id="avatar-inner-box-update" class="avatar-inner-box"></div>
                    </section>
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
                    attribute: "rewrite-result-form",
                    attributeName1: null,
                    attribute1: null})
        ]
        for(let item of dialogData){
            formLoadArea.appendChild(item)
        }

        let form = document.forms['save-result-form'];
        let rewriteForm = document.forms['rewrite-result-form'];
        let formBtnArea = document.querySelectorAll('.dialog-bottom-area');

        let newAvatarSelectors = {
            buttonSelector: '#avatar-button',
            avatarCloseSelector: '#avatar-close',
            playerAvatarLoadSelector: '#player-avatar',
            avatarBoxSelector: '#avatar-box',
            avatarInnerBoxSelector: '#avatar-inner-box',
            displaySelector: '#avatar-picture'
        }
        let updateAvatarSelectors = {
            buttonSelector: '#avatar-button-update',
            avatarCloseSelector: '#avatar-close-update',
            playerAvatarLoadSelector: '#player-avatar-update',
            avatarBoxSelector: '#avatar-box-update',
            avatarInnerBoxSelector: '#avatar-inner-box-update',
            displaySelector: '#avatar-picture-update'
        }
        avatarButton({ newAvatarSelectors: newAvatarSelectors, formState: formState})
        avatarButton({ newAvatarSelectors: updateAvatarSelectors, formState: formState})

        formBtnSwitcherArea.addEventListener('click', formSwitcher)
        Array.prototype.forEach.call(formBtnArea, (button) => {
            button.addEventListener('click', dialogButtonEvent)
        })

        form.addEventListener('submit', function(event){
            formActionWrite.call(this, event, formState)
        })
        rewriteForm.addEventListener('submit', formActionUpdate)

    function formSwitcher(event){
        switch(event.target.dataset.btnId){
            case "new-player":
                removeButtonClass.call( this )
                hide(rewriteForm)
                show(form)
                addClassList(event.target, "selected-form")
                break
            case "update-player":
                removeButtonClass.call( this )
                hide(form)
                show(rewriteForm)
                addClassList(event.target, "selected-form")
                break
            default:
                false
        }
    }
    function removeButtonClass(){
        //let obj = document.querySelectorAll(this + " button");
        let buttons = document.querySelectorAll(".selected-form");

        Array.prototype.slice.call(buttons).forEach(item => {
            removeClassList(item, "selected-form")
        })
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
    async function formActionWrite(event, formState){
        event.preventDefault()
        console.log(this, mainGameObject, formState, '<<<')
        let formResult = transferDataToObject(this, mainGameObject, formState)

        if(formResult){
            let res = await getGameResultData({ method: 'POST', data: formResult }) /* await getData({
            url: process.env.HOST + 'api/game-result',
            method: 'POST',
            data: formResult,
            headers: null})*/
            errorFormMessage({message: res.message, status: res.status})
            return
        }else{
            errorFormMessage({message: "I cant send this, please check form again", status: "reject"})
        }
    }

    async function formActionUpdate(event){
        event.preventDefault()
        let formResult = transferDataToObject(this, mainGameObject, formState)

        if(formResult){
            let res = await getGameResultData({method: 'PUT', data: formResult})/*await getData({
            url: process.env.HOST + 'api/game-result',
            method: 'PUT',
            data: formResult,
            headers: null})*/
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
    userAvatar: string,
    gamePoints: number,
    gameCoins: number,
    userPassword: string
}
function transferDataToObject(data: any, mainGameObject: any, formState: any){
    if(!data) throw Error("No data to transform")
    var obj: resultData = {userName: null, userEmail: null, userAvatar: null, gamePoints: null, gameCoins: null, userPassword: null};

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
    obj.userAvatar = formState.avatarPicture;

    return obj
}

export {
    initResultScreen,
    showResultScreen
}