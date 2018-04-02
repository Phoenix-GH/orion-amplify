import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { fetchList } from "./actions";
import { getURL } from '../../global/api';
export interface Props {
	navigation: any;
	fetchList: Function;
	data: any;
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
	componentDidMount() {
		//this.props.fetchList();
	}

	render() {
		return (
			this.props.data && <Home navigation={this.props.navigation} list={this.props.data} />
		);
	}
}

function bindAction(dispatch) {
	return {
		fetchList: () => dispatch(fetchList()),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
