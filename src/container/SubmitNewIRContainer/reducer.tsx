const initialState = {
	response: {},
	isLoading: true,
};

export default function(state = initialState, action) {
	if (action.type === "SUBMIT_INCIDENT_SUCCESS") {
		return {
			...state,
			response: action.response,
		};
	}
	if (action.type === "SUBMIT_INCIDENT_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
	return state;
}
