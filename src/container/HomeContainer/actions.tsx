import { API } from 'aws-amplify';

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
export function fetchList() {
	return function(dispatch) {
		let apiName = "MatchSearch";
		let path = '/';
		let options = { body: { "Longitude": 0, "Latitude": 0 }};
		API.post(apiName, path, options).then(response => {
			dispatch(fetchListSuccess(response));
 			dispatch(listIsLoading(false));
		});
	}
}
