import React from 'react';
import ReactDOM from 'react-dom';

function BasicComponent() {
	return <h1>function based component</h1>
};


class ES6Component extends React.Component {
	render() {
		return <h1>class based component</h1>
	}
}

ReactDOM.render(
	<div>
		<BasicComponent />
		<ES6Component />
	</div>,
	document.getElementById('app')
);
