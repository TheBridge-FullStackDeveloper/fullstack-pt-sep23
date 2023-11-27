const express = require('express')
const app = express()

const PORT = 3000

const members = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john@gmail.com',
		status: 'active',
	},
	{
		id: 2,
		name: 'Bob Williams',
		email: 'bob@gmail.com',
		status: 'inactive',
	},
	{
		id: 3,
		name: 'Shannon Jackson',
		email: 'shannon@gmail.com',
		status: 'active',
	},
]

// GET
app.get('/members', (req, res) => {
	res.status(200).send({ message: 'todo ok', result: members })
})

// get by id
app.get('/members/:id', (req, res) => {
	const found = members.some((member) => member.id === +req.params.id)

	if (found) {
		const result = members.filter((member) => member.id === +req.params.id)
		res.send(result)
	} else {
		res.status(400).send({ message: 'Not found' })
	}
})
app.use(express.json())

// create new member
app.post('/members/newMember', (req, res) => {
	const { name, email, status } = req.body
	const newMember = {
		id: members.length + 1,
		name,
		email,
		status,
	}
	if (!name || !email) {
		res.status(400).send('field required')
	} else {
		members.push(newMember)
		res.status(201).send({
			message: 'Todo ok',
			members,
		})
	}
})

// update memeber
app.put('/members/id/:id', (req, res) => {
	const found = members.some((member) => member.id == req.params.id)

	if (found) {
		members.forEach((member) => {
			if (member.id == req.params.id) {
				member.name = req.body.name ? req.body.name : member.name
				member.email = req.body.email ? req.body.email : member.email
				member.status = req.body.status || member.status
				res.send(member)
			}
		})
	} else {
		res.status(404).send('error')
	}
})

// delete
app.delete('/members/id/:id', (req, res) => {
	const found = members.some((member) => member.id == req.params.id)

	if (found) {
		const deleteItem = members.filter((member) => member.id != req.params.id)
		res.status(202).send(deleteItem)
	} else {
		res.status(400).send({ message: 'no existe lo que buscas' })
	}
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
