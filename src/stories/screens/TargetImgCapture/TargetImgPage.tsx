import * as React from "react";

import {
	Content,
	Thumbnail,
	Text,
	View,
} from "native-base";
import { Dimensions } from 'react-native';
import styles from "./styles";

export interface Props {
	targetStage: any;
	participant: any;
}
export interface State {}

const deviceWidth = Dimensions.get('window').width;

class TargetImgPage extends React.Component<Props, State> {
	render() {
		const { targetStage, participant } = this.props;
		console.log('targetStages', targetStage);
		console.log('participant', participant);
		return (
			<Content style={styles.targetPage}>
				<View style={{flex: 1}}>
					<Thumbnail large source={{uri: 'Image URL'}} style={styles.photoItem} />
				</View>
				<Text>{`${participant.Participant.DisplayName}: R${participant.Relay}, FP${participant.FiringPoint} ${targetStage.Name}`}</Text>
			</Content>
		);
	}
}

export default TargetImgPage;
