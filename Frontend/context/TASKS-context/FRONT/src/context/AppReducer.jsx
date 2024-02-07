const tasks = (state, action) => {
	switch (action.type) {
		case 'GET_TASKS':
			return {
				...state,
				tasks: action.payload,
			}
		case 'DELETE_TASK':
			return {
				...state,
				tasks: state.tasks.filter((task) => task._id !== action.payload),
			}
		case 'ADD_TASK':
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			}
		case 'GET_TASK':
			return {
				...state,
				task: action.payload,
			}

		default:
			return state
	}
}
export default tasks
