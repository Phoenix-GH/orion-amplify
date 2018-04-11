import * as React from "react";
import { AsyncStorage } from 'react-native';
import { Item, Input, Icon, Form, Toast } from "native-base";
import { NavigationActions } from 'react-navigation';
import { Field, reduxForm } from "redux-form";
import { Auth } from 'aws-amplify';
import Verification from "../../stories/screens/Verification";

const required = value => (value ? undefined : "Required");

export interface Props {
	navigation: any;
	valid: boolean;
	username: string;
}
export interface State {}
class VerificationForm extends React.Component<Props, State> {
	textInput: any;
	passcode: string;
	constructor(props) {
		super(props);
	}

	renderInput({ input, meta: { touched, error } }) {
		return (
			<Item error={error && touched}>
				<Icon active name="unlock" />
				<Input
					ref={c => (this.textInput = c)}
					placeholder= {input.name} 
					autoCapitalize="none"
					{...input}
				/>
			</Item>
		);
	}

	async onVerification() {
		try {
			const username = await AsyncStorage.getItem('@Orion:username');
			if (username !== null){
				// We have data!!
				console.log('username', username);
				Auth.confirmSignUp(username, this.passcode)
				.then(() => {
					Toast.show({
						text: "Orion Account successfully created. You may now log in.",
						duration: 2000,
						position: "top",
						textStyle: { textAlign: "center" },
					});
					this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
              NavigationActions.navigate({ routeName: 'Login'})
            ]
          }));
				})
				.catch(err => {
					Toast.show({
						text: err.message,
						duration: 2000,
						position: "top",
						textStyle: { textAlign: "center" },
					});
				})
			}
		} catch (error) {
			// Error retrieving data
		}
	}

	onChangeCode = e => {
		this.passcode = e.nativeEvent.text;
	}

	render() {
		const form = (
			<Form>
        <Field name="Verification Code" component={this.renderInput} validate={[required]} onChange={this.onChangeCode} value={this.passcode} />
			</Form>
		);
		return <Verification verificationForm={form} onVerification={() => this.onVerification()} navigation={this.props.navigation} />;
	}
}
const VerificationContainer = reduxForm({
	form: "verification",
})(VerificationForm);
export default VerificationContainer;
