import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../../context/GlobalState'

const EditTask = () => {
	const { _id } = useParams()
	const [title, setTitle] = useState('')
	let navigate = useNavigate()

	const { task, getTask, editTask } = useContext(GlobalContext)

	const handleSubmit = (event) => {
		event.preventDefault()
		editTask(task._id, { title })

		setTimeout(() => {
			navigate('/')
		}, 1000)
	}

	useEffect(() => {
		getTask(_id)
	}, [])

	useEffect(() => {
		setTitle(task.title)
	}, [task.title])

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title || ''}
				name="title"
			/>
			<button type="submit">Edit task</button>
		</form>
	)
}

export default EditTask
