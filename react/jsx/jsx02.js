import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

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
