const fs = require('fs');

async function getGrappleObjects (req, res) {
    if(!req ) return console.log('no request');

    fs.readFile(__dirname + '../../../public/db/gameGrappleObjectData.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let headers = req.headers;
        let readObject = JSON.parse(data)

        let objectType = headers['grappleobject'];
        if(!objectType && objectType != 0) return res.send({message: "no-grapple-objects-identificator"});
        if(objectType.length < 1) return res.send({ message: "object type is empty" })
        objectType = objectType.split(/,/).map(item => item);

        let responseItem = readObject.filter(item => {
                return objectType.some(obj => obj == item.id)
        });

        res.send(responseItem);
    })
}


module.exports = {
    getGrappleObjects : getGrappleObjects
}