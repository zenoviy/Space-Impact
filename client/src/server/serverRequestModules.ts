var fs = require('fs');

function getData({url, method, data, headers}){
    let resultHeader = Object.assign({
        'Content-Type': 'application/json'}, headers || false)
    return fetch(url, {
        method: method,
        mode: 'cors',
        headers: resultHeader,
        body: (data)? JSON.stringify(data) : null
    }).then(res => res.json()
    ).then(data => data)
}

function getLocalData({fileName}){
    if(!fileName) throw Error("no local files");

    fs.readFile(__dirname + '/public/data/' + fileName, (err, data) => {
        if(err) throw Error(err)
        let info = JSON.parse(data);
        console.log(info)
        return info
    })
}

export {
    getData,
    getLocalData
};