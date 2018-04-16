import * as React from "react";
import {
	Container,
	Header,
	Title,
	Content,
	Text,
	Button,
	Icon,
	Left,
	Right,
	Body,
	Item,
	Label,
	H2,
	List,
	ListItem,
} from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	data: any;
}
export interface State {}
class MatchDetail extends React.Component<Props, State> {
	render() {
		const { data, navigation } = this.props;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>Incident Report</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					{
						data && <Text>{data.Participant.DisplayName}</Text>
					}
					{
						data && <Text>{data.RuleViolation.Name}</Text>
					}
					{
						data && <Text>Rule {data.RuleViolation.RuleReference}</Text>
					}
					<H2 style={styles.h2}>{data.Status}</H2>
					<Item fixedLabel>
						<Label>Firing Point</Label>
						{
							data && <Text>{data.FiringPoint}</Text>
						}
          </Item>
					<Item fixedLabel>
						<Label>Relay</Label>
						{
							data && <Text>{data.Relay}</Text>
						}
					</Item>
					<H2 style={styles.h2}>
						Official Comments
					</H2>
					<List>
            {data && data.Log.map((item, i) => (
              <ListItem
                key={i}
              >
								<Text>{item.MatchOfficialComments}</Text>
              </ListItem>
            ))}
          </List>
				</Content>
			</Container>
		);
	}
}

export default MatchDetail;
