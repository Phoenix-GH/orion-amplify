import * as React from "react";
import { connect } from "react-redux";
import ParticipantDetail from "../../stories/screens/ParticipantDetail";
import { fetchIncidentReport } from "../IncidentReportContainer/actions";

export interface Props {
	navigation: any,
	fetchIncidentReport: Function,
	data: any,
}

export interface State {
	data: any;
}

export class ParticipantDetailContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		const param = this.props.navigation.state.params;
		if(param) {
			this.props.fetchIncidentReport(param.matchID, "");
		}
	}

	componentWillReceiveProps(nextProps) {
		const { data } = nextProps;
		console.log('will receive data', data);
		this.setState({ data })
	}

	render() {
		const { navigation } = this.props;
		const squaddingdata = navigation.state.params.data;
		const data = this.state.data;
		return <ParticipantDetail navigation={navigation} squaddingdata={squaddingdata} irdata={data} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchIncidentReport: (matchID, incidentReportID) => dispatch(fetchIncidentReport(matchID, incidentReportID)),
	};
}

const mapStateToProps = state => {
	return {
		data: state.incidentReportReducer.list,
		isLoading: state.incidentReportReducer.isLoading,
}};
export default connect(mapStateToProps, bindAction)(ParticipantDetailContainer);
