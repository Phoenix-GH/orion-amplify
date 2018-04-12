import React from "react";
import SelectNewIR from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const data = { state: jest.fn() };
const onSubmit = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<SelectNewIR navigation={navigation} matchData={data} squaddingData={data} onSubmit={onSubmit} />).toJSON();
	expect(tree).toMatchSnapshot();
});
