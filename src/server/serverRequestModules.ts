function getData({url, method, data}){
    return fetch(url, {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: (data)? JSON.stringify(data) : null
    }).then(res => res.json()
    ).then(data => data)
}

module.exports.serverModules = {
    getData: getData
};