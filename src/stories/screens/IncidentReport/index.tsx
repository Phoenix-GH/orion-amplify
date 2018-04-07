import * as React from "react";
import { FlatList } from 'react-native';
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
	ListItem,
	Card,
	CardItem,
	H3,
} from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	list: any;
}
export interface State {
	refreshing: any,
}
class IncidentReport extends React.Component<Props, State> {
	constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
	}
	
	onRefresh = () => {
		console.log('refreshing');
		this.setState({refreshing: true});
	}

	renderListView = (data) => {
		const { item } = data;
		return (
			<ListItem
				key={item.IncidentReportID}
				onPress={() =>
					this.props.navigation.navigate("IncidentDetail", {
						data: item,
					})}
			>
				<Card>
					<CardItem>
						<Body>
							<H3>{item.Participant.DisplayName}</H3>
							<Text>{item.RuleViolation.Name}</Text>
							<Text>{item.Status}</Text>
						</Body>
					</CardItem>
				</Card>
			</ListItem>
		);
	};

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
						<Title>Incident Report List</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					{
						list && list.IncidentReportList && <FlatList
							data = {list.IncidentReportList}
      				renderItem = {(data) => this.renderListView(data)}>
							onRefresh = {() => this.onRefresh()}
							refreshing = {this.state.refreshing}
						>
						</FlatList>
					}
				</Content>
			</Container>
		);
	}
}

export default IncidentReport;
