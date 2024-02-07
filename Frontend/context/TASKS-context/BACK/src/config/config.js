require('dotenv').config()

const mongoose = require('mongoose')
const dbconnection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI)
		console.log('You are connected to the doom')
	} catch (error) {
		console.log(error)
	}
}
module.exports = dbconnection
