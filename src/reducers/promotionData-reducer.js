import { GET_PROMOTIONS, ADD_PROMOTION } from "../actions/index";
import { promotionData } from "../promotionData";

const initialState = promotionData;

export const handlePromotionData = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROMOTIONS:
      return action.payload;
    case ADD_PROMOTION:
      return action.payload;
    default:
      return state;
  }
};
