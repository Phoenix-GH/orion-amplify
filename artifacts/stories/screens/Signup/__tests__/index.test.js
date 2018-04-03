import React from "react";
import Signup from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
const onSignup = jest.fn();
const signupForm = React.Component;
const navigation = { state: jest.fn() };
it("renders correctly", () => {
    const tree = renderer.create(React.createElement(Signup, { onSignup: onSignup, signupForm: signupForm, navigation: navigation })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=index.test.js.map