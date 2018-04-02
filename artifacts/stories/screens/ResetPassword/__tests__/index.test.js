import React from "react";
import ResetPassword from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
const onResetPassword = jest.fn();
const onBack = jest.fn();
const resetPasswordForm = React.Component;
it("renders correctly", () => {
    const tree = renderer.create(React.createElement(ResetPassword, { onResetPassword: onResetPassword, onBack: onBack, resetPasswordForm: resetPasswordForm })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=index.test.js.map