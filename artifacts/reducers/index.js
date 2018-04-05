import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import homeReducer from "../container/HomeContainer/reducer";
import matchDetailReducer from "../container/MatchDetailContainer/reducer";
import squaddingListReducer from "../container/SquaddingListContainer/reducer";
import incidentReportReducer from "../container/IncidentReportContainer/reducer";
export default combineReducers({
    form: formReducer,
    homeReducer,
    matchDetailReducer,
    squaddingListReducer,
    incidentReportReducer
});
//# sourceMappingURL=index.js.map