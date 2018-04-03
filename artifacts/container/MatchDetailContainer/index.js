import * as React from "react";
import { connect } from "react-redux";
import MatchDetail from "../../stories/screens/MatchDetail";
import { fetchMatch } from "./actions";
export class MatchDetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        const param = this.props.navigation.state.params;
        console.log('param', param);
        if (param)
            this.props.fetchMatch(param.id);
    }
    componentWillReceiveProps(nextProps) {
        const { data } = nextProps;
        this.setState({ data });
    }
    render() {
        const { data } = this.state;
        console.log('data', data);
        return React.createElement(MatchDetail, { navigation: this.props.navigation, data: data });
    }
}
function bindAction(dispatch) {
    return {
        fetchMatch: matchID => dispatch(fetchMatch(matchID)),
    };
}
const mapStateToProps = state => {
    return {
        data: state.matchDetailReducer.data,
        isLoading: state.matchDetailReducer.isLoading,
    };
};
export default connect(mapStateToProps, bindAction)(MatchDetailContainer);
//# sourceMappingURL=index.js.map