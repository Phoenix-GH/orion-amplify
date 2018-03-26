import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
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
                .then(user => {
                // try {
                //   await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
                // } catch (error) {
                //   // Error saving data
                // }
                this.props.navigation.navigate("Drawer");
            })
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
            React.createElement(Field, { name: "email", component: this.renderInput, validate: [required], onChange: this.onChangeEmail }),
            React.createElement(Field, { name: "password", component: this.renderInput, validate: [required], onChange: this.onChangePassword })));
        return React.createElement(Login, { loginForm: form, onLogin: () => this.login(), onSignup: this.signUp, onForgotPassword: this.forgotPassword });
    }
}
const LoginContainer = reduxForm({
    form: "login",
})(LoginForm);
export default LoginContainer;
//# sourceMappingURL=index.js.map