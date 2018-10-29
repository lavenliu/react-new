import React from 'react';
import ReactDOM from 'react-dom';


class Child extends React.Component {
	
	constructor(props) {
		super(props)
	}

	handleClick() {
		this.props.changeColor('red')
	}
	
	render() {
		return (
			<div>
				<h1>父组件的背景色: {this.props.bgColor}</h1>
				<button onClick={(event) => this.handleClick(event)}>改变父组件颜色</button>
			</div>
		)
	}
}


class App extends React.Component {
	
	render() {
		return (
			<div className="">
				{/* 容器式组件 */}
				<Title>
				    <span>App Store</span>
				    <a href="">Link</a>
				</Title>
				<hr />
				{/* 单纯组件 */}
				<ES6Component />
			</div>
		)
	}
}


class Parent extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			bgColor: '#999'
		}
	}

	onBgColorChange(color) {
		this.setState({
			bgColor: color
		})
	}
	
	render(props) {
		return (
				<div style={{background: this.state.bgColor}}>
				<Child bgColor={this.state.bgColor} changeColor={(color) => {this.onBgColorChange(color)}}/>
			</div>
		)
	}
}

ReactDOM.render(
	<div>
		<Parent />
	</div>,
	document.getElementById('app')
);
