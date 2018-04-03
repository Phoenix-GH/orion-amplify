import { getURL } from '../../global/api';

export function matchIsLoading(bool: boolean) {
	return {
		type: "MATCH_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchMatchSuccess(match: Object) {
	return {
		type: "FETCH_MATCH_SUCCESS",
		match,
	};
}
export function fetchMatch(matchID) {
	return function(dispatch) {
		console.log('matchid', matchID);
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
			error => console.log('An error occurred on match Details actions.', error)
		)
		.then(json =>
			// We can dispatch many times!
			// Here, we update the app state with the results of the API call.
			{
				console.log('match', json);
				dispatch(fetchMatchSuccess(json));
				dispatch(matchIsLoading(false));
			}
		)
	}
}
