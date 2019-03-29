import { UPDATE_VIEW, SET_SELECTED_PROMO_ID, ADD_PROMOTION } from "../actions";

import { VIEW } from "../constants/constants";

const { SEARCH, SAVE_PROMOTION } = VIEW;

const initialState = SEARCH;

export const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIEW:
      return action.payload;
    case SET_SELECTED_PROMO_ID:
      return SAVE_PROMOTION;
    case ADD_PROMOTION:
      return SEARCH;
    default:
      return state;
  }
};
