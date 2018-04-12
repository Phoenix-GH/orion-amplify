import { API } from 'aws-amplify';

export function submitIncidentIsLoading(bool: boolean) {
	return {
		type: "SUBMIT_INCIDENT_IS_LOADING",
		isLoading: bool,
	};
}
export function submitIncidentSuccess(response: Object) {
	return {
		type: "SUBMIT_INCIDENT_SUCCESS",
		response,
	};
}

export function submitIncidentReport(body) {
	return function(dispatch) {
		let apiName = "SubmitIncidentReport";
		let path = '/';
		let options = {body};
		API.post(apiName, path, options).then(response => {
			dispatch(submitIncidentSuccess(response));
 			dispatch(submitIncidentIsLoading(false));
		});
	};
}
