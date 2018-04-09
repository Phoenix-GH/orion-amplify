import React from "react";
import ParticipantDetail from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const data = { state: jest.fn() };

it("renders correctly", () => {
	const tree = renderer.create(<ParticipantDetail navigation={navigation} squaddingData={data} irData={data} matchData={data} />).toJSON();
	expect(tree).toMatchSnapshot();
});
