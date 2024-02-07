module.exports = {
	components: {
		securitySchemes: {
			ApiKeyAuth: {
				type: 'apiKey',
				name: 'Authorization',
				in: 'header',
			},
		},
		schemas: {
			task: {
				type: 'object',
				properties: {
					_id: {
						type: 'objectId',
						description: 'task identification number',
						example: '6201064b0028de7866e2b2c4',
					},
					title: {
						type: 'string',
						description: "task's title",
						example: 'Make an excelent readme',
					},
					completed: {
						type: 'boolean',
						description: 'status of the task',
						example: false,
					},
				},
			},
			taskInput: {
				type: 'object',
				properties: {
					title: {
						type: 'string',
						description: 'Task name',
						example: 'Make an excelent readme',
					},
				},
			},
			_id: {
				type: 'objectId',
				description: 'An id of a task',
				example: '6470da3ba50d0ed22dd4ef96',
			},
		},
	},
}
