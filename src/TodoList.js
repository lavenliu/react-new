import React, { Component } from 'react';

class TodoList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			list: [
				'Learn React',
				'Learn Vue',
				'Learn Python'
			]
		}
	}

	handleBtnClick() {
		// this.state.list.push('Hello World')
		// alert('click')
		this.setState({
			list: [...this.state.list, 'Hello World']
		})
	}

	render() {
		// jsx 语法
		return (
			<div>
				<div>
					<input />
					<button onClick={this.handleBtnClick.bind(this)}>add</button>
				</div>
				<ul>
					{
						this.state.list.map((item, index) => {
							return <li key={index}>{item}</li>
						})
					}
				</ul>
			</div>
		);
	}
}

export default TodoList;
