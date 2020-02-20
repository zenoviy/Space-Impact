const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const hbs = exphbs.create({extname: ".handlebars",
        layoutsDir: __dirname + "/views/layouts",
        defaultLayout: "main.handlebars",
        partialsDir: __dirname + "/views/partials"
    });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/game', (err, req, res, next) => {
    if(err) throw new Error(err)
    next()
})
app.get('/game', (req, res) => {
    if(!req) throw new Error('problem with request')
    res.render('gameField', {
        title: "Games"
    })
})
app.get('/api/levelData', (req, res) => {
    if(!req) throw new Error('no propper request')


})

app.listen(3000, function(){
    console.log("Server listened at port 3000");
});