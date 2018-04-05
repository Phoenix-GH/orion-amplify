import React from "react";
import SquaddingList from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const list = { map: jest.fn() };

it("renders correctly", () => {
	const tree = renderer.create(<SquaddingList navigation={navigation} list={list} />).toJSON();
	expect(tree).toMatchSnapshot();
});
