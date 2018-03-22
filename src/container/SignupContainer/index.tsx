import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
import { Auth } from 'aws-amplify';
import Signup from "../../stories/screens/Signup";

const required = value => (value ? undefined : "Required");
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
  email: any;
  phone_number: any;
	constructor(props) {
		super(props);
	}

	renderInput({ input, meta: { touched, error } }) {
		return (
			<Item error={error && touched}>
				<Icon active name={input.name === "Password" ? "unlock" : "person"} />
				<Input
					ref={c => (this.textInput = c)}
					placeholder= {input.name} 
					secureTextEntry={input.name === "Password" ? true : false}
					{...input}
				/>
			</Item>
		);
	}

	onSignup() {
    Auth.signUp({
      username: this.username,
      password: this.password,
      attributes: {
          email: this.email,          // optional
          phone_number: this.phone_number,   // optional - E.164 number convention
          // other custom attributes
      },
      validationData: []  //optional
    })
    .then(data => {
      console.log(data);
      Auth.confirmSignUp(this.username, data.userSub)
      .then(data => {
        Toast.show({
          text: "You should have received email with verification code, please ",
          duration: 2000,
          position: "top",
          textStyle: { textAlign: "center" },
        });
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
	}

	onChangeEmail = e => {
		this.email = e.nativeEvent.text;
	}

	onChangePassword = e => {
		this.password = e.nativeEvent.text;
  }
  
  onChangePhone = e => {
		this.phone_number = e.nativeEvent.text;
  }
  
  onChangeUsername= e => {
		this.username = e.nativeEvent.text;
	}
	
	render() {
		const form = (
			<Form>
        <Field name="User name" component={this.renderInput} validate={[required]} onChange={this.onChangeUsername} />
				<Field name="Email" component={this.renderInput} validate={[email]} onChange={this.onChangeEmail} />
        <Field name="Phone number" component={this.renderInput} validate={[alphaNumeric]} onChange={this.onChangePhone} />
				<Field
					name="Password"
					component={this.renderInput}
					validate={[required]}
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
