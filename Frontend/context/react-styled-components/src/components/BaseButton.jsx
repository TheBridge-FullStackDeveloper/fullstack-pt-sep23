import React, { useState } from 'react'

import styled from 'styled-components'

const PrettyButton = styled.button`
	background-color: pink;
	border: 2px solid pink;
	border-radius: 5px;
	color: black;
	padding: 10px;
	box-shadow: 5px 5px 5px 0px lightgray;
`

const InheritedButton = styled(PrettyButton)`
	background-color: lightblue;
	border: 2px solid lightblue;
`

const StyledButton = styled.button`
	background-color: ${(props) => (props.isPink ? '#fa25ef' : '#3c7f8b')};
	border: 2px solid ${(props) => (props.isPink ? '#fa25ef' : '#3c7f8b')};
	border-radius: 5px;
	color: ${(props) => (props.isPink ? '#000' : '#fff')};
	padding: 10px;

	:hover {
		box-shadow: 5px 5px 5px 0px lightgray;
	}
`

const BaseButton = () => {
	const [isPink, setIsPink] = useState(false)

	return (
		<>
			<PrettyButton>Botón Básico</PrettyButton>
			<InheritedButton>Boton heredado</InheritedButton>

			<StyledButton isPink={isPink} onClick={() => setIsPink(!isPink)}>
				cambio de color!!
			</StyledButton>
		</>
	)
}

export default BaseButton
