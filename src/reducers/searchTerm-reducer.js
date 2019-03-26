import {
  SET_SEARCH_TERM,
  TRIGGER_SEARCH,
  UPDATE_VIEW
} from "../actions/index";

export const handleSearchTerm = (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    case TRIGGER_SEARCH:
      return action.payload;
    case UPDATE_VIEW:
      return "";
    default:
      return state;
  }
};
