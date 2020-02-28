function gamePause(){
    this.gamePause = false;
}
function showGameInterface(){

}
function showGameSettings(){

}
function gameButonController(){
    let controlKeys = this.gameInitData.gameData.gameSetings.keyControls;
    document.addEventListener("keydown",(e: any)=>{
        alert(1)
        if(controlKeys.pause.some(o => e.keyCode == o) ) console.log("pause");
        if(controlKeys.escape.some(o => e.keyCode == o) ) console.log("Escape");
    })
}

module.exports.gameUiModules = {
    gamePause: gamePause,
    showGameInterface: showGameInterface,
    showGameSettings: showGameSettings,
    gameButonController: gameButonController
}