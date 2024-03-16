import { configureStore } from '@reduxjs/toolkit'
import books from './books/booksSlice'
import genres from './genres/genresSlice'

export const store = configureStore({
	reducer: { books, genres },
})
