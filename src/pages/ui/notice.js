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