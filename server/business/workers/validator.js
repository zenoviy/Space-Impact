const fs = require('fs');

function dataValidator(data){

}
function dataFinder(data, finderData){
    if( !data || !finderData) return false

    let resuletEmail = data.find( (element) => {return element.userEmail === finderData.userEmail})
    let resuletName = data.find( (element) => {return element.userName === finderData.userName})

    if(resuletEmail) return {data: data, status: "found-email"}
    else if(resuletName) return {data: data, status: "found-name"}
    else return {data: null, status: "not-found"}
}



function dataUpdater(data, finderData){
    if(!data.length || !data || !finderData) return false

    let resulet = data.find( (element) => {return element.userEmail === finderData.userEmail})
    let index = (resulet)? data.indexOf(resulet) : null;

    if(resulet && resulet.gamePoints < finderData.gamePoints &&
         resulet.userPassword === finderData.userPassword){

        resulet.gamePoints = finderData.gamePoints;
        resulet.gameCoins = finderData.gameCoins;
        data[index] = resulet;
        return {data: data, status: "replace", name: resulet.userName}

    }else if(resulet && resulet.gamePoints > finderData.gamePoints &&
        resulet.userPassword === finderData.userPassword){
        return {data: data, status: "lo-result", name: null}

    }else if(resulet && resulet.gamePoints === finderData.gamePoints &&
        resulet.userPassword === finderData.userPassword){
        return {data: data, status: "equil-result", name: null}

    }else if(resulet && resulet.userPassword != finderData.userPassword){
        return {data: data, status: "wrong-password", name: null}

    }else return {data: data, status: "not-exist", name: null}
}

module.exports = {
    dataFinder: dataFinder,
    dataUpdater: dataUpdater
}