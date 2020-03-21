const fs = require('fs');
const { dataFinder } = require('../workers/validator')

async function getResultlData (req, res) {
    fs.readFile(__dirname + '../../../public/userData/gameResults.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};
        if(data.length === 0){
            res.send({message: 'there is no data'})
            return
        }

        let readObject = JSON.parse(data);
        let publicData = readObject.map(item => { return {
            userName: item.userName,
            gamePoints: item.gamePoints,
            time: item.id}})
        res.send(publicData)
    })
}
async function postResultlData (req, res) {
    fs.readFile(__dirname + '../../../public/userData/gameResults.json', "utf8", (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        let readObject = null, dataArr = [];
        req.body.id = new Date().getTime();
        if(!req.body.userName || typeof req.body.userName != 'string' || req.body.userName.length > 30 || req.body.userName.length < 3){
            res.send({message: "Name field is incorect, must be max 30 charackter min 3", status: "warning"})
                return
        }
        if(!req.body.userEmail || typeof req.body.userEmail != 'string'){
            res.send({message: "Email field is incorect, must be max 30 charackter min 3", status: "warning"})
                return
        }
        if(!req.body.gamePoints || typeof req.body.gamePoints != 'number'){
                res.send({message: "name too long or too short"})
                return
            }
        if(data){
            readObject = JSON.parse(data)
            let findUser = dataFinder(readObject, req.body)

            if(!findUser){
                dataArr = dataArr.concat(readObject, req.body).sort((a, b) => a.gamePoints - b.gamePoints).reverse();
                writeToFile(JSON.stringify(dataArr))
                res.send({message: "Sucessfully save Result"})
                return
            }else{
                writeToFile(JSON.stringify(findUser))
                res.send({message: "Name or email already exist or you points les then you have before"})
                return
            }
        }else{
            dataArr = dataArr.concat(dataArr, req.body)
            writeToFile(JSON.stringify(dataArr))
            res.send(dataArr)
        }
    })


    function writeToFile(data){
        fs.writeFile(__dirname + '../../../public/userData/gameResults.json', data, (err) => {
            if(err) throw err;
        })
    }
}

module.exports = {
    getResultlData: getResultlData,
    postResultlData: postResultlData
}