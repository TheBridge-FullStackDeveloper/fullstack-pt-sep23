const http = require('http')
const fs = require('fs')
const url = require('url')
// const math = require('./maths')

// const address = 'http://localhost:8080/default.html?year=2017&month=february'
// const query = url.parse(address, true)

// console.log(query.host) //'localhost:8080'
// console.log(query.pathname) //'/default.html'
// console.log(query.search) //'?year=2017&month=february'

// const queryData = query.query //{ year: 2017, month: 'february' }
// console.log(queryData.month) //'february'

// http
// 	.createServer((req, res) => {
// 		res.writeHead(200, { 'Content-Type': 'text/html' })
// 		res.end('Aprendiendo en The Bridge!')
// 	})
// 	.listen(8080)

// const callback = (err, data) => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	}

// 	fs.writeFile('output.txt', data.toLowerCase(), (error) => {
// 		if (error) {
// 			console.error(error)
// 			return
// 		}
// 	})
// }

// fs.readFile('test.txt', 'utf8', callback)

// console.log(math.add(2, 8))
// console.log(math.subtract(2, 8))

// http
// 	.createServer((req, res) => {
// 		fs.readFile('index.html', (err, data) => {
// 			res.writeHead(200, { 'Content-Type': 'text/html' })
// 			res.write(data)
// 			return res.end()
// 		})
// 	})
// 	.listen(8080)

http
	.createServer((req, res) => {
		const query = url.parse(req.url, true)
		console.log(query.pathname)
		const filename = `./pages${query.pathname}.html`

		fs.readFile(filename, (err, data) => {
			try {
				res.writeHead(200, { 'Content-Type': 'text/html' })
				res.write(data)
				return res.end()
			} catch (error) {
				fs.readFile('./pages/notFound.html', (err, data) => {
					res.writeHead(404, { 'Content-Type': 'text/html' })
					console.error(error)
					return res.end(data)
				})
			}
		})
	})
	.listen(8080)
