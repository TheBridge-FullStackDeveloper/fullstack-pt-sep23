import { useEffect } from 'react'
import Book from './Book/Book'
import AddBook from './AddBook/AddBook'
import { useDispatch } from 'react-redux'
import { getAll } from '../../redux/books/booksSlice'
import { getAllGenres } from '../../redux/genres/genresSlice'

const BookList = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAll())
		dispatch(getAllGenres())
	}, [])

	return (
		<div>
			<h1 data-test="hero-title">Book list</h1>
			<AddBook />
			<Book />
		</div>
	)
}

export default BookList
