function init(callback, data?){
    data = (data)? data: this;
    callback(data)
}
function getUIObjectPosition(){
    let context = this;
    return {
        x: context.properties.x,
        y: context.properties.y,
        width: context.properties.width,
        height: context.properties.height,
    }
}

export {
    init,
    getUIObjectPosition
}