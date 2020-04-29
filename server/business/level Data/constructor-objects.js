const fs = require('fs');

async function constructorBlockData (req, res) {
    if(!req ) return console.log('no propper request')
    fs.readFile(__dirname + '../../../public/level-creator/assets/db/blocksBase.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let readObject = JSON.parse(data)
        if(!readObject) return res.send({message: "no-block-found"});
        //responseItem.allLevels = readObject.length;
        res.send(readObject);
    })
}

module.exports = {
    constructorBlockData: constructorBlockData
}