import React from "react";
import SelectNewIRStage from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const data = { state: jest.fn() };

it("renders correctly", () => {
	const tree = renderer.create(<SelectNewIRStage navigation={navigation} matchData={data} />).toJSON();
	expect(tree).toMatchSnapshot();
});
