module.exports = {
	paths: {
		'/tasks/getAll': {
			get: {
				tags: {
					Tasks: 'Get Tasks',
				},
				description: 'Get tasks',
				operationId: 'getTasks',
				parameters: [],
				responses: {
					200: {
						description: 'Tasks were obtained',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/task',
								},
							},
						},
					},
				},
			},
		},
		'/tasks/create': {
			post: {
				security: [{ ApiKeyAuth: [] }],
				tags: {
					Tasks: 'Create a task',
				},
				description: 'Create Task',
				operationId: 'createTask',
				parameters: [],
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/taskInput',
							},
						},
					},
				},
				responses: {
					201: {
						description: 'Task created successfully',
					},
					500: {
						description: 'Server error',
					},
				},
			},
		},
		'/tasks/changeTitle/{_id}': {
			put: {
				security: [{ ApiKeyAuth: [] }],
				tags: {
					Task: 'Update a task',
				},
				description: 'Update Task',
				operationId: 'updateTask',
				parameters: [
					{
						name: '_id',
						in: 'path',
						schema: {
							$ref: '#/components/schemas/_id',
						},
						description: 'Id of Task to be updated',
					},
				],
				requestBody: {
					content: {
						'application/json': {
							schema: { $ref: '#/components/schemas/taskInput' },
						},
					},
				},
				responses: {
					200: { description: 'Task updated successfully' },
					404: { description: 'Task not found' },
					500: { description: 'Server error' },
				},
			},
		},
		'/tasks/delete/{_id}': {
			delete: {
				security: [{ ApiKeyAuth: [] }],
				tags: {
					Task: 'Delete a task',
				},
				description: 'Deleting a Task',
				operationId: 'deleteTask',
				parameters: [
					{
						name: '_id',
						in: 'path',
						schema: {
							$ref: '#/components/schemas/_id',
						},
						description: 'Deleting a Task',
					},
				],
				responses: {
					200: { description: 'Task deleted successfully' },
					404: { description: 'Task not found' },
					500: { description: 'Server error' },
				},
			},
		},
	},
}
