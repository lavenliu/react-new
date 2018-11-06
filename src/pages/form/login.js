import React from 'react';
import { Card, Form, Icon, Input, Button, Checkbox, message } from 'antd';

const FormItem = Form.Item


class MyForm extends React.Component {

    handleSubmit = () => {
        const userInfo = this.props.form.getFieldsValue()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`恭喜 ${userInfo.userName}，通过了表单提交。密码为：${userInfo.password}，打死都不能告诉别人。`)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <div>
                <Card title="行内登录表单" className='card-wrap'>
                    <Form layout='inline'>
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名' />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='请输入密码' />
                        </FormItem>
                        <FormItem>
                            <Button type='primary'>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title='水平登录表单'>
                    <Form style={{width:300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: '用户名不能为空'
                                    },
                                    {
                                        min: 5,
                                        message: '特么短了'
                                    },
                                    {
                                        max: 15,
                                        message: '特么长了'
                                    },
                                    {
                                        pattern: /^\w+$/g,
                                        message: '用户名只能为字母或数字'
                                    }
                                ]
                                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名' />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: '不输密码你就能登录？'
                                    }]
                                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='请输入密码' />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(<Checkbox>记住我呗</Checkbox>)
                            }
                            <a style={{float: 'right'}} href="/admin/home">Forgot password</a>
                        </FormItem>
                        <FormItem>
                            <Button type='primary' onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(MyForm)