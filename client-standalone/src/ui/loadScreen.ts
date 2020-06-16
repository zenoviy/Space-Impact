import { show, hide, addClassList } from '../appMenu/appMenu';
import { exitTheGame } from '../engine/gameModules/satartGame';


function hideLoadScreen(){
    let loadScreen = document.querySelector('#main-load-screen');
    addClassList(loadScreen, 'hide-animation');
    setTimeout(() => {
        hide(loadScreen)
    }, 1000)

}

function loadWindow({loadStatus}){
    const windowElement = document.querySelector('#load-screen');
    windowElement.innerHTML = "";

    switch(loadStatus){
        case "load":
            show(windowElement)
            windowElement.innerHTML = `<div class="load-circle-image load-circe-wrapper"></div><p>Waiting...</p>`;
            break
        case "serverError":
            windowElement.innerHTML = `<p>Fail to load data</p>
            <div class="load-screen-button-wrapper">
                <button id="reload-page" class="btn-orange btn-main">Reload</button>
                <button id="exit-btn" class="btn-orange btn-main">exit</button>
            </div>
            `;
            reloadPage("#reload-page")
            exitPage("#exit-btn")
            break
        case "success":
            hide(windowElement)
            break
        default:
            false
    }
}
function reloadPage(selector){
        let reloadButton = document.querySelector(selector);
        reloadButton.addEventListener("click", function(){
            document.location.reload()
        })
    }
function exitPage(selector){
        let exitButton = document.querySelector(selector);
        exitButton.addEventListener("click", function(event){
            event.preventDefault()
            exitTheGame()
        })
}

export {
    loadWindow,
    hideLoadScreen,
    reloadPage
}