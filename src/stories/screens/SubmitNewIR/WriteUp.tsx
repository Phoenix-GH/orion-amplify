import * as React from "react";
import { Dimensions } from 'react-native';
import {
	Content,
	Text,
	H2,
	Form,
	Textarea,
	Button,
	Input,
	Item,
} from "native-base";
import { Field } from "redux-form";
import styles from "./styles";

const required = value => (value ? undefined : "Required");

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
	ruleName: string,
	ruleReference: string,
	suggestedResolution: string,
	comment: string;
}
const deviceWidth = Dimensions.get('window').width;

class WriteUp extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			currentTime: new Date().toLocaleString(),
			ruleName: '',
			ruleReference: '',
			suggestedResolution: '',
			comment: '',
		};
	}

	componentWillReceiveProps(nextProps) {
		const { ruleViolation } = nextProps;
		this.setState({
			ruleName: ruleViolation && ruleViolation.Name,
			ruleReference: ruleViolation && ruleViolation.RuleReference,
			suggestedResolution: ruleViolation && ruleViolation.SuggestedResolution
		});
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

	onChangeName = e => {
		this.setState({ruleName: e.nativeEvent.text});
	}

	onChangeReference = e => {
		this.setState({ruleReference: e.nativeEvent.text});
	}

	onChangeResolution = e => {
		this.setState({suggestedResolution: e.nativeEvent.text});
	}

	render() {
		const { squaddingData, submit } = this.props;
		const { currentTime,
			ruleName,
			ruleReference,
			suggestedResolution,
			comment
		} = this.state;
		
		return (
			<Content style={{ width: deviceWidth }} padder>
				<Form>
					<Text style={styles.title}>Participant</Text>
					<H2>{squaddingData && squaddingData.Participant.DisplayName}</H2>
					<Content>
						<Item regular>
							<Input placeholder='Name' value={ruleName} onChange={this.onChangeName} />
						</Item>
					</Content>
					<Content>
						<Item regular>
							<Input placeholder='Rule Reference' value={ruleReference} onChange={this.onChangeReference} />
						</Item>
					</Content>
					<Content>
						<Item regular>
							<Input placeholder='Suggested Resolution' value={suggestedResolution} onChange={this.onChangeResolution} />
						</Item>
					</Content>
					<Text style={styles.title}>Time</Text>
					<H2>{currentTime}</H2>
					<Textarea rowSpan={5} bordered placeholder="Comments" onChange={this.onChangeComment}>
						{comment}
					</Textarea>
				</Form>
				<Button block onPress={() => submit(this.state)}><Text>Submit</Text></Button>
			</Content>
		);
	}
}


export default WriteUp;
