import { SHOW_OVERLAY } from "../actions/index";

const initialState = false;

export const overlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_OVERLAY:
      return action.payload;
    default:
      return state;
  }
};
