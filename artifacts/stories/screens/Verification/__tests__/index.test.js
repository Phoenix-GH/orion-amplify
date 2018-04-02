import React from "react";
import Verification from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
const onVerification = jest.fn();
const onBack = jest.fn();
const verificationForm = React.Component;
it("renders correctly", () => {
    const tree = renderer.create(React.createElement(Verification, { onVerification: onVerification, verificationForm: verificationForm, onBack: onBack })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=index.test.js.map