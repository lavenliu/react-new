## AntD 组件使用

1. `Button` 组件介绍及使用
2. `Modal` 组件介绍及使用
3. `Loading` 组件介绍及使用
4. `Notice` 组件介绍及使用
5. `Message` 组件介绍及使用
6. `Tab` 组件介绍及使用
7. `Gallery` 组件介绍及使用
8. `Carousel` 组件介绍及使用

### Button 基本使用

代码示例：

```js
import React from 'react';
import { Card, Button, Icon, Radio } from 'antd';

import './ui.less'


export default class Buttons extends React.Component {

    state = {
        loading: true,
        size: 'default'
    }

    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    }

    handleChange = (event) => {
        this.setState({
            size: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Card title='基础按钮' className='card-wrap'>
                    <Button type='primary'>LavenLiu</Button>
                    <Button>LavenLiu</Button>
                    <Button type='dashed'>LavenLiu</Button>
                    <Button type='danger'>LavenLiu</Button>
                    <Button disabled>LavenLiu</Button>
                </Card>
                <Card title='图形按钮' className='card-wrap'>
                    <Button icon='plus' type='primary'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='primary' icon='search'>搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                </Card>
                <Card title='加载按钮' className='card-wrap'>
                    <Button loading={this.state.loading} type='primary'>确定</Button>
                    <Button type='primary' loading={this.state.loading} shape='circle'></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button loading={this.state.loading} shape='circle'></Button>
                    <Button type='primary' onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title='按钮组'>
                    <Button.Group>
                        <Button type='primary'>
                            <Icon type='left' />前进
                        </Button>
                        <Button type='primary'>
                            <Icon type='right' />后退
                        </Button>
                    </Button.Group>
                </Card>
                <Card title='按钮尺寸' className='card-wrap'>
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    <Button type='primary' size={this.state.size}>LavenLiu</Button>
                    <Button size={this.state.size}>LavenLiu</Button>
                    <Button type='dashed' size={this.state.size}>LavenLiu</Button>
                    <Button type='danger' size={this.state.size}>LavenLiu</Button>
                </Card>
            </div>
        )
    }
}
```

### Modal 基本使用

代码示例：

```js
import React from 'react';
import { Card, Button, Modal } from 'antd';

import './ui.less'


export default class Modals extends React.Component {

    state = {
        // visible: false
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    handleOpen = (who) => {
        this.setState({
            [who]: true
        })
    }

    handleOpen1 = (who) => {
        this.setState({
            [who]: false
        })
    }

    handleClose = (who) => {
        this.setState({
            [who]: false
        })
    }

    handleOk = (event) => {
        console.log(event)
        this.setState({
            visible: false
        })
    }

    handleCancel = (event) => {
        console.log(event)
        this.setState({
            visible: false
        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title: 'Are you sure?',
            content: 'Are you OK?',
            onOk() {
                console.log('Ok')
            },
            onCancel() {
                console.log('Cancel')
            }
        })
    }

    render() {
        return (
            <div>
                <Card title='基础模态框' className='card-wrap'>
                    {/* <Button type='primary' onClick={this.showModal}>Open Modal</Button> */}
                    <Button type='primary' onClick={() => {this.handleOpen('showModal1')}}>
                        Open Modal
                    </Button>
                    <Button type='primary' onClick={() => {this.handleOpen('showModal2')}}>
                        自定义页脚
                    </Button>
                    <Button type='primary' onClick={() => {this.handleOpen('showModal3')}}>
                        顶部20px弹框
                    </Button>
                    <Button type='primary' onClick={() => {this.handleOpen('showModal4')}}>
                        水平居中弹框
                    </Button>
                </Card>
                <Card title='信息确认框' className='card-wrap'>
                    {/* <Button type='primary' onClick={this.showModal}>Open Modal</Button> */}
                    <Button type='primary' onClick={() => {this.handleConfirm('confirm')}}>
                        Confirm
                    </Button>
                    <Button type='primary' onClick={() => {this.handleConfirm('success')}}>
                        Success
                    </Button>
                    <Button type='default' onClick={() => {this.handleConfirm('info')}}>
                        Info
                    </Button>
                    <Button type='danger' onClick={() => {this.handleConfirm('warning')}}>
                        Warning
                    </Button>
                </Card>
                <Modal
                    title='AntD模态框'
                    visible={this.state.showModal1}
                    // onCancel={this.handleCancel}
                    // onOk={this.handleOk}
                    onCancel={() => {this.handleClose('showModal1')}}
                    onOk={() => {this.handleOpen1('showModal1')}}
                >
                    <p>Welcome to my website.</p>
                </Modal>
                <Modal
                    title='自定义页脚'
                    visible={this.state.showModal2}
                    okText='好的'
                    cancelText='算了'
                    onCancel={() => {this.handleClose('showModal2')}}
                    onOk={() => {this.handleOpen1('showModal2')}}
                >
                    <p>Welcome to my website.</p>
                </Modal>
                <Modal
                    title='顶部20px弹框'
                    style={{top: '20px'}}
                    visible={this.state.showModal3}
                    onCancel={() => {this.handleClose('showModal3')}}
                    onOk={() => {this.handleOpen1('showModal3')}}
                >
                    <p>Welcome to my website.</p>
                </Modal>
                <Modal
                    title='水平居中'
                    wrapClassName='vertical-center-modal'
                    visible={this.state.showModal4}
                    onCancel={() => {this.handleClose('showModal4')}}
                    onOk={() => {this.handleOpen1('showModal4')}}
                >
                    <p>Welcome to my website.</p>
                </Modal>
            </div>
        )
    }
}
```

### Spin 基本使用

局部加载时，可以使用该组件。

```js
import React from 'react';
import { Card, Icon, Spin, Alert } from 'antd';

import './ui.less'


export default class Loadings extends React.Component {

    render() {
        const icon = <Icon type='plus' style={{fontSize: 24}} />
        const iconLoading = <Icon type='loading' style={{fontSize: 24}} />

        return (
            <div>
                <Card title='Spin 组件用法' className='card-wrap'>
                    <Spin size='small' />
                    <Spin style={{margin: '0 10px'}} />
                    <Spin size='large' />
                    <Spin indicator={icon} style={{marginLeft: 10}} spinning={true} />
                </Card>
                <Card title='内容遮罩' className='card-wrap'>
                    <Alert
                        message='LavenLiu'
                        description='Welcome to my website'
                        type='info'
                    />
                    <Alert
                        message='LavenLiu'
                        description='Welcome to my website'
                        type='warning'
                    />
                    <Spin>
                        <Alert
                            message='LavenLiu'
                            description='Welcome to my website'
                            type='success'
                        />
                    </Spin>
                    <Spin tip='加载中...'>
                        <Alert
                            message='LavenLiu'
                            description='Welcome to my website'
                            type='success'
                        />
                    </Spin>
                    <Spin indicator={iconLoading}>
                        <Alert
                            message='LavenLiu'
                            description='Welcome to my website'
                            type='success'
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}
```

### Notification 基本使用

代码示例：

```js
import React from 'react';
import { Card, Button, notification } from 'antd';

import './ui.less'


export default class Notice extends React.Component {

    openNotification = (type, where='topRight') => {
        notification[type]({
            message: '我赚钱啦，赚钱啦',
            description: '我左手拿着诺基亚，右手拿着摩托罗拉；我移动联通小灵通，一天一个电话号码呀。',
            placement: where
        })
    }

    render() {
        return (
            <div>
                <Card title='通知提示信息' className='card-wrap'>
                    <Button type='primary' onClick={() => this.openNotification('success')}>Success</Button>
                    <Button type='default' onClick={() => this.openNotification('info')}>Info</Button>
                    <Button type='warning' onClick={() => this.openNotification('warning')}>Warning</Button>
                    <Button type='danger' onClick={() => this.openNotification('error')}>Error</Button>
                </Card>
                <Card title='不同方向的提示' className='card-wrap'>
                    <Button type='primary' onClick={() => this.openNotification('success', 'topLeft')}>左上</Button>
                    <Button type='default' onClick={() => this.openNotification('info', 'bottomLeft')}>左下</Button>
                    <Button type='warning' onClick={() => this.openNotification('warning', 'bottomRight')}>右下</Button>
                    <Button type='danger' onClick={() => this.openNotification('error', 'topRight')}>右上（默认）</Button>
                </Card>
            </div>
        )
    }
}
```

### Message 基本使用

### Tab 基本使用

### Gallery 基本使用

代码片段：

```js
import React from 'react';
import { Card, Row, Col, Modal } from 'antd';

import './ui.less'


export default class Gallery extends React.Component {

    state = {
        visible: false
    }

    openGallery = (imgSrc) => {
        this.setState({
            visible: true,
            currentImg: '/gallery/' + imgSrc
        })
    }

    render() {
        const images = [
            ['16.jpeg', '2.png', '3.png', '4.png', '5.png', '16.jpeg'],
            ['6.png', '7.png', '8.png', '9.png', '10.png', '17.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png', '21.jpeg'],
            ['20.jpeg', '17.jpeg', '21.jpeg', '25.jpeg', '18.jpeg', '19.jpeg']
        ]
        const imgList = images.map((list) => list.map((item, key) =>
            <Card
                style={{marginBottom:5}}
                cover={<img src={'/gallery/'+item} />}
                onClick={() => this.openGallery(item)}
                key={key}>
                <Card.Meta title='Admin site' description='beauty image' />
            </Card>
        ))

        return (
            <div className='card-wrap'>
                <Row gutter={5}>
                    <Col md={6}>
                        {imgList[0]}
                    </Col>
                    <Col md={6}>
                        {imgList[1]}
                    </Col>
                    <Col md={6}>
                        {imgList[2]}
                    </Col>
                    <Col md={6}>
                        {imgList[3]}
                    </Col>
                    <Col md={6}>
                        {imgList[4]}
                    </Col>
                    <Col md={6}>
                        {imgList[5]}
                    </Col>
                </Row>
                <Modal
                    title='维多利亚的秘密'
                    visible={this.state.visible}
                    footer={null}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}>
                    <img src={this.state.currentImg} alt="" style={{width: '100%'}} />
                </Modal>
            </div>
        )
    }
}
```

### Carousel 基本使用

代码片段：

```js

```

### Form 基本使用

### Table 基本使用

#### 基本表格

代码片段：

```js
import React from 'react';
import { Card, Table } from 'antd';


export default class BasicTable extends React.Component {

    state = {}

    componentDidMount() {
        const data = [
            {
                id: '0',
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
                userName: 'LavenLiu',
                sex: '1',
                status: '1',
                interests: '1',
                birthday: '2000-01-01',
                address: '上海市陆家嘴8号',
                morning: '09:00'
            },
            {
                id: '2',
                userName: 'LavenLiu',
                sex: '1',
                status: '1',
                interests: '1',
                birthday: '2000-01-01',
                address: '上海市陆家嘴8号',
                morning: '09:00'
            },
            {
                id: '3',
                userName: 'LavenLiu',
                sex: '1',
                status: '1',
                interests: '1',
                birthday: '2000-01-01',
                address: '上海市陆家嘴8号',
                morning: '09:00'
            }
        ]
        this.setState({
            dataSource: data
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },
            {
                title: '爱好',
                dataIndex: 'interests'
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '起床',
                dataIndex: 'morning'
            }
        ]
        return (
            <div>
                <Card title="基础表格" className='card-wrap'>
                    <Table columns={columns}
                    dataSource={this.state.dataSource} 
                    bordered
                    pagination={false}
                    />
                </Card>
            </div>
        )
    }
}
```

#### 动态表格

1. Mock 数据
2. Axios 封装
3. Loading 处理，错误拦截

