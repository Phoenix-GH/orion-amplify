import * as React from "react";
import { Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon } from "native-base";
//import styles from "./styles";
export interface Props {
	verificationForm: any;
	onVerification: Function;
}
export interface State {}
class Verification extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name="flash" style={{ fontSize: 104 }} />
						<Title>Verification</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.verificationForm}
					<View padder>
						<Button block onPress={() => this.props.onVerification()}>
							<Text>Verify User</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Verification;
