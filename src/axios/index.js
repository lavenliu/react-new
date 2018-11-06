import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';


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

    static ajax(options) {
        let loading
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading')
            loading.style.display = 'block'
        }
        const baseURL = 'https://easy-mock.com/mock/5bdfe2b18e124b2f5881b3e8/myapi'
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseURL,
                timeout: 8000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display = 'none'
                }
                if (response.status === 200) {
                    const res = response.data
                    if (res.code === 0) {
                        resolve(res)
                    } else {
                        Modal.info({
                            title: '提示',
                            content: res.msg
                        })
                    }
                } else {
                    reject(response.data)
                }
            })
        })
    }
}