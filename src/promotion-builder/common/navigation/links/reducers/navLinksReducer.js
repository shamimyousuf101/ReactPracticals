
import { SELECTED_VIEW } from '../actions/actionTypes'

//reducer 

let initialState = {
    view: "Search"
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_VIEW:
            return { ...state, [ SELECTED_VIEW ]: action.payload };
        default:
            return state;     
    }
};


