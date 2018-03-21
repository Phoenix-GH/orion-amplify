import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
import { Auth } from 'aws-amplify';
import Login from "../../stories/screens/Login";

const required = value => (value ? undefined : "Required");
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

	login() {
		if(this.props.valid) {
			Auth.signIn(this.username, this.password)
			.then(user => {
					this.props.navigation.navigate("Drawer");
				}
			)
			.catch(err => {
				Toast.show({
					text: err.message,
					duration: 2000,
					position: "top",
					textStyle: { textAlign: "center" },
				});
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
					validate={[alphaNumeric, required]}
					onChange={this.onChangePassword}
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
