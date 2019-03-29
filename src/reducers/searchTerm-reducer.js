import {
  SET_SEARCH_TERM,
  TRIGGER_SEARCH,
  UPDATE_VIEW,
} from "../actions/index";
import { DEFAULT_SEARCHTERAM } from "../constants/constants"

export const searchTermReducer = (state = DEFAULT_SEARCHTERAM, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    case TRIGGER_SEARCH:
      return action.payload;
    case UPDATE_VIEW:
      return DEFAULT_SEARCHTERAM;
    default:
      return state;
  }
};
