import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, reset } from '../../redux/posts/postsSlice'
import Post from './Post/Post'

const Posts = () => {
	const dispatch = useDispatch()
	const { isLoading } = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(getAll())
		dispatch(reset())
	}, [])

	return (
		<div>
			<h1>Posts</h1>
			{isLoading ? 'cargando...' : <Post />}
		</div>
	)
}

export default Posts
