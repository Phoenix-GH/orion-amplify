import React from "react";
import ForgotPassword from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
const onResetPassword = jest.fn();
const navigation = { state: jest.fn() };
const forgotPasswordForm = React.Component;
it("renders correctly", () => {
    const tree = renderer.create(React.createElement(ForgotPassword, { onResetPassword: onResetPassword, onBack: onBack, forgotPasswordForm: forgotPasswordForm, navigation: navigation })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=index.test.js.map