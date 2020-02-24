function getData({url, method, data, headerLevel}){
    return fetch(url, {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'mapLevel': headerLevel
        },
        body: (data)? JSON.stringify(data) : null
    }).then(res => res.json()
    ).then(data => data)
}

module.exports.serverModules = {
    getData: getData
};