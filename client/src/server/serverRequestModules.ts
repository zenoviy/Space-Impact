import { text } from "body-parser";
const remote = require('electron').remote;
var fs = require('fs');
//var os = require('os');
var path = require('path');
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
        "soundLevel":"5",
        "soundEffect":"20",
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
        console.log(1, process.env.NODE_ENV)
        storage.get(fileName, function(err, data) {


                var dir = (process.env.NODE_ENV === 'production')? path.join(__dirname, '../../') + process.env.APP_SAVE_DIRECTORY : __dirname + process.env.APP_SAVE_DIRECTORY;
                console.log(dir)
                if (!fs.existsSync(dir) ){
                    fs.mkdirSync(dir);
                    console.log(0)
                    storage.setDataPath(dir);

                }
                if (!fs.existsSync(dir + fileName) && Object.keys(data).length <= 0){
                    writeElectronLocalData({fileName: fileName, data: "[]"})
                    resolve([])
                    console.log(1)
                    return {message: "no save"}
                }/**/
                console.log(2)

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
    var dir = (process.env.NODE_ENV === 'production')? path.join(__dirname, '../../') + process.env.APP_SAVE_DIRECTORY:__dirname + process.env.APP_SAVE_DIRECTORY;
    storage.setDataPath(dir);
    let res = new Promise((resolve, reject) => {
        storage.get(fileName, function(err, data) {
            console.log(3, dir, 'dir')
           // console.log(path.join(__dirname, '../../'))
            if (!fs.existsSync(dir)){
                console.log(4)
                fs.mkdirSync(dir);
            }
            if (!fs.existsSync(dir + fileName) && Object.keys(data).length <= 0){
                console.log(5)
                writeElectronLocalData({fileName: fileName, data: getDefaultSettings()})
                resolve(JSON.parse(getDefaultSettings()))
                return
            }/**/
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
        console.log(data, fileName, storage.getDataPath())
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