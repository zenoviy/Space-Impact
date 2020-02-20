const {ERROR_LIST} = require('../engine/appErrorListModule')

module.exports.createField = function(gameField){
    if(!gameField) throw Error(ERROR_LIST.noObject);

    const {screenWidth, screenHeight} = {screenWidth: screen.width, screenHeight: screen.height};
    gameField.width = screenWidth;
    gameField.height = screenWidth;
}