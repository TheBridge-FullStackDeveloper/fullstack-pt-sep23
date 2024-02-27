import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/authSlice'
import { notification } from 'antd'

const Register = () => {
	const dispatch = useDispatch()

	const [formData, setFormData] = useState({
		name: '', // ana
		email: '', //ana@ana.com
		password: '',
		password2: '', //'123456'
		age: 0,
	})
	const { name, email, age, password, password2 } = formData

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value, //password: '12345'
		}))
	}
	const onSubmit = (e) => {
		e.preventDefault()

		if (password !== password2) {
			return notification.error({
				message: 'Error',
				description: 'Passwords does not match',
			})
		} else {
			notification.success({
				message: 'Success',
				description: 'Todo ok puedes pasar',
			})
			return dispatch(register(formData))
		}

		// dispatch(register(formData))

		// console.log('formData', formData)
	}
	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				name="name"
				value={name}
				onChange={onChange}
				placeholder="Tu nombre"
			/>
			<input
				type="email"
				name="email"
				value={email}
				onChange={onChange}
				placeholder="Tu email"
			/>
			<input
				type="number"
				name="age"
				value={age}
				onChange={onChange}
				placeholder="Tu edad"
			/>
			<input
				type="password"
				name="password"
				value={password}
				onChange={onChange}
				placeholder="Tu password"
			/>
			<input
				type="password"
				name="password2"
				value={password2}
				onChange={onChange}
				placeholder="Repite tu password"
			/>
			<button type="submit">Register</button>
		</form>
	)
}
export default Register
