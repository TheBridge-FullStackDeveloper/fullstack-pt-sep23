import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPostByName } from '../../redux/posts/postsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
	const dispatch = useDispatch()
	const { postName } = useParams()
	const { posts } = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(getPostByName(postName))
	}, [postName])

	return (
		<>
			{posts.map((post) => (
				<div key={post._id} className="post">
					<h2>{post.title}</h2>
					<p>{post.content}</p>
					<img src={`http://localhost:3000/${post.post_img}`} width="350px" />
				</div>
			))}
		</>
	)
}

export default Search
