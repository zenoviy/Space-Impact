const fs = require('fs');

async function getEnemyShip (req, res) {
    if(!req) return console.log('no propper request')

    fs.readFile(__dirname + '../../../public/db/enemyTypeData.json', (err, data) => {
        let headers = req.headers;
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let readObject = JSON.parse(data)
        let enemyType = headers['ship-type-number'];
        enemyType = enemyType.split(/,/).map(item => item);

        let responseItem = readObject.filter(item => {
                return enemyType.some(obj => obj == item.id)
        });

        res.send(responseItem);
    })
}

module.exports = {
    getEnemyShip: getEnemyShip
}