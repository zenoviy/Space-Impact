const {
    getLevelData,
    getUserShip,
    getEnemyShip,
    getLevelObjects,
    getResultlData,
    postResultlData,
    getGrappleObjects,
    updateResultlData,
    getShopWeaponData,
    putShopWeaponData,
    getShopShipyardData,
    putShopShipyardData,
    getStoreItemsData,
    putStoreItemsData
} = require('./business');

const bodyParser = require('body-parser')
const express = require('express');
const exphbs  = require('express-handlebars');
const cors = require('cors');

const app = express();

process.env.PORT = 3000;
process.env.HOST = 'http://localhost:';


app.use(bodyParser.json({ limit: '3mb' }));
const hbs = exphbs.create({extname: ".handlebars",
        layoutsDir: __dirname + "/views/layouts",
        defaultLayout: "main.handlebars",
        partialsDir: __dirname + "/views/partials"
    });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/static', express.static(__dirname +'/public/images'));
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

app.get('/api/level-data', cors(), getLevelData)
app.get('/api/level-objects', cors(), getLevelObjects)
app.get('/api/grapple-objects', cors(), getGrappleObjects)

app.get('/api/user-ship', cors(), getUserShip)
app.get('/api/enemy-ship', cors(), getEnemyShip)

app.route("/api/game-result")
    .get(getResultlData)
    .post(cors(), postResultlData)
    .put(cors(), updateResultlData)

app.route("/api/shop/guns")
    .get(getShopWeaponData)
    .put(cors(), putShopWeaponData)


app.route("/api/shop/shipyard")
    .get(getShopShipyardData)
    .put(putShopShipyardData)

app.route("/api/shop/store-items")
    .get(getStoreItemsData)
    .put(putStoreItemsData)

app.listen(process.env.PORT || 3000, function(){
    console.log(`Server listened at port ${process.env.PORT || 3000}`);
});