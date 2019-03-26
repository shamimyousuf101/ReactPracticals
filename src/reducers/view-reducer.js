import { UPDATE_VIEW, SET_SELECTED_PROMO_ID } from "../actions";

import { VIEW } from "../constants/constants";

const initialState = VIEW.SEARCH;

export const handleView = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIEW:
      return action.payload;
    case SET_SELECTED_PROMO_ID:
      return VIEW.SAVE_PROMOTION;
    default:
      return state;
  }
};
