const express = require('express')
const app = express()

const PORT = 8080

const { dbConnection } = require('./config/config')

app.use(express.json())

dbConnection()
app.use('/products', require('./routes/products'))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
