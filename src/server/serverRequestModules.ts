function getData({url, method, data, headers}){
    let resultHeader = Object.assign({
        'Content-Type': 'application/json'}, headers)/**/

        console.log(resultHeader)
    return fetch(url, {
        method: method,
        mode: 'cors',
        headers: resultHeader,
        body: (data)? JSON.stringify(data) : null
    }).then(res => res.json()
    ).then(data => data)
}

module.exports.serverModules = {
    getData: getData
};