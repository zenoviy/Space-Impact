function pageBuilder({target, data}){
    if(!target || data) return;

    let targetNode = document.querySelector(target);
    //let picture = (data)? : ;

    console.log(targetNode, data, __dirname)

    function createElements({tagName, styleClass, inlineStyle, pictureUrl, linkUrl, text, innerContent}, ...rest){
        let element = document.createElement(tagName);
        element.className = (styleClass)? styleClass : false;
        element.style = (inlineStyle)? inlineStyle : false;
        element.url = (element.url && pictureUrl)? __dirname + pictureUrl : false;
        element.innerText = (text)? text: false;
        element.innerHTML = (innerContent)? innerContent: false;
    }
}


export {
    pageBuilder
}