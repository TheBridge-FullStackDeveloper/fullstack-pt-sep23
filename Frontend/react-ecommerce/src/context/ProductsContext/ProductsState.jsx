import { createContext, useReducer } from 'react'
import axios from 'axios'
import ProductsReducer from './ProductsReducer'

const cartStorage = JSON.parse(localStorage.getItem('cart'))

const initialState = {
	products: [],
	cart: cartStorage || [],
	product: {},
}

const API_URL = 'http://localhost:3000'

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProductsReducer, initialState)

	const getProducts = async () => {
		const res = await axios.get(`${API_URL}/products?limit=30`)

		dispatch({
			type: 'GET_PRODUCTS',
			payload: res.data,
		})
		return res
	}

	const clearCart = () => {
		dispatch({
			type: 'CLEAR_CART',
		})
	}

	const addCart = (product) => {
		dispatch({
			type: 'ADD_CART',
			payload: product,
		})
	}

	const deleteProduct = async (id) => {
		const token = JSON.parse(localStorage.getItem('token'))

		const res = await axios.delete(`${API_URL}/products/${id}`, {
			headers: {
				authorization: token,
			},
		})
		dispatch({
			type: 'DELETE_PRODUCT',
			payload: res.data,
		})
		return res
	}
	const createProduct = async (product) => {
		const token = JSON.parse(localStorage.getItem('token'))

		const res = await axios.post(`${API_URL}/products`, product, {
			headers: {
				authorization: token,
			},
		})
		dispatch({
			type: 'CREATE_PRODUCT',
			payload: res.data,
		})
		return res
	}

	const getProductById = async (id) => {
		const res = await axios.get(API_URL + '/products/id/' + id)
		dispatch({
			type: 'GET_PRODUCT_BY_ID',
			payload: res.data,
		})
		return res
	}

	const editProduct = async (product, id) => {
		const token = JSON.parse(localStorage.getItem('token'))

		const res = await axios.put(`${API_URL}/products/${id}`, product, {
			headers: {
				authorization: token,
			},
		})
		dispatch({
			type: 'EDIT_PRODUCT',
			payload: res.data,
		})
		return res
	}

	return (
		<ProductsContext.Provider
			value={{
				products: state.products,
				cart: state.cart,
				product: state.product,
				getProducts,
				deleteProduct,
				createProduct,
				getProductById,
				editProduct,
				addCart,
				clearCart,
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}

export const ProductsContext = createContext(initialState)
