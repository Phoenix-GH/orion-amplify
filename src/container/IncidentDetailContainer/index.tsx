import * as React from "react";
import IncidentDetail from "../../stories/screens/IncidentDetail";

export interface Props {
	navigation: any,
}

export interface State {}

export default class IncidentDetailContainer extends React.Component<Props, State> {
	render() {
		const { data } = this.props.navigation.state.params;
		return <IncidentDetail navigation={this.props.navigation} data={data} />;
	}
}
