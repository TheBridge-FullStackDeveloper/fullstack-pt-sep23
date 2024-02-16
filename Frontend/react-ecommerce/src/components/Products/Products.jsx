import React, { useEffect, useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { Card, Col } from 'antd'
import './Products.scss'

const Products = () => {
	const { getProducts, products, addCart } = useContext(ProductsContext)

	useEffect(() => {
		getProducts()
	}, [])

	return (
		<>
			<h1>Products</h1>
			<section className="products">
				{products.map((product) => (
					<Col span={8} key={product._id}>
						<Card title={product.name} bordered={false}>
							<p>price: {product.price.toFixed(2)}€</p>
							<button onClick={() => addCart(product)}>Add Cart</button>
						</Card>
					</Col>
				))}
			</section>
		</>
	)
}

export default Products
