// import React from 'react'
import ExampleChild from '../exampleChild/ExampleChild'

// export default class Example extends React.Component {
// 	constructor() {
// 		super()
// 		this.state = { favoriteColor: 'red', show: true }
// 	}

// 	componentDidMount() {
// 		setTimeout(() => {
// 			this.setState({ favoriteColor: 'green' })
// 		}, 3000)
// 	}

// 	componentDidUpdate() {
// 		console.log('el componente se ha actualizado')
// 	}

// 	handleRemove = () => {
// 		console.log(this.state.show)
// 		this.setState({ show: false })
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>My Favorite Color is {this.state.favoriteColor}</h1>

// 				{this.state.show ? <ExampleChild /> : null}

// 				<button onClick={this.handleRemove}>
// 					Eliminar el componente ExampleChild
// 				</button>
// 			</div>
// 		)
// 	}
// }

import React, { useState, useEffect } from 'react'

const Example = () => {
	const [show, setShow] = useState(true)

	const handleRemove = () => setShow(false)

	// const [favoriteColor, setFavoriteColor] = useState('red')

	// // al haberse montado el componente
	useEffect(() => {
		setTimeout(() => {
			setFavoriteColor('green')
		}, 1000)
	}, [])

	useEffect(() => {
		console.log('el componente se ha actualizado')
	})

	return (
		<div>
			{/* <h1>My Favorite Color is {favoriteColor}</h1> */}

			{show ? <ExampleChild /> : null}
			<button onClick={handleRemove}>Eliminar el componete ExampleChild</button>
		</div>
	)
}

export default Example
