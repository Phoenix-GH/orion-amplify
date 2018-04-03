import { getURL } from '../../global/api';
export function matchIsLoading(bool) {
    return {
        type: "MATCH_IS_LOADING",
        isLoading: bool,
    };
}
export function fetchMatchSuccess(match) {
    return {
        type: "FETCH_MATCH_SUCCESS",
        match,
    };
}
export function fetchMatch(matchID) {
    return function (dispatch) {
        console.log('matchid', matchID);
        return fetch(getURL('vu83zwopu5'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                MatchID: matchID
            })
        })
            .then(response => response.json(), error => console.log('An error occurred on match Details actions.', error))
            .then(json => {
            dispatch(fetchMatchSuccess(json));
            dispatch(matchIsLoading(false));
        });
    };
}
//# sourceMappingURL=actions.js.map