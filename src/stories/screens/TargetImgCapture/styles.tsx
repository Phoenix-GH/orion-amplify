import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#FBFAFA",
		height: deviceHeight,
	},
	photoItem: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#000000',
	},
	content: {
		width: '100%',
		height: '100%',
	},
	targetPage: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		width: deviceWidth,
	}
});
export default styles;
