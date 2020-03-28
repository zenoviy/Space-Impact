const fs = require('fs');
const { dataFinder, dataUpdater } = require('../workers/validator');
const { dataWriter } = require('../workers/fileWorker');

async function getResultlData (req, res) {
    fs.readFile(__dirname + '../../../public/userData/gameResults.json', (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};
        if(data.length === 0){
            res.send({message: 'there is no data yet'})
            return
        }

        let readObject = JSON.parse(data);
        let publicData = readObject.sort((a, b) => a.gamePoints - b.gamePoints ).reverse().map(item => { return {
            userName: item.userName,
            gamePoints: item.gamePoints,
            time: item.id,
            gameCoins: item.gameCoins
        }})
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
        if(!req.body.userPassword || typeof req.body.userPassword != 'string'){
            res.send({message: "Password field is incorect, must be max 30 charackter min 3", status: "warning"})
                return
        }
        if(!req.body.gamePoints || typeof req.body.gamePoints != 'number'){
                res.send({message: "name too long or too short"})
                return
            }
        if(data && req.body.gamePoints && req.body.userPassword && req.body.userEmail && req.body.userName && req.body.gameCoins){
            readObject = JSON.parse(data)
            let findUser = dataFinder(readObject, req.body)

            if(findUser.status === "not-found" ){
                dataArr = dataArr.concat(readObject, req.body).sort((a, b) => a.gamePoints - b.gamePoints).reverse();
                dataWriter({fileName: '../../../public/userData/gameResults.json', data:JSON.stringify(dataArr)})
                res.send({message: `Sucessfully save Result!!! ${req.body.userName} added`, status: "success"})
                return
            }else{
                dataWriter({fileName: '../../../public/userData/gameResults.json', data:JSON.stringify(findUser.data)})
                let messageText = "";
                switch(findUser.status){
                    case "found-email":
                        messageText = `Email already exist `;
                        break
                    case "found-name":
                        messageText = `Name already exist `;
                        break
                    default:
                        "_ - _ - _"
                }
                res.send({message: messageText, status: "warning"})
                return
            }
        }else{
            dataArr = dataArr.concat(dataArr, req.body)
            dataWriter({fileName: '../../../public/userData/gameResults.json', data:JSON.stringify(dataArr)})
            res.send({message: `Sucessfully save Result!!! ${req.body.userName} added`, status: "success"})
        }
    })
}

async function updateResultlData (req, res) {
    fs.readFile(__dirname + '../../../public/userData/gameResults.json', "utf8", (err, data) => {
        if(err){ res.send(`We dont find such file ${err}`); return console.log(err)};

        if(!req.body.userEmail || typeof req.body.userEmail != 'string'){
            res.send({message: "Emailfield is incorect, must be max 30 charackter min 3", status: "warning"})
                return
        }

        if(!req.body.userPassword || typeof req.body.userPassword != 'string'){
            res.send({message: "Password field is incorect, must be max 30 charackter min 3", status: "warning"})
                return
        }

        let readObject = null, dataArr = [];
        if(data && req.body.gamePoints && req.body.userPassword && req.body.userEmail && req.body.gameCoins){
            readObject = JSON.parse(data)
            let findUser = dataUpdater(readObject, req.body)

            let messageText = "", status;
            switch(findUser.status){
                case "replace":
                    messageText = `Congratualation ${findUser.name} your score is saved`;
                    status = "success";
                    break
                case "lo-result":
                    messageText = `Your score is less than existing one`;
                    status = "warning";
                    break
                case "equil-result":
                    messageText = `Your score the same as existing one`;
                    status = "warning";
                    break
                case "wrong-password":
                    messageText = `Wrong password try again`;
                    status = "reject";
                    break
                case "not-exist":
                    messageText = `There is no such email`;
                    status = "reject";
                    break
                default:
                    "_ - _ - _"
            }
            res.send({message: messageText, status: status})
            dataWriter({fileName: '../../../public/userData/gameResults.json', data:JSON.stringify(findUser.data)})
            return
        }
    })
}

module.exports = {
    getResultlData: getResultlData,
    postResultlData: postResultlData,
    updateResultlData: updateResultlData
}