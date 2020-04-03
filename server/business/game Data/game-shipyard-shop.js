const fs = require('fs');


async function getShopShipyardData (req, res) {
    fs.readFile(__dirname + '../../../public/db/playerShipsData.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};
        //let headers = req.headers;
        if(data.length === 0){
            res.send({message: 'there is no data yet'})
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
            inventoryCapapcity: obj.inventoryCapapcity
        }});
        res.send(readObject)
    })
}


async function putShopShipyardData (req, res) {
    fs.readFile(__dirname + '../../../public/db/playerShipsData.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};
        let headers = req.headers;
        if(data.length === 0){
            res.send({message: 'there is no data yet'})
            return
        }


        let userCoins = headers['usercoins'];
        let itemName = headers['itemname'];
        let currentShipName = headers['currentshipname'];
        let playerObjectDataInventory = headers['shipinventoryitems'];
        let playerObjectDataGuns = headers['shipgunsitems'];


        if(currentShipName == itemName )  return res.send({message: `You already have that ship`, status: "false"})
        if(!userCoins || !itemName) return res.send({message: `wrong data: there is no coin or itemname`, status: "false"})

        let readObject = JSON.parse(data).find((obj) => { return obj.title === itemName });
        if(!readObject) return {message: `ship unavailable`, status: "false"}
        let accesibleShip = compareItems(playerObjectDataInventory, playerObjectDataGuns, readObject);
        if(!accesibleShip) return res.send({message: `This ship has less space for yours gusn and other staff`, status: "false"})


        if(!readObject.price) return res.send({message: `no price`, status: "false"})
        if(readObject && parseInt(userCoins) < readObject.price) return res.send({message: `you have no coin it cost: ${readObject.price}`, status: "false"})
            res.send({data: readObject, status: 'success', money: userCoins - readObject.price })
    })
}


function compareItems(playerObjectDataInventory, playerObjectDataGuns, readObject){
    let accesibility = true;
    if(playerObjectDataInventory > readObject.inventoryCapapcity -1 ||
        readObject.guns.length - 1 < playerObjectDataGuns) accesibility = false
    return accesibility
}

module.exports = {
    getShopShipyardData: getShopShipyardData,
    putShopShipyardData: putShopShipyardData
}

