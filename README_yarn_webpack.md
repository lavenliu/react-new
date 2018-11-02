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
