import { getURL } from '../../global/api';

export function listIsLoading(bool: boolean) {
	return {
		type: "LIST_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchListSuccess(list: Object) {
	return {
		type: "FETCH_LIST_SUCCESS",
		list,
	};
}
export function fetchList(json) {
	return dispatch => {
		dispatch(fetchListSuccess(json));
		dispatch(listIsLoading(false));
	}
}
