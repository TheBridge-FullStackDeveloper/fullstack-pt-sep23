const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())

app.use('/posts', require('./routes/posts'))
app.use('/users', require('./routes/posts'))

app.listen(PORT, () =>
	console.log(`This server is started at port http://localhost:${PORT}`)
)
