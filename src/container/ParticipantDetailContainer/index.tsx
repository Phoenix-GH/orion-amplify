import * as React from "react";
import { connect } from "react-redux";
import ParticipantDetail from "../../stories/screens/ParticipantDetail";
import { fetchIncidentReport } from "../IncidentReportContainer/actions";
import { fetchMatch } from "../MatchDetailContainer/actions";

export interface Props {
	navigation: any,
	fetchIncidentReport: Function,
	fetchMatch: Function,
	data: any,
}

export interface State {
	data: any;
	matchData: any;
}

export class ParticipantDetailContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			matchData: null,
		};
	}

	componentDidMount() {
		const param = this.props.navigation.state.params;
		if(param) {
			this.props.fetchIncidentReport(param.matchID, "");
			this.props.fetchMatch(param.id);
		}
	}

	componentWillReceiveProps(nextProps) {
		const { data, matchData } = nextProps;
		this.setState({ data });
		this.setState({ matchData });
	}

	render() {
		const { navigation } = this.props;
		const squaddingdata = navigation.state.params.data;
		const { data, matchData} = this.state;
		return <ParticipantDetail navigation={navigation} squaddingData={squaddingdata} irData={data} matchData={matchData} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchIncidentReport: (matchID, incidentReportID) => dispatch(fetchIncidentReport(matchID, incidentReportID)),
		fetchMatch: matchID => dispatch(fetchMatch(matchID)),
	};
}

const mapStateToProps = state => {
	return {
		data: state.incidentReportReducer.list,
		isLoading: state.incidentReportReducer.isLoading,
		matchData: state.matchDetailReducer.match,
}};
export default connect(mapStateToProps, bindAction)(ParticipantDetailContainer);
