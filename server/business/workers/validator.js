const fs = require('fs');

function dataValidator(data){

}
function dataFinder(data, finderData){
    if(!data.length || !data || !finderData) return false

    let resulet = data.find( (element) => {return element.userEmail === finderData.finderData || element.userName === finderData.userName})
    let index = (resulet)? data.indexOf(resulet) : null;
    if(resulet && resulet.gamePoints < finderData.gamePoints){

        resulet.gamePoints = finderData.gamePoints;
        data[index] = resulet
        return data
    }else if(resulet) return data
    else return false

}

module.exports = {
    dataFinder: dataFinder
}