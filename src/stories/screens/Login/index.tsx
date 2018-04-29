import * as React from "react";
import { Platform, Image } from "react-native";
import { Container, Content, Header, Body, Button, Text, View, Footer } from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any;
  onLogin: Function;
  onSignup: Function;
  onForgotPassword: Function;
}
export interface State {}

class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
						<Image source={require('../../../../assets/OrionLogo.png')} style={{height: 200, width: 200, flex: 1}}/>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
            <Button block onPress={() => this.props.onSignup()} style={{ marginTop: 20 }}>
							<Text>Signup</Text>
						</Button>
						<Button block onPress={() => this.props.onForgotPassword()} style={{ backgroundColor: "rgba(0, 0, 0, 0)", marginTop: 20 }}>
							<Text style={{ color: "blue" }}>Forgot Password</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default Login;
