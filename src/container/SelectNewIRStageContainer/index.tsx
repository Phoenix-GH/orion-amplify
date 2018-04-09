import * as React from "react";
import { connect } from "react-redux";
import SelectNewIRStage from "../../stories/screens/SelectNewIRStage";
import { fetchMatch } from "../MatchDetailContainer/actions";

export interface Props {
	navigation: any;
	fetchMatch: Function;
	data: any;
	squaddingData: any;
}

export interface State {
	matchData: any;
}

export class SubmitIncidentReportContainer extends React.Component<Props, State> {
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

	render() {
		const { navigation } = this.props;
		const { matchData } = this.state;
		return <SelectNewIRStage navigation={navigation} matchData={matchData} squaddingData={navigation.state.params.squaddingData} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchMatch: matchID => dispatch(fetchMatch(matchID)),
	};
}

const mapStateToProps = state => {
	return {
		isLoading: state.matchDetailReducer.isLoading,
		matchData: state.matchDetailReducer.match,
}};
export default connect(mapStateToProps, bindAction)(SubmitIncidentReportContainer);
