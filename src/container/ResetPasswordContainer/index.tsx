import * as React from "react";
import { AsyncStorage } from 'react-native';
import { Item, Input, Icon, Form, Toast } from "native-base";
import { NavigationActions } from 'react-navigation';
import { Field, reduxForm } from "redux-form";
import { Auth } from 'aws-amplify';
import ResetPassword from "../../stories/screens/ResetPassword";

const required = value => (value ? undefined : "Required");

export interface Props {
	navigation: any;
  valid: boolean;
}
export interface State {}
class ResetPasswordForm extends React.Component<Props, State> {
	textInput: any;
  password: string;
  confirm: string;
  code: string;
	constructor(props) {
		super(props);
	}

	renderInput({ input, meta: { touched, error } }) {
		return (
			<Item error={error && touched}>
				<Icon active name={input.name === "Password" || input.name === "Confirm Password" ? "unlock" : "person"} />
				<Input
					ref={c => (this.textInput = c)}
          placeholder= {input.name}
          autoCapitalize="none"
					secureTextEntry={input.name === "Password" || input.name === "Confirm Password" ? true : false}
					{...input}
				/>
			</Item>
		);
	}

	async onResetPassword() {
    if(this.props.valid) {
      if(this.confirm !== this.password) {
        Toast.show({
          text: "Passwords do not match.",
          duration: 2000,
          position: "top",
          textStyle: { textAlign: "center" },
        });
        return;
      }
      const username = await AsyncStorage.getItem("@Orion:username");
      Auth.forgotPasswordSubmit(
        username,
        this.code,
        this.password,
      )
      .then(async data => {
        Toast.show({
          text: "Successfully changed password.",
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
        console.log(err);
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

	onChangePassword = e => {
		this.password = e.nativeEvent.text;
  }
  
  onChangeConfirm = e => {
		this.confirm = e.nativeEvent.text;
  }
  
  onChangeCode = e => {
		this.code = e.nativeEvent.text;
	}
  
	onBack = () => {
		this.props.navigation.dispatch(NavigationActions.back());
	}

  formatNumber(number) {
    const formattedNumber = number.replace(/[^\w\s]/gi, '');
    return '+' + formattedNumber;
  }

	render() {
		const form = (
			<Form>
        <Field name="Verification Code" component={this.renderInput} validate={[required]} onChange={this.onChangeCode} />
				<Field
					name="Password"
					component={this.renderInput}
					validate={[required]}
          onChange={this.onChangePassword}
				/>
        <Field
					name="Confirm Password"
					component={this.renderInput}
					validate={[required]}
          onChange={this.onChangeConfirm}
				/>
			</Form>
		);
		return <ResetPassword resetPasswordForm={form} onResetPassword={() => this.onResetPassword()} onBack={this.onBack} />;
	}
}
const ResetPasswordContainer = reduxForm({
	form: "resetpassword",
})(ResetPasswordForm);
export default ResetPasswordContainer;
