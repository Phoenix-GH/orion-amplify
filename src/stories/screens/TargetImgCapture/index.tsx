import * as React from "react";
import { ScrollView } from 'react-native';
import {
	Container,
	Content,
	Header,
	Body,
	Title,
	Button,
	Icon,
	Left,
	Right,
} from "native-base";
import styles from "./styles";
import TargetImgPage from "./TargetImgPage";

export interface Props {
	squaddingList: any;
	matchData: any;
	navigation: any;
}
export interface State {}
class TargetImgCapture extends React.Component<Props, State> {
	render() {
		const { squaddingList, matchData } = this.props;
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
					<ScrollView
						pagingEnabled
						horizontal
						showsHorizontalScrollIndicator
						ref='_scrollView'
					>
					{
						squaddingList && squaddingList.SquaddingList && matchData && matchData.SquaddingEvents && squaddingList.SquaddingList.map((item, index) => (
							<TargetImgPage key={index} targetStages={matchData.SquaddingEvents[0].TargetStages} participant={item} />
						))
					}
					</ScrollView>
				</Content>
			</Container>
		);
	}
}

export default TargetImgCapture;
