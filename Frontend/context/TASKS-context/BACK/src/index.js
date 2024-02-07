const express = require('express')
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

const cors = require('cors')

const dbconnection = require('./config/config')
const app = express()

require('dotenv').config()

dbconnection()
app.use(cors())

app.use(express.json())

app.use('/tasks', require('./routes/tasks.js'))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.listen(process.env.PORT, () =>
	console.log(`Server started at port ${process.env.PORT}`)
)
