import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from "./styles";
class MatchDetail extends React.Component {
    render() {
        const { data } = this.props;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, data ? data.Name : "Match Detail")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(Grid, null,
                    React.createElement(Row, { style: styles.row },
                        React.createElement(Col, { style: styles.column }, data && data.Authorization &&
                            data.Authorization.indexOf('Read Squadding') > -1 &&
                            React.createElement(Button, { rounded: true, light: true, style: styles.button, onPress: () => this.props.navigation.navigate('ViewSquadding') },
                                React.createElement(Text, { style: styles.text }, "View Squadding"))),
                        React.createElement(Col, { style: styles.column }, data && data.Authorization &&
                            data.Authorization.indexOf('Read Results') > -1 &&
                            React.createElement(Button, { rounded: true, style: styles.button, onPress: () => this.props.navigation.navigate('ViewResults') },
                                React.createElement(Text, { style: styles.text }, "View Results")))),
                    React.createElement(Row, { style: styles.row },
                        React.createElement(Col, { style: styles.column }, data && data.Authorization &&
                            data.Authorization.indexOf('Create Target Images') > -1 &&
                            React.createElement(Button, { rounded: true, success: true, style: styles.button, onPress: () => this.props.navigation.navigate('TakeTargetImage') },
                                React.createElement(Text, { style: styles.text }, "Take Target Image"))),
                        React.createElement(Col, null)),
                    React.createElement(Row, { style: styles.row },
                        React.createElement(Col, { style: styles.column }, data && data.Authorization &&
                            data.Authorization.indexOf('Create Target Images') > -1 &&
                            React.createElement(Button, { rounded: true, info: true, style: styles.button, onPress: () => this.props.navigation.navigate('TakeCalibrationImage') },
                                React.createElement(Text, { style: styles.text }, "Take Calibration Image"))),
                        React.createElement(Col, { style: styles.column }, data && data.Authorization &&
                            data.Authorization.indexOf('Read Incident Reports') > -1 &&
                            React.createElement(Button, { rounded: true, danger: true, style: styles.button, onPress: () => this.props.navigation.navigate('ViewIncidentReport') },
                                React.createElement(Text, { style: styles.text }, "View Incident Report"))))))));
    }
}
export default MatchDetail;
//# sourceMappingURL=index.js.map