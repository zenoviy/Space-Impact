const fs = require('fs');
async function dataWriter({fileName, data}){
    fs.writeFile(__dirname + fileName, data, (err) => {
        if(err) throw err;
    })
}

module.exports = {
    dataWriter: dataWriter
}