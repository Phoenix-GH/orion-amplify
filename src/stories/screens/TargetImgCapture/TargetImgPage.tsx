import * as React from "react";

import {
	Content,
	Text,
	View,
	Button,
	Thumbnail,
} from "native-base";
import { Image } from 'react-native';
import styles from "./styles";

export interface Props {
	targetStage: any;
	participant: any;
}
export interface State {}

class TargetImgPage extends React.Component<Props, State> {
	takePhoto = () => {

	}
	render() {
		const { targetStage, participant } = this.props;
		console.log('targetStages', targetStage);
		console.log('participant', participant);
		return (
			<Content style={styles.targetPage} key={`${targetStage.Key}${participant.Participant.DisplayName}`}>
				<View style={{flex:1, height: undefined, width: undefined, flexDirection: 'column'}}>
					<Image source={require('../../../../assets/guide/guide1.jpeg')} style={styles.photoItem} resizeMode="contain" />
				</View>
				<View>	
					<Button block onPress={() => this.takePhoto()}>
						<Text>Take Photo</Text>
					</Button>
				</View>
				<Text>{`${participant.Participant.DisplayName}: R${participant.Relay}, FP${participant.FiringPoint} ${targetStage.Name}`}</Text>
			</Content>
		);
	}
}

export default TargetImgPage;
