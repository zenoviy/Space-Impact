const fs = require('fs');

async function levelData (req, res) {
    if(!req ) return console.log('no  request')
    fs.readFile(__dirname + '../../../public/db/gameLevelData.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};
        let headers = req.headers;

        if(!headers['maplevel']) return res.send({message: "no-level-identificator"});

        let readObject = JSON.parse(data)
        let responseItem = readObject.find((data) => { return data.level == headers['maplevel']})
        if(!responseItem) return res.send({message: "no-level-found"});
        responseItem.allLevels = readObject.length;
        res.send(responseItem);
    })
}

module.exports = {
    levelData: levelData
}