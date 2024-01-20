const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// const { jwt_secret } = require('../config/keys')

const UserController = {
	async register(req, res, next) {
		try {
			const user = await User.create({ ...req.body, role: 'user' })
			res.status(201).send({ message: 'Usuario registrado con exito', user })
		} catch (error) {
			error.origin = 'usuario'
			next(error)
		}
	},
	async login(req, res) {
		try {
			const user = await User.findOne({
				email: req.body.email,
			})
			const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

			if (user.tokens.length > 4) user.tokens.shift()

			user.tokens.push(token)
			await user.save()

			res.send({ message: 'Bienvenid@ ' + user.name, token })
		} catch (error) {
			console.error(error)
		}
	},
	async logout(req, res) {
		try {
			await User.findByIdAndUpdate(req.user._id, {
				$pull: { tokens: req.headers.authorization },
			})
			res.send({ message: 'Desconectado con éxito' })
		} catch (error) {
			console.error(error)
			res.status(500).send({
				message: 'Hubo un problema al intentar desconectar al usuario',
			})
		}
	},
	async getInfo(req, res) {
		try {
			const user = await User.findById(req.user._id)
				.populate({
					path: 'orderIds',
					populate: {
						path: 'productIds',
					},
				})
				.populate('wishList')

			res.send(user)
		} catch (error) {
			console.error(error)
		}
	},
}

module.exports = UserController
