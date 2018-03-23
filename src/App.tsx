import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";
import Amplify from 'aws-amplify';

const deviceWidth = Dimensions.get("window").width;

import Login from "./container/LoginContainer";
import Signup from "./container/SignupContainer";
import Verification from "./container/VerificationContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";

Amplify.configure({
    Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-east-1:ecdb1323-5308-445f-845e-55871ebf14e2', 
    // REQUIRED - Amazon Cognito Region
        region: 'us-east-1', 
    // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-1_EOdAipVdq',
    // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '6bim5j26a7cjsl5omabar19vi6', 
    }
});

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		contentComponent: (props: any) => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		Signup: {screen: Signup },
		Verification: {screen: Verification },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
