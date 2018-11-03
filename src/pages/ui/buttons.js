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
                <Card title='按钮组' style={{marginBottom: '10px'}}>
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