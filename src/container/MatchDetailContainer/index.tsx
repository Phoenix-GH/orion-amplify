import * as React from "react";
import { connect } from "react-redux";
import MatchDetail from "../../stories/screens/MatchDetail";
import { fetchMatch } from "./actions";

export interface Props {
	navigation: any,
	fetchMatch: Function,
	data: any,
}

export interface State {
	data: any;
}

export class MatchDetailContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		const param = this.props.navigation.state.params;
		if(param)
			this.props.fetchMatch(param.id);
	}

	componentWillReceiveProps(nextProps) {
		const { data } = nextProps;
		this.setState({ data })
	}

	render() {
		const { data } = this.state;
		return <MatchDetail navigation={this.props.navigation} data={data} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchMatch: matchID => dispatch(fetchMatch(matchID)),
	};
}

const mapStateToProps = state => {
	return {
		data: state.matchDetailReducer.match,
		isLoading: state.matchDetailReducer.isLoading,
}};
export default connect(mapStateToProps, bindAction)(MatchDetailContainer);