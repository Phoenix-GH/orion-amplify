import * as React from "react";
import { Dimensions } from 'react-native';
import {
	Content,
	Text,
	H2,
	List,
	ListItem,
	Right,
	Radio,
	Left,
} from "native-base";

export interface Props {
	navigation: any;
	matchData: any;
	squaddingData: any;
	changePage: any;
	ruleViolation: any;
}
export interface State {}
const deviceWidth = Dimensions.get('window').width;

class SelectNewIRStage extends React.Component<Props, State> {
	render() {
		const { matchData, squaddingData, ruleViolation } = this.props;
		return (
			<Content style={{width: deviceWidth}}>
				<H2>{squaddingData && squaddingData.Participant.DisplayName}</H2>
				<List>
					{
						matchData && matchData.SquaddingEvents && matchData.CommonIncidentReports.map((item, i) => (
							<ListItem
								key={i}
								onPress={() => this.props.changePage(2, item)}
							>
								<Left>
									<Text>{item.Name}</Text>
									<Text note>{item.RuleReference}</Text>
								</Left>
								<Right>
									<Radio selected={ruleViolation && ruleViolation.RuleReference === item.RuleReference} />
								</Right>
							</ListItem>
						))
					}
				</List>
			</Content>
		);
	}
}

export default SelectNewIRStage;
