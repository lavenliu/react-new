import React from 'react'
import { Card, Button, Table, Modal } from 'antd'

import BaseForm from '../../components/BaseForm'
import axios from '../../axios'
// import Utils from '../../utils/utils'

// const FormItem = Form.Item;
// const Option = Select.Option;


export default class OrderDetail extends React.Component {

    render() {

        return (
            <div>
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
