import { SET_SEARCH_TERM } from "../actions/search_actions";


const initailState = {
  searchTerm: "",
};

export default function searchTermReducer(state = initailState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM: {
        return action.payload;
    }
    default:
      return state;
  }
}
