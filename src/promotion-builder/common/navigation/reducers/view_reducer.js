
import { CHANGE_VIEW } from '../actions/navigation_actions'

let initialState = "Search";

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VIEW:
            return action.payload;
        default:
            return state;
    }
};



