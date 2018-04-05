import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, List, ListItem } from "native-base";
import styles from "./styles";
class SquaddingList extends React.Component {
    render() {
        console.log('props', this.props);
        const { list } = this.props;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, "Squadding List")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(Text, null, list.EventName),
                React.createElement(List, null, list && list.SquaddingList.map((item, i) => (React.createElement(ListItem, { style: styles.listItem, key: i, onPress: () => this.props.navigation.navigate("MatchDetail", {
                        matchID: item.MatchID,
                        eventName: "Individual",
                    }) },
                    React.createElement(Text, null, "Squadding For"),
                    React.createElement(Text, null, item.Participant.DisplayName),
                    React.createElement(Text, null, item.Range),
                    React.createElement(Text, null, item.Relay),
                    React.createElement(Text, null, item.FiringPoint))))))));
    }
}
export default SquaddingList;
//# sourceMappingURL=index.js.map