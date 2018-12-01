import React from 'react';
import { Card, Table, Modal } from 'antd';

import axios from '../../axios'
import Utils from '../../utils/utils'


export default class RadioTable extends React.Component {

    state = {
    }

    params = {
        page: 1
    }

    componentDidMount() {
        const data = [
            {
                id: '0',
                // key: '0',
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
                // key: '1',
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
                // key: '2',
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
                // key: '3',
                userName: 'LavenLiu',
                sex: '0',
                status: '4',
                interests: '4',
                birthday: '2000-01-01',
                address: '上海市陆家嘴8号',
                morning: '09:00'
            }
        ]
        data.map((item, index) => item.key = index)
        this.setState({
            dataSource1: data
        })
        this.request()
    }

    // 动态获取 Mock 数据
    request = () => {

        // 下面这一坨代码是封装过的 axios 请求
        let _this = this  // this 作用域的问题
        axios.ajax({
            url: '/tableList',
            data: {
                params: {
                    _page: this.params.page
                },
                // isShowLoading: false
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    dataSource3: res.data,
                    selectedRowKeys: [],
                    selectedRows: null,
                    pagination: Utils.pagination(res, (current) => {
                        // to-do
                        _this.params._page = current
                        this.request()
                    })
                })
            }
        })
    }

    onRowClick = (record, index) => {
        // record 是当前行的记录
        // index 是当前行在表格中的行
        const selectKey = [index]
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
        Modal.info({
            title: '条目信息',
            content: `用户名id: ${record.id}; 用户名: ${record.userName}; 兵器: ${record.status}`
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

        const {selectedRowKeys} = this.state
        const rowRadioSelection = {
            type: 'radio',
            selectedRowKeys
        }

        return (
            <div>
                <Card title="表格-基本" className='card-wrap'>
                    <Table columns={columns}
                    dataSource={this.state.dataSource1} 
                    bordered
                    pagination={false}
                    />
                </Card>
                <Card title="表格-单选" className='card-wrap'>
                    <Table columns={columns}
                    rowSelection={rowRadioSelection}
                    onRow={(record, index) => {
                        return {
                            onClick: () => {
                                this.onRowClick(record, index)
                            }
                        }
                    }}
                    dataSource={this.state.dataSource3} 
                    bordered
                    pagination={false}
                    />
                </Card>
            </div>
        )
    }
}
