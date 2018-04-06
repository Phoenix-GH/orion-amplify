import * as React from "react";
import { connect } from "react-redux";
import IncidentReport from "../../stories/screens/IncidentReport";
import { fetchIncidentReport } from "./actions";

export interface Props {
	navigation: any,
	fetchIncidentReport: Function,
	data: any;
}
export interface State {
	data: any;
}

export class IncidentReportContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		const param = this.props.navigation.state.params;
		console.log('param', param.matchID);
		if(param) {
			this.props.fetchIncidentReport(param.matchID, "");
		}
	}

	componentWillReceiveProps(nextProps) {
		const { data } = nextProps;
		this.setState({ data })
	}

	render() {
		const { data } = this.state;
		console.log('data', data);
		return <IncidentReport navigation={this.props.navigation} list={data} />;
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
export default connect(mapStateToProps, bindAction)(IncidentReportContainer);
