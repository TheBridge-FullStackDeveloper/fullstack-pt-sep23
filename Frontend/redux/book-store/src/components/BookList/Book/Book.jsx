import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { deleteBook, getById } from '../../../redux/books/booksSlice'
import EditModal from '../EditModal/EditModal'

const Book = () => {
	const { bookList } = useSelector((state) => state.books)
	const dispatch = useDispatch()
	const [isModalVisible, setIsModalVisible] = useState(false)

	const showModal = (id) => {
		console.log(id)
		dispatch(getById(id))
		setIsModalVisible(true)
	}

	return (
		<>
			{bookList &&
				bookList.map((book) => (
					<div className="book" key={book.id}>
						<h2 data-test="book-title">
							{book.name} - <span> {book.price}</span>
						</h2>
						<DeleteOutlined onClick={() => dispatch(deleteBook(book.id))} />
						<EditOutlined onClick={() => showModal(book.id)} />
					</div>
				))}
			<EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
		</>
	)
}

export default Book
