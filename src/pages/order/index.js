import React from 'react'
import { Card, Button, Table } from 'antd'

import BaseForm from '../../components/BaseForm'
import axios from '../../axios'
// import Utils from '../../utils/utils'

// const FormItem = Form.Item;
// const Option = Select.Option;


export default class Order extends React.Component {
    
    state = {}

    params = {
        page: 1
    }

    formList = [
        {
            type: 'SELECT',
            label: '城市',
            field: 'city',
            placeholder: '全部',
            initialValue: '1',
            width: 80,
            list: [
                {id: '0', name: '全部'}, 
                {id: '1', name: '北京'},
                {id: '2', name: '上海'},
                {id: '3', name: '杭州'}
            ]
        },
        {
            type: '时间查询'
        },
        {
            type: 'SELECT',
            label: '订单状态',
            field: 'order_status',
            placeholder: '全部',
            initialValue: '1',
            width: 80,
            list: [
                {id: '0', name: '全部'}, 
                {id: '1', name: '运行中'},
                {id: '2', name: '结束行程'}
            ]
        }
    ]

    componentDidMount() {
        this.requestList()
    }

    handleFilter = (params) => {
        this.params = params
        this.requestList()
    }

    requestList = () => {
        let _this = this
        axios.requestList(this, '/order/list', this.params)
    }

    handleConfirm = () => {
        // const item = this.state.selectedItem
        console.log('handle confirm')
    }

    render() {
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn',
                key: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'car_sn',
                key: 'car_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name',
                key: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                key: 'distance',
                render(distance) {
                    return distance/1000 + 'Km'
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time',
                key: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
                key: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
                key: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee',
                key: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay',
                key: 'user_pay'
            }
        ]
        
        const selectedRowKeys = this.state.selectedRowKeys
        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys};`, 'selectedRows: ', selectedRows)
            }
        }

        return (
            <div>
                <Card>
                    {/* <FilterForm /> */}
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                </Card>
                <Card>
                    <Button type='primary' onClick={this.jumpOrderDetail}>订单详情</Button>
                    <Button type='primary' style={{marginLeft: 10}} onClick={this.handleConfirm}>结束订单</Button>
                </Card>
                <div>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                    />
                </div>
            </div>
        )
    }
}
