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
		width: '100%',
		height: 400,
		flex: 1,
		backgroundColor: '#000000',
	},
	contentView: {
		flex: 1,
		padding: 10,
	},
	targetPage: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		width: deviceWidth,
		position: 'relative',
	},
	buttonRow: {
		flexDirection: 'row',
	},
	takePhotoButton: {
		flex: 1,
		marginRight: 20,
	},
});
export default styles;
