import { ADD_PROMOTION } from "../actions/index";
import { promotionData } from "../promotionData";

const initialState = promotionData;

export const promotionDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROMOTION:
      const {
        payload: { id, promotion }
      } = action;
      const newState = { ...state };
      newState[id] = promotion;
      return newState;
    default:
      return state;
  }
};
