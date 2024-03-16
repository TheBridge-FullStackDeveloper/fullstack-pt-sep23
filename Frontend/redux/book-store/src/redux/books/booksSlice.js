import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import booksService from './booksService'

const initialState = {
	bookList: [],
	book: {},
}

export const getAll = createAsyncThunk('books/getAll', async () => {
	try {
		return await booksService.getAll()
	} catch (error) {
		console.error(error)
	}
})

export const create = createAsyncThunk('books/create', async (book) => {
	try {
		return await booksService.create(book)
	} catch (error) {
		console.error(error)
	}
})

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
	try {
		return await booksService.deleteBook(id)
	} catch (error) {
		console.error(error)
	}
})

export const getById = createAsyncThunk('books/getById', async (id) => {
	try {
		return await booksService.getById(id)
	} catch (error) {
		console.error(error)
	}
})

export const update = createAsyncThunk('books/update', async (book) => {
	try {
		return await booksService.update(book)
	} catch (error) {
		console.error(error)
	}
})

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAll.fulfilled, (state, action) => {
				state.bookList = action.payload
			})
			.addCase(create.fulfilled, (state, action) => {
				state.bookList = [...state.bookList, action.payload]
			})
			.addCase(deleteBook.fulfilled, (state, action) => {
				state.bookList = state.bookList.filter(
					(book) => book.id !== +action.payload.id
				)
			})
			.addCase(getById.fulfilled, (state, action) => {
				state.book = action.payload
			})
			.addCase(update.fulfilled, (state, action) => {
				const books = state.bookList.map((book) => {
					if (book.id === action.payload.book.id) {
						book = action.payload.book
					}

					return book
				})
				state.bookList = books
			})
	},
})

export default booksSlice.reducer
