import * as React from "react";
import { Toast } from "native-base";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import SelectNewIR from "../../stories/screens/SubmitNewIR";
import fetchMatch from "../MatchDetailContainer/actions";
import submitIncidentReport from "./actions";

export interface Props {
	navigation: any;
	fetchMatch: Function;
	data: any;
	squaddingData: any;
	submitIncidentReport: any;
}

export interface State {
	matchData: any;
}

export class SubmitNewIRContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			matchData: null,
		};
	}

	componentDidMount() {
		const param = this.props.navigation.state.params;
		if(param) {
			this.props.fetchMatch(param.matchID);
		}
	}
	
	componentWillReceiveProps(nextProps) {
		const { matchData, response } = nextProps;
		this.setState({ matchData });
		if(response && response.IncidentReportID) {
			Toast.show({
				text: "Successfully submitted!",
				duration: 2000,
				position: "top",
				type: 'success',
				textStyle: { textAlign: "center" },
			});
			this.props.navigation.goBack();
		}
	}

	handleSubmit(data) {
		this.props.submitIncidentReport(data);
	}

	render() {
		const { navigation } = this.props;
		const { matchData } = this.state;
		return <SelectNewIR navigation={navigation} matchData={matchData} squaddingData={navigation.state.params.squaddingData} onSubmit={(data) => this.handleSubmit(data)}/>;
	}
}

function bindAction(dispatch) {
	return {
		fetchMatch: matchID => dispatch(fetchMatch(matchID)),
		submitIncidentReport: body => dispatch(submitIncidentReport(body)),
	};
}

const mapStateToProps = state => {
	return {
		response: state.submitNewIRReducer.response,
		matchData: state.matchDetailReducer.match,
		isLoading: state.matchDetailReducer.isLoading,
}};


export default connect(mapStateToProps, bindAction)(SubmitNewIRContainer);
