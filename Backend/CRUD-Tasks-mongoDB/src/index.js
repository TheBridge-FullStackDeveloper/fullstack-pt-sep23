const express = require('express')
const mongoose = require('mongoose')

const dbconnection = require('./config/config')
const app = express()

require('dotenv').config()

dbconnection()

app.use(express.json())

app.use('/task', require('./routes/tasks.js'))

app.listen(process.env.PORT, () =>
	console.log(`Server started at port ${process.env.PORT}`)
)
