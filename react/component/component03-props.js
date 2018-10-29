import React from 'react';
import ReactDOM from 'react-dom';

class ES6Component extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <h1>class based component; I am {this.props.name}</h1>
	}
}

ReactDOM.render(
	<div>
		<ES6Component name="James"/>
	</div>,
	document.getElementById('app')
);
