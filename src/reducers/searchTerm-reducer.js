import { SET_SEARCH_TERM, RESET_SEARCH_TERM } from "../actions/index";

export const handleSearchTerm = (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    case RESET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};
