import React from 'react';
import ReactDOM from 'react-dom';

class ES6Component extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			name: 'LavenLiu',
			age: 23
		}
	}

	handleClick() {
		this.setState({
			age: this.state.age + 1
		})
	}
	
	render() {
		return (
			<div>
				<h1>I am {this.state.name}</h1>
				<p>I am {this.state.age} year(s) old</p>
				<button onClick={(e) => this.handleClick(e)}>加一岁</button>
			</div>
		)
	}
}

ReactDOM.render(
	<div>
		<ES6Component name="James"/>
	</div>,
	document.getElementById('app')
);
