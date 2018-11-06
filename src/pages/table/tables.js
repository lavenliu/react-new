import React from 'react';
import { Card, Table } from 'antd';
// import axios from 'axios'
import axios from '../../axios'


export default class MyTable extends React.Component {

    state = {
        // dataSource2: []
    }

    componentDidMount() {
        const data = [
            {
                id: '0',
                key: '0',
                userName: 'LavenLiu',
                sex: '1',
                status: '1',
                interests: '1',
                birthday: '2000-01-01',
                address: '上海市陆家嘴8号',
                morning: '09:00'
            },
            {
                id: '1',
                key: '1',
                userName: 'LavenLiu',
                sex: '0',
                status: '2',
                interests: '2',
                birthday: '2000-01-01',
                address: '上海市陆家嘴8号',
                morning: '09:00'
            },
            {
                id: '2',
                key: '2',
                userName: 'LavenLiu',
                sex: '1',
                status: '3',
                interests: '3',
                birthday: '2000-01-01',
                address: '上海市陆家嘴8号',
                morning: '09:00'
            },
            {
                id: '3',
                key: '3',
                userName: 'LavenLiu',
                sex: '0',
                status: '4',
                interests: '4',
                birthday: '2000-01-01',
                address: '上海市陆家嘴8号',
                morning: '09:00'
            }
        ]
        this.setState({
            dataSource1: data
        })
        this.request()
        // console.log(this.state.dataSource2)
    }

    // 动态获取 Mock 数据
    request = () => {
        // 下面这坨代码是直接使用 axios 插件去请求接口的
        // const baseURL = 'https://easy-mock.com/mock/5bdfe2b18e124b2f5881b3e8/myapi'
        // axios.get(baseURL+'/table/list').then((res) => {
        //     if (res.status === 200 && res.data.code === 0) {
        //         // debugger
        //         console.log('111', res)
        //         this.setState({
        //             dataSource2: res.data.data
        //         })
        //     }
        //     console.log(JSON.stringify(res))
        //     console.log(JSON.stringify(res.data.data))
        // })

        // 下面这一坨代码是封装过的 axios 请求
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: 1
                },
                // isShowLoading: false
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    dataSource2: res.data
                })
            }
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                key: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render(sex) {
                    return sex === 0 ? '女' : '男'
                }
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render(status) {
                    const weapons = {
                        "1": '屠龙刀',
                        "2": '倚天剑',
                        "3": '孔雀翎',
                        "4": '蝴蝶剑',
                        "5": '流星锤'
                    }
                    return weapons[status]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interests',
                key: 'interests',
                render(interests) {
                    const heros = {
                        "1": '李寻欢',
                        "2": '傅红雪',
                        "3": '谢晓峰',
                        "4": '周伯通',
                        "5": '洪七公',
                        "6": '黄老邪',
                        "7": '王重阳',
                        "8": '段智兴'
                    }
                    return heros[interests]
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                key: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: '起床',
                dataIndex: 'morning',
                key: 'morning'
            }
        ]
        return (
            <div>
                <Card title="基础表格" className='card-wrap'>
                    <Table columns={columns}
                    dataSource={this.state.dataSource1} 
                    bordered
                    pagination={false}
                    />
                </Card>
                <Card title="动态渲染表格" className='card-wrap'>
                    <Table columns={columns}
                    dataSource={this.state.dataSource2} 
                    bordered
                    pagination={false}
                    />
                </Card>
            </div>
        )
    }
}
