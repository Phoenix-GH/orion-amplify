import * as React from "react";
import {
	Container,
	Content,
	Header,
	Body,
	Title,
	Button,
	Icon,
	Left,
	Right,
	Grid,
	Col,
	Row,
	Text,
} from "native-base";
import styles from "./styles";
export interface Props {
	squaddingList: any;
	matchData: any;
	navigation: any;
}
export interface State {}
class TargetImgCapture extends React.Component<Props, State> {
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
            <Title>Target Image Capture</Title>
          </Body>
          <Right />
        </Header>
				<Content>
					<Grid>
						<Row style={styles.row}>
							<Col style={styles.column}>
							{
								
							}
							</Col>
							<Col style={styles.column}>
							{
								
							}
							</Col>
						</Row>
          </Grid>
					<Text>{}</Text>
				</Content>
			</Container>
		);
	}
}

export default TargetImgCapture;
