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
	matchData: any;
	squaddingData: any;
}
export interface State {}
class SelectNewIRStage extends React.Component<Props, State> {
	render() {
		const { navigation, matchData, squaddingData } = this.props;
		return (
			<Content style={styles.content}>
				<H2>{squaddingData && squaddingData.Participant.DisplayName}</H2>
				<List>
					{
						matchData && matchData.SquaddingEvents && matchData.SquaddingEvents[0].TargetStages.map((item, i) => (
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
