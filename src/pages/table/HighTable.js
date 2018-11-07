import React from 'react';
import { Card, Table, Badge, Modal, message } from 'antd';
import axios from '../../axios'


export default class HighTable extends React.Component {

    state = {}
    params = {
        page: 1
    }

    componentDidMount() {
        this.request()
    }

    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder: sorter.order
        })
    }

    handleDelete = (item) => {
        // const id = item.id
        Modal.confirm({
            title: '要删除吗？',
            content: `删除的信息: ${item}`,
            onOk: () => {
                message.success('删除成功')
                this.request()
            }
        })
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
        let _this = this  // this 作用域的问题
        axios.ajax({
            url: '/table/list1',
            data: {
                params: {
                    page: this.params.page
                },
                // isShowLoading: false
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    dataSource: res.data
                })
            }
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                width: 80,
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '用户名',
                width: 80,
                dataIndex: 'userName',
                key: 'userName'
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                key: 'sex',
                render(sex) {
                    return sex === 0 ? '女' : '男'
                }
            },
            {
                title: '状态',
                width: 80,
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
                width: 80,
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
                width: 80,
                dataIndex: 'birthday',
                key: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: '起床',
                width: 80,
                dataIndex: 'morning',
                key: 'morning'
            }
        ]
        const columns3 = [
            {
                title: 'id',
                // width: 80,
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '用户名',
                // width: 80,
                dataIndex: 'userName',
                key: 'userName'
            },
            {
                title: '性别',
                // width: 80,
                dataIndex: 'sex',
                key: 'sex',
                render(sex) {
                    return sex === 0 ? '女' : '男'
                }
            },
            {
                title: '年龄',
                // width: 80,
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => {
                    return a.age - b.age
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '状态',
                // width: 80,
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
                // width: 80,
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
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday'
            },
            {
                title: '地址',
                // width: 120,
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: '起床',
                // width: 80,
                dataIndex: 'morning',
                key: 'morning'
            }
        ]
        const columns2 = [
            {
                title: 'id',
                width: 80,
                fixed: 'left',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '用户名',
                width: 80,
                fixed: 'left',
                dataIndex: 'userName',
                key: 'userName'
            },
            {
                title: '性别',
                // width: 80,
                dataIndex: 'sex',
                key: 'sex',
                render(sex) {
                    return sex === 0 ? '女' : '男'
                }
            },
            {
                title: '状态',
                // width: 120,
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
                // width: 120,
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
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday1'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday2'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday3'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday4'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday5'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday6'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday7'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday8'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday9'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday10'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday11'
            },
            {
                title: '生日',
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday12'
            },
            {
                title: '地址',
                // width: 120,
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: '起床',
                width: 80,
                fixed: 'right',
                dataIndex: 'morning',
                key: 'morning'
            }
        ]
        const columns4 = [
            {
                title: 'id',
                // width: 80,
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '用户名',
                // width: 80,
                dataIndex: 'userName',
                key: 'userName'
            },
            {
                title: '性别',
                // width: 80,
                dataIndex: 'sex',
                key: 'sex',
                render(sex) {
                    return sex === 0 ? '女' : '男'
                }
            },
            {
                title: '年龄',
                // width: 80,
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: '状态',
                // width: 80,
                dataIndex: 'status',
                key: 'status',
                render(status) {
                    const weapons = {
                        "1": <Badge status='success' text='李寻欢' />,
                        "2": <Badge status='error' text='周伯通' />,
                        "3": <Badge status='default' text='黄老邪' />,
                        "4": <Badge status='processing' text='谢晓峰' />,
                        "5": <Badge status='warning' text='萧峰' />
                    }
                    return weapons[status]
                }
            },
            {
                title: '爱好',
                // width: 80,
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
                // width: 80,
                dataIndex: 'birthday',
                key: 'birthday'
            },
            {
                title: '地址',
                // width: 120,
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: '操作',
                // width: 80,
                // dataIndex: 'morning',
                // key: 'morning'
                render: (text, item) => {
                    return <a onClick={(item) => {this.handleDelete(item)}}>删除</a>
                }
            }
        ]
        
        return (
            <div>
                <Card title="表头固定" className='card-wrap'>
                    <Table columns={columns}
                    dataSource={this.state.dataSource} 
                    bordered
                    pagination={false}
                    scroll={{y: 240}}
                    />
                </Card>
                <Card title="左侧固定" className='card-wrap'>
                    <Table columns={columns2}
                    dataSource={this.state.dataSource} 
                    bordered
                    pagination={false}
                    scroll={{x: 2400}}
                    />
                </Card>
                <Card title="表格排序" className='card-wrap'>
                    <Table columns={columns3}
                    dataSource={this.state.dataSource} 
                    bordered
                    pagination={false}
                    onChange={this.handleChange}
                    />
                </Card>
                <Card title="内嵌操作按钮" className='card-wrap'>
                    <Table columns={columns4}
                    dataSource={this.state.dataSource} 
                    bordered
                    pagination={false}
                    />
                </Card>
            </div>
        )
    }
}
