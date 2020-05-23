const fs = require('fs');
const { dataWriter } = require('../workers/fileWorker');




async function saveMap (req, res) {
    if(!req ) return console.log('no request')

    let dir = __dirname + '../../../public/temp/';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    if (!fs.existsSync(dir + '.json')){
        if(!req.body || !req.body.name){ res.send({
            message: 'no data'});
            return false
        }
        let mapFileName = `${req.body.name}.json`;

        console.log(req.body.name)
        await dataWriter({fileName: '../../../public/temp/mapData.json', data: JSON.stringify(req.body)})
        await dataWriter({fileName: '../../../public/level-creator/complete-maps/' + mapFileName, data: JSON.stringify(req.body)})
    }


    res.send({ url: process.env.HOST +  process.env.PORT + '/temp/mapData.json'})
}

async function loadAllMap(req, res) {
    if(!req ) return console.log('no request')

    let dir = __dirname + '../../../public/level-creator/complete-maps';
    let link = '/level-creator/complete-maps';
    fs.readdir(dir, (err, files) => {
        let allFiles = [];
        files.forEach(file => {
            let fileData = {
                name: file,
                link: process.env.HOST +  process.env.PORT + link
            }
            allFiles = allFiles.concat(fileData);
        });
        res.send(JSON.stringify(allFiles))
      });
}




async function loadMap (req, res) {
    if(!req ) return console.log('no request')
}

async function constructorBlockData (req, res) {
    if(!req ) return console.log('no request')
    fs.readFile(__dirname + '../../../public/level-creator/assets/db/blocksBase.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let readObject = JSON.parse(data)
        if(!readObject) return res.send({message: "no-block-found"});
        res.send(readObject);
    })
}


async function constructorCharacterData (req, res) {
    if(!req ) return console.log('no request')
    fs.readFile(__dirname + '../../../public/level-creator/assets/db/charactersBase.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let readObject = JSON.parse(data)
        if(!readObject) return res.send({message: "no-block-found"});
        res.send(readObject);
    })
}



async function gameGroundCharacterData (req, res){
    if(!req ) return console.log('no request')

    if(!req.headers) res.send({message: 'Invalid request', status: 403})
    fs.readFile(__dirname + '../../../public/db/groundCharactersData.json', (err, data) => {
        let readObject = JSON.parse(data);
        let searchResult = readObject.filter(item => {
            return item.id === req.headers['item-id']
        })
        res.send(searchResult)
    })
}
async function gameGroundEnemyData (req, res){
    if(!req ) return console.log('no request')

    fs.readFile(__dirname + '../../../public/db/groundEnemyData.json', (err, data) => {
        let readObject = JSON.parse(data);
        res.send(readObject)
    })
}


async function gameGroundEnemyRedactorData (req, res){
    if(!req ) return console.log('no request')

    fs.readFile(__dirname + '../../../public/level-creator/assets/db/enemyBase.json', (err, data) => {
        let readObject = JSON.parse(data);
        res.send(readObject)
    })
}

async function gameDecorationRedactorData (req, res){
    if(!req ) return console.log('no request')

    fs.readFile(__dirname + '../../../public/level-creator/assets/db/decorationBase.json', (err, data) => {
        let readObject = JSON.parse(data);
        res.send(readObject)
    })
}


module.exports = {
    constructorBlockData: constructorBlockData,
    saveMap: saveMap,
    loadMap: loadMap,
    loadAllMap: loadAllMap,
    constructorCharacterData: constructorCharacterData,
    gameGroundCharacterData: gameGroundCharacterData,
    gameGroundEnemyData: gameGroundEnemyData,
    gameGroundEnemyRedactorData: gameGroundEnemyRedactorData,
    gameDecorationRedactorData: gameDecorationRedactorData
}