import { API } from 'aws-amplify';
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
        let apiName = "GetMatchDetail";
        let path = '/';
        let options = { body: { "MatchID": matchID } };
        API.post(apiName, path, options).then(response => {
            dispatch(fetchMatchSuccess(response));
            dispatch(matchIsLoading(false));
        });
    };
}
//# sourceMappingURL=actions.js.map