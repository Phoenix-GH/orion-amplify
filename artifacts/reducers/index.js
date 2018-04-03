import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import homeReducer from "../container/HomeContainer/reducer";
import matchDetailReducer from "../container/MatchDetailContainer/reducer";
export default combineReducers({
    form: formReducer,
    homeReducer,
    matchDetailReducer,
});
//# sourceMappingURL=index.js.map