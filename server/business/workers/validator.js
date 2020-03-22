const fs = require('fs');

function dataValidator(data){

}
function dataFinder(data, finderData){
    if(!data.length || !data || !finderData) return false

    let resulet = data.find( (element) => {return element.userEmail === finderData.finderData})
    let index = (resulet)? data.indexOf(resulet) : null;

    if(resulet && resulet.gamePoints < finderData.gamePoints){
        resulet.gamePoints = finderData.gamePoints;
        data[index] = resulet;
        return {data: data, status: "replace"}
    }else if(resulet) return {data: data, status: "found"}
    else return {data: null, status: "not-found"}
}

module.exports = {
    dataFinder: dataFinder
}