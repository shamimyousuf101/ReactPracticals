import { RESET_SELECTED_PROMO_ID, SET_SELECTED_PROMO_ID } from "../actions";

export const handlePromoId = (state = "", action) => {
  switch (action.type) {
    case RESET_SELECTED_PROMO_ID:
      return action.payload;
    case SET_SELECTED_PROMO_ID:
      return action.payload;
    default:
      return state;
  }
};
