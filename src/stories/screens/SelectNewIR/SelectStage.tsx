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
	stage: any;
}
import styles from "./styles";
export interface State {}
const deviceWidth = Dimensions.get('window').width;

class SelectNewIRStage extends React.Component<Props, State> {
	render() {
		const { matchData, squaddingData, stage } = this.props;
		return (
			<Content style={{width: deviceWidth}}>
				<H2>{squaddingData && squaddingData.Participant.DisplayName}</H2>
				<List>
					{
						matchData && matchData.SquaddingEvents && matchData.SquaddingEvents[0].TargetStages.map((item, i) => (
							<ListItem
								key={i}
								onPress={() => this.props.changePage(1, item)}
							>
								<Left>
									<Text style={styles.listText}>{item.Name}</Text>
								</Left>
								<Right>
									<Radio selected={stage && stage.Key === item.Key} />
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
