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
		fetch(getURL('548ymwfm2i'),
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				Longitude: 0,
				Latitude: 0,
			})
		})
		.then(
			response => response.json(),
			// Do not use catch, because that will also catch
			// any errors in the dispatch and resulting render,
			// causing a loop of 'Unexpected batch number' errors.
			// https://github.com/facebook/react/issues/6895
			error => console.log('An error occurred.', error)
		)
		.then(json =>
			// We can dispatch many times!
			// Here, we update the app state with the results of the API call.
			{
				this.props.fetchList(json);
			}
		)
	}

	render() {
		return <Home navigation={this.props.navigation} list={this.props.data} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: json => dispatch(fetchList(json)),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
