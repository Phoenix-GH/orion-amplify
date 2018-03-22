import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
import { Auth } from 'aws-amplify';
import Signup from "../../stories/screens/Signup";
const required = value => (value ? undefined : "Required");
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
const alphaNumeric = value => (value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined);
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = e => {
            this.email = e.nativeEvent.text;
        };
        this.onChangePassword = e => {
            this.password = e.nativeEvent.text;
        };
        this.onChangePhone = e => {
            this.phone_number = e.nativeEvent.text;
        };
        this.onChangeUsername = e => {
            this.username = e.nativeEvent.text;
        };
    }
    renderInput({ input, meta: { touched, error } }) {
        return (React.createElement(Item, { error: error && touched },
            React.createElement(Icon, { active: true, name: input.name === "Password" ? "unlock" : "person" }),
            React.createElement(Input, Object.assign({ ref: c => (this.textInput = c), placeholder: input.name, secureTextEntry: input.name === "Password" ? true : false }, input))));
    }
    onSignup() {
        Auth.signUp({
            username: this.username,
            password: this.password,
            attributes: {
                email: this.email,
                phone_number: this.phone_number,
            },
            validationData: [] //optional
        })
            .then(data => {
            Auth.confirmSignUp(this.username, data.userSub)
                .then(data => {
                console.log(data);
                Toast.show({
                    text: data.message,
                    duration: 2000,
                    position: "top",
                    textStyle: { textAlign: "center" },
                });
                this.props.navigation.navigate("Login");
            })
                .catch(err => {
                console.log(err);
                Toast.show({
                    text: err.message,
                    duration: 2000,
                    position: "top",
                    textStyle: { textAlign: "center" },
                });
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
        });
    }
    render() {
        const form = (React.createElement(Form, null,
            React.createElement(Field, { name: "User name", component: this.renderInput, validate: [required], onChange: this.onChangeUsername }),
            React.createElement(Field, { name: "Email", component: this.renderInput, validate: [email], onChange: this.onChangeEmail }),
            React.createElement(Field, { name: "Phone number", component: this.renderInput, validate: [alphaNumeric], onChange: this.onChangePhone }),
            React.createElement(Field, { name: "Password", component: this.renderInput, validate: [required], onChange: this.onChangePassword })));
        return React.createElement(Signup, { signupForm: form, onSignup: () => this.onSignup() });
    }
}
const SignupContainer = reduxForm({
    form: "signup",
})(SignupForm);
export default SignupContainer;
//# sourceMappingURL=index.js.map