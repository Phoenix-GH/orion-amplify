import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	data: any;
}
export interface State {}
class MatchDetail extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		const { data } = this.props;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Match Detail"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Text>{data && data.Name}</Text>
				</Content>
			</Container>
		);
	}
}

export default MatchDetail;
