import React from 'react'
import { Card } from 'antd'
// 完整导入
// import echarts from 'echarts'
// 导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'


export default class Bar extends React.Component {

    // componentDidMount() {

    // }
    getOption = () => {
        const option = {
            title: {
                text: '用户贷款信息'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'bar',
                    data: [1000, 2000, 1500, 800, 300, 1200, 1800]
                }
            ]
        }
        return option
    }

    getOption2 = () => {
        const option = {
            title: {
                text: '国际金融银行'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['韩国银行', '日本银行', '世界银行']
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日',]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '韩国银行',
                    type: 'bar',
                    data: [900, 2000, 1500, 800, 300, 500, 100]
                },
                {
                    name: '日本银行',
                    type: 'bar',
                    data: [1000, 2320, 500, 3800, 900, 1200, 1800]
                },
                {
                    name: '世界银行',
                    type: 'bar',
                    data: [800, 1200, 1000, 1800, 700, 300, 900]
                }
            ]
        }
        return option
    }

    render() {
        return (
            <div>
                <Card title='柱形图表一'>
                    <ReactEcharts option={this.getOption()} theme='light' style={{height: 500}}></ReactEcharts>
                </Card>
                <Card title='柱形图表二' style={{marginTop: 10}}>
                    <ReactEcharts option={this.getOption2()} theme='light' style={{height: 500}}></ReactEcharts>
                </Card>
            </div>
        )
    }
}