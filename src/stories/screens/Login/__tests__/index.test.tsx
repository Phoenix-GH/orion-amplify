import React from "react";
import Login from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onLogin = jest.fn();
const onSignup = jest.fn();
const onForgotPassword = jest.fn();
const loginForm = React.Component;

it("renders correctly", () => {
	const tree = renderer.create(<Login onLogin={onLogin} onSignup={onSignup} loginForm={loginForm} onForgotPassword={onForgotPassword}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
