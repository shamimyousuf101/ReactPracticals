import { ADD_PROMOTION } from "../actions/index";
import { promotionData } from "../promotionData";

const initialState = promotionData;

export const handlePromotionData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROMOTION:
      const newState = { ...state };
      newState[action.payload.id] = action.payload.promotion;
      return newState;
    default:
      return state;
  }
};
