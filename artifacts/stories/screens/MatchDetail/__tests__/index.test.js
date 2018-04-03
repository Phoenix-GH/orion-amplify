import React from "react";
import MatchDetail from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
const navigation = { state: jest.fn() };
const data = { state: jest.fn() };
it("renders correctly", () => {
    const tree = renderer.create(React.createElement(MatchDetail, { navigation: navigation, data: data })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=index.test.js.map