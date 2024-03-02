import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import postsService from './postsService'

const initialState = {
	posts: [],
	post: {},
	isLoading: false,
}

export const getAll = createAsyncThunk('posts/getAll', async () => {
	try {
		return await postsService.getAll()
	} catch (error) {
		console.error(error)
	}
})

export const getById = createAsyncThunk('posts/getById', async (id) => {
	try {
		return await postsService.getById(id)
	} catch (error) {
		console.error(error)
	}
})

export const getPostByName = createAsyncThunk(
	'posts/getPostByName',
	async (postName) => {
		try {
			return await postsService.getPostByName(postName)
		} catch (error) {
			console.error(error)
		}
	}
)

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAll.fulfilled, (state, action) => {
				state.posts = action.payload
			})
			.addCase(getAll.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getById.fulfilled, (state, action) => {
				state.post = action.payload
			})
			.addCase(getPostByName.fulfilled, (state, action) => {
				state.posts = action.payload
			})
	},
})

export const { reset } = postsSlice.actions
export default postsSlice.reducer
