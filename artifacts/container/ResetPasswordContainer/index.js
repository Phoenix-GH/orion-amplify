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
import { NavigationActions } from 'react-navigation';
import { Field, reduxForm } from "redux-form";
import { Auth } from 'aws-amplify';
import ResetPassword from "../../stories/screens/ResetPassword";
const required = value => (value ? undefined : "Required");
class ResetPasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChangePassword = e => {
            this.password = e.nativeEvent.text;
        };
        this.onChangeConfirm = e => {
            this.confirm = e.nativeEvent.text;
        };
        this.onChangeCode = e => {
            this.code = e.nativeEvent.text;
        };
    }
    renderInput({ input, meta: { touched, error } }) {
        return (React.createElement(Item, { error: error && touched },
            React.createElement(Icon, { active: true, name: input.name === "Password" || input.name === "Confirm Password" ? "unlock" : "person" }),
            React.createElement(Input, Object.assign({ ref: c => (this.textInput = c), placeholder: input.name, autoCapitalize: "none", secureTextEntry: input.name === "Password" || input.name === "Confirm Password" ? true : false }, input))));
    }
    onResetPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.props.valid) {
                if (this.confirm !== this.password) {
                    Toast.show({
                        text: "Passwords do not match.",
                        duration: 2000,
                        position: "top",
                        textStyle: { textAlign: "center" },
                    });
                    return;
                }
                const username = yield AsyncStorage.getItem("@Orion:username");
                Auth.forgotPasswordSubmit(username, this.code, this.password)
                    .then(() => __awaiter(this, void 0, void 0, function* () {
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
                            NavigationActions.navigate({ routeName: 'Login' })
                        ]
                    }));
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
        });
    }
    formatNumber(number) {
        const formattedNumber = number.replace(/[^\w\s]/gi, '');
        return '+' + formattedNumber;
    }
    render() {
        const form = (React.createElement(Form, null,
            React.createElement(Field, { name: "Verification Code", component: this.renderInput, validate: [required], onChange: this.onChangeCode, value: this.code }),
            React.createElement(Field, { name: "Password", component: this.renderInput, validate: [required], onChange: this.onChangePassword, value: this.password }),
            React.createElement(Field, { name: "Confirm Password", component: this.renderInput, validate: [required], onChange: this.onChangeConfirm, value: this.confirm })));
        return React.createElement(ResetPassword, { resetPasswordForm: form, onResetPassword: () => this.onResetPassword(), navigation: this.props.navigation });
    }
}
const ResetPasswordContainer = reduxForm({
    form: "resetpassword",
})(ResetPasswordForm);
export default ResetPasswordContainer;
//# sourceMappingURL=index.js.map