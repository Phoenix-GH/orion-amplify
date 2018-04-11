var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import { AsyncStorage } from 'react-native';
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
import { Auth } from 'aws-amplify';
import Signup from "../../stories/screens/Signup";
const required = value => (value ? undefined : "Required");
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
const phoneNumber = value => (value && !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(value) ? "Invalid phone number" : undefined);
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
            this.phoneNumber = e.nativeEvent.text;
        };
        this.onChangeUsername = e => {
            this.username = e.nativeEvent.text;
        };
    }
    renderInput({ input, meta: { touched, error } }) {
        return (React.createElement(Item, { error: error && touched },
            React.createElement(Icon, { active: true, name: input.name === "Password" ? "unlock" : "person" }),
            React.createElement(Input, Object.assign({ ref: c => (this.textInput = c), placeholder: input.name, autoCapitalize: "none", secureTextEntry: input.name === "Password" ? true : false }, input))));
    }
    onSignup() {
        if (this.props.valid) {
            Auth.signUp({
                username: this.username.toLowerCase(),
                password: this.password,
                attributes: {
                    email: this.email,
                    phone_number: this.formatNumber(this.phoneNumber),
                },
                validationData: [] //optional
            })
                .then((data) => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield AsyncStorage.setItem('@Orion:username', this.username);
                }
                catch (error) {
                    // Error saving data
                }
                this.props.navigation.navigate("Verification");
            }))
                .catch(err => {
                Toast.show({
                    text: err.message,
                    duration: 2000,
                    position: "top",
                    textStyle: { textAlign: "center" },
                });
            });
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
    formatNumber(number) {
        const formattedNumber = number.replace(/[^\w\s]/gi, '');
        return '+' + formattedNumber;
    }
    render() {
        const form = (React.createElement(Form, null,
            React.createElement(Field, { name: "User name", component: this.renderInput, validate: [required], onChange: this.onChangeUsername, value: this.username }),
            React.createElement(Field, { name: "Email", component: this.renderInput, validate: [email, required], onChange: this.onChangeEmail, value: this.email }),
            React.createElement(Field, { name: "Phone number", component: this.renderInput, validate: [phoneNumber], onChange: this.onChangePhone, value: this.phoneNumber }),
            React.createElement(Field, { name: "Password", component: this.renderInput, validate: [required], onChange: this.onChangePassword, value: this.password })));
        return React.createElement(Signup, { signupForm: form, onSignup: () => this.onSignup(), navigation: this.props.navigation });
    }
}
const SignupContainer = reduxForm({
    form: "signup",
})(SignupForm);
export default SignupContainer;
//# sourceMappingURL=index.js.map