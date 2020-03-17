function appMenu(gameObject){
    function show(el){
        el.style.display = 'block';

    }
    function hide(el){
        el.style.display = 'none';
    }
    var navigation = {
        menu: {
            constants: {
                sectionTemplate: '.section-template',
                contentContainer: '#wrapper',
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
                document.body.addEventListener('click', function (event) {
                    buttonActon(event)
                })
                function buttonActon(event){
                    if (event.target.dataset.section) {
                        navigation.menu.hideAllSections()
                        navigation.menu.showSection(event)
                    }
                }
            },
            showSection(event) {
                const sectionId = event.target.dataset.section
                show(document.querySelector(`#${sectionId}`))
                let sectionNodes = Array.prototype.slice.call(document.querySelectorAll(`#${sectionId} section`))
                for(let item of sectionNodes){
                    show(sectionNodes)
                }
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
    if(gameWin || !gameStatus || gameUiPause){
        mainMenu.classList.remove("hide-menu")
    }else{
        mainMenu.classList.add("hide-menu")
        navigationMenu.hideAllSections()
    }
}


export {
    appMenu,
    hideShowMenu
}