import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getById } from '../../../redux/posts/postsSlice'

const PostDetail = () => {
	const { id } = useParams()
	const dispatch = useDispatch()

	const { post } = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(getById(id))
		console.log(post)
	}, [])

	return (
		<>
			<h1>PostDetail: {post.title}</h1>
			<p>{post.content}</p>
		</>
	)
}

export default PostDetail
