const Task = require('../models/Task.js')

const taskController = {
	async create(req, res) {
		try {
			const task = await Task.create(req.body)
			res.status(201).send({ message: 'Esta creado con exito ', task })
		} catch (error) {
			console.log(error)
		}
	},

	async getAll(req, res) {
		try {
			const task = await Task.find()
			res.status(200).send({ message: 'Tareas recuperadas', task })
		} catch (error) {
			console.log(error)
			res.status(500).send('Ha habido un error')
		}
	},

	async getById(req, res) {
		try {
			const task = await Task.findById(req.params._id)
			res.status(200).send(task)
		} catch (error) {
			console.log({ message: 'Ha habido un error', error })
		}
	},

	async completed(req, res) {
		try {
			const task = await Task.findByIdAndUpdate(
				req.params._id,
				{ completed: true },
				{ new: true }
			)
			res.status(201).send({ message: 'tarea completada', task })
		} catch (error) {
			console.log(error)
			res
				.status(500)
				.send({ message: 'ha habido un error al completar la tarea', error })
		}
	},
	async changeTitle(req, res) {
		try {
			const task = await Task.findByIdAndUpdate(
				req.params._id,
				{ title: req.body.title },
				{ new: true }
			)
			res.status(200).send({ message: 'Titulo actualizado', task })
		} catch (error) {
			console.error(error)
			res.status(500).send('Ouch, you got problem bruh')
		}
	},

	async delete(req, res) {
		try {
			await Task.findByIdAndDelete(req.params._id)
			res.status(200).send({ message: 'tarea eliminada' })
		} catch (error) {
			console.log(error)
			res
				.status(500)
				.send({ message: 'Ha habido un error al borrar la tarea', error })
		}
	},
}
module.exports = taskController
