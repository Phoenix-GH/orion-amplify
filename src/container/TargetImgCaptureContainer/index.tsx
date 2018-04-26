import * as React from "react";
import { connect } from "react-redux";
import TargetImgCapture from "../../stories/screens/targetImgCapture";
import fetchMatch from "../MatchDetailContainer/actions";
import fetchSquaddingList from "../SquaddingListContainer/actions";

export interface Props {
	navigation: any;
	fetchMatch: Function,
	fetchSquaddingList: Function,
}

export interface State {
	matchData: any;
	squaddingList: any;
}

class TargetImgCaptureContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			matchData: null,
			squaddingList: [],
		};
	}

	componentDidMount() {
		const param = this.props.navigation.state.params;
		console.log('target param', param);
		if(param) {
			this.props.fetchSquaddingList(param.matchID, param.eventName);
			this.props.fetchMatch(param.matchID);
		}
	}

	componentWillReceiveProps(nextProps) {
		const { squaddingList, matchData } = nextProps;
		this.setState({ squaddingList });
		this.setState({ matchData });
		console.log('squaddinglist', squaddingList);
	}

	render() {
		const { matchData, squaddingList } = this.state;
		return (
			<TargetImgCapture navigation={this.props.navigation} squaddingList={squaddingList} matchData={matchData} />
		);
	}
}

function bindAction(dispatch) {
	return {
		fetchSquaddingList: (matchID, eventName) => dispatch(fetchSquaddingList(matchID, eventName)),
		fetchMatch: matchID => dispatch(fetchMatch(matchID)),
	};
}

const mapStateToProps = state => {
	return {
		matchData: state.matchDetailReducer.match,
		isMatchLoading: state.matchDetailReducer.isLoading,
		squaddingList: state.squaddingListReducer.list,
		isListLoading: state.squaddingListReducer.isLoading,

}};
export default connect(mapStateToProps, bindAction)(TargetImgCaptureContainer);
