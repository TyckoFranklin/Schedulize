import { combineReducers } from "redux";
import reducers from "./reducer_json";

const rootReducer = combineReducers({
    CalendarData: reducers,
});

export default rootReducer;