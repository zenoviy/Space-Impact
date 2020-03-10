const fs = require('fs');
const bodyParser = require('body-parser')
const express = require('express');
const exphbs  = require('express-handlebars');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
const hbs = exphbs.create({extname: ".handlebars",
        layoutsDir: __dirname + "/views/layouts",
        defaultLayout: "main.handlebars",
        partialsDir: __dirname + "/views/partials"
    });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.use('/game', cors(), (err, req, res, next) => {
    if(err) return console.log(err)
    next()
})
app.get('/game', cors(), (req, res) => {
    if(!req) return console.log('problem with request')
    res.render('gameField', {
        title: "Games"
    })
})
app.get('/api/level-data', cors(), async (req, res) => {
    if(!req ) return console.log('no propper request')
    fs.readFile(__dirname + '/public/db/gameLevelData.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};
        let headers = req.headers;

        let readObject = JSON.parse(data) //
        let responseItem = readObject.find((data) => { return data.level == headers['maplevel']})
        responseItem.allLevels = readObject.length;
        res.send(responseItem);
    })
})
app.get('/api/user-ship', cors(), async (req, res) => {
    if(!req) return console.log('no propper request')

    fs.readFile(__dirname + '/public/db/playerShipsData.json', (err, data) => {
        let headers = req.headers;
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let readObject = JSON.parse(data) //
        let responseItem = readObject.find((data) => { return data.id == headers['usership']})
        res.send(responseItem);
    })
})
app.get('/api/game-settings', cors(), (req, res) => {
    fs.readFile(__dirname + '/public/db/gameSettings.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let readObject = JSON.parse(data)
        res.send(readObject)
    })
})
app.get('/api/enemy-ship', cors(), async (req, res) => {
    if(!req) return console.log('no propper request')

    fs.readFile(__dirname + '/public/db/enemyTypeData.json', (err, data) => {
        let headers = req.headers;
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let readObject = JSON.parse(data)
        let enemyType = headers['ship-type-number'];
        enemyType = enemyType.split(/,/).map(item => parseInt(item));

        let responseItem = readObject.filter(item => {
                return enemyType.some(obj => obj == item.id)
        });

        res.send(responseItem);
    })
})

app.listen(process.env.PORT || 3000, function(){
    console.log(`Server listened at port ${process.env.PORT || 3000}`);
});