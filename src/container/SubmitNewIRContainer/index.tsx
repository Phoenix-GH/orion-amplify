import * as React from "react";
import { connect } from "react-redux";
import SelectNewIR from "../../stories/screens/SelectNewIR";
import { fetchMatch } from "../MatchDetailContainer/actions";

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
		const { matchData } = nextProps;
		this.setState({ matchData });
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
	};
}

const mapStateToProps = state => {
	return {
		response: state.submitNewIRReducer.response,
		matchData: state.matchDetailReducer.match,
		isLoading: state.matchDetailReducer.isLoading,
}};
export default connect(mapStateToProps, bindAction)(SubmitNewIRContainer);
