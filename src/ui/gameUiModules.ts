function gameUiPause(){
    this.gameInitData.gamePause = !this.gameInitData.gamePause;
}
function uiController(){
    let controlKeys = this.gameInitData.gameData.gameSetings.keyControls;
    let gameObject = this;
    document.addEventListener("keydown",(e: any)=>{
        if(controlKeys.escape.some(o => e.keyCode == o) )  console.log("escape");
        if(controlKeys.pause.some(o => e.keyCode == o) ) gameObject.gameUiPause() ;
    })
}

module.exports.uiModules = {
    gameUiPause: gameUiPause,
    uiController: uiController
}