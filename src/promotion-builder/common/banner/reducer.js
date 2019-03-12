import { ADD_SUBHEADING } from "./actions";

import { VIEW } from "../../../constants/constants";

const initialState = {
  view: VIEW.SEARCH
};

export const getSubHeading = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBHEADING:
      return Object.assign({}, state, { view: action.payload });
    default:
      return state;
  }
};
