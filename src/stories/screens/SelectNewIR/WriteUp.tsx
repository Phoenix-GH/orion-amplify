import * as React from "react";
import { Dimensions } from 'react-native';
import {
	Content,
	Text,
	H2,
	Form,
	Textarea,
	Button,
} from "native-base";
import styles from "./styles";

export interface Props {
	navigation: any;
	matchData: any;
	squaddingData: any;
	stage: any;
	ruleViolation: any;
	submit: any;
}
export interface State {
	currentTime: string;
	comment: string;
}
const deviceWidth = Dimensions.get('window').width;

class SelectNewIRStage extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {currentTime: new Date().toLocaleString(), comment: ''};
	}

	componentDidMount() {
    setInterval( () => {
      this.setState({
        currentTime : new Date().toLocaleString()
      })
		}, 1000 * 60);
	}
	
	onChangeComment = e => {
		this.setState({comment: e.nativeEvent.text});
	}

	render() {
		const { currentTime, comment } = this.state;
		const { squaddingData, ruleViolation, submit } = this.props;
		return (
			<Content style={{width: deviceWidth}} padder>
				<Form>
					<Text style={styles.title}>Participant</Text>
					<H2>{squaddingData && squaddingData.Participant.DisplayName}</H2>
					
					<H2 style={styles.h2}>{ruleViolation && ruleViolation.Name}</H2>
					<Text>{ruleViolation && ruleViolation.RuleReference}</Text>

					<Text style={styles.title}>Time</Text>
					<H2>{currentTime}</H2>
					<Textarea rowSpan={5} bordered placeholder="Comments" onChange={this.onChangeComment}>
						{comment}
					</Textarea>
					<Button block onPress={() => submit(comment)}><Text>Submit</Text></Button>
				</Form>
			</Content>
		);
	}
}

export default SelectNewIRStage;
