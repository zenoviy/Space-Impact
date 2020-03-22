import { pageBuilder, createElements } from './pagesBuilder';
import { getLocalData } from '../server/serverRequestModules';
import { showResultScreen } from './gameResultModule';
import { exitTheGame } from '../engine/gameModules/satartGame';

function show(el){
    el.style.display = 'block';
}
function hide(el){
    el.style.display = 'none';
}
function toggler(el){
    (el.style.display == 'none')? show(el) : hide(el);
}
function addClassList(el, classList){
    el.classList.add(classList)
}
function removeClassList(el, classList){
    if(!el.classList) return false
    el.classList.remove(classList)
}
function appMenu(gameObject, dialogWindow){

    let selectedMenuItem = null;
    var navigation = {
        showSelectedItem(){
            return {selectedMenuItem: selectedMenuItem}
        },
        menu: {
            constants: {
                sectionTemplate: '.section-template',
                contentContainer: '#wrapper',
                sideMenuWrapper: '#main-menu'
            },
            importSectionsToDOM(){
                const links = document.querySelectorAll('link[rel="import"]');
                Array.prototype.forEach.call(links, (link) => {
                    let template = link.import.querySelector(navigation.menu.constants.sectionTemplate)
                    let clone = document.importNode(template.content, true)

                    document.querySelector(navigation.menu.constants.contentContainer).appendChild(clone)
                })
            },
            setMenuOnClickEvent() {
                let el = document.querySelector(`#dialog-box`);
                document.body.addEventListener('click',  buttonActon)
                function buttonActon(event){

                    if (event.target){
                        if (event.target && event.target.dataset.section) {
                            navigation.menu.hideAllSections()
                            navigation.menu.showSection.call(this, event)
                        }
                        menuSelection(event)
                        switch (event.target.dataset.section){
                            case 'game-results':
                                showResultScreen()
                                break;
                            default:
                                false
                        }
                        switch (event.target.dataset.buttonId){
                            case 'game-results':
                                break;
                            case 'exit':
                                toggler(el)
                                dialogWindow({textData: 'Exit the game?', rejectText: 'cancel', acceptText: 'ok'}, exitTheGame, navigation)
                                break;
                            case 'close':
                                navigation.menu.hideAllSections()
                                selectedMenuItem = null;
                                break;
                            default:
                                false
                        }
                    }
                }
                function menuSelection(event){
                    if(event.target.parentElement.tagName == "LI"){
                        let menuArea = Array.prototype.slice.call(document.querySelectorAll(".selected-items"));
                        for(let menuItem of menuArea){
                            removeClassList(menuItem, "selected-items")
                        }
                        selectedMenuItem = (
                            event.target.dataset.buttonId != "close" &&
                            event.target.dataset.buttonId != "cancel" &&
                            event.target.dataset.buttonId != "exit" &&
                            event.target.dataset)? event.target.parentElement : selectedMenuItem;
                        addClassList(event.target.parentElement, "selected-items");
                    }
                }
            },
            showSection(event) {
                const sectionId = event.target.dataset.section;
                show(document.querySelector(`#${sectionId}`))
                let menuArea = Array.prototype.slice.call(document.querySelectorAll(".menu-wrapper"));
                for(let item of menuArea){
                    addClassList(item, "menu-backgroud")
                }
                pageBuilder({target: "#about-section-content", data: getLocalData({fileName: 'about-page.json'})})
            },
            hideAllSections() {
                let sectionNodes = Array.prototype.slice.call(document.querySelectorAll(`${this.constants.contentContainer} section`));
                for(let item of sectionNodes){
                    hide(item)
                }
                let menuBackgroundArea = Array.prototype.slice.call(document.querySelectorAll(".menu-wrapper"));
                for(let item of menuBackgroundArea){
                    removeClassList(item, "menu-backgroud")
                }
                let menuArea = Array.prototype.slice.call(document.querySelectorAll(".selected-items"));
                for(let menuItem of menuArea){
                    removeClassList(menuItem, "selected-items")
                }
            },
            init() {
                this.importSectionsToDOM()
                this.setMenuOnClickEvent()
                this.hideAllSections()
            }
        }
    };
    return navigation
}
function hideShowMenu(mainMenu, navigationMenu, gameWin, gameStatus, gameUiPause){
    if( !gameStatus || gameUiPause){
        mainMenu.classList.remove("hide-menu")
    }else{
        mainMenu.classList.add("hide-menu")
        navigationMenu.hideAllSections()
    }
}
function dialogWindow( {textData, rejectText, acceptText}, callback, navigation, ...rest){
    let windowElement = document.querySelector(`#dialog-box`); 
    const dialogBody = document.querySelector('#dialog-body')
    dialogBody.innerHTML = "";
    function dialogButtonEvent(event){
            let selectedMenuItem = (navigation)? navigation.showSelectedItem(): false;
            switch (event.target.dataset.buttonId){
                case 'ok':
                    callback(event)
                    break;
                case 'cancel':
                    if(windowElement) hide(windowElement)
                    let menuArea = Array.prototype.slice.call(document.querySelectorAll(".selected-items"));
                    for(let menuItem of menuArea){
                        removeClassList(menuItem, "selected-items")
                    }
                    if(selectedMenuItem.selectedMenuItem){
                        addClassList(selectedMenuItem.selectedMenuItem, "selected-items")
                    }
                    break;
                case 'restart':
                    callback.call(...rest)
                    if(windowElement) hide(windowElement)
                    break;
                default:
                    false
            }
    }
    if(windowElement) show(windowElement)

    let dialogData = [
        createElements({
            tagName: "div",
            styleClass: "accept-btn btn-main",
            inlineStyle: null,
            pictureUrl: null,
            linkUrl: null,
            text: acceptText,
            innerContent: `
            <div class="dialog-text">${textData}</div>
            <div id="dialog-button-area" class="dialog-btn-area">
            <button data-button-id=${acceptText} class="accept-btn btn-main">${acceptText}</button>
           <button data-button-id="cancel" class="reject-btn btn-main">cancel</button>
       </div>`,
            attributeName: 'data-button-id',
            attribute: acceptText,
            attributeName1: null,
            attribute1: null})
    ];
    for(let item of dialogData){
        dialogBody.appendChild(item)
    }
    const dialogButtonArea = document.querySelector('#dialog-button-area');
    dialogButtonArea.addEventListener('click', dialogButtonEvent)
}


export {
    appMenu,
    hideShowMenu,
    dialogWindow,
    show,
    hide,
    toggler,
    addClassList,
    removeClassList
}