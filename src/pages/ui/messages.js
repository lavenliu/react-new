import React from 'react';
import { Card, Button, message } from 'antd';

import './ui.less'


export default class Messages extends React.Component {

    showMessage = (msg) => {
        message[msg]('恭喜你，你中招了。')
    }

    render() {
        return (
            <div>
                <Card title='全局提示信息' className='card-wrap'>
                    <Button type='primary' onClick={() => {this.showMessage('success')}}>
                        Success
                    </Button>
                    <Button type='default' onClick={() => {this.showMessage('info')}}>
                        Info
                    </Button>
                    <Button type='warning' onClick={() => {this.showMessage('warning')}}>
                        Warning
                    </Button>
                    <Button type='danger' onClick={() => {this.showMessage('error')}}>
                        Error
                    </Button>
                    <Button type='primary' onClick={() => {this.showMessage('loading')}}>
                        Loading
                    </Button>
                </Card>
            </div>
        )
    }
}