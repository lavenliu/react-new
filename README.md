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

# HTML 基础

# CSS 基础

# ES6 基础

## 遍历数组

```js
let a = [2, 3, 4, 6, 7, 8, 9];

[2, 3, 5, 4, 5, 2, 2].forEach(x => console.log(x));

for (let i of a) {
    console.log(i);
}
```

## Promise

通过封装 `Promise` 公共代码，然后可以在组件中使用其 `then` 方法了。


## JsonP 插件使用

## VS Code 基本使用

使用 `VS Code` 调试 `js` 代码，并在浏览器的开发者模式下的 `source` 标签下查看调试信息。

在需要调试的代码的地方添加 `debugger` 即可调试。

# React 基础

## JSX

例子1：

```
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

```json
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

```json
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

# yarn & webpack

## yarn基本使用

1. 定位：包管理工具，替代 npm
2. 安装速度快，版本锁定，缓存机制
3. yarn 的安装：`npm -g install yarn`

`yarn` 与 `npm` 的对比：

| yarn | npm |
|----|----|
| yarn init | npm init |
| yarn | npm install |
| yarn add xxx@x.x.x | npm install xxx@x.x.x --save |
| yarn add xxx@x.x.x --dev | npm install xxx@x.x.x --save-dev |
| yarn remove xxx | npm uninstall xxx --save(-dev) |
| yarn run xxx | npm run xxx |


## webpack使用

```sh
yarn add babel-core@6.26.0  --dev
yarn add babel-preset-env@1.6.1 babel-loader@7.1.2 --dev
```

### 配置React

webpack 处理 react，安装插件：
```sh
yarn add babel-preset-react@6.24.1 --dev
yarn add react@16.2.0 react-dom@16.2.0 --dev
```

### 配置样式

```sh
yarn add style-loader@0.19.1 css-loader@0.28.8 --dev
yarn add extract-text-webpack-plugin@3.0.2 --dev
yarn add sass-loader@6.0.6 --dev
yarn add node-sass@4.7.2 --dev
```

### 配置图片

```sh
yarn add file-loader@1.1.6 url-loader@0.6.2 --dev
```

### 配置字体

### webpack-dev-server

```sh
yarn add webpack-dev-server@2.9.7 --dev
```


## 最终的webpack配置

```js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'js/app.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			// css 文件的处理
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			// sass 文件的处理
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			// 配置图片
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: 'resource/[name].[ext]'
						}
					}
				]
			},
			// 加载字体图标
			{
				test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: 'resource/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		// 处理HTML文件
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		// 独立 CSS 文件
		new ExtractTextPlugin('css/[name].css'),
		// 提取公共模块
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/base.js'
		})
	],
	devServer: {
		port: 8088
	}
};
```


# React 组件

## 组件基本结构

## state 与 props

## 事件处理

## 组件的组合方式

## 组件间的数据通信

