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
		const { irdata, navigation, squaddingdata } = this.props;
		console.log('navigation of participant detail', this.props.navigation);
		console.log('squaddingdata', squaddingdata);
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
					<H2>Incident Reports</H2>
					<List>
            {irdata && irdata.IncidentReportList.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("IncidentDetail", {
										irID: item.IncidentReportID,
                  })}
              >
								<Text>{item.RuleViolation.Name}</Text>	
              </ListItem>
            ))}
          </List>
				</Content>
			</Container>
		);
	}
}

export default ParticipantDetail;
