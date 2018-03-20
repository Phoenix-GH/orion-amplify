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
		const selector = formValueSelector('login');
		const { email, password } = selector(this.state, 'email', 'password');
		console.log('email', email);
		if (this.props.valid) {
			Auth.signIn(email, password)
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
		console.log(e.target.value);
	}
	
	render() {
		const form = (
			<Form>
				<Field name="email" component={this.renderInput} validate={[email, required]} onChange={e => this.onChangeEmail(e)}/>
				<Field
					name="password"
					component={this.renderInput}
					validate={[alphaNumeric, minLength8, maxLength15, required]}
				/>
			</Form>
		);
		return <Login loginForm={form} onLogin={() => this.login()} />;
	}
}
const LoginContainer = reduxForm({
	form: "login",
})(LoginForm);
export default LoginContainer;
