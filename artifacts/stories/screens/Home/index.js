import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem, } from "native-base";
import styles from "./styles";
class Home extends React.Component {
    render() {
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon, { active: true, name: "menu", onPress: () => this.props.navigation.navigate("DrawerOpen") }))),
                React.createElement(Body, null,
                    React.createElement(Title, null, "Match Search")),
                React.createElement(Right, null)),
            React.createElement(Content, null,
                React.createElement(List, null, this.props.list && this.props.list.SearchList.map((item, i) => (React.createElement(ListItem, { style: styles.listItem, key: i, onPress: () => this.props.navigation.navigate("BlankPage", {
                        name: item.MatchID
                    }) },
                    React.createElement(Text, null, item.Name),
                    React.createElement(Text, { style: styles.namespace }, item.CourseOfFire && item.CourseOfFire.HierarchicalName.Namespace))))))));
    }
}
export default Home;
//# sourceMappingURL=index.js.map