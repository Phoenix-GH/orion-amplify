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
	irdata: any;
	squaddingdata: any;
}
export interface State {}
class ParticipantDetail extends React.Component<Props, State> {
	render() {
		console.log('props of participant detail', this.props);
		const { irdata, navigation, squaddingdata } = this.props;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>{squaddingdata ? squaddingdata.Participant.DisplayName : "Participant Detail"}</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<H2>{squaddingdata && squaddingdata.Participant.DisplayName}</H2>
					<Text>Relay: {squaddingdata && squaddingdata.Relay}</Text>
					<Text>Firing Point: {squaddingdata && squaddingdata.FiringPoint}</Text>
					
					<H2 style={styles.h2}>Rule Violation</H2>
					<List>
            {
							irdata && irdata.IncidentReportList.map((item, i) => (
							(item.Participant.CompetitorNumber === squaddingdata.Participant.CompetitorNumber) &&
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
					<Button block>
            <Text>New Incident Report</Text>
          </Button>
				</Content>
			</Container>
		);
	}
}

export default ParticipantDetail;
