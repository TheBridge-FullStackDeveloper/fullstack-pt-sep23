import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Card, Col } from 'antd'
import './Admin.scss'
import CreateProduct from '../CreateProduct/CreateProduct'
import EditProductModal from '../EditproductModal/EditProductModal'

const Admin = () => {
	const [isModalVisible, setIsModalVisible] = useState(false)
	const { getProducts, addCart, products, deleteProduct, getProductById } =
		useContext(ProductsContext)

	useEffect(() => {
		getProducts()
	}, [])

	const showModal = (id) => {
		getProductById(id)
		setIsModalVisible(true)
	}

	return (
		<>
			<h1>Admin</h1>
			<CreateProduct />
			<section className="grid">
				{(products &&
					products.map((product) => (
						<Col span={8} key={product._id}>
							<Card title={product.name} bordered={false}>
								<p>price: {product.price.toFixed(2)}€</p>
								<button onClick={() => addCart(product)}>Add Cart</button>
								<button onClick={() => deleteProduct(product._id)}>
									<DeleteOutlined />
									Delete
								</button>
								<button onClick={() => showModal(product._id)}>
									<EditOutlined />
								</button>
							</Card>
						</Col>
					))) || <span>Cargando...</span>}
			</section>
			<EditProductModal
				visible={isModalVisible}
				setVisible={setIsModalVisible}
			/>
		</>
	)
}

export default Admin
