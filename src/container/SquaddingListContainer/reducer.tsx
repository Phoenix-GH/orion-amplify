const initialState = {
	match: {},
	isLoading: true,
};

export default function(state = initialState, action) {
	if (action.type === "FETCH_MATCH_SUCCESS") {
		return {
			...state,
			match: action.match,
		};
	}
	if (action.type === "MATCH_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	return state;
}
