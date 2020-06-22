var fs = require('fs');
var path = require('path');
var storage = require('electron-json-storage');
import { writeElectronLocalData } from './serverRequestModules';

async function searchDataInFile({url, headers, method, data}){
        let resultData = null;
        switch(url){
            case 'api/level-data':
                resultData = await levelDataWorker({url: url, headers: headers});
                break
            case 'api/level-objects':
                resultData = await levelObjectsWorker({url: url, headers: headers});
                break
            case 'api/grapple-objects':
                resultData = await grappleObjectsWorker({url: url, headers: headers});
                break
            case 'api/game-settings':
                break
            case 'api/user-ship':
                resultData = await userShipWorker({url: url, headers: headers});
                break
            case 'api/enemy-ship':
                resultData = await enemyShipWorker({url: url, headers: headers});
                break
            case 'api/get-ground-characters':
                resultData = await groundCharactersWorker({url: url, headers: headers});
                break
            case 'api/get-constructor-ground-enemy':
                resultData = await groundEnemyConstructorWorker({url: url, headers: headers});
                break
            case 'api/shop/guns':
                if(method === "GET") resultData = await shopGunsWorker({url: url, headers: headers});
                if(method === "PUT") resultData = await shopGunsWorkerPut({url: url, headers: headers});
                break
            case 'api/shop/shipyard':
                if(method === "GET") resultData = await shipYardWorker({url: url, headers: headers});
                if(method === "PUT") resultData = await shipYardWorkerPut({url: url, headers: headers});
                break
            case 'api/shop/store-items':
                if(method === "GET") resultData = await storeItemsWorkerGet({url: url, headers: headers});
                if(method === "PUT") resultData = await storeItemsWorkerPut({url: url, headers: headers});
                break
            case 'api/game-result':
                if(method === "GET") resultData = await getResultlData({url: url, headers: headers});
                if(method === "POST") resultData = await postResultlData({url: url, headers: headers, saveData: data});  // data
                if(method === "PUT") resultData = await updateResultlData({url: url, headers: headers, saveData: data});
                break

        }
    if(resultData) return resultData
}

async function levelDataWorker({url, headers}){
        return new Promise(async (resolve, reject) => {
            fs.readFile(path.join(__dirname, './public/db/gameLevelData.json'), (err, data) => {
                if(err){
                    return console.log(err)
                };
                if(!headers['maplevel'] && headers['maplevel'] != 0) return resolve({message: "no-level-identificator"});

                let readObject = JSON.parse(data)
                let responseItem = readObject.find((data) => { return data.level == headers['maplevel']})
                if(!responseItem) return resolve({message: "no-level-found"});
                responseItem.allLevels = readObject.length-1;
                if(responseItem) resolve(responseItem)
                else reject(err)
            })
        })
}





async function levelObjectsWorker({url, headers}){
    return new Promise(async (resolve, reject) => {
        fs.readFile(path.join(__dirname, './public/db/gameLevelObject.json'), (err, data) => {
            if(err){
                return console.log(err)
            };
            let readObject = JSON.parse(data)
            let objectType = headers.mapObject;
            if(!objectType && objectType != 0){
                resolve(null);
                return false
            }
            //if(objectType.length < 1) resolve([])
            objectType = headers.mapObject.map(item => item);

            let responseItem = readObject.filter(item => {
                    return headers.mapObject.some(obj => obj == item.id)
            });
            if(responseItem) resolve(responseItem)
            else reject(err)
        })
    })
}



async function grappleObjectsWorker({url, headers}){
    return new Promise(async (resolve, reject) => {
        fs.readFile(path.join(__dirname, './public/db/gameGrappleObjectData.json'), (err, data) => {
            let readObject = JSON.parse(data)

            let objectType = headers.grappleObject;
            if(!objectType && objectType != 0) {
                resolve([]);
                return false
            };
            if(objectType.length < 1) return resolve([]);
            objectType = (objectType instanceof Object)? objectType.map(item => item) : objectType;

            let responseItem = readObject.filter(item => {
                    return (objectType instanceof Object)? objectType.some(obj => obj == item.id) :
                    objectType == item.id
            });

            if(responseItem) resolve(responseItem)
            else reject(err)
        })
    })
}




async function userShipWorker({url, headers}){
    return new Promise(async (resolve, reject) => {
        fs.readFile(path.join(__dirname, './public/db/playerShipsData.json'), (err, data) => {

            if( !headers ){
                reject({ message: 'there is no user ship'});
                return console.log('there is no user ship')
            }
            if(err){ reject(`We dont find such file ${err}`); return console.log(err)};
            let readObject = JSON.parse(data) //
            let responseItem = readObject.find((data) => { return data.id == headers.usership})
            if(responseItem) resolve(responseItem);
            else reject(err)
        })
    })
}




async function enemyShipWorker({url, headers}){
    return new Promise(async (resolve, reject) => {
        fs.readFile(path.join(__dirname, './public/db/enemyTypeData.json'), (err, data) => {

            if(err){ reject(`We dont find such file ${err}`); return console.log(err)};
            let readObject = JSON.parse(data)
            let enemyType = headers['ship-type-number'];
            if(!enemyType){
                resolve([]);
                return console.log("there is no enemy ship type")
            }
            enemyType = enemyType.map(item => item);
            let responseItem = readObject.filter(item => {
                    return enemyType.some(obj => obj == item.id)
            });

            if(responseItem) resolve(responseItem);
            else reject(err)
        })
    })
}


//=====================================================  Ground level

async function groundCharactersWorker({url, headers}){
    return new Promise(async (resolve, reject) => {

        if(!headers) reject({message: 'Invalid request', status: 403})
        fs.readFile(path.join(__dirname, './public/db/groundCharactersData.json'), (err, data) => {
            if(err){ reject(`We dont find such file ${err}`); return console.log(err)};
            let readObject = JSON.parse(data);
            let searchResult = readObject.filter(item => {
                return item.id === headers['item-id']
            })
            resolve(searchResult)
        })
    })
}

async function groundEnemyConstructorWorker({url, headers}){
    return new Promise(async (resolve, reject) => {

        //if(!headers) reject({message: 'Invalid request', status: 403})
        fs.readFile(path.join(__dirname, './public/db/groundEnemyData.json'), (err, data) => {
            let readObject = JSON.parse(data);
            resolve(readObject)
        })
    })
}


//=====================================================  Shop

async function shopGunsWorker({url, headers}){
    return new Promise(async (resolve, reject) => {
    fs.readFile(path.join(__dirname, './public/db/shopData/gameShopGun.json'), (err, data) => {
            if(err){ reject(`We dont find such file ${err}`); return console.log(err)};

            if(data.length === 0){
                reject({message: 'there is no data yet'})
                return
            }
            let readObject = JSON.parse(data).map((obj) => { return {
                loadImage: obj.loadImage,
                background: obj.background,
                price: obj.price,
                title: obj.title,
                description: obj.description,
                speed: obj.speed,
                damage: obj.damage,
                status: obj.status
            }});
            resolve(readObject)
        })
    })
}



async function shopGunsWorkerPut({url, headers}){
    return new Promise(async (resolve, reject) => {
        fs.readFile(path.join(__dirname, './public/db/shopData/gameShopGun.json'), (err, data) => {
            if(err){ reject(`We dont find such file ${err}`); return console.log(err)};
            //let headers = req.headers;
            if(data.length === 0){
                resolve({message: 'there is no data yet'})
                return
            }
            let userCoins = headers['usercoins'];
            let itemName = headers['itemName'];

            if(!itemName) return resolve({message: `wrong data: You have no money`, status: "false"})
            let readObject = JSON.parse(data).find((obj) => { return obj.title === itemName });

            if(!readObject) return resolve({message: `item not fond`, status: "false"})
            if(readObject && parseInt(userCoins) < readObject.price) return resolve({message: `you have no money it cost: ${readObject.price}`, status: "false"})
            resolve({data: readObject, status: 'success', money: userCoins - readObject.price })
        })
    })
}

async function shipYardWorker({url, headers}){
    return new Promise(async (resolve, reject) => {
        fs.readFile(path.join(__dirname, './public/db/playerShipsData.json'), (err, data) => {
            if(err){ resolve(`We dont find such file ${err}`); return console.log(err)};

            if(data.length === 0){
                resolve({message: 'there is no data yet'})
                return
            }
            let readObject = JSON.parse(data).map((obj) => { return {
                loadImage: obj.hangarImage,
                background: obj.background,
                price: obj.price,
                title: obj.title,
                description: obj.description,
                status: obj.status,
                armor: obj.armor,
                minSpeed: obj.minSpeed,
                inventoryCapacity: obj.inventoryCapacity,
                healthPoint: obj.healthPoint,
                firespots: obj.firespot.length
            }});
            resolve(readObject)
        })
    })
}


async function shipYardWorkerPut({url, headers}){
    return new Promise(async (resolve, reject) => {
        fs.readFile(path.join(__dirname, './public/db/playerShipsData.json'), (err, data) => {
            if(err){ resolve(`We dont find such file ${err}`); return console.log(err)};
            if(data.length === 0){
                resolve({message: 'there is no data yet'})
                return
            }
            let userCoins = headers['usercoins'];
            let itemName = headers['itemname'];
            let currentShipName = headers['currentshipname'];
            let playerObjectDataInventory = headers['shipinventoryitems'];
            let playerObjectDataGuns = headers['shipgunsitems'];

            if(currentShipName == itemName )  return resolve({message: `You already have that ship`, status: "false"})
        if(!userCoins || !itemName) return resolve({message: `wrong data: there is no coin or itemname`, status: "false"})

        let readObject = JSON.parse(data).find((obj) => { return obj.title === itemName });
        if(!readObject) return {message: `ship unavailable`, status: "false"}
        let accesibleShip = compareItems(playerObjectDataInventory, playerObjectDataGuns, readObject);
        if(!accesibleShip) return resolve({message: `This ship has less space for yours gusn and other staff`, status: "false"})


        if(!readObject.price) return resolve({message: `no price`, status: "false"})
        if(readObject && parseInt(userCoins) < readObject.price) return resolve({message: `you have no coin it cost: ${readObject.price}`, status: "false"})
            resolve({data: readObject, status: 'success', money: userCoins - readObject.price })
        })
    })
}


function compareItems(playerObjectDataInventory, playerObjectDataGuns, readObject){
    let accesibility = true;
    if(playerObjectDataInventory > readObject.inventoryCapacity -1 ||
        readObject.guns.length - 1 < playerObjectDataGuns) accesibility = false
    return accesibility
}




function storeItemsWorkerGet({url, headers}){
    return new Promise(async (resolve, reject) => {
        fs.readFile(path.join(__dirname, './public/db/shopData/gameShopMarket.json'), (err, data) => {
            if(err){ resolve(`We dont find such file ${err}`); return console.log(err)};
            if(data.length === 0){
                resolve({message: 'there is no data yet'})
                return
            }
            let readObject = JSON.parse(data).map((obj) => { return {
                loadImage: obj.loadImage,
                background: obj.background,
                price: obj.price,
                title: obj.title,
                description: obj.description,
                status: obj.status
            }});
            resolve(readObject)
        })
    })
}



async function storeItemsWorkerPut({url, headers}){
    return new Promise(async (resolve, reject) => {
        fs.readFile(path.join(__dirname, './public/db/shopData/gameShopMarket.json'), (err, data) => { 
            if(err){ resolve(`We dont find such file ${err}`); return console.log(err)};

            if(data.length === 0){
                resolve({message: 'there is no data yet'})
                return
            }
            let userCoins = headers['usercoins'];
            let itemName = headers['itemName'];



            if(!userCoins || !itemName) return resolve({message: `wrong data: there is no coin or itemname`, status: "false"})
            let readObject = JSON.parse(data).find((obj) => { return obj.title === itemName });

            if(!readObject) return resolve({message: `item not fond`, status: "false"})
            if(readObject && parseInt(userCoins) < readObject.price) return resolve({message: `you have no coin it cost: ${readObject.price}`, status: "false"})
            resolve({data: readObject, status: 'success', money: userCoins - readObject.price })
        })
    })
}


//  =======================  save/show result


async function getResultlData ({url, headers}) {
    return new Promise((resolve, reject) => {
        storage.get('gameResults', async function(err, data) {
            var dir = (process.env.NODE_ENV === 'production')? path.join(__dirname, '../../') + process.env.APP_SAVE_DIRECTORY : __dirname + process.env.APP_SAVE_DIRECTORY;
            if(!fs.existsSync(path.join(dir, '/', 'gameResults.json'))){
                storage.setDataPath(dir);
                await writeElectronLocalData({fileName: 'gameResults', data: "[]"});
                resolve({message: 'there is no data yet'});
                return
            }

            let readObject = JSON.parse(data);
            if(readObject.length === 0){
                resolve({message: 'there is no data yet'});
                return
            }
            if(!readObject)return resolve({message: "problem occurred in result data"});
            let publicData = readObject.sort((a, b) => a.gamePoints - b.gamePoints ).reverse().map(item => { return {
                userName: item.userName,
                gamePoints: item.gamePoints,
                time: item.id,
                gameCoins: item.gameCoins,
                userAvatar: item.userAvatar,
                destroyShip: (item.destroyShip)? item.destroyShip: null,
                destroyEnemy: (item.destroyEnemy)? item.destroyEnemy: null
            }})
            resolve(publicData)
        })
    })
}


async function postResultlData ({url, headers, saveData}) {
    return new Promise((resolve, reject) => {
        storage.get('gameResults', async function(err, data) {
            var dir = (process.env.NODE_ENV === 'production')? path.join(__dirname, '../../') + process.env.APP_SAVE_DIRECTORY : __dirname + process.env.APP_SAVE_DIRECTORY;
            if(!fs.existsSync(path.join(dir, '/', 'gameResults.json'))){
                storage.setDataPath(dir);
                await writeElectronLocalData({fileName: 'gameResults', data: "[]"});
            }
            saveData.id = new Date().getTime();
            let readObject = null, dataArr = [];
            if(!saveData.userName || typeof saveData.userName != 'string' || saveData.userName.length > 30 || saveData.userName.length < 3){
                resolve({message: "Name field is incorrect, must be max 30 character min 3", status: "warning"})
                return
            }
            if(!saveData.userEmail || typeof saveData.userEmail != 'string'){
                resolve({message: "Email field is incorrect, must be max 30 character min 3", status: "warning"})
                return
            }
            if(!saveData.userPassword || typeof saveData.userPassword != 'string'){
                resolve({message: "Password field is incorrect, must be max 30 character min 3", status: "warning"})
                return
            }
            if(!saveData.gamePoints || typeof saveData.gamePoints != 'number'){
                resolve({message: "name too long or too short"})
                return
            }
            if(data && saveData.gamePoints && saveData.userPassword && saveData.userEmail && saveData.userName && saveData.gameCoins){
                readObject = JSON.parse(data)
                let findUser = dataFinder(readObject, saveData)
                if(findUser['status'] === "not-found" ){
                    dataArr = dataArr.concat(readObject, saveData).sort((a, b) => a.gamePoints - b.gamePoints).reverse();
                    writeElectronLocalData({fileName: 'gameResults', data:JSON.stringify(dataArr)})

                    resolve({message: `Successfully save Result!!! ${saveData.userName} added`, status: "success"})
                    return
                }else{
                    if(!findUser) return false
                    writeElectronLocalData({fileName: 'gameResults', data:JSON.stringify(findUser.data)})
                    let messageText = "";
                    switch(findUser.status){
                        case "found-email":
                            messageText = `Email already exist `;
                            break
                        case "found-name":
                            messageText = `Name already exist `;
                            break
                        default:
                            "_ - _ - _"
                    }
                    resolve({message: messageText, status: "warning"})
                    return
                }
            }else{
                dataArr = dataArr.concat(dataArr, resolve)
                if(!dataArr || dataArr.length == 0)return resolve({message: "there is no data to write"})
                writeElectronLocalData({fileName: 'gameResults', data:JSON.stringify(dataArr)})
                resolve({message: `Successfully save Result!!! ${saveData.userName} added`, status: "success"})
            }
        })
    })
}

function dataFinder(data, finderData){
    if( !data || !finderData) return false
    let resuletEmail = data.find( (element) => {return element.userEmail === finderData.userEmail})
    let resuletName = data.find( (element) => {return element.userName === finderData.userName})
    if(resuletEmail) return {data: data, status: "found-email"}
    else if(resuletName) return {data: data, status: "found-name"}
    else return {data: null, status: "not-found"}
}



async function updateResultlData ({url, headers, saveData}) {
    return new Promise((resolve, reject) => {
        storage.get('gameResults', async function(err, data) {
            var dir = (process.env.NODE_ENV === 'production')? path.join(__dirname, '../../') + process.env.APP_SAVE_DIRECTORY : __dirname + process.env.APP_SAVE_DIRECTORY;
            if(!fs.existsSync(path.join(dir, '/', 'gameResults.json'))){
                storage.setDataPath(dir);
                await writeElectronLocalData({fileName: 'gameResults', data: "[]"});
            }
            if(!saveData.userEmail || typeof saveData.userEmail != 'string'){
                resolve({message: "Email field is incorrect, must be max 30 character min 3", status: "warning"})
                return
            }
            if(!saveData.userPassword || typeof saveData.userPassword != 'string'){
                resolve({message: "Password field is incorrect, must be max 30 character min 3", status: "warning"})
                return
            }
            let readObject = null, dataArr = [];
            if(data && saveData.gamePoints && saveData.userPassword && saveData.userEmail && saveData.gameCoins){
                readObject = JSON.parse(data)
                let findUser = dataUpdater(readObject, saveData)
                let messageText = "", status;
                switch(findUser['status']){
                    case "replace":
                        messageText = `Congratulation ${findUser['name']} your score is saved`;
                        status = "success";
                        break
                    case "lo-result":
                        messageText = `Your score is less than existing one`;
                        status = "warning";
                        break
                    case "equal-result":
                        messageText = `Your score the same as existing one`;
                        status = "warning";
                        break
                    case "wrong-password":
                        messageText = `Wrong password try again`;
                        status = "reject";
                        break
                    case "not-exist":
                        messageText = `There is no such email`;
                        status = "reject";
                        break
                    default:
                        messageText = `There is no such user`;
                        status = "reject"
                }
                resolve({message: messageText, status: status})
                if( status != "reject") writeElectronLocalData({fileName: 'gameResults', data:JSON.stringify(findUser['data'])})
                return
            }
        })
    })



    function dataUpdater(data, finderData){
        if(!data.length || !data || !finderData) return false
        let resulet = data.find( (element) => {return element.userEmail === finderData.userEmail})
        let index = (resulet)? data.indexOf(resulet) : null;
        if(resulet && resulet.gamePoints < finderData.gamePoints &&
             resulet.userPassword === finderData.userPassword){

            resulet.gamePoints = finderData.gamePoints;
            resulet.gameCoins = finderData.gameCoins;
            resulet.userAvatar = (finderData.userAvatar)? finderData.userAvatar : (resulet.userAvatar)? resulet.userAvatar : null;
            data[index] = resulet;
            return {data: data, status: "replace", name: resulet.userName}
        }else if(resulet && resulet.gamePoints > finderData.gamePoints &&
            resulet.userPassword === finderData.userPassword){
            return {data: data, status: "lo-result", name: null}
        }else if(resulet && resulet.gamePoints === finderData.gamePoints &&
            resulet.userPassword === finderData.userPassword){
            return {data: data, status: "equal-result", name: null}
        }else if(resulet && resulet.userPassword != finderData.userPassword){
            return {data: data, status: "wrong-password", name: null}
        }else return {data: data, status: "not-exist", name: null}
    }
}


export {
    searchDataInFile
}