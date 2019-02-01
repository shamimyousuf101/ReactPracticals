
import { SELECTED_VIEW } from '../actions/actionCreators'

let initialState = "Search";

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_VIEW:
            return action.payload;
        default:
            return state;
    }
};



