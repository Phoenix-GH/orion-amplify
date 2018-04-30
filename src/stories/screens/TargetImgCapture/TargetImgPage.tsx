import * as React from "react";

import {
	Content,
	Text,
	View,
	Button,
	Icon,
} from "native-base";
import { Image } from 'react-native';
import styles from "./styles";

export interface Props {
	targetStage: any;
	participant: any;
	moveToCaptureSelection: Function;
}
export interface State {}

class TargetImgPage extends React.Component<Props, State> {
	takePhoto = () => {

	}
	
	confirm = () => {

	}

	render() {
		const { targetStage, participant } = this.props;
		return (
			<Content style={styles.targetPage}>
				<View style={{flex:1, height: undefined, width: undefined, flexDirection: 'column'}}>
					<Image source={require('../../../../assets/guide/guide1.jpeg')} style={styles.photoItem} resizeMode="contain" />
				</View>
				<View style={styles.contentView}>
					<View style={styles.buttonRow}>	
						<Button block onPress={() => this.takePhoto()} style={styles.takePhotoButton}>
							<Text>Take Photo</Text>
						</Button>
						<Button>
							<Icon name="checkmark" />
						</Button>
					</View>
					<Button block onPress={() => this.props.moveToCaptureSelection()} style={{marginTop: 10}}>
						<Text>Image Capture Selection</Text>
					</Button>
					<Text>{`${participant.Participant.DisplayName}: R${participant.Relay}, FP${participant.FiringPoint} ${targetStage.Name}`}</Text>
				</View>
			</Content>
		);
	}
}

export default TargetImgPage;
