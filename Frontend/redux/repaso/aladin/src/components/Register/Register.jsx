import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/authSlice'

const Register = () => {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	})

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log('form', formData)
		dispatch(register(formData))
	}

	const { name, email, password } = formData
	return (
		<>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={handleChange}
					placeholder="nombre"
				/>
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					placeholder="email"
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					placeholder="password"
				/>
				<button type="submit">Enviar...</button>
			</form>
		</>
	)
}

export default Register
