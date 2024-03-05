import axios from 'axios'

const API_URL = 'http://localhost:3000/users'

const register = async (userData) => {
	const res = await axios.post(API_URL, userData)
	return res.data
}

const login = async (userData) => {
	const res = await axios.post(`${API_URL}/login`, userData)
	localStorage.setItem('token', JSON.stringify(res.data.token))
	localStorage.setItem('user', JSON.stringify(res.data.user))
	return res.data
}

const logout = async () => {
	const token = JSON.parse(localStorage.getItem('token'))
	const res = await axios.delete(
		`${API_URL}/logout`,
		{},
		{
			header: {
				authorization: token,
			},
		}
	)
	return res.data
}

const authService = {
	register,
	login,
	logout,
}
export default authService
