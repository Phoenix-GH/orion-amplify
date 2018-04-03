import React from "react";
import Verification from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
const onVerification = jest.fn();
const verificationForm = React.Component;
const navigation = { state: jest.fn() };
it("renders correctly", () => {
    const tree = renderer.create(React.createElement(Verification, { onVerification: onVerification, verificationForm: verificationForm, navigation: navigation })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=index.test.js.map