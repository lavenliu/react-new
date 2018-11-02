import React from 'react';


export default class Info extends React.Component {
    render() {
        return (
            <div>
                动态路由功能测试。
                动态路由的值是：{this.props.match.params.value}
            </div>
        )
    }
}