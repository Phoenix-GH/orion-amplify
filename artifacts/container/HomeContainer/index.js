import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { fetchList } from "./actions";
class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        this.props.fetchList();
    }
    componentWillReceiveProps(nextProps) {
        const { data } = nextProps;
        this.setState({ data });
    }
    render() {
        const { data } = this.state;
        console.log('data', data);
        return (React.createElement(Home, { navigation: this.props.navigation, list: data }));
    }
}
function bindAction(dispatch) {
    return {
        fetchList: () => dispatch(fetchList()),
    };
}
const mapStateToProps = state => {
    console.log('state', state);
    return {
        data: state.homeReducer.list,
        isLoading: state.homeReducer.isLoading,
    };
};
export default connect(mapStateToProps, bindAction)(HomeContainer);
//# sourceMappingURL=index.js.map