import React from 'react';
import { Card, Button } from 'antd';

import './ui.less'


export default class Buttons extends React.Component {
    render() {
        return (
            <div>
                <Card title='基础按钮'>
                    <Button type='primary'>LavenLiu</Button>
                    <Button>LavenLiu</Button>
                    <Button type='dashed'>LavenLiu</Button>
                    <Button type='danger'>LavenLiu</Button>
                    <Button disabled>LavenLiu</Button>
                </Card>
            </div>
        )
    }
}