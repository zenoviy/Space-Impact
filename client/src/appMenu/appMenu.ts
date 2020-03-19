import { pageBuilder } from './pagesBuilder';
import { getLocalData } from '../server/serverRequestModules';

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
                        switch (event.target.dataset.buttonId){
                            case 'exit':
                                toggler(el)
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
                dialogWindow(el, `Exit the game?`, gameObject.exitTheGame, navigation)
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
function dialogWindow(windowElement, data, callback, navigation){
    function dialogButtonEvent(event){
        let selectedMenuItem = navigation.showSelectedItem()
            switch (event.target.dataset.buttonId){
                case 'ok':
                    callback(event)
                    break;
                case 'cancel':
                    hide(windowElement)
                    let menuArea = Array.prototype.slice.call(document.querySelectorAll(".selected-items"));
                    for(let menuItem of menuArea){
                        removeClassList(menuItem, "selected-items")
                    }
                    if(selectedMenuItem.selectedMenuItem){
                        addClassList(selectedMenuItem.selectedMenuItem, "selected-items")
                        
                    }
                    break;
                default:
                    false
            }
    }
    show(windowElement)
    const dialogBody = document.querySelector('#dialog-body')
    dialogBody.innerHTML = data;
    windowElement.addEventListener('click', dialogButtonEvent)
}
function revertMenu(){

}


export {
    appMenu,
    hideShowMenu,
    dialogWindow
}