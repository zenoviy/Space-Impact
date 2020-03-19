async function pageBuilder( {target, data}){
    if(await !target || await !data) throw Error("cant fetch the data");

    let targetNode = document.querySelector(target);
    targetNode.innerHTML = "";

    data.then(data => {
        for(let item of data){
        let newObject = createElements({
            tagName: item.tag,
            styleClass: item.classlist,
            inlineStyle: item.style,
            pictureUrl: item.imageLink,
            linkUrl: item.link,
            text: item.innerText,
            innerContent: item.html}, null);
        targetNode.appendChild(newObject)
    }
    })


    function createElements({tagName, styleClass, inlineStyle, pictureUrl, linkUrl, text, innerContent}, ...rest){
        let element = document.createElement(tagName);
         (styleClass)? element.className = styleClass : false;
         (inlineStyle)? element.style =inlineStyle : false;
         (tagName === "img" && pictureUrl)? element.src = __dirname + pictureUrl : false;
         (text)? element.innerText = text: false;
         (innerContent)? element.innerHTML = innerContent: false;

        return element
    }
}


export {
    pageBuilder
}