import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { fetchList } from "./actions";
class HomeContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.data);
    }
    render() {
        return (this.props.data && React.createElement(Home, { navigation: this.props.navigation, list: this.props.data }));
    }
}
function bindAction(dispatch) {
    return {
        fetchList: () => dispatch(fetchList()),
    };
}
const mapStateToProps = state => ({
    data: state.homeReducer.list,
    isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
//# sourceMappingURL=index.js.map