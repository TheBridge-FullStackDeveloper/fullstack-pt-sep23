const express = require('express')
const app = express()
const { typeError } = require('./middlewares/errors')

const PORT = 3000

app.use(express.json())

app.use('/users', require('./routes/users'))
app.use('/posts', require('./routes/posts'))

app.use(typeError)

app.listen(PORT, () =>
	console.log(`Server started at port ${PORT} http://localhost:${PORT}`)
)
