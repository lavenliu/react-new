import React from 'react'
import { Menu } from 'antd'

import MenuConfig from './../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu


export default class NavLeft extends React.Component {

    // 在 componentWillMount 期间加载 menuConfig
    componentWillMount() {
        // console.log('component will mount')
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
             if (item.children) {
                 return (
                     <SubMenu title={item.title} key={ item.key }>
                         { this.renderMenu(item.children) }
                     </SubMenu>
                 )
             }
             return <Menu.Item title={item.title} key={item.key}>{ item.title }</Menu.Item>
        })
    }

    render() {
        // const style = {
        //     backgroundColor: 'red'
        // }
        return (
            <div>
                {/* 这里是导航部分，或者是Logo部分；点击的时候会跳转到首页 */}
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="欢迎"/>
                    <h1>My OPS</h1>
                </div>

                {/* 下面是菜单渲染 */}
                <Menu theme="dark">
                    {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu> */}
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}