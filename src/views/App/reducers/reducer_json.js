import _ from "lodash";
import { FETCH_FIRST, FETCH_SECOND } from "./../actions/app";

const reducers = (state = {}, action) => {
    let newState = {};
    console.log("Main!");
    switch (action.type) {
        case FETCH_FIRST:
            return JSON.parse(JSON.stringify(action.payload));
        case FETCH_SECOND:
            return JSON.parse(JSON.stringify(action.payload));
        default:
            return state;
    }
}

export default reducers;
