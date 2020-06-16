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
            innerContent: item.html,
            attributeName: null,
            attribute: null, attributeName1: null,
            attribute1: null}, null);
        targetNode.appendChild(newObject)
    }
    })
}
function createElements({tagName, styleClass, inlineStyle, pictureUrl, linkUrl, text, innerContent, attributeName, attribute, attributeName1, attribute1}, ...rest){
    //console.log(inlineStyle)    
    let element = document.createElement(tagName);
         (styleClass)? element.className = styleClass : false;
         (inlineStyle)? element.style = inlineStyle : false;
         (tagName === "img" && pictureUrl)? element.src = __dirname + pictureUrl : false;
         (text)? element.innerText = text: false;
         (innerContent)? element.innerHTML = innerContent: false;
        (attributeName && attribute)? element.setAttribute(attributeName, attribute) : false;
        (attributeName1 && attribute1)? element.setAttribute(attributeName1, attribute1) : false

        return element
    }

function createSimpleElements({tagname, classList, innerText, idName}){
    let newDocument = document.createElement(tagname);
    newDocument.className = (classList)? classList: false;
    newDocument.innerHTML = innerText;
    if(idName) newDocument.setAttribute("id", idName)

    return newDocument
}

export {
    pageBuilder,
    createElements,
    createSimpleElements
}