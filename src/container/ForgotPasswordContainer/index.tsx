import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { AsyncStorage } from 'react-native';
import { Field, reduxForm } from "redux-form";
import { NavigationActions } from 'react-navigation';
import { Auth } from 'aws-amplify';
import ForgotPassword from "../../stories/screens/ForgotPassword";

const required = value => (value ? undefined : "Required");

export interface Props {
	navigation: any;
	valid: boolean;
}
export interface State {}
class ForgotPasswordForm extends React.Component<Props, State> {
	textInput: any;
  username: string;
  
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

	async onResetPassword() {
		const username = this.username.toLowerCase();
    if(this.props.valid) {
      await AsyncStorage.setItem('@Orion:username', this.username);
      Auth.forgotPassword(username)
      .then(data => {
        console.log(data);
        this.props.navigation.navigate("ResetPassword");
      })
      .catch(err => {
        console.log(err);
        Toast.show({
          text: err.message,
          duration: 2000,
          position: "top",
          textStyle: { textAlign: "center" },
        });
      })
    } else {
			Toast.show({
				text: "Username is missing",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}
	
	onChangeUserName = e => {
		this.username = e.nativeEvent.text;
	}
	
	render() {
		const form = (
			<Form>
        <Field name="Username" component={this.renderInput} validate={[required]} onChange={this.onChangeUserName} />
			</Form>
		);
		return <ForgotPassword forgotPasswordForm={form} onResetPassword={() => this.onResetPassword()} navigation={this.props.navigation} />;
	}
}
const ForgotPasswordContainer = reduxForm({
	form: "forgot",
})(ForgotPasswordForm);
export default ForgotPasswordContainer;
