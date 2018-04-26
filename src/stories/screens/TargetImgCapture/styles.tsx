import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#FBFAFA",
	},
	photoItem: {
		width: '50%',
	},
});
export default styles;
