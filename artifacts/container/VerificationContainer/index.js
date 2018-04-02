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
import Verification from "../../stories/screens/Verification";
const required = value => (value ? undefined : "Required");
class VerificationForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeCode = e => {
            this.passcode = e.nativeEvent.text;
        };
        this.onBack = () => {
            this.props.navigation.dispatch(NavigationActions.back());
        };
    }
    renderInput({ input, meta: { touched, error } }) {
        return (React.createElement(Item, { error: error && touched },
            React.createElement(Icon, { active: true, name: "unlock" }),
            React.createElement(Input, Object.assign({ ref: c => (this.textInput = c), placeholder: input.name, autoCapitalize: "none" }, input))));
    }
    onVerification() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const username = yield AsyncStorage.getItem('@Orion:username');
                if (username !== null) {
                    // We have data!!
                    console.log('username', username);
                    Auth.confirmSignUp(username, this.passcode)
                        .then(data => {
                        Toast.show({
                            text: "Orion Account successfully created. You may now log in.",
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
            }
            catch (error) {
                // Error retrieving data
            }
        });
    }
    render() {
        const form = (React.createElement(Form, null,
            React.createElement(Field, { name: "Verification Code", component: this.renderInput, validate: [required], onChange: this.onChangeCode, value: this.passcode })));
        return React.createElement(Verification, { verificationForm: form, onVerification: () => this.onVerification(), onBack: this.onBack });
    }
}
const VerificationContainer = reduxForm({
    form: "verification",
})(VerificationForm);
export default VerificationContainer;
//# sourceMappingURL=index.js.map