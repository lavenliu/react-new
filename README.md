# React Demo

一个 `React` 的 `Demo` 项目，纯粹是一个玩具。

玩的过程中，使用的环境如下：

1. macOS 10.13.6
2. Node.js 8.12.0
3. npm 6.4.1
4. yarn 1.10.1

# ES6 基础

## 遍历数组

```js
let a = [2, 3, 4, 6, 7, 8, 9];

[2, 3, 5, 4, 5, 2, 2].forEach(x => console.log(x));

for (let i of a) {
    console.log(i);
}
```

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
yarn add react-router-dom axios less-loader
```

安装 `AntD`:

```sh
yarn add antd
```

`Less` 文件加载配置

`AntD` 基本使用，一个样例：

```js

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

