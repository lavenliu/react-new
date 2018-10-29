
# 组件生命周期

1. Mounting：挂载阶段
2. Updating：运行时阶段
3. Unmounting：卸载阶段
4. Error Handling: 错误处理阶段


## 组件加载过程

`componetWillMount` 与 `componentDidMount`

```js
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor(props) {
		super(props)
		console.log('constructor')
	}

	componentWillMount() {
		console.log('component will mount')
	}

	componentDidMount() {
		console.log('component did mount')
	}
	
	render() {
		console.log('render')
		return (
				<div className="">
				    App
				</div>
		)
	}
}

ReactDOM.render(
	<div>
		<App />
	</div>,
	document.getElementById('app')
);


// 浏览器控制台中的执行结果为：
constructor
component will mount
render
component did mount
```

继续介绍其他生命周期函数：

```js
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: 'change before'
		}
		console.log('constructor')
	}

	componentWillMount() {
		console.log('component will mount')
	}

	componentDidMount() {
		console.log('component did mount')
	}

	// 组件将要接收父组件传递过来的 props
	componentWillReceiveProps() {
		console.log('component will receive props')
	}

	// 子组件是不是应该更新
	shouldComponentUpdate() {
		console.log('should component update')
		return true; // 默认返回true
	}

	// 组件将要更新
	componentWillUpdate() {
		console.log('component will update')
	}

	// 组件更新完成
	componentDidUpdate() {
		console.log('component did update')
	}

	handleChick() {
		this.setState({
			data: 'change after'
		})
	}
	
	render() {
		console.log('render')
		return (
			<div>
				App
				<button onClick={() => this.handleChick()}>点击改变数据</button>
			</div>	
		)
	}
}

ReactDOM.render(
	<div>
		<App />
	</div>,
	document.getElementById('app')
);
```

浏览器的控制台输出结果为：
```js
constructor
component will mount
render
component did mount
should component update
component will update
render
component did update
```

如果我们把 `shouldComponentUpdate` 函数的返回值改为 `false`，看一下执行结果：

```js
constructor
component will mount
render
component did mount
should component update
```

