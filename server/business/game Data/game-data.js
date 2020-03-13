const fs = require('fs');

async function getGameData (req, res) {
    fs.readFile(__dirname + '../../../public/db/gameSettings.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let readObject = JSON.parse(data)
        res.send(readObject)
    })
}

module.exports = {
    getGameData: getGameData
}