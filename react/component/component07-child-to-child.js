import React from 'react';
import ReactDOM from 'react-dom';


class Child1 extends React.Component {
	
	constructor(props) {
		super(props)
	}

	handleClick() {
		this.props.changeChild2Color('red')
	}
	
	render() {
		return (
			<div>
				<h1>Child1: {this.props.bgColor}</h1>
				<button onClick={(event) => this.handleClick(event)}>改变Child2背景颜色</button>
			</div>
		)
	}
}


class Child2 extends React.Component {
	
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<div style={{background: this.props.bgColor}}>
				<h1>Child2背景颜色: {this.props.bgColor}</h1>
			</div>
		)
	}
}


class Parent extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			child2BgColor: '#999'
		}
	}

	onChild2BgColorChange(color) {
		this.setState({
			child2BgColor: color
		})
	}
	
	render(props) {
		return (
			<div>
				<Child1 changeChild2Color={(color) => {this.onChild2BgColorChange(color)}}/>
				<Child2 bgColor={this.state.child2BgColor}/>
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
