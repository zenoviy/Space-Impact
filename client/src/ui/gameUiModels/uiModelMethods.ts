function init(callback, data?){
    data = (data)? data: this;
    callback(data)
}
function getUIObjectPosition(){
    let context = this;
    return {
        x: context.propertyes.x,
        y: context.propertyes.y,
        width: context.propertyes.width,
        height: context.propertyes.height,
    }
}

export {
    init,
    getUIObjectPosition
}