import * as React from "react";
import {
	Container,
	Header, Title, Content, Text, Button, Icon, Left, Right, Body, List, ListItem } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	list: any;
}
export interface State {}
class SquaddingList extends React.Component<Props, State> {
	render() {
		console.log('props', this.props);
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
					<Text>{list.EventName}</Text>
					<List>
            {list && list.SquaddingList.map((item, i) => (
              <ListItem
                style={styles.listItem}
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("MatchDetail", {
										matchID: item.MatchID,
										eventName: "Individual",
                  })}
              >
								<Text>Squadding For</Text>
								<Text>{item.Participant.DisplayName}</Text>	
								<Text>{item.Range}</Text>	
								<Text>{item.Relay}</Text>
								<Text>{item.FiringPoint}</Text>	
              </ListItem>
            ))}
          </List>
				</Content>
			</Container>
		);
	}
}

export default SquaddingList;
