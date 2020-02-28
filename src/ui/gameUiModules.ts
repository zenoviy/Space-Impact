function  gamePause(){

}
function uiController(){
    let controlKeys = this.gameInitData.gameData.gameSetings.keyControls;
    document.addEventListener("keydown",(e: any)=>{
        if(controlKeys.escape.some(o => e.keyCode == o) )  console.log("escape");
        if(controlKeys.pause.some(o => e.keyCode == o) ) console.log("pause") ;
    })
}

module.exports.uiModules = {
    gamePause: gamePause,
    uiController: uiController
}