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

	onValueChange(event) {
		this.setState({
			age: event.target.value
		})
	}
	
	render() {
		return (
			<div>
				<h1>I am {this.state.name}</h1>
				<p>I am {this.state.age} year(s) old</p>
				<button onClick={(event) => this.handleClick(event)}>加一岁</button>
				<input type="text" onChange={(event) => {this.onValueChange(event)}} />
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
