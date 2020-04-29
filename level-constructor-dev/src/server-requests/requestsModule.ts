function getData({ url, method, data, headers }){
        let resultHeader = Object.assign({
            'Content-Type': 'application/json'}, headers || false)
        return fetch(url, {
            method: method,
            mode: 'cors',
            headers: resultHeader,
            body: (data)? JSON.stringify(data) : null
        }).then(res => {
            if(res.status != 200){
                return { status: 'reject', message: res.statusText}
            }
            return res.json()
        })
        .then(data => data)
        .catch( error => {
            console.log(error)
            if(error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            if(error){
                return {message: "500 No server connection!", status: "error"}
            }
        })
}

export {
    getData
}