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
        windowElement.innerHTML = gameData.message;
        return false}
    let index = 0;
    for(let item of gameData){
        index += 1;
        let newElement = createElements({
            tagName: "li",
            styleClass: "winner-list",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: null,
            innerContent: `<p class="single-item"><span class="rate-number">${index}</span>name:<span class="item-name">${item.userName}</span> points:<span class="item-points"> ${item.gamePoints}</span></p>`,
            attributeName: 'data-button-id',
            attribute: item.id,
            attributeName1: null,
            attribute1: null
        })
        windowElement.appendChild(newElement)
    }
    console.log(gameData)
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
                <label for="">
                    <p>Please enter you name</p>
                    <input maxlength="30" minlength="3" name="userName" type="text" require placeholder="Enter you name">
                </label>
                <label for="">
                    <p>Please enter you email</p>
                    <input name="userEmail" type="email" require placeholder="Enter you name">
                </label>

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
            console.log("submit", formResult, res)
        }
    }

}


interface resultData {
    userName: string,
    userEmail: string,
    gamePoints: number,
}
function transferDataToObject(data: any, mainGameObject: any){
    if(!data) throw Error("No data to transform")
    var obj: resultData = {userName: null, userEmail: null, gamePoints: null};

    for(let item of data){
        console.log(item.name, item.value)
        if(item.name && item.value){
            obj[item.name] = item.value;
        }else if(item.name && !item.value){
            return false
        }
    }
    let gameData = mainGameObject.getLevelUserData();

    obj.gamePoints = gameData.points;
    return obj
}

export {
    initResultScreen,
    showResultScreen
}