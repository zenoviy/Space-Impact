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

app.use('/game', (err, req, res, next) => {
    if(err) return console.log(err)
    next()
})
app.get('/game', (req, res) => {
    if(!req) return console.log('problem with request')
    res.render('gameField', {
        title: "Games"
    })
})
app.get('/api/level-data', cors(), (req, res) => {
    if(!req) return console.log('no propper request')

    fs.readFile(__dirname + '/public/db/gameLevelData.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let readObject = JSON.parse(data)
        res.send(readObject)
    })
})

app.listen(process.env.PORT || 3000, function(){
    console.log(`Server listened at port ${process.env.PORT || 3000}`);
});