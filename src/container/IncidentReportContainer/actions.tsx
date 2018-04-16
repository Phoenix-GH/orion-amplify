import { API } from 'aws-amplify';

export function reportIsLoading(bool: boolean) {
	return {
		type: "INCIDENTREPORT_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchReportSuccess(list: Object) {
	return {
		type: "FETCH_INCIDENTREPORT_SUCCESS",
		list,
	};
}

export function fetchIncidentReport(matchID, incidentReportID = null) {
	return function(dispatch) {
		let apiName = "GetIncidentReport";
		let path = '/';
		let options = { body: { "MatchID": matchID, "IncidentReportID": incidentReportID }};
		API.post(apiName, path, options).then(response => {
			console.log('GetIncidentReport response', response);
			dispatch(fetchReportSuccess(response));
			dispatch(reportIsLoading(false));
		});
	};
}
