import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { Auth } from 'aws-amplify';
import Login from "../../stories/screens/Login";

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
class LoginForm extends React.Component<Props, State> {
	textInput: any;
	form = (
		<Form>
			<Field name="email" component={this.renderInput} validate={[email, required]} />
			<Field
				name="password"
				component={this.renderInput}
				validate={[alphaNumeric, minLength8, maxLength15, required]}
			/>
		</Form>
	);
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

	login() {
		const selector = formValueSelector('form');
		const { email, password } = selector(this.state, 'email', 'password');
		
		if (this.props.valid) {
			Auth.signIn(email, password)
				.then(user => console.log(user))
				.catch(err => console.log(err));
			Toast.show({
				text: selector,
				duration: 5000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		} else {
			Toast.show({
				text: "Enter Valid UserName & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}

	render() {
		return <Login loginForm={this.form} onLogin={() => this.login()} />;
	}
}
const LoginContainer = reduxForm({
	form: "login",
})(LoginForm);
export default LoginContainer;
