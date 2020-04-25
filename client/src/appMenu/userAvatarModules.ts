import { addClassList, removeClassList } from './appMenu';
import { createElements } from './pagesBuilder';


function avatarButton({ buttonSelector, formState }){

    let mainAvatarButton = document.querySelector(buttonSelector);
    let avatarClose = document.querySelector("#avatar-close");
    let playerAvatarLoad = document.querySelector("#player-avatar");

    const avatarAreaSelectors = {
        mainAvatarButton: mainAvatarButton,
        avatarClose: avatarClose,
        playerAvatarLoad: playerAvatarLoad
    }

    mainAvatarButton.addEventListener('click', function( event ){
        event.preventDefault()
        toggleAvatarArea({ avatarBoxSelector: '#avatar-box', formState: formState })
        showAllAvatars({ avatarInnerBoxSelector: '#avatar-inner-box', formState: formState,
        avatarAreaSelectors: avatarAreaSelectors })
    })
    avatarClose.addEventListener('click', function( event ){
        event.preventDefault()
        toggleAvatarArea({ avatarBoxSelector: '#avatar-box', formState: formState })
    })
    playerAvatarLoad.addEventListener('change', function(){ convertPictureToData({
        avatarAreaSelectors: avatarAreaSelectors, picture: this, formState: formState
    }) })

}

function showAllAvatars({ avatarInnerBoxSelector, formState, avatarAreaSelectors }){
    let avatarInnerBox = document.querySelector(avatarInnerBoxSelector);
    const avatarPictures = ['av1.png', 'av2.png', 'av3.png', 'av4.png', 'av5.png', 'av6.png'];
    const imageLocation = '/public/images/misc/avatars/';

    avatarInnerBox.innerHTML = '';
    for(let item of avatarPictures){
        let currentImage = imageLocation + item;
        let avatarElement = createElements({
            tagName: "img",
            styleClass: "avatar-item",
            inlineStyle: null,
            pictureUrl: currentImage,
            linkUrl: null,
            text: null,
            innerContent: ``,
            attributeName: null,
            attribute: null,
            attributeName1: null,
            attribute1: null})

        avatarElement.addEventListener('click', function( event ){
            event.preventDefault()
            //formState.avatarPicture = __dirname + currentImage;
            //displayCurrentAvatar({ picture: __dirname + currentImage, displaySelector: '#avatar-picture' })
            convertPictureToData({ picture: __dirname + currentImage, formState: formState, avatarAreaSelectors: avatarAreaSelectors})
            toggleAvatarArea({ avatarBoxSelector: '#avatar-box', formState: formState })
        })
        avatarInnerBox.appendChild(avatarElement)
    }
}




function toggleAvatarArea({ avatarBoxSelector, formState }){
    let avatarBox = document.querySelector(avatarBoxSelector);
    formState.avatarSectionShowState = !formState.avatarSectionShowState;

    if( formState.avatarSectionShowState ){ addClassList( avatarBox, 'opened-avatar-box' )
    }else removeClassList( avatarBox, 'opened-avatar-box' )
}




function displayCurrentAvatar({ picture, displaySelector }){
    let avatarPicture: any = document.querySelector(displaySelector);

    if(!picture || !avatarPicture) return false
    avatarPicture.src = picture;
}


async function convertPictureToData({ avatarAreaSelectors, picture, formState }){
    await loadPicture.call( picture )

    function loadPicture(){
        const reader = new FileReader();
        reader.addEventListener('load', function(){
            displayCurrentAvatar({picture: reader.result, displaySelector: '#avatar-picture'})
            toggleAvatarArea({ avatarBoxSelector: '#avatar-box', formState: formState })
            formState.avatarPicture = reader.result;
            return reader.result
        }, false)

        if (this.files) {
            reader.readAsDataURL(this.files[0]);
        }else if(typeof picture === 'string' ){
            let canvas = document.createElement('canvas');
            canvas.width = 100;
            canvas.height = 100;
            let ctx = canvas.getContext('2d');
            let img = new Image();
            img.src = picture;

            img.onload = () =>{
                ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
                var dataURL = canvas.toDataURL();

                let getPictureBase = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
                let pictureBaseUrl = 'data:image/png;base64,' + getPictureBase;

                displayCurrentAvatar({picture: pictureBaseUrl, displaySelector: '#avatar-picture'})
                formState.avatarPicture = pictureBaseUrl;
                return pictureBaseUrl
            }
        }
    }
}


export {
    avatarButton,
    showAllAvatars,
    displayCurrentAvatar,
    convertPictureToData
}