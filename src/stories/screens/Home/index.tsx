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
  Body,
  Right,
  List,
  ListItem,
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Match Search</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            {this.props.list && this.props.list.SearchList.map((item, i) => (
              <ListItem
                style={styles.listItem}
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("MatchDetail", {
                    id: item.MatchID
                  })}
              >
                <Text>{item.Name}</Text>
                <Text style={styles.namespace}>{item.CourseOfFire && item.CourseOfFire.HierarchicalName.ProperName}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
