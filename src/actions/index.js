import { VIEW } from "../constants/constants";

/*
 * action types
 */

export const UPDATE_VIEW = "UPDATE_VIEW";

export const RESET_SELECTED_PROMO_ID = "RESET_SELECTED_PROMO_ID";
export const SET_SELECTED_PROMO_ID = "SET_SELECTED_PROMO_ID";

export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const RESET_SEARCH_TERM = "RESET_SEARCH_TERM";

export const GET_PROMOTIONS = "GET_PROMOTIONS";
export const ADD_PROMOTION = "ADD_PROMOTION";

export const TRIGGER_SEARCH = "TRIGGER_SEARCH";

/*
 * action creators
 */

export const updateView = newView => {
  return {
    type: UPDATE_VIEW,
    payload: newView
  };
};

export const setPrommotionId = id => {
  return {
    type: SET_SELECTED_PROMO_ID,
    payload: id
  };
};

export const resetPrommotionId = () => {
  return {
    type: RESET_SELECTED_PROMO_ID,
    payload: ""
  };
};

export const setSearchTerm = term => {
  return {
    type: SET_SEARCH_TERM,
    payload: term
  };
};

export const triggerSearch = event => {
  return {
    type: SET_SEARCH_TERM,
    payload: event.target.value
  };
};

export const resetSearchTerm = () => {
  return {
    type: RESET_SEARCH_TERM,
    payload: ""
  };
};

export const setPrommotionIdAndView = dispatch => id => {
  dispatch(setPrommotionId(id));
  dispatch(updateView(VIEW.SAVE_PROMOTION));
};

export const addPromotion = formData => {
  return {
    type: ADD_PROMOTION,
    payload: formData
  };
};
