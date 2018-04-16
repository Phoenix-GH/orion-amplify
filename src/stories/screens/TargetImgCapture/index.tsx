import * as React from "react";
import { Platform } from "react-native";
import {
	Container,
	Content,
	Header,
	Body,
	Title,
	Button,
	Text,
	View,
	Icon,
	Left,
	Right, 
} from "native-base";
//import styles from "./styles";
export interface Props {
	squaddingList: any;
	matchData: any;
	navigation: any;
}
export interface State {}
class TargetImgCapture extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
          <Body>
            <Title>Target Image Capture</Title>
          </Body>
          <Right />
        </Header>
				<Content>
					
				</Content>
			</Container>
		);
	}
}

export default TargetImgCapture;
