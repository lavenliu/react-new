# React Demo

一个 `React` 的 `Demo` 项目，纯粹是一个玩具。

玩的过程中，使用的环境如下：

1. macOS 10.13.6
2. Node.js 8.12.0
3. npm 6.4.1
4. yarn 1.10.1
5. create-react-app 2.0.3
6. webpack 4.6.x

配置淘宝 `npm` 镜像源：

```sh
npm config set registry https://registry.npm.taobao.org
# 验证是否切换成功
npm config get registry
```

# React 基础

## JSX

例子1：

```js
import React from 'react';
import ReactDOM from 'react-dom';

// 基础 JSX 语法
let style = {
	color: 'r' + 'ed'
};

let jsx = <div className="jsx" style={style}>jsx...</div>;

ReactDOM.render(
	jsx,
	document.getElementById('app')
);
```

例子2：

```js
import React from 'react';
import ReactDOM from 'react-dom';

// 数据逻辑处理
const name = "LavenLiu";
const myArray = ["LavenLiu", "TaoQi", "James"];
let flag = false;
let jsx = (
	<div>
		{/* 变量的使用 */}
		<p>My name is: {name}</p>
		{/* 条件判断 */}
	    { flag ? <p>My name is: {name}</p> : <p>I am TaoQi</p> }
	    {/* 数组循环 */}
	    {
		    myArray.map((name, index) => <p key={index}>Hello, I am {name}</p>)
	    }
	</div>
);

ReactDOM.render(
	jsx,
	document.getElementById('app')
);
```

# 项目工程搭建

## 基础插件安装

1. 安装 `react-router` 、`axios`
2. 安装 `antd`
3. 暴露 `webpack` 配置文件
4. 安装 `less-loader`
5. 修改 `less-loader`


`React` 相关的插件安装：

```sh
yarn add react-router-dom axios less less-loader
```

安装 `AntD`:

```sh
yarn add antd
```

`Less` 文件加载配置

```js
编辑webpack.config.dev.js文件，增加如下内容即可：

const lessRegex = /\.(lcss|less)$/;
const lessModuleRegex = /\.module\.(lcss|less)$/;

{
	test: lessRegex,
	exclude: lessModuleRegex,
	use: getStyleLoaders({ importLoaders: 2 }, 'less-loader'),
	},
	// Adds support for CSS Modules, but using SASS
	// using the extension .module.scss or .module.sass
	{
	test: lessModuleRegex,
	use: getStyleLoaders(
		{
		importLoaders: 2,
		modules: true,
		getLocalIdent: getCSSModuleLocalIdent,
		},
		'less-loader'
	),
},
```

一个简单的AntD按钮例子：
```js
// LifeCyle.js
import React, { Component } from 'react';
import Child from './Child';
import {Button} from 'antd'

import 'antd/dist/antd.css'
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
                <Button onClick={this.handleAdd}>AntD点击一下</Button>
                <button onClick={this.handleAdd}>点击加1</button>
                <p>{this.state.count}</p>
                <Child name={this.state.count} />
            </div>
        )
    }
}

// Child.js
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

// index.less
.content {
    padding: 20px;
}
```

安装 `Babel` 插件，可以实现按需加载：

```sh
yarn add babel-plugin-import --dev
```

然后修改 `webpack.config.dev.js` 文件，大概在235行：

```js
,
["import", {
	"libraryName": "antd",
	"libraryDirectory": "es",
	"style": true // `style: true` 会加载 less 文件
}],
```

定制 `AntD` 的样式主题：

```json
不定制也行
```

## 项目主页结构开发

### 主页结构定义

1. 页面结构定义
2. 目录结构定义
3. 栅格系统使用
4. calc计算方法使用

```sh
touch src/admin.js  # 主页
mkdir src/components  # 组件存放的目录
mkdir src/components/Header  # 头部组件
touch src/components/Header/index.js
touch src/components/Header/index.css

mkdir src/components/Footer  # 底部组件
touch src/components/Footer/index.js
touch src/components/Footer/index.css

mkdir src/components/NavLeft  # 左侧边栏组件
touch src/components/NavLeft/index.js
touch src/components/NavLeft/index.css

mkdir src/components/NavLeft  # 左侧边栏组件
touch src/components/NavLeft/index.js
touch src/components/NavLeft/index.css
```

先认识一下 `AntD` 的栅格（24个栅格）系统，与 `BootStrap` 的栅格（12个栅格）系统很像。所有的 `Col` 必须在 `Row` 内。

开始编写 `admin.js` 文件：

```js
// 基本的布局为
import React from 'react'
import { Row, Col } from 'antd';

import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'

import './style/common.less'


export default class Admin extends React.Component {

    render() {
        return (
            <Row className="container">
                <Col span="3" className="nav-left">
                    <NavLeft />
                </Col>
                <Col span="21" className="main">
                    <Header />
                    <Row className="content">
						Content
						{ /* {this.props.children} */ }
                    </Row>
                    <Footer />
                </Col>
            </Row>
        )
    }
}
```

其中 `common.less` 文件的内容为：

```less
.container {
    display: flex;
    .nav-left {
        width: 15%;
        min-width: 180px;
        height: calc(100vh);
        background-color: red;
    }
    .main {
        flex: 1;
        height: calc(100vh);
    }
    .content {
        position: relative;
        padding: 20px;
    }
}
```

至此，基本的框架已搭建完成。现在就该往组件里面添加页面了。接下来进行左侧边栏的内容的设计。

### 侧边栏的设计

左侧边栏的设计通过读取一个 `menuConfig` 文件来实现。菜单文件内容见：`src/config/menuConfig.js` 文件。

接着在模块 `NavLeft` 中导入该文件。接下来就是菜单的渲染工作了。可以到 `AntD` 官网上搜索“Menu 导航菜单”的帮助信息，上面有示例代码及导航菜单的风格，选择一种喜欢的风格即可。我们就选用比较简单的实现，即：“垂直菜单”。

```js
import React from 'react'
import { Menu, Icon } from 'antd';

// import MenuConfig from './../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component {

    render() {
        // const style = {
        //     backgroundColor: 'red'
        // }
        return (
            <div>
                {/* 这里是导航部分，或者是Logo部分；点击的时候会跳转到首页 */}
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="欢迎"/>
                    <h1>曌扬 OPS</h1>
                </div>

                {/* 下面是菜单渲染 */}
                <Menu theme="dark">
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
```

左侧导航又分为两部分，上部分是导航部分（或者Logo部分），下面是要渲染的部分。

基本的代码如下：

```js
import React from 'react'
import { Menu, Icon } from 'antd'

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
```

### 头部设计

头部设计分为两部分。

获取天气信息，通过 `Jsonp` 插件来获取。该插件支持跨域请求，而 `Axios` 不支持。接下来安装 `Jsonp` 插件：

```sh
yarn add jsonp --save
```

基本的代码为：

```js
import React from 'react'
import { Row, Col } from 'antd'

import Util from '../../utils/utils'
import axios from '../../axios'

import './index.less'

export default class Header extends React.Component {

    componentWillMount() {
        this.setState({
            userName: 'LavenLiu'
        })

        setInterval(() => {
            let sysTime = Util.formatDate(new Date().getTime())
            this.setState({
                sysTime
            })
        }, 1000)

        this.getWeahterAPIData()
    }

    getWeahterAPIData() {
        const city = '上海'  // 中文需要编码
        const apiURL = 'http://api.map.baidu.com/telematics/v3/weather?location='
        const outputFormat = '&output=json'
        const accessKey = '&ak=3p49MVra6urFRGOT9s8UBWr2'
        axios.jsonp({
            url: apiURL + encodeURIComponent(city) + outputFormat + accessKey
        }).then((res) => {
            // console.log(res)
            if (res.status === 'success') {
                const data = res.results[0].weather_data[0]
                this.setState({
                    dayPicture: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }

    render() {
        return (
            // <div>This is Header</div>
            // 头部分为两个部分，用两个 Row 来实现
            // 1. 用户名信息
            // 2. 时间、天气信息
            <div className="header">
                {/* 用户信息 */}
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="http://baidu.com">退出</a>
                    </Col>
                </Row>

                {/* 面包屑及天气信息 */}
                <Row className="breadcrumb">
                    {/* 当前的导航信息，通过 Redux 传递 */}
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    {/* 时间及天气 */}
                    <Col span="20" className="weather">
                        <span className="date">{ this.state.sysTime }</span>
                        <span className="weather-img">
                            <img src={ this.state.dayPicture } alt="天气图片"/>
                        </span>
                        <span className="weather-detail">{ this.state.weather }</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
```

### 底部组件的开发

如何开发？

1. 底部组价的布局
2. `Home` 页面的实现
3. 使用 `CSS` 实现箭头图标

底部组件的代码为：

```js
import React from 'react'

import './index.less'

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                Copyright © LavenLiu All Rights Reserved
            </div>
        )
    }
}
```

## React 路由 4.0

1. React Router 4.0 基本介绍
2. React Router 4.0 Demo 介绍
3. 项目路由实战

### 核心概念及用法介绍

- react-router
- react-router-dom
- react-router-dom 核心用法
- 4.0 版本中，已不需要路由配置，一切皆组件。
- react-router 提供了一些router的核心API，包括 `Router`、`Route`、`Switch` 等
- react-router-dom 提供了 `BrowserRouter`、`HashRouter`、`Route`、`Link`、`NavLink`

### 路由模块安装

使用 `npm` 或 `yarn` 进行安装：

```sh
npm install react-router-dom --save
yarn add react-router-dom
```

### react-router-dom 核心用法

- `HashRouter` 和 `BrowserRouter`
- `Route`: `path`, `exact`, `component`, `render`
- `NavLink`, `Link`
- `Switch`
- `Redirect`

`HashRouter` 与 `BrowserRouter` 的区别：

```html
<!-- HashRouter -->
http://localhost:3000/#/admin/buttons

<!-- BrowserRouter -->
http://localhost:3000/admin/buttons
```

#### Route 用法

代码片段：

```js
<Route path='/admin/ui/buttons' component={ Buttons } />
<Route path='/admin/ui/modals' component={ Modals } />
<Route path='/admin/ui/loading' component={ Loading } />
<Route path='/admin/ui/notification' component={ Notice } />
<Route path='/admin/ui/messages' component={ Messages } />
<Route path='/admin/ui/tabs' component={ Tabs } />
<Route path='/admin/ui/gallery' component={ Gallery } />
<Route path='/admin/ui/carousel' component={ Carousel } />

<Route path='/admin' render={() => {
    <Admin>
    <Route path='/admin/home' component={ Home } />
}}>
```

#### Link 用法

代码示例

```js
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/join'>Join us</Link></li>
            </ul>
        </nav>
    </header>
)

<Link to={{ pathname: '/three/7' }}>Three #7</Link>
```

- 定义：`<Route path="/three/:number" />`
- 取值：`this.props.match.params.number`

```js
<!-- 一个基本的 location 对象 -->
{ pathname: '/', search: '', hash: '', key: 'abc123', state: {} }
props.match.params.number
```

#### Switch 用法

代码示例：

```js
<Switch>
    <Route path='/admin/ui/buttons' component={ Buttons } />
    <Route path='/admin/ui/modals' component={ Modals } />
    <Route path='/admin/ui/loading' component={ Loading } />
    <Route path='/admin/ui/notification' component={ Notice } />
    <Route path='/admin/ui/messages' component={ Messages } />
    <Route path='/admin/ui/tabs' component={ Tabs } />
    <Route path='/admin/ui/gallery' component={ Gallery } />
    <Route path='/admin/ui/carousel' component={ Carousel } />
</Switch>
```

#### Redirect 用法

代码示例：

```js
<!-- 路由重定向 -->
<Redirect to='/admin/home' />
```

具体如何使用，请参考网站：`http://reacttraining.cn/web/example/basic`

### React Router 4.0 演示

1. Link 导航
2. HashRouter
3. Route

一个代码片段：

```js
import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

import Main from './main'
import About from './about'
import Topics from './topics'


export default class Home extends React.Component {
    render() {
        return (
            <HashRouter>
                {/* HashRouter 里面要有一个根节点，需要用一个div进行包裹 */}
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/topics'>Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact={true} path='/' component={Main}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topics' component={Topics}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}
```

通过配置化来实现。

如何获取路由参数？见：`src/pages/route_demo` 目录下的代码。

# React 组件

## 组件基本结构

## state 与 props

## 事件处理

## 组件的组合方式

## 组件间的数据通信

