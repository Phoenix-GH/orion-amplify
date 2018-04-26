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
	targetStages: any;
	participant: any;
}
export interface State {}

const deviceWidth = Dimensions.get('window').width;

class TargetImgPage extends React.Component<Props, State> {
	render() {
		const { targetStages, participant } = this.props;
		console.log('targetStages', targetStages);
		console.log('participant', participant);
		return (
			<Content style={{ width: deviceWidth }}>
				{
					targetStages && targetStages.map(item => (
						<View>
							<Thumbnail large source={{uri: 'Image URL'}} style={styles.photoItem} key={item.Key} />
							<Text>{`${participant.Participant.DisplayName}: R${participant.Relay}, FP${participant.FiringPoint} ${item.Name}`}</Text>
						</View>
					))
				}
				
			</Content>
		);
	}
}

export default TargetImgPage;
