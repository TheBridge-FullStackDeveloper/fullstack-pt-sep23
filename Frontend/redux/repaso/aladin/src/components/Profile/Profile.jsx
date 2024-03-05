import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
	const { user } = useSelector((state) => state.auth)
	return (
		<>
			{user ? (
				<>
					<h1>Profile</h1>
					<p>Hola {user.name}</p>
					<p>Hola {user.email}</p>
				</>
			) : (
				<p>cargando...</p>
			)}
		</>
	)
}

export default Profile
