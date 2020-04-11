const fs = require('fs');


async function getShopWeaponData (req, res) {
    fs.readFile(__dirname + '../../../public/userData/gameShopGun.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};
        let headers = req.headers;
        if(data.length === 0){
            res.send({message: 'there is no data yet'})
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
        res.send(readObject)
    })
}

async function putShopWeaponData (req, res) {
    fs.readFile(__dirname + '../../../public/userData/gameShopGun.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};
        let headers = req.headers;
        if(data.length === 0){
            res.send({message: 'there is no data yet'})
            return
        }
        let userCoins = headers['usercoins'];
        let itemName = headers['itemname'];

        if(!userCoins || !itemName) return res.send({message: `wrong data: there is no coin or itemname`, status: "false"})
        let readObject = JSON.parse(data).find((obj) => { return obj.title === itemName });

        if(!readObject) return res.send({message: `not fond in guns`, status: "false"})
        if(readObject && parseInt(userCoins) < readObject.price) return res.send({message: `you have no coin it cost: ${readObject.price}`, status: "false"})
        res.send({data: readObject, status: 'success', money: userCoins - readObject.price })
    })
}


module.exports = {
    getShopWeaponData: getShopWeaponData,
    putShopWeaponData: putShopWeaponData
}