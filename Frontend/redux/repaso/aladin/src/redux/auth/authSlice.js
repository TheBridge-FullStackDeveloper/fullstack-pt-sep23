import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'))
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
	user: user || null,
	token: token || null,
}

export const register = createAsyncThunk('auth/register', async (userData) => {
	try {
		return authService.register(userData)
	} catch (error) {
		console.log(error)
	}
})

export const login = createAsyncThunk('auth/login', async (userData) => {
	try {
		return authService.login(userData)
	} catch (error) {
		console.log(error)
	}
})

export const logout = createAsyncThunk('auth/logout', async () => {
	try {
		return authService.logout()
	} catch (error) {
		console.log(error)
	}
})

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
			})
			.addCase(logout.fulfilled, (state, action) => {
				;(state.user = null), (state.token = null)
			})
	},
})

export default authSlice.reducer
