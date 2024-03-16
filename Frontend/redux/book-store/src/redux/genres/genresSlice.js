import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import genresService from './genresService'

const initialState = {
	genresList: [],
}

export const getAllGenres = createAsyncThunk(
	'genres/getAllGenres',
	async () => {
		try {
			return await genresService.getAllGenres()
		} catch (error) {
			console.error(error)
		}
	}
)

export const genresSlice = createSlice({
	name: 'genres',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllGenres.fulfilled, (state, action) => {
			state.genresList = action.payload
		})
	},
})

export default genresSlice.reducer
