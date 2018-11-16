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
