import axios from 'axios'

const API_URL = 'http://localhost:3000'

const getAllGenres = async () => {
	const res = await axios.get(`${API_URL}/genres`)
	return res.data
}

const genresService = {
	getAllGenres,
}

export default genresService
