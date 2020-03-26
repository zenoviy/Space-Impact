import { text } from "body-parser";

var fs = require('fs');

function getData({url, method, data, headers}){
    let resultHeader = Object.assign({
        'Content-Type': 'application/json'}, headers || false)
    return fetch(url, {
        method: method,
        mode: 'cors',
        headers: resultHeader,
        body: (data)? JSON.stringify(data) : null
    }).then(res =>  res.json())
    .then(data => data)
    .catch( err => {
        console.log(err)
        if(err){
            return {message: "500 No server connection!", status: "error"}
        }
    })
}

async function getLocalData({fileName}){
    if(!fileName) throw Error("no local files");
    let res = new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/public/data/' + fileName, (err, data) => {
            if(err) throw Error(err)
            let info = JSON.parse(data);
            console.log(info)
            if(info) resolve(info)
            else reject("got some problem here")
        })
    })
    return res
}


async function writeLocalData({fileName, data}){
    if(!fileName) throw Error("no local files");
    console.log(1, __dirname, fs, fileName)
    fs.writeFile(__dirname + '/public/data/' + fileName, data, (err) => {
        console.error(err)
        if(err) throw err;
    })
}



function postData({url, method, data, headers}){
    let resultHeader = Object.assign({
        'Content-Type': 'application/json'}, headers || false)
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: resultHeader,
        body: (data)? JSON.stringify(data) : null
    }).then(res => res.json())
    .then(data => data)
}


export {
    getData,
    getLocalData,
    writeLocalData,
    postData
};