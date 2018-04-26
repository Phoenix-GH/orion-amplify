import * as React from "react";

import {
	Container,
	Content,
	Thumbnail,
	Text,
} from "native-base";
import styles from "./styles";

export interface Props {
	targetStages: any;
	participant: any;
}
export interface State {}
class TargetImgPage extends React.Component<Props, State> {
	render() {
		const { targetStages, participant } = this.props;
		return (
			<Container>
				<Content>
					{
						targetStages && targetStages.map(item => (
							<Thumbnail source={{uri: 'Image URL'}} style={styles.photoItem} />
						))
					}
					<Text>{participant && participant.DisplayName}</Text>
				</Content>
			</Container>
		);
	}
}

export default TargetImgPage;
