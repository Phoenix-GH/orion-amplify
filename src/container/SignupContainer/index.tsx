import * as React from "react";
import { AsyncStorage } from 'react-native';
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
import { Auth } from 'aws-amplify';
import Signup from "../../stories/screens/Signup";

const required = value => (value ? undefined : "Required");
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;

const phoneNumber = value => (value && !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(value) ? "Invalid phone number" : undefined);

export interface Props {
	navigation: any;
  valid: boolean;
}
export interface State {}
class SignupForm extends React.Component<Props, State> {
	textInput: any;
	username: string;
	password: string;
  email: string;
  phoneNumber: string;
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
          autoCapitalize="none"
					secureTextEntry={input.name === "Password" ? true : false}
					{...input}
				/>
			</Item>
		);
	}

	onSignup() {
    if(this.props.valid) {
      Auth.signUp({
        username: this.username.toLowerCase(),
        password: this.password,
        attributes: {
            email: this.email,          // optional
            phone_number: this.formatNumber(this.phoneNumber),   // optional - E.164 number convention
            // other custom attributes
        },
        validationData: []  //optional
      })
      .then(async data => {
        try {
          await AsyncStorage.setItem('@Orion:username', this.username);
        } catch (error) {
          // Error saving data
        }
        this.props.navigation.navigate("Verification");
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
    else {
      Toast.show({
        text: "Please fill all the fields",
        duration: 2000,
        position: "top",
        textStyle: { textAlign: "center" },
      });
    }
	}
  
	onChangeEmail = e => {
		this.email = e.nativeEvent.text;
	}

	onChangePassword = e => {
		this.password = e.nativeEvent.text;
  }
  
  onChangePhone = e => {
		this.phoneNumber = e.nativeEvent.text;
  }
  
  onChangeUsername= e => {
		this.username = e.nativeEvent.text;
	}
  
  formatNumber(number) {
    const formattedNumber = number.replace(/[^\w\s]/gi, '');
    return '+' + formattedNumber;
  }

	render() {
		const form = (
			<Form>
        <Field name="User name" component={this.renderInput} validate={[required]} onChange={this.onChangeUsername} value={this.username} />
				<Field name="Email" component={this.renderInput} validate={[email, required]} onChange={this.onChangeEmail} value={this.email} />
        <Field name="Phone number" component={this.renderInput} validate={[phoneNumber]} onChange={this.onChangePhone} value={this.phoneNumber} />
				<Field
					name="Password"
					component={this.renderInput}
					validate={[required]}
          onChange={this.onChangePassword}
          value={this.password}
				/>
			</Form>
		);
		return <Signup signupForm={form} onSignup={() => this.onSignup()} navigation={this.props.navigation} />;
	}
}
const SignupContainer = reduxForm({
	form: "signup",
})(SignupForm);
export default SignupContainer;
