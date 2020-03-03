function warpElement(){
    let ctx = null;
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5" ,"blue");
    gradient.addColorStop("1.0", "red");
}

module.exports.warpModule = {
    warpElement: warpElement
}
