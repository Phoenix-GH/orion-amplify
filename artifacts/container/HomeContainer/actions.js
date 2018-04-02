import { getURL } from '../../global/api';
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
export function fetchList() {
    return function (dispatch) {
        return fetch(getURL('548ymwfm2i'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Longitude: 0,
                Latitude: 0,
            })
        })
            .then(response => response.json(), 
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
            error => console.log('An error occurred.', error))
            .then(json => {
            dispatch(fetchListSuccess(json));
            dispatch(listIsLoading(false));
        });
    };
}
//# sourceMappingURL=actions.js.map