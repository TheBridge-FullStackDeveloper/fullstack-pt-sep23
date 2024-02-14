import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'

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
			<span>Header</span>
			<div>
				{token ? (
					<>
						<span onClick={logoutUser}>
							<Link to="/">Logout</Link>
						</span>
						<span>
							<Link to="/profile">Profile</Link>
						</span>
					</>
				) : (
					<span>
						<Link to="/">Login</Link>
					</span>
				)}
			</div>
		</nav>
	)
}

export default TheHeader
