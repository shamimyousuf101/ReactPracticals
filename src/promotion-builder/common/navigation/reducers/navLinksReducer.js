
import { SELECTED_VIEW } from '../actions/actionTypes'

//reducer 

let initialState = "Search";

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_VIEW:
            return action.payload;
        default:
            return state;
    }
};



