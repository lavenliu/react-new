import React, { Component } from 'react';
import Child from './Child';
import {Button, Input} from 'antd'

// import 'antd/dist/antd.css'   // 使用了按需加载后，就不需要显式地使用这一行了
// import './index.css'
import './index.less'


export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className="content">
                <p>生命周期演示</p>
                <Input></Input>
                <Button onClick={this.handleAdd}>AntD点击一下</Button>
                <button onClick={this.handleAdd}>点击加1</button>
                <p>{this.state.count}</p>
                <Child name={this.state.count} />
            </div>
        )
    }
}