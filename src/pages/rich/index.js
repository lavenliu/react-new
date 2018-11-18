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
                <Card title='柱形图表二' style={{marginTop: 10}}>
                </Card>
            </div>
        )
    }
}