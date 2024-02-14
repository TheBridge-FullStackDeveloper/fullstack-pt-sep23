const express = require('express')
const app = express()
const { typeError } = require('./middlewares/errors')
require('dotenv').config()

const cors = require('cors')

const PORT = process.env.PORT || 3001

const { dbConnection } = require('./config/config')

app.use(express.json())

dbConnection()

app.use(cors())

app.use('/products', require('./routes/products'))
app.use('/users', require('./routes/users'))
app.use('/orders', require('./routes/orders'))

app.use(typeError)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
