import React, { useEffect } from 'react'

// export default class ExampleChild extends React.Component {
// 	componentWillUnmount() {
// 		alert(
// 			'El componente ExampleChild está a punto de ser eliminado (desmontado).'
// 		)
// 	}
// 	render() {
// 		return <h1>Hola The Bridge!</h1>
// 	}
// }

const ExampleChild = () => {
	useEffect(() => {
		return () => {
			alert('El componente ExampleChild ha sido eliminado(desmontado).')
		}
	})
	return <h1>Hola The Bridge!</h1>
}

export default ExampleChild
