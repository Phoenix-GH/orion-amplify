import * as React from "react";
import { Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Left, Right } from "native-base";
class ResetPassword extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon, { active: true, name: "arrow-back", onPress: () => this.props.onBack() }))),
                React.createElement(Body, null,
                    React.createElement(Title, null, "Forgot Password")),
                React.createElement(Right, null)),
            React.createElement(Header, { style: { height: 200 } },
                React.createElement(Body, { style: { alignItems: "center" } },
                    React.createElement(Icon, { name: "flash", style: { fontSize: 104 } }),
                    React.createElement(Title, null, "Reset Password"),
                    React.createElement(View, { padder: true },
                        React.createElement(Text, { style: { color: Platform.OS === "ios" ? "#000" : "#FFF" } })))),
            React.createElement(Content, null,
                this.props.resetPasswordForm,
                React.createElement(View, { padder: true },
                    React.createElement(Button, { block: true, onPress: () => this.props.onResetPassword() },
                        React.createElement(Text, null, "Reset"))))));
    }
}
export default ResetPassword;
//# sourceMappingURL=index.js.map