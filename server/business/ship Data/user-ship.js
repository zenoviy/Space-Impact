const fs = require('fs');

async function getUserShip (req, res) {
    if(!req) return console.log('no propper request')

    fs.readFile(__dirname + '../../../public/db/playerShipsData.json', (err, data) => {
        let headers = req.headers;
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let readObject = JSON.parse(data) //
        let responseItem = readObject.find((data) => { return data.id == headers['usership']})
        res.send(responseItem);
    })
}

module.exports = {
    getUserShip : getUserShip
}