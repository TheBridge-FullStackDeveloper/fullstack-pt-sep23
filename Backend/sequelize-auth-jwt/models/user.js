'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.Post)
		}
	}
	User.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: 'Nombre requerido',
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: 'Por favor introduce tu correo',
					},
					isEmail: {
						msg: 'Por favor introduce un correo valido',
					},
				},
			},
			password: DataTypes.STRING,
			role: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
		}
	)
	return User
}
