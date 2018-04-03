import { getURL } from '../../global/api';

export function matchIsLoading(bool: boolean) {
	return {
		type: "MATCH_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchMatchSuccess(list: Object) {
	return {
		type: "FETCH_MATCH_SUCCESS",
		list,
	};
}
export function fetchMatch(matchID) {
	return function(dispatch) {
		return fetch(getURL('vu83zwopu5'),
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				MatchID: matchID
			})
		})
		.then(
			response => response.json(),
			error => console.log('An error occurred.', error)
		)
		.then(json =>
			// We can dispatch many times!
			// Here, we update the app state with the results of the API call.
			{
				console.log('json', json);
				dispatch(fetchMatchSuccess(json));
				dispatch(matchIsLoading(false));
			}
		)
	}
}
