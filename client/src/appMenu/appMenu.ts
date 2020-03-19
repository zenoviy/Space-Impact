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
function appMenu(gameObject, dialogWindow){
    var navigation = {
        menu: {
            constants: {
                sectionTemplate: '.section-template',
                contentContainer: '#wrapper',
                sideMenuWrapper: '#main-menu'
            },
            importSectionsToDOM(){
                const links = document.querySelectorAll('link[rel="import"]');
                Array.prototype.forEach.call(links, function (link) {
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
                            navigation.menu.showSection(event)
                        }
                        switch (event.target.dataset.buttonId){
                            case 'exit':
                                toggler(el)
                                break;
                            case 'close':
                                navigation.menu.hideAllSections()
                                break;
                            default:
                                false
                        }
                    }
                }
                dialogWindow(el, `Exit the game?`, gameObject.exitTheGame)
            },
            async showSection(event) {
                const sectionId = event.target.dataset.section;
                show(document.querySelector(`#${sectionId}`))
                let sectionNodes = Array.prototype.slice.call(document.querySelectorAll(`#${sectionId} section`))

                await pageBuilder({target: "#about-section-content", data: getLocalData({fileName: 'about-page.json'})})
            },
            hideAllSections() {
                let sectionNodes = Array.prototype.slice.call(document.querySelectorAll(`${this.constants.contentContainer} section`));
                for(let item of sectionNodes){
                    hide(item)
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
function dialogWindow(windowElement, data, callback){
    function dialogButtonEvent(event){
            switch (event.target.dataset.buttonId){
                case 'ok':
                    callback(event)
                    break;
                case 'cancel':
                    hide(windowElement)
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


export {
    appMenu,
    hideShowMenu,
    dialogWindow
}