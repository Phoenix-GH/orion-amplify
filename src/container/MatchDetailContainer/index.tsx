import * as React from "react";
import MatchDetail from "../../stories/screens/MatchDetail";
export interface Props {
	navigation: any,
}
export interface State {}
export default class MatchDetailContainer extends React.Component<Props, State> {
	render() {
		return <MatchDetail navigation={this.props.navigation} />;
	}
}
