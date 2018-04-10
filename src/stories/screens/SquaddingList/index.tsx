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
	List,
	ListItem,
	Card,
	CardItem
} from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	list: any;
}
export interface State {}
class SquaddingList extends React.Component<Props, State> {
	render() {
		const { list } = this.props;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>Squadding List</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<Text>Squadding For</Text>
					<Text style={styles.title}>{list && list.EventName}</Text>
					<List>
            {list && list.SquaddingList.map((item, i) => (
              <ListItem
                style={styles.listItem}
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("ParticipantDetail", {
										matchID: list.MatchID,
                  })}
              >
								<Card>
									<CardItem header>
										<Text>{item.Participant.DisplayName}</Text>	
									</CardItem>
									<CardItem>
										<Body>
											{
												item.Participant.Club && <Text>{item.Participant.Club}</Text>	
											}
											<Text>Relay: {item.Relay}</Text>
											<Text>Firing Point: {item.FiringPoint}</Text>
										</Body>
									</CardItem>
								</Card>
              </ListItem>
            ))}
          </List>
				</Content>
			</Container>
		);
	}
}

export default SquaddingList;
