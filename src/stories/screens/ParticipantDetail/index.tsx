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
	Thumbnail,
} from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	irData: any;
	squaddingData: any;
	matchData: any;
}
export interface State {}
class ParticipantDetail extends React.Component<Props, State> {
	render() {
		const { irData, navigation, squaddingData, matchData } = this.props;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>{squaddingData ? squaddingData.Participant.DisplayName : "Participant Detail"}</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<H2>{squaddingData && squaddingData.Participant.DisplayName}</H2>
					<Text>Relay: {squaddingData && squaddingData.Relay}</Text>
					<Text>Firing Point: {squaddingData && squaddingData.FiringPoint}</Text>
					
					<List>
            {
							matchData && matchData.SquaddingEvents && matchData.SquaddingEvents[0].TargetStages.map((item, i) => (
								<ListItem
									icon
									key={i}
								>
									<Left>
										<Thumbnail square size={80} source={{ uri: 'Image URL' }} />
									</Left>
            			<Body>
										<Text>{item.Name}</Text>
									</Body>
									<Right>
										<Icon name='checkmark' />
									</Right>
								</ListItem>
							))
						}
          </List>
					<Button iconLeft light>
            <Icon name='camera' />
						<Text />
          </Button>
					<H2 style={styles.h2}>Rule Violation</H2>
					<List>
            {
							irData && irData.IncidentReportList.map((item, i) => (
							(item.Participant.CompetitorNumber === squaddingData.Participant.CompetitorNumber) &&
								<ListItem
									key={i}
									onPress={() =>
										this.props.navigation.navigate("IncidentDetail", {
											data: item,
										})}
								>
									<Text>{item.RuleViolation.Name}</Text>	
								</ListItem>
							))
						}
          </List>
					<Button style={styles.newIRButton} block onPress={() => navigation.navigate('SelectNewIRStage', { matchID: navigation.state.params.matchID, squaddingData: squaddingData })}>
            <Text>New Incident Report</Text>
          </Button>
				</Content>
			</Container>
		);
	}
}

export default ParticipantDetail;
