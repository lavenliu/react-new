import React from 'react';
import Child from './Child';

export default class Life extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
		this.handleAdd = this.handleAdd.bind(this)
	}

	handleAdd() {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		const style = {
			border:'dashed'
		}
		return (
				<div style={style}>
				<p>React生命周期介绍</p>
				<button onClick={this.handleAdd}>点击一下</button>
				<p>{this.state.count}</p>
				<Child name={this.state.count}></Child>
				</div>
		)
	}
}
