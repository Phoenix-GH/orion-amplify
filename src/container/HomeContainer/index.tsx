import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { fetchList } from "./actions";

export interface Props {
	navigation: any;
	fetchList: Function;
	data: any;
}

export interface State {
	data: any;
}

export interface State {}
class HomeContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		this.props.fetchList();
	}

	componentWillReceiveProps(nextProps) {
		const { data } = nextProps;
		this.setState({ data })
	}

	render() {
		const { data } = this.state;
		return (
				<Home navigation={this.props.navigation} list={data} />
		);
	}
}

function bindAction(dispatch) {
	return {
		fetchList: () => dispatch(fetchList()),
	};
}

const mapStateToProps = state => {
	return {
		data: state.homeReducer.list,
		isLoading: state.homeReducer.isLoading,
}};
export default connect(mapStateToProps, bindAction)(HomeContainer);
