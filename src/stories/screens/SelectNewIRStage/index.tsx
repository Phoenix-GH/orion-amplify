import * as React from "react";
import {
	Container,
	Header,
	Title,
	Content,
	Text,
	Button,
	Icon,
	Left,
	Right,
	Body, 
	H2,
	List,
	ListItem,
} from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	matchData: any;
	squaddingData: any;
}
export interface State {}
class SelectNewIRStage extends React.Component<Props, State> {
	render() {
		const { navigation, matchData, squaddingData } = this.props;
		console.log('squadding on selectnewIRstage', squaddingData);
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>{"Submit Incident Report"}</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<H2>{squaddingData && squaddingData.Participant.DisplayName}</H2>
					<List>
            {
							matchData && matchData.SquaddingEvents && matchData.SquaddingEvents[0].TargetStages.map((item, i) => (
								<ListItem
									key={i}
									onPress={() =>
										this.props.navigation.navigate("IncidentDetail", {
											data: item,
									})}
								>
									<Text>{item.Name}</Text>
								</ListItem>
							))
						}
          </List>
				</Content>
			</Container>
		);
	}
}

export default SelectNewIRStage;
