import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'

const AddTask = () => {
	const [title, setTitle] = useState('')
	const { addTask } = useContext(GlobalContext)

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log('title', title)
		addTask({ title })
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				name="title"
			/>
			<button type="submit">Add task</button>
		</form>
	)
}
export default AddTask
