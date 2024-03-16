import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Modal, Form, InputNumber, Select, Input } from 'antd'
import { update } from '../../../redux/books/booksSlice'

const EditModal = ({ visible, setVisible }) => {
	const { Option } = Select
	const { genresList } = useSelector((state) => state.genres)
	const { book } = useSelector((state) => state.books)
	const dispatch = useDispatch()

	const [form] = Form.useForm()

	useEffect(() => {
		const bookToEdit = {
			...book,
			GenreId: book.Genres?.map((element) => element.id),
		}
		form.setFieldsValue(bookToEdit)
	}, [book])

	const selectOption = genresList.map((genre) => {
		return (
			<Option key={genre.id} value={genre.id}>
				{genre.name}
			</Option>
		)
	})

	const onFinish = (values) => {
		const bookWithId = { ...values, id: book.id }
		dispatch(update(bookWithId))
		setVisible(false)

		console.log(values)
	}
	return (
		<Modal title="Edit Book" open={visible} footer={[]}>
			<Form onFinish={onFinish} form={form}>
				<Form.Item label="Book Name" name="name">
					<Input placeholder="Book name" data-test="book-name" />
				</Form.Item>
				<Form.Item name="GenreId" label="Select Genres">
					<Select mode="multiple" placeholder="Please select genre">
						{selectOption}
					</Select>
				</Form.Item>
				<Form.Item label="Price">
					<Form.Item name="price" noStyle>
						<InputNumber />
					</Form.Item>
					<span className="ant-form-text"> €</span>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" data-test="edit-submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default EditModal
