import React, { Component } from 'react'

export default class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: this.props.initialValue,
		}
	}
	increment = () => {
		this.setState({ counter: this.state.counter + 1 })
	}
	render() {
		return (
			<div>
				<p>Counter: {this.state.counter}</p>
				<button onClick={this.increment}>+</button>
			</div>
		)
	}
}
