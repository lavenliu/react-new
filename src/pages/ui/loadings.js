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