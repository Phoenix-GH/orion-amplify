import * as React from "react";
import { Platform, Image } from "react-native";
import {
	Container,
	Content,
	Header,
	Body,
	Title,
	Button,
	Text,
	View,
	Icon,
	Left,
	Right,
} from "native-base";
//import styles from "./styles";
export interface Props {
	signupForm: any;
	onSignup: Function;
	navigation: any;
}
export interface State {}
class Signup extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
          <Body>
            <Title>SignUp</Title>
          </Body>
          <Right />
        </Header>
				<Header style={{ height: 200 }}>
					<Body>
						<Body style={{ alignItems: "center" }}>
						<Image source={require('../../../../assets/OrionLogo.png')} style={{height: 200, width: 200, flex: 1}}/>
							<Title>New User</Title>
							<View padder>
								<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
							</View>
						</Body>
					</Body>					
				</Header>
				<Content>
					{this.props.signupForm}
					<View padder>
						<Button block onPress={() => this.props.onSignup()}>
							<Text>Signup</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Signup;
