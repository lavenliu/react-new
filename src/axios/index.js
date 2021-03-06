import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';

import Utils from '../utils/utils'


export default class Axios {
    static requestList(_this, url, params) {
        let data = {
            params: params
        }
        this.ajax({
            url: url,
            data: data
            // 如果key值与value值相同，可以简写如下
            // url,
            // data
        }).then((res) => {
            if (res) {
                let list = res.data.item_list.map((item, index) => {
                    item.key = index
                    return item
                })
                _this.setState({
                    list: list,
                    pagination: Utils.pagination(res, (current) => {
                        _this.params.page = current
                        _this.requestList()
                    })
                })
            }
        })
    }

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
                    reject(err.message)
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
        // my api
        // const baseURL = 'https://easy-mock.com/mock/5bdfe2b18e124b2f5881b3e8/myapi'
        const baseURL = 'http://localhost:5000'
        // other api url
        // const baseURL = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api'
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseURL,
                timeout: 18000,
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