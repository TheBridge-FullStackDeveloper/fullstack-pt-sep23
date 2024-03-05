import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/auth/authSlice'

const TheHeader = () => {
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.auth)

	const handleLogout = () => {
		dispatch(logout())
		console.log('cosas ...')
	}
	return (
		<nav>
			{user ? (
				<>
					<Link to="/profile">Profile | </Link>
					<button onClick={handleLogout}>Logout</button>
				</>
			) : (
				<>
					<Link to="/">login | </Link>
					<Link to="/register">register</Link>
				</>
			)}
		</nav>
	)
}

export default TheHeader
