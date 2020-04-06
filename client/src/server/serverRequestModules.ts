import { text } from "body-parser";
const remote = require('electron').remote;
var fs = require('fs');
var storage = require('electron-json-storage');



//const dataPath = storage.getDataPath();
const dataPath =  storage.getDefaultDataPath(__dirname + "dbs")

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
            if(info) resolve(info)
            else reject("got some problem here")
        })
    })
    return res
}

function getDefaultSettings(){
    const defaultData = {
        "soundLevel":"40",
        "soundEffect":"40",
        "soundOn":true,
        "autoshoot":false,
        "fullScreen":true,
        "keyControls":{
            "up":[87,38,104],
            "right":[68,39,102],
            "down":[83,40,98],
            "left":[65,37,100],
            "escape":[27],
            "pause":[80]},
        "screenResolution":{
            "title":"800x600",
            "width":800,
            "height":600
        },
        "screenVariaton":[
            {
                "title":"800x600",
                "width":800,
                "height":600
            },{
                "title":"800x600",
                "width":1366,
                "height":685
            }
        ]}
        return JSON.stringify(defaultData)
}

function getElectronLocalSaves({fileName}){
    if(!fileName) throw Error("no local files");
    let res = new Promise((resolve, reject) => {
        storage.get(fileName, function(err, data) {
            if (Object.keys(data).length <= 0){
                var dir = '.' + process.env.APP_SAVE_DIRECTORY;

                if (!fs.existsSync(dir)){
                    fs.mkdirSync(dir);
                }
                storage.setDataPath(__dirname + process.env.APP_SAVE_DIRECTORY);
                writeElectronLocalData({fileName: fileName, data: "[]"})
                resolve([])
                return {message: "no save"}
            }
            if(err) throw Error(err)
            let info = JSON.parse(data);
            if(info) resolve(info)
            else reject("got some problem here")
        })
    })
    return res
}

function getElectronLocalData({fileName}){
    if(!fileName) throw Error("no local files");
    storage.setDataPath(__dirname + process.env.APP_SAVE_DIRECTORY);
    let res = new Promise((resolve, reject) => {
        storage.get(fileName, function(err, data) {
            if (Object.keys(data).length <= 0){
                writeElectronLocalData({fileName: fileName, data: getDefaultSettings()})
                resolve(JSON.parse(getDefaultSettings()))
                return
            }
            if(err) throw Error(err)
            let info = JSON.parse(data);
            if(info) resolve(info)
            else reject("got some problem here")
        })
    })
    return res
}

function writeElectronLocalData({fileName, data}){
    if(!fileName || !data) return console.error('no data or filename at serverRequestModule')
    let res = new Promise((resolve, reject) => {
        storage.set(fileName, data, function(error) {
            if (error) throw error;
            resolve({message: 'Settings saved'})
            return
        })
    })
    return res
}

async function writeLocalData({fileName, data}){
    if(!fileName) throw Error("no local files");

    fs.writeFile(__dirname + '/public/data/' + fileName, data, (err) => {
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
    postData,
    getElectronLocalSaves,
    getElectronLocalData,
    writeElectronLocalData
};