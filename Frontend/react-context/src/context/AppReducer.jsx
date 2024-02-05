const characters = (state, action) => {
	switch (action.type) {
		case 'GET_CHARACTERS':
			return {
				...state,
				characters: action.payload,
			}
		default:
			return state
	}
}
export default characters
