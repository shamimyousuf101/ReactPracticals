import { UPDATE_VIEW } from "../actions";

import { VIEW } from "../constants/constants";

const initialState = VIEW.SEARCH;

export const handleView = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIEW:
      return action.payload;
    default:
      return state;
  }
};
