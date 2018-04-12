import * as React from "react";
import { ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
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
	stage: any;
	ruleViolation: any;
}
const deviceWidth = Dimensions.get('window').width;

class SelectNewIRStage extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			stage: {},
			ruleViolation: {}
		};
	}

	changePage = (page, item) => {
		this.setState({page: page});
		// if(page === 1) {
		// 	this.setState({stage: item});
		// }
		// else if(page === 2) {
		// 	this.setState({ruleViolation: item});
		// }
		this.refs._scrollView.scrollTo({x: page * deviceWidth, y: 0});
	}

	submit(comment) {
		console.log('comment', comment);
	}

	render() {
		const { navigation, matchData, squaddingData } = this.props;
		const { stage, ruleViolation } = this.state;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>Submit Incident Report</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<ScrollView
						pagingEnabled
						horizontal
						showsHorizontalScrollIndicator={false}
						ref='_scrollView'
					>
						<SelectStage navigation={navigation} matchData={matchData} squaddingData={squaddingData} stage={stage} changePage={(page, item) => this.changePage(page, item)} />
						<SelectRule navigation={navigation} matchData={matchData} squaddingData={squaddingData} ruleViolation={ruleViolation} changePage={(page, item) => this.changePage(page, item)} />
						<WriteUp navigation={navigation} matchData={matchData} squaddingData={squaddingData} stage={stage} ruleViolation={ruleViolation} submit={this.submit} />
					</ScrollView>
				</Content>
			</Container>
		);
	}
}

export default SelectNewIRStage;
