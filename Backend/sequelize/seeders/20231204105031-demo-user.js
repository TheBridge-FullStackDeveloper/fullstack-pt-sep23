'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Users', [
			{
				name: 'John',
				email: 'example@example.com',
				password: '123456',
				role: 'user',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Jane',
				email: 'jane@example.com',
				password: '123456',
				role: 'user',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Peter',
				email: 'peter@example.com',
				password: '123456',
				role: 'user',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Petra',
				email: 'petra@example.com',
				password: '123456',
				role: 'user',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		])
	},

	async down(queryInterface, Sequelize) {},
}
