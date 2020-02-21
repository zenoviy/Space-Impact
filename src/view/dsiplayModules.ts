const {ERROR_LIST} = require('../engine/appErrorListModule')

function initField(gameField){
    if(!gameField) throw Error(ERROR_LIST.noObject);

    const {screenWidth, screenHeight} = {screenWidth: screen.width, screenHeight: screen.height};
    gameField.width = screenWidth;
    gameField.height = screenWidth;
}
function clearField(field){
    console.log('clear field')
}


module.exports.viewModules = function (){
    return {
        initField: initField,
    }
}