import { API } from 'aws-amplify';

export function squaddingListIsLoading(bool: boolean) {
	return {
		type: "SQUADDINGLIST_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchSquaddingSuccess(match: Object) {
	return {
		type: "FETCH_SQUADDINGLIST_SUCCESS",
		match,
	};
}

export function fetchSquaddingList(matchID) {
	return function(dispatch) {
		let apiName = "GetMatchDetail";
		let path = '/';
		let options = { body: { "MatchID": matchID }};
		API.post(apiName, path, options).then(response => {
			console.log('matchDetail', response);
			dispatch(fetchSquaddingSuccess(response));
 			dispatch(squaddingListIsLoading(false));
		});
	};
}
