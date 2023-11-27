const express = require('express')
const app = express()
const path = require('path')

const PORT = 3030

// app.get('/', (req, res) => {
// 	res.send('hola endpoint')
// 	Obtener datos de la bd
// 	Cargar páginas
// 	Devolver un json
// 	Total acceso a la request & response
// })

app.get('/myName/:name', (req, res) => {
	console.log(req.params.name)
	res.send(`Hola ${req.params.name}`)
})

app.get('/myName', (req, res) => {
	res.send(`My name is ${req.query.name}`)
})

app.use(express.json())

app.post('/myName', (req, res) => {
	res.send(`My name is ${req.body.name}`)
})

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})
