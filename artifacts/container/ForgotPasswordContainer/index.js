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
import { AsyncStorage } from 'react-native';
import { Field, reduxForm } from "redux-form";
import { NavigationActions } from 'react-navigation';
import { Auth } from 'aws-amplify';
import ForgotPassword from "../../stories/screens/ForgotPassword";
const required = value => (value ? undefined : "Required");
class ForgotPasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.onBack = () => {
            this.props.navigation.dispatch(NavigationActions.back());
        };
        this.onChangeUserName = e => {
            this.username = e.nativeEvent.text;
        };
    }
    renderInput({ input, meta: { touched, error } }) {
        return (React.createElement(Item, { error: error && touched },
            React.createElement(Icon, { active: true, name: "unlock" }),
            React.createElement(Input, Object.assign({ ref: c => (this.textInput = c), placeholder: input.name, autoCapitalize: "none" }, input))));
    }
    onResetPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            const username = this.username.toLowerCase();
            if (username !== null) {
                yield AsyncStorage.setItem('@Orion:username', this.username);
                Auth.forgotPassword(username)
                    .then(data => {
                    console.log(data);
                    this.props.navigation.navigate("ResetPassword");
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
        });
    }
    render() {
        const form = (React.createElement(Form, null,
            React.createElement(Field, { name: "Username", component: this.renderInput, validate: [required], onChange: this.onChangeUserName })));
        return React.createElement(ForgotPassword, { forgotPasswordForm: form, onResetPassword: () => this.onResetPassword(), onBack: this.onBack });
    }
}
const ForgotPasswordContainer = reduxForm({
    form: "forgot",
})(ForgotPasswordForm);
export default ForgotPasswordContainer;
//# sourceMappingURL=index.js.map