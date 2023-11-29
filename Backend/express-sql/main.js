const express = require('express')
const app = express()
const mysql = require('mysql2')

const PORT = 5432

app.use(express.json())

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Mysql2023',
	database: 'expressSqlDB',
})

db.connect()

app.get('/createdb', (req, res) => {
	const sql = 'CREATE DATABASE expressSqlDB'

	db.query(sql, (err, result) => {
		if (err) throw err
		console.log(result)
		res.send('Database created...')
	})
})

app.get('/createTableUsers', (req, res) => {
	const sql =
		'CREATE TABLE users(id int AUTO_INCREMENT,name VARCHAR(255), address VARCHAR(255), PRIMARY KEY(id))'

	db.query(sql, (err, result) => {
		if (err) throw err
		console.log(result)
		res.send('Users table created...')
	})
})
app.get('/createTablePosts', (req, res) => {
	const sql =
		'CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(50), body VARCHAR(255), PRIMARY KEY(id))'

	db.query(sql, (err, result) => {
		if (err) throw err
		console.log(result)
		res.send('Posts table created...')
	})
})

app.get('/dropTableUsers', (req, res) => {
	const sql = 'DROP TABLE users'

	db.query(sql, (err, result) => {
		if (err) throw err
		console.log(result)
		res.send('Users table deleted...')
	})
})

app.post('/', (req, res) => {
	console.log(req.body)
	const sql = `INSERT INTO posts (title, body) values ('${req.body.title}', '${req.body.body}');`

	db.query(sql, (err, result) => {
		if (err) throw err
		console.log(result)
		res.send('Post added...')
	})
})

app.post('/', (req, res) => {
	const post = {
		title: req.body.title,
		body: req.body.body,
	}
	const sql = 'INSERT INTO posts SET ?'

	db.query(sql, post, (err, result) => {
		if (err) throw err
		console.log(result)
		res.send('Post added...')
	})
})

app.get('/posts', (req, res) => {
	const sql = 'SELECT * FROM posts'

	db.query(sql, (err, result) => {
		if (err) throw err
		res.send({ message: 'Get posts', result })
	})
})

app.get('/posts/id/:id', (req, res) => {
	const sql = `SELECT * FROM posts WHERE id = ${req.params.id}`

	db.query(sql, (err, result) => {
		if (err) throw err
		res.send(result)
	})
})

app.put('/posts/id/:id', (req, res) => {
	const newTitle = 'Updated Title'
	const sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`

	db.query(sql, (err, result) => {
		if (err) throw err
		res.send('Post updated...')
	})
})

app.delete('/posts/:id', (req, res) => {
	const sql = `DELETE FROM posts WHERE id = ${req.params.id}`

	db.query(sql, (err, result) => {
		if (err) throw err
		res.send('Post deleted')
	})
})

app.listen(PORT, () =>
	console.log(`This server is started at port http://localhost:${PORT}`)
)
