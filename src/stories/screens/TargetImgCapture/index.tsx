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
import TargetImgPage from "./TargetImgPage";

export interface Props {
	squaddingList: any;
	matchData: any;
	navigation: any;
}
export interface State {}
class TargetImgCapture extends React.Component<Props, State> {
	moveToCaptureSelection = () => {
		const { squaddingList, matchData } = this.props;
		this.props.navigation.navigate("TargetImgCaptureSelection", {
			targetStages: matchData.SquaddingEvents[0].TargetStages,
		});
	}

	deleteImage = () => {

	}

	render() {
		const renderTargetStage = (item) => {
			const { matchData, navigation } = this.props;
			 return matchData.SquaddingEvents[0].TargetStages.map(targetStage => {
					return <TargetImgPage targetStage={targetStage} participant={item} key={`${targetStage.Key}${item.Participant.DisplayName}`} moveToCaptureSelection={this.moveToCaptureSelection} />
			 });
		}
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
          <Right>
						<Button transparent onPress={() => this.deleteImage()}>
							<Icon name="ios-close" />
						</Button>
					</Right>
        </Header>
				<Content>
					<ScrollView
						pagingEnabled
						horizontal
						showsHorizontalScrollIndicator
						ref='_scrollView'
					>
					{
						squaddingList && squaddingList.SquaddingList && matchData && matchData.SquaddingEvents && squaddingList.SquaddingList.map((item) =>	{
							return renderTargetStage(item);
						})
					}
					</ScrollView>
				</Content>
			</Container>
		);
	}
}

export default TargetImgCapture;
