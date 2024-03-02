import axios from 'axios'

const API_URL = 'http://localhost:3000'

const getAll = async () => {
	const res = await axios.get(API_URL + '/posts/getAllPosts')
	return res.data.post
}

const getById = async (id) => {
	const res = await axios.get(API_URL + '/posts/getPostById/' + id)
	return res.data.post
}

const postsService = {
	getAll,
	getById,
}

export default postsService
