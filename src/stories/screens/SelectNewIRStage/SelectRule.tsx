import * as React from "react";
import { Dimensions } from 'react-native';
import {
	Content,
	Text,
	H2,
	List,
	ListItem,
} from "native-base";

export interface Props {
	navigation: any;
	matchData: any;
	squaddingData: any;
}
export interface State {}
const deviceWidth = Dimensions.get('window').width;

class SelectNewIRStage extends React.Component<Props, State> {
	render() {
		const { matchData, squaddingData } = this.props;
		return (
			<Content style={{width: deviceWidth}}>
				<H2>{squaddingData && squaddingData.Participant.DisplayName}</H2>
				<List>
					{
						matchData && matchData.SquaddingEvents && matchData.CommonIncidentReports.map((item, i) => (
							<ListItem
								key={i}
								onPress={() =>
									this.props.navigation.navigate("IncidentDetail", {
										data: item,
								})}
							>
								<Text>{item.Name}</Text>
							</ListItem>
						))
					}
				</List>
			</Content>
		);
	}
}

export default SelectNewIRStage;
