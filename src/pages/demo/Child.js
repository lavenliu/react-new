import React, {Component} from 'react';


export default class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        console.log('component will mount')
    }

    componentDidMount() {
        console.log('component did mount')
    }

    componentWillReceiveProps(newProps) {
        console.log('component will receive props ' + newProps.name)
    }

    shouldComponentUpdate() {
        // this function should return ture or false, default is true
        console.log('should component update')
        return true
    }

    componentWillUpdate() {
        console.log('component will update')
    }

    componentDidUpdate() {
        console.log('component did update')
    }

    render() {
        return (
            <div>
                <p>这里是子组件，测试子组件生命周期</p>
                <p>父组件传递过来的属性：{this.props.name}</p>
            </div>
        )
    }
}