const mysql = require('mysql2')

const db = mysql.createConnection({
	host: '',
	user: '',
	password: '',
	database: '',
})

db.connect()

module.exports = db
