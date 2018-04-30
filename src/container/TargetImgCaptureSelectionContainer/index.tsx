import * as React from "react";
import { connect } from "react-redux";
import TargetImgCaptureSelection from "../../stories/screens/TargetImgCaptureSelection";
import fetchMatch from "../MatchDetailContainer/actions";
import fetchSquaddingList from "../SquaddingListContainer/actions";

export interface Props {
	navigation: any;
}

export interface State {
}

class TargetImgCaptureSelectionContainer extends React.Component<Props, State> {

	render() {
		const { targetStages } = this.props.navigation.state.params;
		return (
			<TargetImgCaptureSelection navigation={this.props.navigation} participant={null} targetStages={targetStages} />
		);
	}
}

function bindAction(dispatch) {
	return {};
}

const mapStateToProps = state => {
	return {};
};
export default connect(mapStateToProps, bindAction)(TargetImgCaptureSelectionContainer);
