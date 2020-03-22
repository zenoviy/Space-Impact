import { show, hide, toggler, addClassList, removeClassList } from '../appMenu/appMenu';
import { createElements, pageBuilder } from '../appMenu/pagesBuilder';



function loadWindow({loadStatus}){
    const windowElement = document.querySelector('#load-screen');
    windowElement.innerHTML = "";

    switch(loadStatus){
        case "load":
            show(windowElement)
            windowElement.innerHTML = `<div class="load-circle-image load-circe-wrapper"></div><p>Loading...</p>`;
            break
        case "serverError":
            windowElement.innerHTML = `<p>Fail to load data</p><button id="reload-page" class="btn-orange btn-main">Reload</button>`;
            reloadPage("#reload-page")
            break
        case "success":
            hide(windowElement)
            break
        default:
            false
    }

    function reloadPage(selector){
        let reloadButton = document.querySelector(selector);
        reloadButton.addEventListener("click", function(){
            document.location.reload()
        })
    }
}


export {
    loadWindow
}