import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Post = () => {
  const { posts } = useSelector((state) => state.posts)

  const postin = posts?.map((post, index) => {
    return (
      <div key={index}>
        <h1>Post</h1>
        <h2>title: {post.title}</h2>
        <p>content {post.content}</p>
        <img src={`http://localhost:3000/${post.post_img}`} width='350px' />
        <Link to={`/post/${post._id}`}>
          <p>{post.title}</p>
        </Link>
      </div>
    )
  })

  return postin
}

export default Post
