var fs = require('fs');
var path = require('path');

async function searchDataInFile({url, headers, method}){
    //let promise = new Promise(async (resolve, reject) => {
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
                if(method === "PUT") resultData = await shopGunsWorkerPut({url: url, headers: headers});//console.log("shop put")
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

                console.log(headers)
                let readObject = JSON.parse(data)
                let responseItem = readObject.find((data) => { return data.level == headers['maplevel']})
                responseItem.allLevels = readObject.length;
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
            if(!objectType && objectType != 0) reject({message: "no-map-object-identificator"});
            if(objectType.length < 1) reject({ message: "object type is empty" })
            objectType = headers.mapObject.map(item => item);

            let responseItem = readObject.filter(item => {
                    return headers.mapObject.some(obj => obj == item.id)
            });

            //res.send(responseItem);
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
            if(!objectType && objectType != 0) return reject({message: "no-grapple-objects-identificator"});
            if(objectType.length < 1) return reject({ message: "object type is empty" });
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
                reject({ message: "there is no enemy ship type" });
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
            console.log(headers)
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
/*
static/shop/misc

V - level-data
V - level-objects
V - grapple-objects
V - user-ship
V - enemy-ship
V - get-ground-characters
- api/shop/guns api/grapple-objects 
*/

export {
    searchDataInFile
}