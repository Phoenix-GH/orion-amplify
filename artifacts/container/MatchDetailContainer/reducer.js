const initialState = {
    list: [],
    isLoading: true,
};
export default function (state = initialState, action) {
    if (action.type === "FETCH_MATCH_SUCCESS") {
        return Object.assign({}, state, { match: action.match });
    }
    if (action.type === "MATCH_IS_LOADING") {
        return Object.assign({}, state, { isLoading: action.isLoading });
    }
    return state;
}
//# sourceMappingURL=reducer.js.map