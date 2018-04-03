import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";
import Amplify from 'aws-amplify';
const deviceWidth = Dimensions.get("window").width;
import Login from "./container/LoginContainer";
import Signup from "./container/SignupContainer";
import ForgotPassword from "./container/ForgotPasswordContainer";
import ResetPassword from "./container/ResetPasswordContainer";
import Verification from "./container/VerificationContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import MatchDetail from "./container/MatchDetailContainer";
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
    },
    API: {
        endpoints: [
            {
                name: "MatchSearch",
                endpoint: "https://548ymwfm2i.execute-api.us-east-1.amazonaws.com/alpha"
            },
            {
                name: "GetMatchDetail",
                endpoint: "https://vu83zwopu5.execute-api.us-east-1.amazonaws.com/alpha",
            },
        ]
    }
});
const Drawer = DrawerNavigator({
    Home: { screen: Home },
}, {
    drawerWidth: deviceWidth - 50,
    drawerPosition: "left",
    contentComponent: (props) => React.createElement(Sidebar, Object.assign({}, props)),
});
const App = StackNavigator({
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgotPassword: { screen: ForgotPassword },
    ResetPassword: { screen: ResetPassword },
    Verification: { screen: Verification },
    BlankPage: { screen: BlankPage },
    Drawer: { screen: Drawer },
    MatchDetail: { screen: MatchDetail }
}, {
    initialRouteName: "Login",
    headerMode: "none",
});
export default () => (React.createElement(Root, null,
    React.createElement(App, null)));
//# sourceMappingURL=App.js.map