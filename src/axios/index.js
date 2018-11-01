import JsonP from 'jsonp'


export default class Axios {
    static jsonp(options) {
        // wrapper Promise and then we can use its `then` method in chain-style
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function(err, response) {
                // ToDo
                // debugger  // use `debugger` to debug if needed
                if (response.status === 'success') {
                    resolve(response)
                } else {
                    reject(response.message)
                }
            })
        })
    }
}