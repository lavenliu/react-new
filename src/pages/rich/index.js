import React from 'react'
import { Card, Button } from 'antd'

import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import { Editor } from 'react-draft-wysiwyg'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


export default class RichText extends React.Component {

    render() {
        return (
            <div>
                <Card title='富文本编辑器'>
                    <Editor>
                    </Editor>
                </Card>
                <Card style={{marginTop: 10}}>
                    <Button type='primary'>发布文章</Button>
                    <Button type='primary'style={{marginLeft: 10}}>预览文章</Button>
                </Card>
            </div>
        )
    }
}