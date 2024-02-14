import React, { useEffect, useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Spin } from 'antd'

const Profile = () => {
	const { getUserInfo, user } = useContext(UserContext)

	useEffect(() => {
		getUserInfo()
	}, [])

	if (!user) {
		return <Spin />
	}

	return (
		<>
			<h1>Profile</h1>
			<p>Name: {user.name}</p>
			<p>Email: {user.email}</p>
		</>
	)
}

export default Profile
