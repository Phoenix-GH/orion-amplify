const initialState = {
	list: {},
	isLoading: true,
};

export default function(state = initialState, action) {
	if (action.type === "FETCH_SQUADDINGLIST_SUCCESS") {
		return {
			...state,
			list: action.list,
		};
	}
	if (action.type === "SQUADDINGLIST_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	return state;
}
