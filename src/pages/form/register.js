import React from 'react';
import { Card, Form, Icon, Input, Button, Checkbox, 
    Radio, Select, Switch, DatePicker, TimePicker,
    Upload, InputNumber, message } from 'antd';
import moment from 'moment'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea


class MyRegister extends React.Component {

    state = {}

    getBase64 = (img, callback) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => callback(reader.result))
        reader.readAsDataURL(img)
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({
                loading: true
            })
            return
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg: imageUrl,
                loading: false
            }))
        }
    }

    handleSubmit = () => {
        const userInfo = this.props.form.getFieldsValue()
        console.log(JSON.stringify(userInfo))
        message.success(`恭喜 ${userInfo.userName}, 通过本次学习。你的密码为：${userInfo.password}`)
        // console.log('submit')
    }
    // userInfo = {
    //     "userName": "lavenliu",
    //     "password": "123456",
    //     "sex": "1",
    //     "age": 23,
    //     "school": "5",
    //     "interest": ["5", "6"],
    //     "isMarried": true,
    //     "birthday": "1989-12-31T16:00:00.000Z",
    //     "address": "上海市浦东新区陆家嘴8号",
    //     "morning": "2018-11-04T14:20:25.337Z",
    //     "avatar": {
    //         "file": {
    //             "uid": "rc-upload-1541341164324-2",
    //             "lastModified": 1482030361000,
    //             "lastModifiedDate": "2016-12-18T03:06:01.000Z",
    //             "name": "gccegg-65.png",
    //             "size": 10953,
    //             "type": "image/png",
    //             "percent": 100,
    //             "originFileObj": {
    //                 "uid": "rc-upload-1541341164324-2"
    //             },
    //             "status": "done",
    //             "response": {
    //                 "id": 101
    //             }
    //         },
    //         "fileList": [
    //             {
    //                 "uid": "rc-upload-1541341164324-2",
    //                 "lastModified": 1482030361000,
    //                 "lastModifiedDate": "2016-12-18T03:06:01.000Z",
    //                 "name": "gccegg-65.png",
    //                 "size": 10953,
    //                 "type": "image/png",
    //                 "percent": 100,
    //                 "originFileObj": {
    //                     "uid": "rc-upload-1541341164324-2"
    //                 },
    //                 "status": "done",
    //                 "response": {
    //                     "id": 101
    //                 }
    //             }
    //         ]
    //     },
    //     "protocol": true
    // }

    render() {
        // 需要导入 getFieldDecorator，对表单的某一项设置一些选项
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 14,
                    offset: 4
                }
            }
        }

        return (
            <div>
                <Card title="注册表单" className='card-wrap'>
                    <Form layout='horizontal'>
                        <FormItem label='用户名' {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [{
                                        required: true
                                    }]
                                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名' />)
                            }
                        </FormItem>
                        <FormItem label='密码' {...formItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [{
                                        required: true
                                    }]
                                })(<Input type='password' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入密码' />)
                            }
                        </FormItem>
                        <FormItem label='性别' {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                })(
                                    <RadioGroup>
                                        <Radio value='1'>男</Radio>
                                        <Radio value='0'>女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label='年龄' {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: '18',
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label='学历' {...formItemLayout}>
                            {
                                getFieldDecorator('school', {
                                    initialValue: '5',
                                })(
                                    <Select>
                                        <Option value='1'>小学</Option>
                                        <Option value='2'>初中</Option>
                                        <Option value='3'>高中</Option>
                                        <Option value='4'>专科</Option>
                                        <Option value='5'>本科</Option>
                                        <Option value='6'>硕士</Option>
                                        <Option value='7'>博士</Option>
                                        <Option value='8'>烈士</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='爱好' {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    // initialValue: [],  // 默认啥都不选择
                                    initialValue: ['5', '6'],  // 给出多个默认值
                                })(
                                    <Select mode='multiple'>
                                        <Option value='1'>跑步</Option>
                                        <Option value='2'>游泳</Option>
                                        <Option value='3'>田径</Option>
                                        <Option value='4'>篮球</Option>
                                        <Option value='5'>NBA</Option>
                                        <Option value='6'>足球</Option>
                                        <Option value='7'>棒球</Option>
                                        <Option value='8'>爬山</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='婚否' {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: false,
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label='生日' {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('1990-01-01')
                                })(
                                    <DatePicker showTime format='YYYY-MM-DD HH:mm:ss' />
                                )
                            }
                        </FormItem>
                        <FormItem label='住址' {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '上海市浦东新区陆家嘴8号'
                                })(
                                    <TextArea autosize={{minRows: 1, maxRows: 3}} />
                                )
                            }
                        </FormItem>
                        <FormItem label='早操' {...formItemLayout}>
                            {
                                getFieldDecorator('morning')(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label='头像' {...formItemLayout}>
                            {
                                getFieldDecorator('avatar')(
                                    <Upload
                                        listType='picture-card'
                                        showUploadList={false}
                                        action='//jsonplaceholder.typicode.com/posts/'  // 后续替换成实际的接口地址
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg ? <img src={this.state.userImg} alt='img' /> : <Icon type='plus' />}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('protocol')(
                                    <Checkbox>同意用户协议吗？<a href='/admin/home'>用户协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type='primary' onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(MyRegister)
