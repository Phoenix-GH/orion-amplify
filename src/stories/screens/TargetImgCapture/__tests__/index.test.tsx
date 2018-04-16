import React from "react";
import TargetImgCapture from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const list = { map: jest.fn() };
const navigation = { state: jest.fn() };

it("renders correctly", () => {
	const tree = renderer.create(<TargetImgCapture navigation={navigation} squaddingList={list} matchData={list} />).toJSON();
	expect(tree).toMatchSnapshot();
});
