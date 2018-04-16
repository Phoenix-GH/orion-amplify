/* K2 */
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

const customItem = {
	RuleReference: '',
	SuggestedResolution: '',
	Name: ''
};

class SelectNewIRStage extends React.Component<Props, State> {
	
	render() {
		const { matchData, squaddingData, ruleViolation, changePage } = this.props;
		return (
			<Content style={{width: deviceWidth}}>
				<H2>{squaddingData && squaddingData.Participant.DisplayName}</H2>
				<List>
					{
						matchData && matchData.SquaddingEvents && matchData.CommonIncidentReports.map((item, i) => (
						<ListItem
							key={i}
							onPress={() => changePage(2, item)}
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
					<ListItem key='custom' onPress={() => changePage(2, customItem)}>
						<Left>
							<Text>Custom Incident Report</Text>
						</Left>
					</ListItem>
				</List>
			</Content>
		);
	}
}

export default SelectNewIRStage;
