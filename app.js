const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const hbs = exphbs.create({extname: ".handlebars",
        layoutsDir: "./views/layouts",
        defaultLayout: "main.handlebars",
        partialsDir: "./views/partials"
    });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/game', (req, res) => {
    res.render('gameField', {
        title: "Games"
    })
})

app.listen(3000, function(){
    console.log("Server listened at port 3000");
});