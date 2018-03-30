import React from "react";
import ForgotPassword from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onResetPassword = jest.fn();
const onBack = jest.fn();
const forgotPasswordForm = React.Component;

it("renders correctly", () => {
	const tree = renderer.create(<ForgotPassword onResetPassword={onResetPassword} onBack={onBack} forgotPasswordForm={forgotPasswordForm} />).toJSON();
	expect(tree).toMatchSnapshot();
});
