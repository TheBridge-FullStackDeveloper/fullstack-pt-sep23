import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import {
	LoginOutlined,
	LogoutOutlined,
	ProductOutlined,
	UserOutlined,
	ShoppingCartOutlined,
} from '@ant-design/icons'
import './TheHeader.scss'

const TheHeader = () => {
	const navigate = useNavigate()
	const { token, logout } = useContext(UserContext)

	const logoutUser = () => {
		logout()
		setTimeout(() => {
			navigate('/')
		}, 2000)
	}

	return (
		<nav className="header">
			<div>
				{token ? (
					<>
						<span className="menu-item" onClick={logoutUser}>
							<LogoutOutlined />
							<Link to="/">Logout</Link>
						</span>
						<span className="menu-item">
							<ProductOutlined />
							<Link to="/products">Products</Link>
						</span>
						<span className="menu-item">
							<ShoppingCartOutlined />
							<Link to="/cart">Cart</Link>
						</span>
						<span className="menu-item">
							<UserOutlined />
							<Link to="/profile">Profile</Link>
						</span>
					</>
				) : (
					<span className="menu-item">
						<LoginOutlined />
						<Link to="/">Login</Link>
					</span>
				)}
			</div>
		</nav>
	)
}

export default TheHeader
