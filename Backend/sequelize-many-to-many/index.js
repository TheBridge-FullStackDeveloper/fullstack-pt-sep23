const express = require('express')
const routerBooks = require('./routes/books')
const app = express()
const PORT = 3000

app.use(express.json())

app.use('/books', routerBooks)
app.use('/genres', require('./routes/genres'))

app.listen(PORT, () => console.log(`Starting server at port:${PORT}`))
