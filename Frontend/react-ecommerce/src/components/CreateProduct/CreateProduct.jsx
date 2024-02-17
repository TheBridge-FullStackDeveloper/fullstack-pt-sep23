import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'

import { Button, Form, InputNumber, Input } from 'antd'

const CreateProduct = () => {
	const { createProduct } = useContext(ProductsContext)

	const onFinish = (values) => {
		createProduct(values)
	}

	return (
		<Form onFinish={onFinish}>
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
	)
}

export default CreateProduct
