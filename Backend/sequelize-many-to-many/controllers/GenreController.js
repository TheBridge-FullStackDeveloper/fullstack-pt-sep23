const { Genre } = require('../models/index')

const GenreController = {
	create(req, res) {
		Genre.create(req.body)
			.then((genre) => {
				res.status(201).send({ message: 'Genre created succesfully', genre })
			})
			.catch((error) => console.error(error))
	},
}

module.exports = GenreController
