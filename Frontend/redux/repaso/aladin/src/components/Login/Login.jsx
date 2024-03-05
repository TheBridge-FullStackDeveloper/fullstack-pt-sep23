import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const { email, password } = formData

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(formData)
		dispatch(login(formData))
		navigate('/profile')
	}

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}
	// dispatch()
	// navigate()
	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					placeholder="email"
					required
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					placeholder="password"
					required
				/>
				<button type="submit">login</button>
			</form>
		</>
	)
}

export default Login
