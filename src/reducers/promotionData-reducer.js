import { ADD_PROMOTION } from "../actions/index";
import { promotionData } from "../promotionData";

const initialState = promotionData;

export const handlePromotionData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROMOTION:
      return action.payload;
    default:
      return state;
  }
};
