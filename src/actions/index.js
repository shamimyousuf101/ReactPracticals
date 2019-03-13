/*
 * action types
 */

export const UPDATE_VIEW = "UPDATE_VIEW";
export const RESET_SELECTED_PROMO_ID = "RESET_SELECTED_PROMO_ID";
export const SET_SELECTED_PROMO_ID = "SET_SELECTED_PROMO_ID"; //  not used
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const RESET_SEARCH_TERM = "RESET_SEARCH_TERM";

/*
 * action creators
 */

export const updateView = newView => {
  return {
    type: UPDATE_VIEW,
    payload: newView
  };
};

export const resetPrommotionId = () => {
  return {
    type: RESET_SELECTED_PROMO_ID,
    payload: ""
  };
};
