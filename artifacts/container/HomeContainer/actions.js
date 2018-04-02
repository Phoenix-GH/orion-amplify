export function listIsLoading(bool) {
    return {
        type: "LIST_IS_LOADING",
        isLoading: bool,
    };
}
export function fetchListSuccess(list) {
    return {
        type: "FETCH_LIST_SUCCESS",
        list,
    };
}
export function fetchList(json) {
    return dispatch => {
        dispatch(fetchListSuccess(json));
        dispatch(listIsLoading(false));
    };
}
//# sourceMappingURL=actions.js.map