function gameStart(){
    console.log(this)
    this.gameInitData.gameStatus = !this.gameInitData.gameStatus;
}

module.exports.startGameModules = {
    gameStart: gameStart
}