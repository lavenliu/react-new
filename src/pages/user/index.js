import React from 'react'
import { Card, Button, Input, Modal, Form, Select, Radio, DatePicker } from 'antd'
import Moment from 'moment'

import BaseForm from '../../components/BaseForm'
import axios from '../../axios'
import Utils from '../../utils/utils'
import ETable from '../../components/ETable'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;


export default class User extends React.Component {

    params = {
        page: 1
    }

    state = {
        dataSource: []
    }

    requestList = () => {
        axios.ajax({
            url: '/users',
            data: {
                params: {
                    page: this.params.page
                }
        }
        }).then((res) => {
            console.log(res)
            let _this = this
            this.setState({
                dataSource: res.data.item_list.map((item, index) => {
                    item.key = index
                    return item
                }),
                pagination: Utils.pagination(res, (current) => {
                    _this.params.page = current
                    _this.requestList()
                })
            })
        })
    }

    componentDidMount() {
        this.requestList()
    }

    handleFilter = (params) => {
        this.params = params
        this.requestList()
    }

    handleSubmit = () => {
        let type = this.state.type;
        let data = this.userForm.props.form.getFieldsValue();
        axios.ajax({
            url: type === 'create' ? '/userAdd' : '/userEdit',
            data: {
                params: {
                    ...data
                }
            }
        }).then((res) => {
            if (res.code === 0) {
                this.setState({
                    isVisible: false
                })
                this.requestList();
            }
        })
    }

    // 操作员工
    handleOperator = (type) => {
        let item = this.state.selectedItem;
        if (type === 'create') {
            this.setState({
                title: '创建员工',
                isVisible: true,
                type
            })
        } else if (type === "edit" || type === 'detail') {
            if (!item) {
                Modal.info({
                    title: '信息',
                    content: '请选择一个用户'
                })
                return;
            }
            this.setState({
                title:type === 'edit' ? '编辑用户' : '查看详情',
                isVisible: true,
                userInfo: item,
                type
            })
        } else if (type === "delete") {
            if (!item) {
                Modal.info({
                    title: '信息',
                    content: '请选择一个用户'
                })
                return;
            }
            Modal.confirm({
                title: '确定要删除此用户吗？',
                onOk: () => {
                    axios.ajax({
                        url: '/userDelete',
                        data: {
                            params: {
                                id: item.id
                            }
                        }
                    }).then((res) => {
                        if (res.code === 0) {
                            this.setState({
                                isVisible: false
                            })
                            this.requestList();
                        }
                    })
                }
            })
        }
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
                dataIndex: 'username',
                key: 'username'
            },
            {
                title: '邮箱',
                width: 80,
                dataIndex: 'email',
                key: 'email'
            }
        ]

        return (
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                </Card>
                <Card>
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input type="password" placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登 录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card>
                    <Button 
                        type='primary' 
                        icon='user-add' 
                        onClick={() => this.handleOperator('create')}
                    >
                        添加员工
                    </Button>
                    <Button 
                        type='primary' 
                        icon='idcard' 
                        onClick={() => this.handleOperator('detail')} 
                        style={{marginLeft: 10}}
                    >
                        员工详情
                    </Button>
                    <Button 
                        type='danger' 
                        icon='edit' 
                        onClick={() => this.handleOperator('edit')} 
                        style={{marginLeft: 10}}
                    >
                        编辑员工
                    </Button>
                    <Button 
                        type='danger' 
                        icon='user-delete' 
                        onClick={() => this.handleOperator('delete')} 
                        style={{marginLeft: 10}}
                    >
                        删除员工
                    </Button>
                </Card>
                <div>
                    {/* <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    /> */}
                    <ETable
                        columns={columns}
                        updateSelectedItem={Utils.updateSelectedItem.bind(this)}
                        selectedRowKeys={this.state.selectedRowKeys}
                        dataSource={this.state.dataSource}
                        pagination={this.state.pagination}
                    />

                </div>
                <Modal
                    title={this.state.title}
                    visible={this.state.isVisible}
                    onOk={this.handleSubmit}
                    width={800}
                    onCancel={() => {
                        this.userForm.props.form.resetFields();
                        this.setState({
                            isVisible:false,
                            userInfo:''
                        })
                    }}
                >
                    <UserForm userInfo={this.state.userInfo} type={this.state.type} wrappedComponentRef={(inst) => this.userForm = inst }/>
                </Modal>
            </div>
        )
    }
}


class UserForm extends React.Component{

    getState = (state) => {
        return {
            '1':'咸鱼一条',
            '2':'风华浪子',
            '3':'北大才子一枚',
            '4':'百度FE',
            '5':'创业者'
        }[state]
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 16}
        }
        const userInfo = this.props.userInfo || {}
        const type = this.props.type;
        return (
            <Form layout="horizontal">
                <FormItem label="姓名" {...formItemLayout}>
                    {
                        userInfo && type === 'detail' ? userInfo.username :
                        getFieldDecorator('user_name', {
                            initialValue: userInfo.username
                        })(
                            <Input type="text" placeholder="请输入姓名"/>
                        )
                    }
                </FormItem>
                <FormItem label="性别" {...formItemLayout}>
                    {
                        userInfo && type === 'detail' ? userInfo.sex === 1 ? '男' : '女' :
                        getFieldDecorator('sex', {
                            initialValue: userInfo.sex
                        })(
                        <RadioGroup>
                            <Radio value={1}>男</Radio>
                            <Radio value={2}>女</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem label="状态" {...formItemLayout}>
                    {
                        userInfo && type === 'detail' ? this.getState(userInfo.state) :
                        getFieldDecorator('state', {
                            initialValue: userInfo.state
                        })(
                        <Select>
                            <Option value={1}>咸鱼一条</Option>
                            <Option value={2}>风华浪子</Option>
                            <Option value={3}>北大才子一枚</Option>
                            <Option value={4}>百度FE</Option>
                            <Option value={5}>创业者</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="生日" {...formItemLayout}>
                    {
                        userInfo && type === 'detail' ? userInfo.birthday :
                        getFieldDecorator('birthday', {
                            initialValue: Moment(userInfo.birthday)
                        })(
                        <DatePicker />
                    )}
                </FormItem>
                <FormItem label="联系地址" {...formItemLayout}>
                    {
                        userInfo && type === 'detail' ? userInfo.address :
                        getFieldDecorator('address', {
                            initialValue: userInfo.address
                        })(
                        <Input.TextArea rows={3} placeholder="请输入联系地址"/>
                    )}
                </FormItem>
            </Form>
        );
    }
}

UserForm = Form.create({})(UserForm);
