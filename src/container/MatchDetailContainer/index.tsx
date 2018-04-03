import * as React from "react";
import BlankPage from "../../stories/screens/MatchDetail";
export interface Props {
	navigation: any,
}
export interface State {}
export default class MatchDetailContainer extends React.Component<Props, State> {
	render() {
		return <BlankPage navigation={this.props.navigation} />;
	}
}
