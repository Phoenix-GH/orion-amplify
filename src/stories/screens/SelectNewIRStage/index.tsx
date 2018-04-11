import * as React from "react";
import { ScrollView } from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	Left,
	Right,
	Body,
} from "native-base";

import SelectRule from './SelectRule';
import SelectStage from './SelectStage';
import WriteUp from './WriteUp';
import styles from "./styles";
export interface Props {
	navigation: any;
	matchData: any;
	squaddingData: any;
}
export interface State {
	page: any;
}

class SelectNewIRStage extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {page: 0};
	}

	changePage = (page) => {
		console.log('page', page);
		this.setState({page: page});
	}

	render() {
		const { navigation, matchData, squaddingData } = this.props;
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
				<Content>
					<ScrollView
						pagingEnabled
						horizontal
						showsHorizontalScrollIndicator={false}
						
					>
						<SelectStage navigation={navigation} matchData={matchData} squaddingData={squaddingData} changePage={(page) => this.changePage(page)}/>
						<SelectRule navigation={navigation} matchData={matchData} squaddingData={squaddingData}/>
						<WriteUp navigation={navigation} matchData={matchData} squaddingData={squaddingData}/>
					</ScrollView>
				</Content>
			</Container>
		);
	}
}

export default SelectNewIRStage;
