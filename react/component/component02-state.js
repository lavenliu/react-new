import React from 'react';
import ReactDOM from 'react-dom';

class ES6Component extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "LavenLiu"
		}
	}
	render() {
		setTimeout(() => {
			this.setState({
				name: 'TaoQi'
			})
		}, 2000)
		return <h1>class based component; I am {this.state.name}</h1>
	}
}

ReactDOM.render(
	<div>
		<ES6Component />
	</div>,
	document.getElementById('app')
);
