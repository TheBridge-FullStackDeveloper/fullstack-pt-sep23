import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import { OrdersContext } from '../../context/OrdersContext/OrdersState'
import { Card, Col } from 'antd'
import './Cart.scss'

const Cart = () => {
	const { cart, clearCart } = useContext(ProductsContext)
	const { createOrder } = useContext(OrdersContext)

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const createNewOrder = () => {
		createOrder(cart)
		clearCart()
	}

	const cartItem = cart.map((cartItem) => (
		<Col span={8} key={cartItem._id}>
			<Card title={cartItem.name} className="cart">
				<span>{cartItem.price.toFixed(2)} €</span>
			</Card>
		</Col>
	))
	return (
		<>
			<h1>Cart</h1>
			<section className="cart">
				{cart && cart.length > 0 ? (
					cartItem
				) : (
					<span>No tienes ningún producto añadido</span>
				)}
			</section>
			<button onClick={() => clearCart()}>Clear cart</button>
			<button onClick={() => createNewOrder()}>Create Order</button>
		</>
	)
}

export default Cart
