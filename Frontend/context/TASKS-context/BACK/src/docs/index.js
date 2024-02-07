const basicInfo = require('./basicInfo')
const components = require('./components')
const tasks = require('./tasks')

module.exports = {
	...basicInfo,
	...tasks,
	...components,
}
