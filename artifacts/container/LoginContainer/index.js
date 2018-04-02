var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
import { AsyncStorage } from 'react-native';
import { Auth } from 'aws-amplify';
import Login from "../../stories/screens/Login";
const required = value => (value ? undefined : "Required");
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.signUp = () => {
            this.props.navigation.navigate("Signup");
        };
        this.forgotPassword = () => {
            this.props.navigation.navigate("ForgotPassword");
        };
        this.onChangeEmail = e => {
            this.username = e.nativeEvent.text;
        };
        this.onChangePassword = e => {
            this.password = e.nativeEvent.text;
        };
    }
    renderInput({ input, meta: { touched, error } }) {
        return (React.createElement(Item, { error: error && touched },
            React.createElement(Icon, { active: true, name: input.name === "email" ? "person" : "unlock" }),
            React.createElement(Input, Object.assign({ ref: c => (this.textInput = c), placeholder: input.name === "email" ? "Email" : "Password", autoCapitalize: "none", secureTextEntry: input.name === "password" ? true : false }, input))));
    }
    login() {
        if (this.props.valid) {
            Auth.signIn(this.username.toLowerCase(), this.password)
                .then((user) => __awaiter(this, void 0, void 0, function* () {
                console.log('Logged in:', user);
                try {
                    yield AsyncStorage.setItem('@Orion:username', user.username);
                    this.props.navigation.navigate("Drawer");
                }
                catch (error) {
                    // Error saving data
                }
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
                text: "Enter Valid UserName & password!",
                duration: 2000,
                position: "top",
                textStyle: { textAlign: "center" },
            });
        }
    }
    render() {
        const form = (React.createElement(Form, null,
            React.createElement(Field, { name: "email", component: this.renderInput, validate: [required], onChange: this.onChangeEmail, value: this.username }),
            React.createElement(Field, { name: "password", component: this.renderInput, validate: [required], onChange: this.onChangePassword, value: this.password })));
        return React.createElement(Login, { loginForm: form, onLogin: () => this.login(), onSignup: this.signUp, onForgotPassword: this.forgotPassword });
    }
}
const LoginContainer = reduxForm({
    form: "login",
})(LoginForm);
export default LoginContainer;
//# sourceMappingURL=index.js.map