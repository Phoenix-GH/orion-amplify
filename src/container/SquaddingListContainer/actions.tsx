import { API } from 'aws-amplify';

export function squaddingListIsLoading(bool: boolean) {
	return {
		type: "SQUADDINGLIST_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchSquaddingSuccess(list: Object) {
	return {
		type: "FETCH_SQUADDINGLIST_SUCCESS",
		list,
	};
}

export function fetchSquaddingList(matchID, eventName) {
	return function(dispatch) {
		let apiName = "GetSquaddingList";
		let path = '/';
		let options = { body: { "MatchID": matchID, "EventName": eventName }};
		API.post(apiName, path, options).then(response => {
			dispatch(fetchSquaddingSuccess(response));
 			dispatch(squaddingListIsLoading(false));
		});
	};
}
