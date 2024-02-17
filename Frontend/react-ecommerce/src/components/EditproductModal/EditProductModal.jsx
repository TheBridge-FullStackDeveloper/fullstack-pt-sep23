import React, { useEffect, useContext } from 'react'
import { Button, Modal, Form, InputNumber, Input } from 'antd'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'

const EditProductModal = ({ visible, setVisible }) => {
	const { product, editProduct } = useContext(ProductsContext)

	const [form] = Form.useForm()

	useEffect(() => {
		form.setFieldsValue(product)
	}, [product])

	const onFinish = (values) => {
		editProduct(values, product._id)
		setVisible(false)
	}
	return (
		<Modal title="Edit Product" open={visible} footer={[]}>
			<Form onFinish={onFinish} form={form}>
				<Form.Item label="Product Name" name="name">
					<Input placeholder="Product name" />
				</Form.Item>
				<Form.Item label="Price">
					<Form.Item name="price" noStyle>
						<InputNumber />
					</Form.Item>
					<span className="ant-form-text"> €</span>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default EditProductModal
