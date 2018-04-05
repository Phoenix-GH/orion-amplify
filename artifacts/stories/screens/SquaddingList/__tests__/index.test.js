import React from "react";
import SquaddingList from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
const navigation = { state: jest.fn() };
const list = { map: jest.fn() };
it("renders correctly", () => {
    const tree = renderer.create(React.createElement(SquaddingList, { navigation: navigation, list: list })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=index.test.js.map