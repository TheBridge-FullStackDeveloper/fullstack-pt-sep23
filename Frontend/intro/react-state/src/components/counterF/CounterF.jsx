import { useState } from 'react'

const CounterF = (props) => {
	const [counter, setCounter] = useState(props.initialValue)

	const increment = () => {
		setCounter(counter + 1)
	}
	return <button onClick={increment}>{counter}</button>
}

export default CounterF
