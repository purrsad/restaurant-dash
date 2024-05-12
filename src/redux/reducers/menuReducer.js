const initialState = {
	menu: [],
	shortName: "",
};

export function menuReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_MENU":
			return {
				...state,
				menu: action.payload,
			};
		case "SET_SHORT_NAME":
			return {
				...state,
				shortName: action.payload,
			};
		default:
			return state;
	}
}
