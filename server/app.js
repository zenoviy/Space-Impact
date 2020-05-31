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
    putStoreItemsData,
    constructorBlockData,
    saveMap,
    loadMap,
    loadAllMap,
    constructorCharacterData,
    gameGroundCharacterData,
    gameGroundEnemyData,
    gameGroundEnemyRedactorData,
    gameDecorationRedactorData
} = require('./business');

const bodyParser = require('body-parser')
const express = require('express');
const exphbs  = require('express-handlebars');
const cors = require('cors');
const path = require('path');

const app = express();

process.env.PORT = 3300;
process.env.HOST = 'http://localhost:';


app.use(bodyParser.json({ limit: '23mb' }));
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


/*            Game constructor Handlebars page         */

app.use('/game-level-creator',  express.static(__dirname +'/public'))
app.get('/game-level-creator', cors(), (req, res) => {
    if(!req) return console.log('problem with request')
    let link = process.env.HOST + process.env.PORT + "/level-creator/dist-scripts/main.js";
    res.render('gameField', {
        title: "Games constructor",
        mainScript: link
    })
})



/*            Dynamic level route       */
app.use(bodyParser.json({ limit: '23mb' }));
app.get('/app/get-all-maps', cors(), loadAllMap)
app.get('/api/get-ground-characters', cors(), gameGroundCharacterData)
app.get('/api/get-constructor-ground-enemy', cors(), gameGroundEnemyData)
app.get('/api/get-constructor-ground-enemy-redactor', cors(), gameGroundEnemyRedactorData)


app.route('/api/get-constructor-characters')
    .get(cors(), constructorCharacterData)

app.get('/api/get-constructor-background-blocks', cors(), gameDecorationRedactorData)
app.route('/api/get-constructor-blocks')
    .get(cors(), constructorBlockData)
    .post(cors(), bodyParser.json({ limit: '23mb' }), saveMap)
    .put(cors(), loadMap)


/*            level data route       */
app.get('/api/level-data', cors(), getLevelData)
app.get('/api/level-objects', cors(), getLevelObjects)
app.get('/api/grapple-objects', cors(), getGrappleObjects)

/*            Ship route       */
app.get('/api/user-ship', cors(), getUserShip)
app.get('/api/enemy-ship', cors(), getEnemyShip)

app.route("/api/game-result")
    .get(getResultlData)
    .post(cors(), postResultlData)
    .put(cors(), updateResultlData)


/*            Shop data route       */
app.route("/api/shop/guns")
    .get(getShopWeaponData)
    .put(cors(), putShopWeaponData)


app.route("/api/shop/shipyard")
    .get(getShopShipyardData)
    .put(putShopShipyardData)

app.route("/api/shop/store-items")
    .get(getStoreItemsData)
    .put(putStoreItemsData)

app.listen(process.env.PORT || 3300, function(){
    console.log(`Server listened at port ${process.env.PORT || 3300}`);
});