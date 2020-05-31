const fs = require('fs');
const { dataWriter } = require('../workers/fileWorker');




async function saveMap (req, res) {

    if(!req ) return console.log('no request')
    let dir = __dirname + '../../../public/temp/';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    let mapFileName = `${req.body.name}.json`;
    let fileName = __dirname + '../../../public/level-creator/complete-maps/'+ mapFileName;
    
    if (!fs.existsSync(fileName)){
        console.log('not exist')
        if(!req.body || !req.body.name){ res.send({
            message: 'no data'});
            return false
        }
        //await dataWriter({fileName: '../../../public/level-creator/complete-maps/' + mapFileName, data: JSON.stringify(req.body)})

        fs.writeFile(fileName, JSON.stringify(req.body), (err) => {
            if(err) throw err;
        })
        res.send({ url: process.env.HOST + process.env.PORT + `/level-creator/complete-maps/${mapFileName}`, fileSize: 'New map created!'})
        console.log(!fs.existsSync(dir + '.json'))
        return
    }
    const stats = fs.statSync(fileName);
    await fs.unlink(fileName, async function (err) {
        if (err){
            console.log('err')
            throw err;
        }
        // if no error, file has been deleted successfully
        await console.log('File deleted!');

        let writeableStream = await fs.createWriteStream(fileName, {flags: 'w+'});
        await writeableStream.write(JSON.stringify(req.body),  () => {
            writeableStream.end();
            res.send({ url: process.env.HOST + process.env.PORT + `/level-creator/complete-maps/${mapFileName}`, fileSize: stats.size})
        });
    });
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