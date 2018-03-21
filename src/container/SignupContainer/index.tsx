import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
import { Auth } from 'aws-amplify';
import Signup from "../../stories/screens/Signup";

const required = value => (value ? undefined : "Required");
const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const minLength8 = minLength(8);
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
const alphaNumeric = value => (value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined);

export interface Props {
	navigation: any;
	valid: boolean;
}
export interface State {}
class SignupForm extends React.Component<Props, State> {
	textInput: any;
	username: any;
	password: any;
	
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
	}

	renderInput({ input, meta: { touched, error } }) {
		return (
			<Item error={error && touched}>
				<Icon active name={input.name === "email" ? "person" : "unlock"} />
				<Input
					ref={c => (this.textInput = c)}
					placeholder={input.name === "email" ? "Email" : "Password"}
					secureTextEntry={input.name === "password" ? true : false}
					{...input}
				/>
			</Item>
		);
	}

	onSignup() {
		if(this.props.valid) {
			Auth.signIn(this.username, this.password)
			.then(user => {
					console.log('logged in');
					this.props.navigation.navigate("Drawer");
				}
			)
			.catch(err => {
				console.log(err)
			})
		} else {
			Toast.show({
				text: "Enter Valid UserName & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}

	onChangeEmail = e => {
		this.username = e.nativeEvent.text;
	}

	onChangePassword = e => {
		this.password = e.nativeEvent.text;
	}
	
	render() {
		const form = (
			<Form>
				<Field name="email" component={this.renderInput} validate={[required]} onChange={this.onChangeEmail} />
				<Field
					name="password"
					component={this.renderInput}
					validate={[alphaNumeric, minLength8, maxLength15, required]}
					onChange={this.onChangePassword}
				/>
			</Form>
		);
		return <Signup signupForm={form} onSignup={() => this.onSignup()} />;
	}
}
const SignupContainer = reduxForm({
	form: "signup",
})(SignupForm);
export default SignupContainer;
