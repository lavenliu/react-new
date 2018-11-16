import React from 'react'
import { Card, Button, Table } from 'antd'

import BaseForm from '../../components/BaseForm'
import axios from '../../axios'
// import Utils from '../../utils/utils'
// import ETable from '../../components/ETable'

// const FormItem = Form.Item;
// const Option = Select.Option;


export default class User extends React.Component {

    params = {
        page: 1
    }

    state = {}

    requestList = () => {
        axios.requestList(this, '/user/list', this.params)
    }

    componentDidMount() {
        this.requestList()
    }

    handleFilter = (params) => {
        this.params = params
        this.requestList()
    }

    formList = [
        {
            type: 'INPUT',
            label: '用户名',
            field: 'user_name',
            placeholder: '请输入用户名称',
            width: 80
        },
        {
            type: 'INPUT',
            label: '手机号',
            field: 'user_mobile',
            placeholder: '请输入手机号',
            width: 80
        },
        {
            type: 'DATEPICKER',
            label: '请选择入职日期',
            field: 'user_date',
            placeholder: '请输入日期'
        }
    ]

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

        return (
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                </Card>
                <Card>
                    <Button type='primary'>订单详情</Button>
                    <Button type='primary' style={{marginLeft: 10}}>结束订单</Button>
                </Card>
                <div>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
            </div>
        )
    }
}